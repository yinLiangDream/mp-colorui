import Taro, {pxTransform, useState} from '@tarojs/taro'
import {View} from "@tarojs/components";
import utils from '../utils/index';
import {IProps} from '../../../@types/floatButton'
import ClIcon from "../icon";

import './index.scss'
import ClAnimation from "../animation";
import ClLayout from "../layout";

let tempPageX = 0;
let tempPageY = 0;
export default function ClFloatButton(props: IProps) {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [pageX, setPageX] = useState(50);
  const [pageY, setPageY] = useState(200);
  const {move, open, icon, bgColor, iconColor, direction, shadow, shape, size, actionList, onClick, onActionClick, closeWithShadow} = props;
  const dealSize = utils.model.SIZE[size || "normal"];
  const dealBgColor = utils.model.BG_COLOR_LIST[bgColor || "blue"];
  const dealShadow = shadow ? 'shadow' : '';
  const dealIconColor = iconColor || '';
  const dealActionList = actionList || [];
  const len = dealActionList.length;
  const actionListComponent = dealActionList.map((item, index) => (
    <ClAnimation type={direction === "vertical" ? "slide-bottom" : "slide-right"} key={index}
                 delay={(len - index - 1) / 10}>
      <ClLayout padding={"small"} paddingDirection={direction === "vertical" ? "bottom" : "right"}>
        <View
          className={`cu-avatar ${shape} ${dealSize} ${item.bgColor ? utils.model.BG_COLOR_LIST[item.bgColor] : dealBgColor} ${dealShadow}`}
          onClick={(e) => {
            e.stopPropagation();
            clickButton();
            onActionClick && onActionClick(index)
          }}>
          <View className={`${item.iconColor || dealIconColor}`}>
            <ClIcon iconName={item.icon} size={size}/>
          </View>
        </View>
      </ClLayout>
    </ClAnimation>
  ));
  const directionClass = direction === "vertical" ? '' : 'flex';
  const clickButton = () => {
    setShow(!show);
    open && setRotate(rotate ? 0 : 45);
  };
  return (
    <View className={`${show ? 'float_button__mask' : ''}`} onClick={(e) => {
      e.stopPropagation();
      closeWithShadow && clickButton()
    }}>
      <View className={'float_button__fixed'}
            onTouchStart={(e) => {
              if (!move) return;
              const touchs = e.touches[0];
              tempPageX = touchs.pageX;
              tempPageY = touchs.pageY;
            }}
            onTouchMove={(e) => {
              if (!move) return;
              const touchs = e.touches[0];
              setPageX((pageX - (touchs.pageX - tempPageX) * 2));
              setPageY((pageY - (touchs.pageY - tempPageY) * 2));
              tempPageX = touchs.pageX;
              tempPageY = touchs.pageY;
            }}
            onTouchCancel={(e) => {
            }}
            style={{right: pxTransform(pageX), bottom: pxTransform(pageY)}}
      >
        <View className={`float_button__content ${directionClass}`}>
          {
            show ? actionListComponent : ''
          }
          <View className={`cu-avatar ${shape} ${dealSize} ${dealBgColor} ${dealShadow}`}
                onClick={() => {
                  clickButton();
                  onClick && onClick()
                }}>
            <View className={`${dealIconColor}`}
                  style={{transform: `rotate(${rotate}deg)`, transition: 'all 0.15s linear'}}>
              <ClIcon iconName={icon} size={size}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

ClFloatButton.options = {
  addGlobalClass: true
};

ClFloatButton.defaultProps = {
  move: false,
  open: true,
  icon: "add",
  bgColor: "blue",
  iconColor: undefined,
  direction: "vertical",
  onClick: () => {
  },
  shadow: true,
  onActionClick: index => {
  },
  actionList: [],
  size: "normal",
  shape: "round",
  closeWithShadow: false
} as IProps;
