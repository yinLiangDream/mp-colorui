import { Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { BG_COLOR_LIST, SIZE, TEXT_COLOR_LIST } from '../utils/model';
import { IProps } from '../../../@types/modal';

export default class ClModal extends Component<IProps, {}> {
  static options = {
    addGlobalClass: true
  };
  state = {
    showModal: this.props.show
  };
  componentWillReceiveProps(nextProps: IProps) {
    const show = nextProps.show;
    if (show !== this.state.showModal) {
      this.setState({
        showModal: show
      });
    }
  }
  render() {
    const titleBgColorClassName = this.props.titleBgColor
      ? BG_COLOR_LIST[this.props.titleBgColor]
      : '';
    const actionColor = this.props.actionColor
      ? BG_COLOR_LIST[this.props.actionColor]
      : '';

    const title = this.props.title;
    const actions = this.props.actions || [];
    const onClick = (index: number) => {
      this.props.onClick && this.props.onClick(index);
    };
    const actionsComponent = actions.map((item, index) => (
      <View
        className={`${index > 0 ? 'solid-left' : ''} action margin-0 flex-sub`}
        key={item.text}
        onClick={() => {
          onClick(index);
        }}
      >
        <Text className={`${item.color ? TEXT_COLOR_LIST[item.color] : ''}`}>
          {item.text}
        </Text>
      </View>
    ));
    const dealSize = (size: any) => {
      if (!size || size === 'normal') return '';
      else return `-${SIZE[size]}`;
    };
    return (
      <View
        className={`cu-modal ${this.state.showModal ? 'show' : ''}`}
        onClick={() => {
          this.props.closeWithShadow &&
            this.setState({
              showModal: false
            });
          this.props.onCancel && this.props.onCancel();
        }}
      >
        <View
          className='cu-dialog'
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {this.props.custom ? (
            this.props.renderTitle
          ) : (
            <View className={`cu-bar justify-end ${titleBgColorClassName}`}>
              <View className='content'>{title}</View>
              {this.props.close ? (
                <View
                  className='action'
                  onClick={() => {
                    this.setState({
                      showModal: false
                    });
                    this.props.onClose && this.props.onClose();
                  }}
                >
                  <Text className='cuIcon-close text-black' />
                </View>
              ) : (
                ''
              )}
            </View>
          )}

          <View className={`padding${dealSize(this.props.padding)}`}>
            {this.props.children}
          </View>
          {this.props.custom ? (
            this.props.renderAction
          ) : (
            <View className={`cu-bar ${actionColor}`}>{actionsComponent}</View>
          )}
        </View>
      </View>
    );
  }
}
