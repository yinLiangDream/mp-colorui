import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClButton, ClCard, ClLayout, ClScreenDrawer } from "../../../index";

export default function ScreenDrawer() {
  const [show, setShow] = useState(false);
  const mainPage = (
    <View>
      <ClCard>
        <ClButton
          shape="round"
          long
          onClick={() => {
            setShow(true);
          }}
        >
          点我打开全屏抽屉
        </ClButton>
      </ClCard>
    </View>
  );
  const mainContent = (
    <ClLayout>
      <ClCard>我是内容</ClCard>
    </ClLayout>
  );
  return (
    <ClScreenDrawer
      show={show}
      renderPage={mainPage}
      renderDrawer={mainContent}
      onHide={() => {
        setShow(false);
      }}
    />
  );
}

ScreenDrawer.config = {
  navigationBarTitleText: "ScreenDrawer 全屏抽屉"
};
