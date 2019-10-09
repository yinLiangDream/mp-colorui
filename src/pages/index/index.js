import { View } from "@tarojs/components";
import Taro, { useState, useEffect } from "@tarojs/taro";
import {
  ClAnimation,
  ClCard,
  ClFlex,
  ClIcon,
  ClLayout,
  ClModal,
  ClSearchBar,
  ClTabBar,
  ClText
} from "mp-colorui";

import UserCenter from "./components/userCenter";
import * as menu from "../../constant/menu.js";
import "./index.scss";
import { updateList } from "../../model/index";

const allList = [].concat(
  menu.baseList,
  menu.actionList,
  menu.formList,
  menu.layoutList,
  menu.navigateList,
  menu.viewList
);

export default function Index() {
  // 变量声明区
  const icons = ["emoji", "cascades", "we", "form", "apps", "taxi"];
  const tabs = [
    {
      icon: "home",
      title: "主页",
      badge: false
    },
    {
      icon: "magic",
      title: "关于",
      badge: false
    }
  ];
  const updated = updateList.find(item => item.title);
  const [active, setActive] = useState(0);
  const [animate, setAnimation] = useState("none");
  const [show, setShow] = useState(false);
  const [tempfilter, setTempfilter] = useState([]);
  const [showUpdate, setShowUpdate] = useState(true);

  // 事件声明区
  useEffect(() => {
    let timer = setTimeout(() => {
      setAnimation("scale-up");
      setShow(true);
    }, 800);
    if (
      Taro.getEnv() !== Taro.ENV_TYPE.WEB &&
      Taro.canIUse("getUpdateManager")
    ) {
      let updateManager = Taro.getUpdateManager();
      updateManager.onCheckForUpdate(res => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            Taro.showModal({
              title: "更新提示",
              content: "有新版本，是否重启应用？",
              success: ress => {
                if (ress.confirm) {
                  updateManager.applyUpdate();
                } else if (ress.cancel) {
                  return false;
                }
              }
            });
          });
          updateManager.onUpdateFailed(() => {
            Taro.hideLoading();
            Taro.showModal({
              title: "更新失败",
              content: "新版本更新失败，请检查网络",
              showCancel: false
            });
          });
        }
      });
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  //组件区
  const cardsComponent = menu.default.map((item, index) => (
    <View
      key={item.key}
      onClick={() => {
        Taro.navigateTo({
          url: `/pages/${item.key}/index`
        });
      }}
    >
      <ClAnimation type={animate} delay={index / 10}>
        <ClCard bgColor="white">
          <View
            style={{
              backgroundImage:
                "url(https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/home.png)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <ClFlex justify="between" align="center">
              <ClFlex align="center">
                <ClIcon iconName={icons[index]} color="cyan" />
                <ClLayout padding="small" paddingDirection="left">
                  <ClText size="xlarge" text={item.name} fontWeight="bold" />
                  <ClText
                    size="xsmall"
                    textColor="gray"
                    text={item.description}
                  />
                </ClLayout>
              </ClFlex>
              <ClIcon iconName="roundrightfill" color="blue" />
            </ClFlex>
          </View>
        </ClCard>
      </ClAnimation>
    </View>
  ));
  return (
    <View className="index">
      {active === 0 ? (
        <ClLayout padding="xlarge" paddingDirection="vertical">
          <ClSearchBar
            shape="round"
            bgColor="white"
            fix
            searchType="none"
            placeholder="找不到组件在哪？来试试搜索组件吧！"
            showResult
            result={tempfilter}
            onTouchResult={index => {
              Taro.navigateTo({
                url: tempfilter[index].url
              });
            }}
            onInput={value => {
              setTempfilter(
                value !== ""
                  ? allList
                      .filter(item =>
                        item.name
                          .toLowerCase()
                          .includes(value.toLocaleLowerCase())
                      )
                      .map(item => ({
                        arrow: true,
                        title: item.name,
                        key: item.key,
                        url: `/pages/components/${item.key}/index`
                      }))
                  : []
              );
            }}
          />
        </ClLayout>
      ) : (
        ""
      )}
      {active === 0 ? (
        <ClLayout
          padding="xlarge"
          paddingDirection="bottom"
          margin="xlarge"
          marginDirection="bottom"
        >
          {show ? cardsComponent : ""}
        </ClLayout>
      ) : (
        ""
      )}
      {active === 1 ? <UserCenter /> : ""}
      <ClTabBar
        tabs={tabs}
        fix
        active={active}
        onClick={index => {
          setActive(index);
        }}
      />
      <ClModal
        show={showUpdate}
        close
        onClose={() => {
          setShowUpdate(false);
        }}
        closeWithShadow
        onCancel={() => {
          setShowUpdate(false);
        }}
        title={`${updated.title} 版本`}
      >
        <ClFlex direction="column">
          <View style={{ width: "100%" }}>
            <ClText text={`${updated.time}`} textColor="cyan" align="right" />
          </View>
          {updated.content.map(text => (
            <ClText text={text} size="small" textColor="grey" />
          ))}
        </ClFlex>
      </ClModal>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "MP-ColorUI"
};
