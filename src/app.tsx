import Taro, { Component, Config } from "@tarojs/taro";
import Index from "./pages/index/index.js";
import "./app.scss";

// if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5") {
//   require("nerv-devtools");
// }

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: any = {
    pages: [
      // 首页
      "pages/index/index",
      "pages/update/index"
    ],
    subPackages: [
      {
        root: "package/basePackage",
        pages: [
          "index/index",
          "color/index",
          "icon/index",
          "button/index",
          "floatButton/index",
          "text/index"
        ]
      },
      {
        root: "package/actionPackage",
        pages: [
          "index/index",
          "modal/index",
          "progress/index",
          "loading/index",
          "message/index",
          "animation/index",
          "tip/index",
          "swiperAction/index",
          "actionSheet/index"
        ]
      },
      {
        root: "package/formPackage",
        pages: [
          "index/index",
          "form/index",
          "input/index",
          "radio/index",
          "checkbox/index",
          "switch/index",
          "select/index",
          "imagePicker/index",
          "textarea/index",
          "tree/index"
        ]
      },
      {
        root: "package/layoutPackage",
        pages: [
          "index/index",
          "layout/index",
          "flex/index",
          "grid/index",
          "menuList/index",
          "card/index",
          "drawer/index",
          "screenDrawer/index",
          "accordion/index"
        ]
      },
      {
        root: "package/navigatePackage",
        pages: [
          "index/index",
          "navBar/index",
          "tabBar/index",
          "tabs/index",
          "verticalTab/index"
        ]
      },
      {
        root: "package/viewPackage",
        pages: [
          "index/index",
          "avatar/index",
          "tag/index",
          "timeline/index",
          "swiper/index",
          "steps/index",
          "searchBar/index",
          "shopBar/index",
          "titleBar/index",
          "divider/index",
          "curtain/index",
          "noticeBar/index",
          "calendar/index"
        ]
      }
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    navigateToMiniProgramAppIdList: ["wx8abaf00ee8c3202e"]
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
