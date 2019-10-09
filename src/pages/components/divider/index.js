import Taro from "@tarojs/taro";
import { ClDivider, ClLayout, ClTitleBar } from "mp-colorui";
import { View } from "@tarojs/components";
import GenerateCode from "../../../usedComponents/generateCode";
import { colorCode, normalCode, sizeCode } from "./code";

export default function Divider() {
  return (
    <View>
      <ClTitleBar title="基本" textColor="black" type="icon" />
      <ClDivider>我是分割线</ClDivider>
      <ClLayout margin="normal" marginDirection="vertical">
        <GenerateCode code={normalCode} />
      </ClLayout>
      <ClTitleBar title="颜色" textColor="black" type="icon" />
      <ClDivider color="red">我是分割线</ClDivider>
      <ClDivider color="yellow">我是分割线</ClDivider>
      <ClDivider color="blue">我是分割线</ClDivider>
      <ClLayout margin="normal" marginDirection="vertical">
        <GenerateCode code={colorCode} />
      </ClLayout>
      <ClTitleBar title="大小" textColor="black" type="icon" />
      <ClDivider size="xsmall">我是分割线</ClDivider>
      <ClDivider size="normal">我是分割线</ClDivider>
      <ClDivider size="xxlarge">我是分割线</ClDivider>
      <ClLayout margin="normal" marginDirection="vertical">
        <GenerateCode code={sizeCode} />
      </ClLayout>
    </View>
  );
}

Divider.config = {
  navigationBarTitleText: "Divider 分割线"
};
