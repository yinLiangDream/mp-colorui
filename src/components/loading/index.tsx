import { Image, Text, View } from "@tarojs/components";
import Taro, { useEffect, useState, pxTransform } from "@tarojs/taro";
import { BG_COLOR_LIST } from "../../lib/model";
import { IProps } from "../../../@types/loading";
import { classNames } from "../../lib";
import ClText from "../../components/text";

export default function ClLoading(props: IProps) {
  const [loadProgress, setLoadProgress] = useState(0);
  const loadProgressFn = () => {
    setLoadProgress(100);
  };
  const contentViewStyle = { position: props.content ? "relative" : "inherit" };
  const contentLoadingStyle = {
    display: props.show ? "flex" : "none",
    flexDirection: "column",
    position: props.content ? "absolute" : "fixed",
    width: props.content ? "100%" : "100vw",
    height: props.content ? "100%" : "100vh"
  };
  useEffect(() => {
    if (props.show) {
      loadProgressFn();
    }
  }, []);
  useEffect(() => {
    if (props.show) loadProgressFn();
    else {
      setLoadProgress(0);
    }
  }, [props.show]);

  const bgColorClassName = () =>
    props.bgColor ? BG_COLOR_LIST[props.bgColor] : "bg-blue";

  const commonComponent = (
    <View style={Object.assign(contentViewStyle)}>
      {this.props.children}
      <View
        className="cu-load load-image"
        style={Object.assign(contentLoadingStyle)}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <View
          style={{
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            animationDuration: "0.5s",
            animationName: "rotate-0-360"
          }}
        >
          <Text
            className={classNames([
              "cuIcon-loading1",
              "text-white",
              "text-xxl"
            ])}
            style={{
              fontSize: pxTransform(44)
            }}
          />
        </View>
        <ClText textColor={"white"} text={props.commonText} size={"xsmall"} />
      </View>
    </View>
  );
  const modalComponent = (
    <View
      className="cu-load load-modal"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <Image src={props.imgUrl || ""} mode="aspectFit" />
      <Text className="text-gray">{props.modalText}</Text>
    </View>
  );
  const imageComponent = (
    <View style={Object.assign(contentViewStyle)}>
      <View
        className="cu-load load-image"
        style={Object.assign(contentLoadingStyle)}
      >
        <Image
          src={props.imgUrl || ""}
          mode="widthFix"
          style={{
            width: props.imgWidth ? pxTransform(props.imgWidth) : ""
          }}
        />
      </View>
      {this.props.children}
    </View>
  );
  const lineComponent = (
    <View
      className={`cu-load ${
        props.loadingError ? "bg-red erro" : bgColorClassName()
      } ${props.noMore || props.loadingError ? "over" : "loading"}`}
    />
  );
  const barComponent = (
    <View style={Object.assign(contentViewStyle)}>
      <View
        className={classNames(
          `load-progress ${props.show ? "show" : "hide"}`,
          props.className
        )}
        style={Object.assign({ top: "0" }, contentLoadingStyle, props.style)}
      >
        <View
          className={`load-progress-bar ${bgColorClassName()}`}
          style={{
            transform: `translate3d(-${100 - loadProgress}%, 0px, 0px)`,
            transition: "all 5s ease 0s"
          }}
        />
        <View className={`load-progress-spinner text-${props.bgColor}`} />
      </View>
      {this.props.children}
    </View>
  );

  return props.content || props.show ? (
    props.type === "bar" ? (
      barComponent
    ) : props.type === "line" ? (
      lineComponent
    ) : props.type === "modal" ? (
      modalComponent
    ) : props.type === "image" ? (
      imageComponent
    ) : (
      commonComponent
    )
  ) : (
    <View />
  );
}

ClLoading.options = {
  addGlobalClass: true
};

ClLoading.defaultProps = {
  type: "bar",
  bgColor: "blue",
  modalText: "加载中...",
  loadingError: false,
  noMore: false,
  show: false
} as IProps;
