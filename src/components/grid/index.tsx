import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { IProps } from '../../../@types/grid';

export default function ClGrid(props: IProps) {
  const colClassName = `col-${props.col}`;
  const squareClassName = props.mode === 'square' ? 'grid-square' : '';
  const gridComponent = (
    <View className={`grid ${colClassName} ${squareClassName}`}>
      {this.props.children}
    </View>
  );
  return gridComponent;
}

ClGrid.options = {
  addGlobalClass: true
};

ClGrid.defaultProps = {
  col: 3,
  mode: 'square'
};
