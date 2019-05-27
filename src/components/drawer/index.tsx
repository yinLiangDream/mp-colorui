import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { IProps } from '../../../@types/drawer';

export default class ClDrawer extends Component<IProps, {}> {
  static options = {
    addGlobalClass: true
  };
  state = {
    showModal: this.state.showModal
  };
  static defaultProps: IProps = {
    closeWithShadow: true
  }
  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.show !== this.state.showModal) {
      this.setState({
        showModal: nextProps.show
      });
    }
  }
  hideModal() {
    this.props.closeWithShadow &&
      this.setState({
        showModal: false
      });
    this.props.onCancel && this.props.onCancel();
  }
  render() {
    const leftComponent = (
      <View
        className={`cu-modal drawer-modal justify-start ${
          this.state.showModal ? 'show' : ''
        }`}
        onClick={e => {
          this.hideModal();
          e.stopPropagation();
        }}
      >
        <View
          className='cu-dialog basis-lg'
          onClick={e => {
            e.stopPropagation();
          }}
          style={{ height: '100vh' }}
        >
          {this.props.children}
        </View>
      </View>
    );
    const rightComponent = (
      <View
        className={`cu-modal drawer-modal justify-end ${
          this.state.showModal ? 'show' : ''
        }`}
        onClick={e => {
          this.hideModal();
          e.stopPropagation();
        }}
      >
        <View
          className='cu-dialog basis-lg'
          onClick={e => {
            e.stopPropagation();
          }}
          style={{ height: '100vh' }}
        >
          {this.props.children}
        </View>
      </View>
    );
    const bottomComponent = (
      <View
        className={`cu-modal bottom-modal ${
          this.state.showModal ? 'show' : ''
        }`}
        onClick={e => {
          this.hideModal();
          e.stopPropagation();
        }}
      >
        <View
          className='cu-dialog'
          style={{ maxHeight: '70vh' }}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {this.props.children}
        </View>
      </View>
    );
    return this.props.direction === 'left'
      ? leftComponent
      : this.props.direction === 'right'
      ? rightComponent
      : bottomComponent;
  }
}

// export default function ClDrawer(props: IProps) {
//   const hideModal = () => {
//     // props.closeWithShadow
//     props.onCancel && props.onCancel();
//   };
//   const leftComponent = (
//     <View
//       className={`cu-modal drawer-modal justify-start ${
//         props.show ? 'show' : ''
//       }`}
//       onClick={e => {
//         hideModal();
//         e.stopPropagation();
//       }}
//     >
//       <View
//         className='cu-dialog basis-lg'
//         onClick={e => {
//           e.stopPropagation();
//         }}
//         style={{ height: '100vh' }}
//       >
//         {this.props.children}
//       </View>
//     </View>
//   );
//   const rightComponent = (
//     <View
//       className={`cu-modal drawer-modal justify-end ${
//         props.show ? 'show' : ''
//       }`}
//       onClick={e => {
//         hideModal();
//         e.stopPropagation();
//       }}
//     >
//       <View
//         className='cu-dialog basis-lg'
//         onClick={e => {
//           e.stopPropagation();
//         }}
//         style={{ height: '100vh' }}
//       >
//         {this.props.children}
//       </View>
//     </View>
//   );
//   const bottomComponent = (
//     <View
//       className={`cu-modal bottom-modal ${props.show ? 'show' : ''}`}
//       onClick={e => {
//         hideModal();
//         e.stopPropagation();
//       }}
//     >
//       <View
//         className='cu-dialog'
//         style={{ maxHeight: '70vh' }}
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         {this.props.children}
//       </View>
//     </View>
//   );
//   return props.direction === 'left'
//     ? leftComponent
//     : props.direction === 'right'
//     ? rightComponent
//     : bottomComponent;
// }

// ClDrawer.options = {
//   addGlobalClass: true
// };
