import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useMemo, useState } from "react";
import { IProps } from "../../../@types/curtain";
import ClIcon from "../icon";

import "./index.scss";
import { classNames } from "../../lib";

export default function ClCurtain(props: IProps) {
  const { show, closeWithShadow, closeBtnPosition } = props;
  const [showImage, setShowImage] = useState(show);
  useMemo(() => {
    setShowImage(show);
  }, [show]);
  return showImage ? (
    <View
      className={classNames("cu-load load-image", props.className)}
      style={Object.assign({}, props.style)}
      onClick={e => {
        e.stopPropagation();
        if (closeWithShadow) {
          setShowImage(false);
          props.onClose && props.onClose();
        }
      }}
    >
      <View
        className="cu-curtain__content"
        onClick={() => {
          props.onClick && props.onClick();
        }}
      >
        {this.props.children}
        <View
          className={closeBtnPosition}
          onClick={e => {
            e.stopPropagation();
            setShowImage(false);
            props.onClose && props.onClose();
          }}
        >
          <ClIcon iconName="close" color="white" />
        </View>
      </View>
    </View>
  ) : (
    <View />
  );
}

ClCurtain.options = {
  addGlobalClass: true
};

ClCurtain.defaultProps = {
  show: false,
  closeWithShadow: false,
  closeBtnPosition: "bottom",
  onClose: () => {},
  onClick: () => {},
  imgUrl: ""
} as IProps;
