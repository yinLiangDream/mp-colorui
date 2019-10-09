import Taro, { useState } from "@tarojs/taro";
import {
  ClButton,
  ClLayout,
  ClTitleBar,
  ClAnimation,
  ClCard
} from "mp-colorui";
import GenerateCode from "../../../usedComponents/generateCode";
import { delayCode, normalCode, reverseCode } from "./code";

export default function Animation() {
  const animationName = [
    "fade",
    "scale-up",
    "scale-down",
    "slide-top",
    "slide-bottom",
    "slide-left",
    "slide-right",
    "shake"
  ];
  const [nowName, setNowName] = useState("");
  const [begin, setBegin] = useState(false);
  const showAnimation = name => {
    setNowName(name);
    let time = null;
    time = setTimeout(() => {
      setNowName("");
      clearTimeout(time);
    }, 1000);
  };
  const beginAnimation = index => {
    if (index > 0) return;
    setBegin(true);
    let time = null;
    time = setTimeout(() => {
      setBegin(false);
      clearTimeout(time);
    }, animationName.length * 200);
  };
  const showNormal = animationName.map(name => (
    <ClLayout key={name} margin="normal" marginDirection="around">
      <ClAnimation type={name === nowName ? name : ""}>
        <ClButton
          long
          shape="round"
          onClick={() => {
            showAnimation(name);
          }}
          text={name}
        />
      </ClAnimation>
    </ClLayout>
  ));
  const showReserve = animationName.map(name => (
    <ClLayout key={name} margin="normal" marginDirection="around">
      <ClAnimation type={`${name}s` === nowName ? name : ""} reverse>
        <ClButton
          long
          shape="round"
          bgColor="light-blue"
          onClick={() => {
            showAnimation(`${name}s`);
          }}
          text={name}
        />
      </ClAnimation>
    </ClLayout>
  ));
  const delay = animationName.map((name, index) => (
    <ClLayout key={name} margin="normal" marginDirection="around">
      <ClAnimation type={`${begin ? "scale-up" : ""}`} delay={index / 10}>
        <ClButton
          long
          shape="round"
          bgColor="brown"
          onClick={() => {
            beginAnimation(index);
          }}
          text={`${index ? index / 10 + "s" : "开始执行"}`}
        />
      </ClAnimation>
    </ClLayout>
  ));
  return (
    <ClLayout>
      <ClTitleBar
        type="icon"
        title="默认效果"
        iconColor="red"
        textColor="black"
      />
      {showNormal}
      <GenerateCode code={normalCode} />
      <ClTitleBar
        type="icon"
        title="反向效果"
        iconColor="red"
        textColor="black"
      />
      {showReserve}
      <GenerateCode code={reverseCode} />
      <ClTitleBar
        type="icon"
        title="延迟执行"
        iconColor="red"
        textColor="black"
      />
      {delay}
      <GenerateCode code={delayCode} />
    </ClLayout>
  );
}
