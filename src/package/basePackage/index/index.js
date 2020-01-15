import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClLayout, ClTitleBar } from "../../../index";
import MenuNavigate from "../../../pages/components/menuNavigate";

import { baseList } from "../../../constant/menu";

export default function Base() {
  return (
    <View>
      <ClTitleBar
        title="基础"
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClLayout padding="normal" paddingDirection="vertical">
        <MenuNavigate list={baseList} name="base" />
      </ClLayout>
    </View>
  );
}

Base.config = {
  navigationBarTitleText: "基础"
};
