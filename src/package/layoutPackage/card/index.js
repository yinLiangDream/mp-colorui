import Taro from "@tarojs/taro";
import { ClCard, ClLayout, ClText, ClTitleBar } from "../../../index";

export default function Card() {
  return (
    <ClLayout>
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClCard>
        <ClText textColor="blue">我是卡片形式，仅仅作为一个内容的载体</ClText>
        我自带边距，你可以在里面填充任何自定义内容
      </ClCard>
      <ClLayout padding="normal" paddingDirection="vertical">
        <ClCard type="full">
          <ClText textColor="blue">我是铺满形式，仅仅作为一个内容的载体</ClText>
          我自带边距，你可以在里面填充任何自定义内容
        </ClCard>
      </ClLayout>
      <ClCard bgColor="brown">
        <ClText textColor="white">
          我是卡片形式，仅仅作为一个内容的载体，我可以设置背景色
        </ClText>
        我自带边距，你可以在里面填充任何自定义内容
      </ClCard>
      <ClCard active>
        <ClText textColor="blue">
          我是卡片形式，仅仅作为一个内容的载体，触摸我会有触摸效果
        </ClText>
        我自带边距，你可以在里面填充任何自定义内容
      </ClCard>
      <ClTitleBar title="标题" textColor="black" type="icon" />
      <ClCard
        title={{
          text: "我是标题",
          textColor: "white",
          align: "center",
          size: 'xlarge',
          fontWeight: 'bold'
        }}
        bgColor="gradualPink"
      >
        标题可以传入 ClText 组件的任何属性，可以设置标题大小，颜色，颜色等
      </ClCard>
    </ClLayout>
  );
}

Card.config = {
  navigationBarTitleText: "Card 卡片"
};
