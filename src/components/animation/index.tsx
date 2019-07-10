import Taro from '@tarojs/taro'
import {IProps} from "../../../@types/animation";
import {View} from '@tarojs/components';

export default function ClAnimation(props: IProps) {
  const type = props.type;
  const reverse = props.reverse ? 'animation-reverse' : '';
  return (
    <View className={`animation-${type} ${reverse}`} style={{animationDelay: `${props.delay}s`}}
          onAnimationStart={e => {
            props.onAnimationStart && props.onAnimationStart(e)
          }} onAnimationEnd={e => {
      props.onAnimationEnd && props.onAnimationEnd(e)
    }}>
      {this.props.children}
    </View>
  )
}

ClAnimation.options = {
  addGlobalClass: true
};

ClAnimation.defaultProps = {
  type: 'fade',
  reverse: false,
  delay: 0
} as IProps;
