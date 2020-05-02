import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import {
  ClAnimation,
  ClCard,
  ClFlex,
  ClIcon,
  ClLayout,
  ClModal,
  ClSearchBar,
  ClTabBar,
  ClText,
  ClAvatar,
  ClMenuList
} from "../../index";

import * as menu from "../../constant/menu.js";
import "./index.scss";
// import { updateList } from "../../model/index";

const allList = [].concat(
  menu.baseList,
  menu.actionList,
  menu.formList,
  menu.layoutList,
  menu.navigateList,
  menu.viewList
);

const basePackage = menu.baseList.map(item => item.key);
const actionPackage = menu.actionList.map(item => item.key);
const formPackage = menu.formList.map(item => item.key);
const layoutPackage = menu.layoutList.map(item => item.key);
const navigatePackage = menu.navigateList.map(item => item.key);
const viewPackage = menu.viewList.map(item => item.key);
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

export default class IndexPage extends Taro.Component {
  constructor() {
    super();
    this.state = {
      updated: null,
      active: 0,
      animate: "none",
      show: false,
      tempfilter: [],
      showUpdate: false
    };
    this.config = {
      navigationBarTitleText: "MP-ColorUI"
    };
  }

  componentDidMount() {
    let timer = setTimeout(() => {
      this.setState({
        animate: "scale-up",
        show: true
      });
      clearTimeout(timer);
    }, 800);
    Taro.request({
      url:
        "https://mp-colorui-1255362963.cos.ap-chengdu.myqcloud.com/update/update.json"
    }).then(res => {
      this.setState({
        updated: res.data[0],
        showUpdate: true
      });
    });
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
  }

  clickMenu(index) {
    switch (index) {
      case 0: {
        Taro.setClipboardData({
          data: "https://yinliangdream.github.io/mp-colorui-doc/#/"
        }).then(() => {
          Taro.showToast({
            title: "复制成功"
          });
        });
        break;
      }
      case 1: {
        Taro.setClipboardData({
          data: "https://github.com/yinLiangDream/mp-colorui"
        }).then(() => {
          Taro.showToast({
            title: "复制成功"
          });
        });
        break;
      }
      case 2: {
        Taro.navigateTo({
          url: "/pages/update/index"
        });
        break;
      }
      case 3: {
        Taro.navigateToMiniProgram({
          appId: "wx8abaf00ee8c3202e",
          extraData: {
            id: "74218"
          }
        });
        break;
      }
      case 4: {
        Taro.previewImage({
          urls: [
            "https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/WechatIMG36738.jpeg"
          ],
          current:
            "https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/WechatIMG36738.jpeg"
        });
        break;
      }
      default: {
      }
    }
  }

  render() {
    const {
      updated,
      active,
      animate,
      show,
      tempfilter,
      showUpdate
    } = this.state;
    const CardsComponent = menu.default.map((item, index) => (
      <View
        key={"key-" + item.key}
        onClick={() => {
          Taro.navigateTo({
            url: `/package/${item.key}Package/index/index`
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

    const UserCenterComponent = (
      <View>
        <ClCard type="full">
          <ClFlex justify="around" align="center">
            <View>
              <ClAvatar
                shape="round"
                size="xlarge"
                headerArray={[
                  {
                    icon: "like"
                  }
                ]}
              />
            </View>
            <View>如果你觉得不错，可以请作者喝杯茶</View>
          </ClFlex>
        </ClCard>
        <ClLayout padding="normal" paddingDirection="vertical">
          <ClMenuList
            shortBorder
            onClick={this.clickMenu.bind(this)}
            list={[
              {
                icon: {
                  iconName: "form",
                  size: "small",
                  color: "grey"
                },
                title: "文档地址",
                arrow: true
              },
              {
                icon: {
                  iconName: "github",
                  size: "small"
                },
                title: "Github",
                arrow: true
              },
              {
                icon: {
                  iconName: "creativefill",
                  size: "small",
                  color: "olive"
                },
                title: "更新日志",
                arrow: true
              },
              {
                icon: {
                  iconName: "message",
                  size: "small",
                  color: "blue"
                },
                title: "留言",
                arrow: true
              },
              {
                icon: {
                  iconName: "appreciatefill",
                  size: "small",
                  color: "red"
                },
                title: "赞赏",
                arrow: true
              }
            ]}
          />
        </ClLayout>
      </View>
    );

    return (
      <View className="index">
        {active === 0 ? (
          <ClLayout padding="xlarge" paddingDirection="vertical">
            <ClSearchBar
              shape="round"
              bgColor="white"
              fix
              clear
              onClear={() => {
                this.setState({
                  tempfilter: []
                });
              }}
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
                this.setState({
                  tempfilter:
                    value !== ""
                      ? allList
                          .filter(item =>
                            item.name
                              .toLowerCase()
                              .includes(value.toLocaleLowerCase())
                          )
                          .map(item => {
                            let packageName = "";
                            if (basePackage.includes(item.key)) {
                              packageName = "basePackage";
                            } else if (actionPackage.includes(item.key)) {
                              packageName = "actionPackage";
                            } else if (formPackage.includes(item.key)) {
                              packageName = "formPackage";
                            } else if (layoutPackage.includes(item.key)) {
                              packageName = "layoutPackage";
                            } else if (navigatePackage.includes(item.key)) {
                              packageName = "navigatePackage";
                            } else if (viewPackage.includes(item.key)) {
                              packageName = "viewPackage";
                            }
                            return {
                              arrow: true,
                              title: item.name,
                              key: item.key,
                              url: `/package/${packageName}/${item.key}/index`
                            };
                          })
                      : []
                });
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
            {show ? CardsComponent : ""}
          </ClLayout>
        ) : (
          UserCenterComponent
        )}

        <ClTabBar
          tabs={tabs}
          fix
          active={active}
          onClick={index => {
            this.setState({
              active: index
            });
          }}
        />
        <ClModal
          show={showUpdate}
          close
          onClose={() => {
            this.setState({
              showUpdate: false
            });
          }}
          closeWithShadow
          onCancel={() => {
            this.setState({
              showUpdate: false
            });
          }}
          title={`${updated && updated.title} 版本`}
        >
          <ClFlex direction="column">
            <View style={{ width: "100%" }}>
              <ClText
                text={`${updated && updated.time}`}
                textColor="cyan"
                align="right"
              />
            </View>
            {updated &&
              updated.content.map(text => (
                <View key={"key-" + text}>
                  <ClText text={text} size="small" textColor="grey" />
                </View>
              ))}
          </ClFlex>
        </ClModal>
      </View>
    );
  }
}
