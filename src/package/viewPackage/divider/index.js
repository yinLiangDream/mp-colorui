import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClDivider, ClTitleBar } from "../../../index";

export default function Divider() {
  return (
    <View>
      <ClTitleBar title="基本" textColor="black" type="icon" />
      <ClDivider>我是分割线</ClDivider>
      <ClTitleBar title="颜色" textColor="black" type="icon" />
      <ClDivider color="red">我是分割线</ClDivider>
      <ClDivider color="yellow">我是分割线</ClDivider>
      <ClDivider color="blue">我是分割线</ClDivider>
      <ClTitleBar title="大小" textColor="black" type="icon" />
      <ClDivider size="xsmall">我是分割线</ClDivider>
      <ClDivider size="normal">我是分割线</ClDivider>
      <ClDivider size="xxlarge">我是分割线</ClDivider>
    </View>
  );
}

Divider.config = {
  navigationBarTitleText: "Divider 分割线"
};
