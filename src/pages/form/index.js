import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClLayout, ClTitleBar } from "mp-colorui";
import MenuNavigate from "../../usedComponents/menuNavigate";
import { formList } from "../../constant/menu";

export default function Form() {
  return (
    <View>
      <ClTitleBar
        title="表单"
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClLayout padding="normal" paddingDirection="vertical">
        <MenuNavigate list={formList} />
      </ClLayout>
    </View>
  );
}

Form.config = {
  navigationBarTitleText: "表单"
};
