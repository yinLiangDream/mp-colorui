import Taro from "@tarojs/taro";
import { ClCard, ClGrid, ClLayout, ClTitleBar } from "../../../index";
import { View } from "@tarojs/components";

const generatorArr = num => {
  let i = 0;
  const arr = [];
  while (i < num * 2) {
    arr.push("");
    i++;
  }
  return arr;
};

export default class Grid extends Taro.Component {
  config = {
    navigationBarTitleText: "Grid 栅格布局"
  };

  renderComponent(num) {
    return generatorArr(num).map((un, index) => (
      <View key={Math.random()}>
        <ClCard
          type="full"
          bgColor={index % 2 === 0 ? "light-blue" : "light-brown"}
        >
          {index + 1}
        </ClCard>
      </View>
    ));
  }

  renderCards(num) {
    return (
      <ClCard>
        <ClGrid col={num}>{this.renderComponent(num)}</ClGrid>
      </ClCard>
    );
  }

  render() {
    return (
      <ClLayout>
        <ClTitleBar
          title="等分列"
          textColor="black"
          type="icon"
          subTitle="grid"
        />
        {this.renderCards(1)}
        {this.renderCards(2)}
        {this.renderCards(3)}
        {this.renderCards(4)}
        {this.renderCards(5)}

        <ClTitleBar
          title="等高"
          textColor="black"
          type="icon"
          subTitle="square"
        />
        <ClCard>
          <ClGrid mode="square" col={3}>
            <View className="bg-blue light">1</View>
            <View className="bg-brown light">2</View>
            <View className="bg-blue light">3</View>
          </ClGrid>
        </ClCard>
      </ClLayout>
    );
  }
}
