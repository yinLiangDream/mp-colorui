import React, { Component } from 'react';
import { pxTransform } from '@tarojs/taro';
import { View } from '@tarojs/components';
import ClCheckbox from '../checkbox';
import ClIcon from '../icon';
import ClText from '../text';
import ClFlex from '../flex';
import { generateId } from '../../lib';
import './index.scss';

export default class ClTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            originList: [],
            flatList: []
        };
    }
    dealLevel({ list, parentId, deep, levelId }) {
        if (!list)
            return;
        let deepIndex = deep || 0;
        deepIndex++;
        const temp = list.map((item, listIndex) => {
            const id = listIndex + 1;
            const newLevelId = levelId ? `${levelId}-${id}` : `${id}`;
            return Object.assign(Object.assign({}, item), { deepIndex,
                id, parent: parentId, childrenCheck: [], commonId: generateId(), levelId: newLevelId, children: this.dealLevel({
                    list: item.children,
                    parentId: id,
                    deep: deepIndex,
                    levelId: newLevelId
                }) });
        });
        return temp;
    }
    openItem(item) {
        const thisOpen = !item.open;
        const originItem = this.getTreeItem(item.commonId);
        originItem.open = thisOpen;
        const { originList } = this.state;
        const newList = this.flatList(originList);
        this.setState({
            list: newList
        });
    }
    clickItem(item) {
        const { onClickItem } = this.props;
        onClickItem && onClickItem(item);
    }
    getTreeItem(id) {
        const { originList } = this.state;
        let result;
        function getItem(list) {
            if (!result) {
                for (let item of list) {
                    result = result ? result : item.commonId === id ? item : undefined;
                    if (item.children && !result) {
                        getItem(item.children);
                    }
                }
            }
        }
        getItem(originList);
        return result;
    }
    changeChecked(commonId = [], item) {
        const { flatList } = this.state;
        const { onCheckedChange } = this.props;
        const id = item.commonId;
        const checked = commonId.length > 0;
        const data = flatList.find(item => item.commonId === id);
        const levelIdArr = item.levelId.split('-');
        const allLevelChildren = flatList.filter(child => {
            const levelArr = child.levelId.split('-');
            return (levelIdArr.every((item, index) => item === levelArr[index]) &&
                item.deepIndex < child.deepIndex);
        });
        const allParent = flatList.filter(father => {
            if (item.deepIndex <= father.deepIndex)
                return false;
            let i = 0;
            let result = true;
            const levelArr = father.levelId.split('-');
            while (i < father.deepIndex) {
                result = result && levelArr[i] === levelIdArr[i];
                i++;
            }
            return result;
        });
        allLevelChildren.forEach(item => {
            item.checked = checked;
            item.someCheck = false;
        });
        const father = allParent.find(parent => parent.deepIndex === item.deepIndex - 1);
        data.checked = checked;
        onCheckedChange && onCheckedChange(data);
        const maxDeep = allParent.length;
        let i = maxDeep;
        if (checked) {
            data.someCheck = false;
            if (father) {
                father.someCheck = father.children.some(item => !item.checked || item.someCheck);
            }
            let result = true;
            while (i > 0) {
                const current = allParent.find(item => item.deepIndex === i);
                result =
                    result &&
                        current.children.every(child => child.checked && !child.someCheck);
                current.someCheck = !result;
                current.checked = checked;
                i--;
            }
        }
        else {
            allParent.forEach(item => (item.someCheck = true));
            if (father) {
                father.checked = father.children.some(item => item.checked);
            }
            while (i > 0) {
                const current = allParent.find(item => item.deepIndex === i);
                current.checked = current.children.some(child => child.checked);
                i--;
            }
        }
        this.setState({
            flatList: [...flatList],
            list: [...this.state.list]
        });
    }
    renderItem(item) {
        const { color, showCheck } = this.props;
        return (React.createElement(View, { style: {
                paddingLeft: pxTransform((item.deepIndex - 1) * 20)
            } },
            React.createElement(ClFlex, { align: 'center' },
                React.createElement(View, { style: {
                        transform: `rotate(${item.open ? 180 : 90}deg)`,
                        visibility: item.children ? 'initial' : 'hidden'
                    }, onClick: this.openItem.bind(this, item) },
                    React.createElement(ClIcon, { iconName: 'triangleupfill', size: 'small' })),
                showCheck ? (React.createElement(ClCheckbox, { type: 'normal', shape: 'round', more: item.someCheck, color: color, checkboxGroup: [
                        {
                            checked: item.checked,
                            key: '',
                            value: item.commonId,
                            disabled: item.disabled
                        }
                    ], onChange: commonId => {
                        this.changeChecked.call(this, commonId, item);
                    } })) : (''),
                React.createElement(View, { onClick: this.clickItem.bind(this, item) },
                    React.createElement(ClText, { text: item.name })))));
    }
    flatList(list) {
        const flat = [];
        function flatFn(list) {
            list.forEach(item => {
                flat.push(item);
                if (item.children && item.open) {
                    flatFn(item.children);
                }
            });
        }
        flatFn(list);
        return flat;
    }
    flatAllArr(list) {
        const category = [];
        function categoryFn(list = []) {
            list.forEach(item => {
                category.push(item);
                if (item.children) {
                    categoryFn(item.children);
                }
            });
        }
        categoryFn(list);
        return category;
    }
    updateData(data) {
        const dealArr = this.dealLevel({
            list: data,
            parentId: undefined
        });
        const flatArr = this.flatList(dealArr);
        const flatList = this.flatAllArr(dealArr);
        this.setState({
            list: flatArr,
            originList: dealArr,
            flatList
        }, () => {
            const checkedList = flatList.filter(item => item.checked);
            const openList = flatList.filter(item => item.open);
            openList.forEach(item => {
                item.open = !item.open;
                this.openItem(item);
            });
            checkedList.forEach(item => {
                this.changeChecked(item.commonId, item);
            });
        });
    }
    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps.data);
    }
    componentDidMount() {
        this.updateData(this.props.data);
    }
    render() {
        const { list } = this.state;
        const listComponent = list.map(item => (React.createElement(View, { key: 'key-' + item.commonId }, this.renderItem(item))));
        return React.createElement(View, { className: 'cu-tree' }, listComponent);
    }
}
ClTree.options = {
    addGlobalClass: true
};
ClTree.defaultProps = {
    showCheck: false,
    data: []
};
//# sourceMappingURL=index.js.map