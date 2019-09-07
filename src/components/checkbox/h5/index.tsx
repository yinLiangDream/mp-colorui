import { View, Text } from '@tarojs/components';
import Taro, { Component, useState, pxTransform } from '@tarojs/taro';
import { IProps } from '../../../../@types/checkbox';

interface IState {
  list: any[] | undefined;
}

export default class ClCheckbox_h5 extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    color: 'green',
    type: 'normal',
    shape: 'normal',
    direction: 'vertical',
    checkboxGroup: [],
    title: ''
  };
  state: IState = {
    list: this.props.checkboxGroup || []
  };
  change() {
    const checkboxGroup = this.state.list || [];
    const arr = checkboxGroup
      .filter(item => item.checked)
      .map(item => item.value || '');
    this.props.onChange && this.props.onChange(arr);
  }
  renderCheckbox(classname = '', value = '', checked = false) {
    const [check, setCheck] = useState(checked);
    return (
      <View
        className={`h5-checkbox-input ${classname} ${check ? 'checked' : ''}`}
        onClick={() => {
          setCheck(!check);
          const { list } = this.state
          const checkItem = list && list.find(item => item.value === value);
          if (checkItem) checkItem.checked = !check;
          this.change();
        }}
      />
    );
  }
  render() {
    const colorClassName = this.props.color || 'green';
    const type = this.props.type === 'form' ? 'form' : '';
    const shapeClassName = this.props.shape === 'round' ? 'round' : '';
    const directionClassName =
      this.props.direction === 'horizontal' ? 'flex' : '';
    const listCheckboxGroup = this.props.checkboxGroup ? this.props.checkboxGroup : [];
    const title = this.props.title;
    const checkboxComponent = listCheckboxGroup.map(item => (
      <View className='padding-xs' key={item.value}>
        <Text
          className='padding-right-sm'
          style={{
            lineHeight: `${pxTransform(46)}`,
            display: 'inline-block',
            verticalAlign: 'text-bottom'
          }}
        >
          {item.key}
        </Text>
        {this.renderCheckbox(
          `${shapeClassName}`,
          item.value || '',
          item.checked
        )}
      </View>
    ));
    const formComponent = (
      <View className='cu-form-group'>
        <View className='title'>{title}</View>
        <View className={directionClassName}>{checkboxComponent}</View>
      </View>
    );
    return (
      <View className={`h5-checkbox ${colorClassName}`}>
        {type === 'form' ? formComponent : checkboxComponent}
      </View>
    );
  }
}
