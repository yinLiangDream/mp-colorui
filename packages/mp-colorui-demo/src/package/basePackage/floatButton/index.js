import React from "react";
import { View } from "@tarojs/components";
import { ClCard, ClFloatButton, ClText } from "@/mp-colorui";

export default function FloatButton() {
  const text =
    "浮动按钮可以设置颜色、形状、是否可移动、是否展开、点击阴影关闭等，此 demo 可以移动";
  return (
    <View>
      <ClCard>
        <ClText text={text} />
      </ClCard>
      <ClFloatButton
        size="large"
        bgColor="red"
        closeWithShadow
        direction="vertical"
        move
        actionList={[
          {
            icon: "lightforbid",
          },
          {
            icon: "friendfamous",
          },
        ]}
      />
    </View>
  );
}

FloatButton.config = {
  navigationBarTitleText: "FloatButton 浮动按钮",
};
