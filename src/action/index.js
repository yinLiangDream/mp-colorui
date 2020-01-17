import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClLayout, ClTitleBar } from "../../../index";
import MenuNavigate from "../../../pages/components/menuNavigate";
import { actionList } from "../../../constant/menu";

export default function Action() {
  return (
    <View>
      <ClTitleBar
        title="操作反馈"
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClLayout padding="normal" paddingDirection="vertical">
        <MenuNavigate list={actionList} />
      </ClLayout>
    </View>
  );
}

Action.config = {
  navigationBarTitleText: "操作反馈"
};
