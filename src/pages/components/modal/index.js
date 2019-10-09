import Taro, { useState } from "@tarojs/taro";
import {
  ClButton,
  ClCard,
  ClFlex,
  ClLayout,
  ClModal,
  ClTitleBar,
  ClText,
  ClTimeline
} from "mp-colorui";
import { View } from "@tarojs/components";

import GenerateCode from "../../../usedComponents/generateCode";

import { normalCode, customCode } from "./code";

export default function Modal() {
  const [normal, setNormal] = useState(false);
  const [custom, setCustom] = useState(false);
  return (
    <ClLayout>
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClCard>
        <ClButton
          text="普通"
          long
          onClick={() => {
            setNormal(true);
          }}
        />
      </ClCard>
      <GenerateCode code={normalCode} />
      <ClModal
        show={normal}
        closeWithShadow
        title="我是标题"
        close
        actions={[
          {
            text: "取消",
            color: "red"
          },
          {
            text: "确认",
            color: "blue"
          }
        ]}
        onCancel={() => {
          setNormal(false);
        }}
        onClose={() => {
          setNormal(false);
        }}
        onClick={index => {
          Taro.showToast({
            title: index === 0 ? "取消" : "确认",
            icon: "none"
          });
        }}
      >
        我是内容，我可以插入任何内容，点击阴影也可以关闭
      </ClModal>

      <ClTitleBar
        title="自定义头部和操作按钮组"
        textColor="black"
        type="icon"
        subTitle="custom"
      />
      <ClCard>
        <ClButton
          text="自定义"
          bgColor="light-cyan"
          long
          onClick={() => {
            setCustom(true);
          }}
        />
      </ClCard>
      <GenerateCode code={customCode} />
      <ClModal
        show={custom}
        closeWithShadow
        custom
        close
        renderTitle={
          <ClTitleBar
            title="我是自定义的标题"
            textColor="black"
            type="sub-title"
            subTitle="custom"
            subTitleColor="shadow"
          />
        }
        onCancel={() => {
          setCustom(false);
        }}
        renderAction={
          <ClLayout>
            <ClFlex justify="around">
              <View className="flex-sub">
                <ClButton
                  bgColor="light-red"
                  long
                  onClick={() => {
                    Taro.showToast({
                      title: "取消",
                      icon: "none"
                    });
                  }}
                >
                  取消
                </ClButton>
              </View>
              <View className="flex-sub">
                <ClButton
                  bgColor="light-blue"
                  long
                  onClick={() => {
                    Taro.showToast({
                      title: "确认",
                      icon: "none"
                    });
                  }}
                >
                  确认
                </ClButton>
              </View>
            </ClFlex>
          </ClLayout>
        }
      >
        <ClText text="我是内容，我可以插入任何内容，点击阴影也可以关闭，头部自定义，使用了组件 TitleBar，脚部 actions 使用了两个 button" />
        <ClLayout padding="normal" paddingDirection="vertical">
          <ClTimeline
            times={[
              {
                content: ["这是我插入的 Timeline 组件"]
              }
            ]}
          />
        </ClLayout>
      </ClModal>
    </ClLayout>
  );
}

Modal.config = {
  navigationBarTitleText: "Modal 模态框"
};
