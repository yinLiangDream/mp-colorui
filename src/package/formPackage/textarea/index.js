import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClTitleBar, ClCard, ClTextarea } from "../../../index";

export default function Textarea() {
  return (
    <View>
      <ClTitleBar title="默认值/自动聚焦" textColor="black" type="icon" />
      <ClCard>
        <ClTextarea value="我是默认值" autoFocus />
      </ClCard>
      <ClTitleBar title="placeholder" textColor="black" type="icon" />
      <ClCard>
        <ClTextarea placeholder="请输入……" />
      </ClCard>
      <ClTitleBar title="限制字数" textColor="black" type="icon" />
      <ClCard>
        <ClTextarea showLengthTip maxLength={200} />
      </ClCard>
      <ClTitleBar title="背景色" textColor="black" type="icon" />
      <ClCard>
        <ClTextarea showLengthTip maxLength={200} bgColor="light-brown" />
      </ClCard>
    </View>
  );
}

Textarea.config = {
  navigationBarTitleText: "Textarea 输入域"
};
