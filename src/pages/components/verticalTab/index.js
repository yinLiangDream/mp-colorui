import Taro from "@tarojs/taro";
import { ClLayout, ClVerticalTab, ClVerticalTabCell } from "mp-colorui";
import { View } from "@tarojs/components";
import GenerateCode from "../../../usedComponents/generateCode";
import { demoCode } from "./code";

export default function VerticalTab() {
  const tabs = [...Array(50)].map((key, index) => ({
    name: "tab-" + index,
    id: "id-" + index
  }));
  return (
    <View>
      <ClVerticalTab tabs={tabs} height={1000}>
        <View>
          {tabs.map(item => (
            <View id={item.id} key={item.name}>
              <ClVerticalTabCell>{item.name}</ClVerticalTabCell>
            </View>
          ))}
        </View>
      </ClVerticalTab>
      <ClLayout paddingDirection="vertical" padding="normal">
        <GenerateCode code={demoCode} />
      </ClLayout>
    </View>
  );
}

VerticalTab.config = {
  navigationBarTitleText: "垂直导航 VerticalTab"
};
