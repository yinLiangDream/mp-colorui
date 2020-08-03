import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  ClButton,
  ClCard,
  ClFlex,
  ClGrid,
  ClLayout,
  ClSwitch,
  ClText,
  ClTitleBar,
} from "mp-colorui";
import colors from "../../../constant/color";
import { convertLightColor } from "../../../utils";

export default function ButtonView() {
  this.config = {
    navigationBarTitleText: "Button 按钮",
  };
  const [showLines, setShowLines] = useState(false);
  const renderRight = (
    <ClFlex align="center" justify="center">
      <ClLayout padding="small" paddingDirection="right">
        <ClText text="粗细" />
      </ClLayout>
      <ClSwitch
        onChange={(value) => {
          setShowLines(value);
        }}
      />
    </ClFlex>
  );

  return (
    <ClLayout>
      <ClTitleBar title="形状" textColor="black" type="icon" subTitle="shape" />
      <ClFlex justify="around" wrap>
        <View style={{ flex: 1 }}>
          <ClCard>
            <ClFlex justify="around">
              <ClButton shape="radius" bgColor="blue">
                默认(radius)
              </ClButton>
              <ClButton shape="round" bgColor="blue">
                圆角(round)
              </ClButton>
            </ClFlex>
          </ClCard>
        </View>
      </ClFlex>

      <ClTitleBar title="尺寸" textColor="black" type="icon" subTitle="size" />
      <ClFlex justify="around" wrap>
        <View style={{ flex: 1 }}>
          <ClCard>
            <ClFlex justify="around" align="center">
              <ClButton shape="round" bgColor="blue" size="small">
                small
              </ClButton>
              <ClButton shape="round" bgColor="blue" size="normal">
                normal
              </ClButton>
              <ClButton shape="round" bgColor="blue" size="large">
                large
              </ClButton>
            </ClFlex>
          </ClCard>
        </View>
      </ClFlex>

      <ClTitleBar
        title="按钮颜色"
        textColor="black"
        type="icon"
        subTitle="bgColor"
      />
      <ClFlex justify="between" wrap>
        <View style={{ flex: 1 }}>
          <ClCard>
            <ClGrid col={3}>
              {colors.normalColor.map((item) => (
                <View key={item.title}>
                  <ClLayout padding="small" paddingDirection="around">
                    <ClButton shape="round" bgColor={item.title} long>
                      {item.title}
                    </ClButton>
                  </ClLayout>
                </View>
              ))}
            </ClGrid>
          </ClCard>
          <ClCard>
            <ClGrid col={2}>
              {colors.lightColor.map((item) => (
                <View key={item.title}>
                  <ClLayout padding="small" paddingDirection="around">
                    <ClButton
                      long
                      shape="round"
                      bgColor={convertLightColor(item.title)}
                    >
                      {convertLightColor(item.title)}
                    </ClButton>
                  </ClLayout>
                </View>
              ))}
            </ClGrid>
          </ClCard>
          <ClCard>
            <ClGrid col={2}>
              {colors.gradualColor.map((item) => (
                <View key={item.title}>
                  <ClLayout padding="small" paddingDirection="around">
                    <ClButton shape="round" long bgColor={item.title}>
                      {item.title}
                    </ClButton>
                  </ClLayout>
                </View>
              ))}
            </ClGrid>
          </ClCard>
        </View>
      </ClFlex>

      <ClTitleBar
        title="按钮镂空"
        textColor="black"
        type="icon"
        subTitle="plain"
        renderRight={renderRight}
      />
      <ClFlex justify="between" wrap>
        <ClCard>
          <ClGrid col={2}>
            {colors.normalColor
              .filter((item) => item.title !== "white")
              .map((item) => (
                <View key={item.title}>
                  <ClLayout padding="small" paddingDirection="around">
                    <ClButton
                      long
                      plain
                      plainSize={showLines ? "bold" : "default"}
                      shape="round"
                      bgColor={item.title}
                    >
                      {item.title}
                    </ClButton>
                  </ClLayout>
                </View>
              ))}
          </ClGrid>
        </ClCard>
      </ClFlex>

      <ClTitleBar
        title="块状按钮"
        textColor="black"
        type="icon"
        subTitle="long"
      />
      <ClFlex justify="between" wrap>
        <View style={{ flex: 1 }}>
          <ClCard>
            <ClButton shape="round" bgColor="blue" long>
              块状按钮
            </ClButton>
          </ClCard>
        </View>
      </ClFlex>

      <ClTitleBar
        title="失效按钮"
        textColor="black"
        type="icon"
        subTitle="disabled"
      />
      <ClCard>
        <ClButton shape="round" bgColor="blue" long disabled>
          禁止按钮
        </ClButton>
      </ClCard>

      <ClTitleBar
        title="加载中"
        textColor="black"
        type="icon"
        subTitle="loading"
      />
      <ClCard>
        <ClButton shape="round" bgColor="blue" long loading>
          加载中
        </ClButton>
      </ClCard>

      <ClTitleBar title="开放能力" textColor="black" type="icon" />
      <ClCard>
        <ClButton
          shape="round"
          bgColor="blue"
          long
          openType="getUserInfo"
          onGetUserInfo={(res) => {
            if (res.detail.userInfo) {
              Taro.showToast({
                title: res.detail.userInfo.nickName,
                icon: "none",
              });
            }
          }}
        >
          获取用户信息
        </ClButton>
      </ClCard>
    </ClLayout>
  );
}
