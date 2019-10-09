import Taro from "@tarojs/taro";
import { ClCard, ClLayout, ClText, ClTitleBar } from "mp-colorui";
import GenerateCode from "../../../usedComponents/generateCode";
import { activeCode, cardCode, colorCode, fullCode } from "./code";

export default function Card() {
  return (
    <ClLayout>
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClCard>
        <ClText textColor="blue">我是卡片形式，仅仅作为一个内容的载体</ClText>
        我自带边距，你可以在里面填充任何自定义内容
      </ClCard>
      <GenerateCode code={cardCode} />
      <ClLayout padding="normal" paddingDirection="vertical">
        <ClCard type="full">
          <ClText textColor="blue">我是铺满形式，仅仅作为一个内容的载体</ClText>
          我自带边距，你可以在里面填充任何自定义内容
        </ClCard>
      </ClLayout>
      <GenerateCode code={fullCode} />
      <ClCard bgColor="brown">
        <ClText textColor="white">
          我是卡片形式，仅仅作为一个内容的载体，我可以设置背景色
        </ClText>
        我自带边距，你可以在里面填充任何自定义内容
      </ClCard>
      <GenerateCode code={colorCode} />
      <ClCard active>
        <ClText textColor="blue">
          我是卡片形式，仅仅作为一个内容的载体，触摸我会有触摸效果
        </ClText>
        我自带边距，你可以在里面填充任何自定义内容
      </ClCard>
      <GenerateCode code={activeCode} />
    </ClLayout>
  );
}

Card.config = {
  navigationBarTitleText: "Card 卡片"
};
