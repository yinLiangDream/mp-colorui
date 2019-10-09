import Taro from "@tarojs/taro";
import { Block, View } from "@tarojs/components";
import { ClAnimation, ClCard, ClFlex, ClText, ClTitleBar } from "mp-colorui";

import { convertLightColor } from "../../../util";

import colors from "../../../constant/color";

export default class Color extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimation: false
    };
  }

  renderCard(item, index) {
    return (
      <ClAnimation type="slide-top" delay={index / 10}>
        <ClCard
          bgColor={
            item.title.includes("Light")
              ? convertLightColor(item.title)
              : item.title
          }
        >
          <ClFlex justify="around">
            <ClText>{item.title}</ClText>
            <ClText special="upper">{item.color}</ClText>
          </ClFlex>
        </ClCard>
      </ClAnimation>
    );
  }

  componentDidMount() {
    let time = null;
    time = setTimeout(() => {
      this.setState({
        showAnimation: true
      });
      clearTimeout(time);
    }, 100);
  }

  render() {
    const { showAnimation } = this.state;
    const normalColor = colors.normalColor.map((item, index) => (
      <Block key={item.title}>{this.renderCard(item, index)}</Block>
    ));
    const lightColor = colors.lightColor.map((item, index) => (
      <Block key={item.title}>{this.renderCard(item, index)}</Block>
    ));
    const gradualColor = colors.gradualColor.map((item, index) => (
      <Block key={item.title}>{this.renderCard(item, index)}</Block>
    ));
    return (
      <View>
        <ClTitleBar
          title="标准色"
          type="icon"
          textColor={"black"}
          iconColor={"blue"}
        />
        {showAnimation ? normalColor : ""}
        <ClTitleBar
          title="浅色"
          type="icon"
          textColor={"black"}
          iconColor={"blue"}
        />
        {showAnimation ? lightColor : ""}
        <ClTitleBar
          title="渐变色"
          type="icon"
          textColor={"black"}
          iconColor={"blue"}
        />
        {showAnimation ? gradualColor : ""}
      </View>
    );
  }
}

Color.config = {
  navigationBarTitleText: "Color 颜色"
};
