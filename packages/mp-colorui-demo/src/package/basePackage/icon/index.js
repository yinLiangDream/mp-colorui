import React, { useState, useEffect } from "react";
import { pxTransform } from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  ClIcon,
  ClText,
  ClTitleBar,
  ClFlex,
  ClCard,
  ClSearchBar,
  ClAnimation,
} from "@/mp-colorui";
import icons from "../../../constant/icon";

const title = "Icon 图标";

export default function Icon() {
  const [filterIcon, setFilterIcon] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setFilterIcon(icons);
    let time = null;
    time = setTimeout(() => {
      setShowAnimation(true);
      clearTimeout(time);
    }, 100);
  }, []);
  const filterComponent = filterIcon.map((item, index) => (
    <ClAnimation type="scale-down" delay={index / 20} key={item.name}>
      <ClCard type="card">
        <ClFlex>
          <View style={{ width: pxTransform(130) }}>
            <ClFlex justify="center" align="center">
              <ClIcon color="grey" size="xlarge" iconName={item.name} />
            </ClFlex>
            <ClFlex justify="center" align="center" wrap>
              <ClText size="small" textColor="grey" text={item.name} />
            </ClFlex>
          </View>
        </ClFlex>
      </ClCard>
    </ClAnimation>
  ));
  return (
    <View>
      <ClSearchBar
        shape="round"
        onInput={(value) => {
          setFilterIcon(icons.filter((item) => item.name.includes(value)));
        }}
        bgColor="white"
        placeholder="请输入图标关键字"
      />
      <ClTitleBar
        title={title}
        type="border-title"
        textColor="black"
        borderColor="blue"
      />
      <ClFlex wrap justify="around" align="start">
        {showAnimation ? filterComponent : ""}
      </ClFlex>
    </View>
  );
}

Icon.config = {
  navigationBarTitleText: "Icon 图标",
};
