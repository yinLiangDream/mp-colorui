import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClLayout, ClTitleBar } from "../../../index";
import MenuNavigate from "../../../pages/components/menuNavigate";
import { layoutList } from "../../../constant/menu";

export default function Layout() {
  return (
    <View>
      <ClTitleBar
        title="布局"
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClLayout padding="normal" paddingDirection="vertical">
        <MenuNavigate list={layoutList} name="layout" />
      </ClLayout>
    </View>
  );
}

Layout.config = {
  navigationBarTitleText: "布局"
};
