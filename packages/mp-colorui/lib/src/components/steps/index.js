import { Text, View } from '@tarojs/components';
import React from 'react';
import { classNames } from '../../lib';
import { TEXT_COLOR_LIST } from '../../lib/model';
export default class ClStep extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        const stepTypeClassName = this.props.type === 'arrow' ? 'steps-arrow' : '';
        const activeColorClassName = this.props.activeColor
            ? TEXT_COLOR_LIST[this.props.activeColor]
            : '';
        const step = this.props.step || 0;
        const tabsComponents = this.props.steps.map((item, index) => (React.createElement(View, { className: `cu-item ${step > index ? activeColorClassName : ''}`, key: index },
            this.props.stepTitlePosition === 'top' ? item.title : '',
            React.createElement(Text, { className: `${this.props.stepIconType === 'number' ? 'num' : ''} ${this.props.stepIconType === 'custom' ? 'cuIcon-' + item.icon : ''}`, "data-index": index + 1 }),
            this.props.stepTitlePosition === 'bottom' ? item.title : '')));
        return (React.createElement(View, { className: classNames(`cu-steps ${stepTypeClassName}  ${this.props.stepTitlePosition === 'top' ? 'steps-bottom' : ''}`, this.props.className), style: Object.assign({}, this.props.style) }, tabsComponents));
    }
}
ClStep.options = {
    addGlobalClass: true
};
ClStep.defaultProps = {
    steps: [],
    type: 'line',
    activeColor: 'blue',
    step: 0,
    stepIconType: 'number',
    stepTitlePosition: 'bottom'
};
//# sourceMappingURL=index.js.map