import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClLayout, ClTitleBar } from "mp-colorui";
import MenuNavigate from "../../usedComponents/menuNavigate";
import { navigateList } from "../../constant/menu";

export default function Navigate() {
  return (
    <View>
      <ClTitleBar
        title="导航"
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClLayout padding="normal" paddingDirection="vertical">
        <MenuNavigate list={navigateList} />
      </ClLayout>
    </View>
  );
}

Navigate.config = {
  navigationBarTitleText: "导航"
};
