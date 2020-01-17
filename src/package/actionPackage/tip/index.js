import Taro, { useState } from "@tarojs/taro";
import {
  ClLayout,
  ClTitleBar,
  ClTip,
  ClFlex,
  ClButton,
  ClAccordion,
  ClCard,
  ClText
} from "../../../index";

export default function Tip() {
  const renderMessage = (
    <ClLayout>
      <ClAccordion title="我是手风琴组件">
        <ClLayout padding="normal" paddingDirection="around">
          <ClCard type="full">
            <ClText
              text="道可道，非常道。名可名，非常名。无名天地之始。有名万物之母。"
              textColor="blue"
            />
          </ClCard>
          <ClCard type="full">
            <ClText
              text="有无相生，难易相成，长短相形，高下相盈，音声相和，前后相随。恒也。"
              textColor="brown"
            />
          </ClCard>
          <ClCard type="full">
            <ClText
              text="上善若水。水善利万物而不争，处众人之所恶，故几于道。"
              textColor="red"
            />
          </ClCard>
          <ClCard type="full">
            <ClText text="道生一，一生二，二生三，三生万物。万物负阴而抱阳，冲气以为和。" />
          </ClCard>
        </ClLayout>
      </ClAccordion>
    </ClLayout>
  );
  const [show, setShow] = useState(false);
  return (
    <ClLayout>
      <ClTitleBar title="方向" type="icon" />
      <ClLayout padding="normal" paddingDirection="around">
        <ClFlex justify="between">
          <ClTip message="我是上方提示" direction="top">
            <ClButton text="上方" shape="round" />
          </ClTip>
          <ClTip message="我是右方提示" direction="right">
            <ClButton text="右方" shape="round" />
          </ClTip>
          <ClTip message="我是左方提示" direction="left">
            <ClButton text="左方" shape="round" />
          </ClTip>
          <ClTip message="我是下方提示" direction="bottom">
            <ClButton text="下方" shape="round" />
          </ClTip>
        </ClFlex>
      </ClLayout>
      <ClTitleBar title="触发方式" type="icon" />
      <ClLayout padding="normal" paddingDirection="around">
        <ClFlex justify="around">
          <ClTip
            message="我是点击触发"
            direction="top"
            mode="click"
            show={show}
            onChange={flag => {
              setShow(flag);
            }}
          >
            <ClButton text="点击触发" shape="round" />
          </ClTip>
          <ClTip message="我是触摸触发" direction="right">
            <ClButton text="触摸触发" shape="round" />
          </ClTip>
        </ClFlex>
      </ClLayout>
      <ClTitleBar title="自适应" type="icon" />
      <ClLayout padding="normal" paddingDirection="around">
        <ClFlex justify="around">
          <ClTip
            message="我本应该左侧出现，但是自动检测到左侧距离不够，所以自动转换成右侧触发，上下亦是如此"
            direction="left"
          >
            <ClButton text="左侧出现" shape="round" />
          </ClTip>
          <ClTip
            message="我本应该右侧出现，但是自动检测到右侧距离不够，所以自动转换成左侧触发，上下亦是如此"
            direction="right"
          >
            <ClButton text="右侧出现" shape="round" />
          </ClTip>
        </ClFlex>
      </ClLayout>
      <ClTitleBar title="背景色" type="icon" />
      <ClLayout padding="normal" paddingDirection="around">
        <ClFlex justify="between">
          <ClTip message="我是上方提示" direction="top" bgColor="gradualBlue">
            <ClButton text="上方" shape="round" />
          </ClTip>
          <ClTip message="我是右方提示" direction="right" bgColor="black">
            <ClButton text="右方" shape="round" />
          </ClTip>
          <ClTip message="我是左方提示" direction="left" bgColor="gradualRed">
            <ClButton text="左方" shape="round" />
          </ClTip>
          <ClTip
            message="我是下方提示"
            direction="bottom"
            bgColor="light-olive"
          >
            <ClButton text="下方" shape="round" />
          </ClTip>
        </ClFlex>
      </ClLayout>
      <ClTitleBar title="自定义渲染" type="icon" />
      <ClLayout padding="normal" paddingDirection="around">
        <ClFlex justify="between">
          <ClTip
            renderMessage={renderMessage}
            direction="top"
            bgColor="gradualBlue"
            mode="click"
            width={350}
            onChange={flag => {
              setShow(false);
            }}
          >
            <ClButton text="渲染的内容" shape="round" />
          </ClTip>
        </ClFlex>
      </ClLayout>
      <ClTitleBar title="长度" type="icon" />
      <ClLayout padding="normal" paddingDirection="around">
        <ClFlex justify="between">
          <ClTip message="是时候表演真正的技术了" direction="right">
            <ClButton text="默认长度" shape="round" />
          </ClTip>
          <ClTip message="是时候表演真正的技术了" direction="left" width={200}>
            <ClButton text="长度200" shape="round" />
          </ClTip>
        </ClFlex>
      </ClLayout>
    </ClLayout>
  );
}

Tip.config = {
  navigationBarTitleText: "Tip 提示"
};
