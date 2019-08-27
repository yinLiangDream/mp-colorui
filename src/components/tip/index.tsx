import { View } from '@tarojs/components';
import Taro, { useState, useEffect } from '@tarojs/taro';
import { IProps } from '../../../@types/tip';
import { screenPercent } from '../utils';

import './index.scss';
import { BG_COLOR_LIST } from '../utils/model';
import ClText from '../text';

export default function ClTip(props: IProps) {
  const [showTip, setShowTip] = useState(props.show);
  const [distance, setDistance] = useState({
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    transform: '',
    arrowTransform: ''
  });
  const resver2Zero = (params: { direction: any; long: number }[]) => {
    distance.top = 'auto';
    distance.left = 'auto';
    distance.right = 'auto';
    distance.bottom = 'auto';
    params.forEach(item => {
      distance[item.direction] = `${item.long}px`;
    });
    return distance;
  };
  useEffect(async () => {
    const query = Taro.createSelectorQuery().in(this.$scope);
    const res: any = await new Promise(resolve => {
      query
        .select(`#content`)
        .fields(
          {
            size: true,
            rect: true
          },
          (res: any) => {
            resolve(res);
          }
        )
        .exec();
    });
    query
      .select('#message')
      .fields(
        {
          size: true
        },
        (messageData: any) => {
          const contentWidth = props.width || 100;
          const screenWidth = 750 * screenPercent;
          let customDirection: any[] = [];
          const systemInfo = Taro.getSystemInfoSync();
          const bottomDistance = systemInfo.windowHeight - res.top - res.height;
          const leftDistance = screenWidth - res.left - res.width;
          const sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2
          if (props.direction === 'top') {
            if (res.top < bottomDistance && res.top < messageData.height)
              props.direction = 'bottom';
            customDirection = [{ direction: 'bottom', long: 0 }];
            let translateX = (res.width - contentWidth) / 2;
            if (res.left < res.right && res.left < screenWidth / 2) {
              if (Math.abs(translateX) > res.left) translateX = -res.left;
              distance.transform = `translateX(${translateX}px) translateY(-${res.height +
                10}px)`;
              distance.arrowTransform = `translateX(${Math.abs(translateX) +
                res.width / 2}px) rotate(45deg) translateY(0)`;
            } else {
              const maxRight = screenWidth - res.left;
              if (maxRight < contentWidth) translateX = contentWidth - maxRight;
              distance.transform = `translateX(-${translateX}px) translateY(-${res.height +
                10}px)`;
              distance.arrowTransform = `translateX(${Math.abs(translateX) +
                res.width / 2}px) rotate(45deg) translateY(30%)`;
            }
          } else if (props.direction === 'bottom') {
            console.log(res, messageData)
            if (res.top > bottomDistance && bottomDistance < messageData.height)
              props.direction = 'bottom';
            customDirection = [{ direction: 'left', long: 0 }];
            let translateX = (res.width - contentWidth) / 2;
            if (res.left < res.right && res.left < screenWidth / 2) {
              if (Math.abs(translateX) > res.left) translateX = -res.left;
              distance.transform = `translateX(${translateX}px) translateY(${res.height +
                10}px)`;
              distance.arrowTransform = `translateX(${Math.abs(translateX) +
                res.width / 2 -
                10}px) rotate(45deg) translateY(0)`;
            } else {
              const maxRight = screenWidth - res.left;
              if (maxRight < contentWidth) translateX = contentWidth - maxRight;
              distance.transform = `translateX(-${translateX}px) translateY(${res.height +
                10}px)`;
              distance.arrowTransform = `translateX(${Math.abs(translateX) +
                res.width / 2 -
                10}px) rotate(45deg) translateY(-30%)`;
            }
          } else if (props.direction === `left`) {
            const diffHeight = messageData.height - res.height;
            if (res.left < contentWidth + 10 && leftDistance > res.left)
              props.direction = 'right';
            customDirection = [
              {
                direction: 'right',
                long: 0
              }
            ];
            let moveTop =
              bottomDistance - (messageData.height / 2 - res.height / 2);
            let moveBottom =
              res.top - (messageData.height / 2 - res.height / 2);
            if (moveTop > 0) moveTop = 0;
            if (moveBottom > 0) moveBottom = 0;
            distance.arrowTransform = `translateY(${messageData.height / 2 -
              moveTop +
              moveBottom - sqrt}px) translateX(30%) rotate(45deg)`;
            distance.transform = `translateX(${-res.width -
              10}px) translateY(${-diffHeight / 2 + moveTop - moveBottom}px)`;
          } else if (props.direction === 'right') {
            if (leftDistance - 10 < contentWidth && leftDistance < res.left)
              props.direction = 'left';
            const diffHeight = messageData.height - res.height;
            if (res.left < contentWidth + 10) props.direction = 'right';
            customDirection = [
              {
                direction: 'left',
                long: 0
              }
            ];
            let moveTop =
              bottomDistance - (messageData.height / 2 - res.height / 2);
            let moveBottom =
              res.top - (messageData.height / 2 - res.height / 2);
            if (moveTop > 0) moveTop = 0;
            if (moveBottom > 0) moveBottom = 0;
            distance.arrowTransform = `translateY(${messageData.height / 2 -
              moveTop +
              moveBottom - sqrt}px) translateX(-30%) rotate(45deg)`;
            distance.transform = `translateX(${res.width +
              10}px) translateY(${-diffHeight / 2 + moveTop - moveBottom}px)`;
          }
          Object.assign(distance, resver2Zero(customDirection));
          setDistance(distance);
        }
      )
      .exec();
  }, [props.width, props.direction, showTip]);
  return (
    <View
      id="content"
      onClick={() => {
        if (props.mode === 'click') {
          const show = !showTip;
          setShowTip(show);
          props.onChange && props.onChange(show);
        }
      }}
      onTouchStart={() => {
        if (props.mode === 'touch') {
          const show = !showTip;
          setShowTip(show);
          props.onChange && props.onChange(show);
        }
      }}
      onTouchEnd={() => {
        if (props.mode === 'touch') {
          const show = !showTip;
          setShowTip(show);
          props.onChange && props.onChange(show);
        }
      }}
      className={`cl-tip ${showTip ? 'cl-tip__showZindex' : ''}`}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <View
        id="message"
        className={`cl-tip__content  shadow ${showTip ? 'show' : 'hide'}`}
        style={{
          width: `${showTip ? props.width : 0}px`,
          left: distance.left,
          right: distance.right,
          top: distance.top,
          bottom: distance.bottom,
          transform: distance.transform
        }}
      >
        <View
          className={`cl-tip__arrow ${props.direction} ${
            BG_COLOR_LIST[props.bgColor || 'white']
            } ${showTip ? 'showArrow' : 'hideArrow'}`}
          style={{
            left: distance.left,
            right: distance.right,
            top: distance.top,
            bottom: distance.bottom,
            transform: distance.arrowTransform
          }}
        />
        <View className={`cl-tip__message ${
          BG_COLOR_LIST[props.bgColor || 'white']
          }`}>
          <View style={{ width: `${props.width}px`, padding: '10px' }}>
            <ClText text={props.message} />
            <View onClick={(e: any) => {
              e.stopPropagation();
            }}>{this.props.renderMessage}</View>
          </View>
        </View>
      </View>
      {this.props.children}
    </View>
  );
}

ClTip.defaultProps = {
  show: false,
  direction: 'bottom',
  bgColor: 'white',
  mode: 'touch',
  width: 150
} as IProps;

ClTip.options = {
  addGlobalClass: true
};
