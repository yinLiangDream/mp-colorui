/**
 * 生成路径
 * @param baseUrl
 * @returns {function(*, *=): {path: string, title: *}}
 */
const generatePath = baseUrl => {
  return (childPath, childTitle) => ({
    title: childTitle,
    path: `/${baseUrl}/${childPath}`
  });
};

const homePath = generatePath("home");
const basePath = generatePath("base");
const viewPath = generatePath("view");
const formPath = generatePath("form");
const actionPath = generatePath("action");
const layoutPath = generatePath("layout");
const navigatePath = generatePath("navigate");
const utilPath = generatePath("util");

module.exports = {
  title: "MP-ColorUI",
  description:
    "MP ColorUI 是一款基于 Taro 框架并且联合 Color-UI CSS 库开发的多端 UI 组件库（支持小程序端和H5端）",
  base: "/mp-colorui-doc/",
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ],
    "@vuepress/back-to-top",
    "@vuepress/active-header-links",
    "@vuepress/last-updated",
    "@vuepress/nprogress"
  ],
  themeConfig: {
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/yinLiangDream/mp-colorui"
      }
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: "入门",
        path: "/home/introduce",
        children: [
          homePath("introduce", "介绍"),
          homePath("quick", "快速上手"),
          homePath("custom", "自定义主题"),
          homePath("color", "默认色"),
          homePath("update", "更新日志"),
          homePath("issue", "问题说明"),
          homePath("plan", "开发计划")
        ]
      },
      {
        title: "基础组件",
        path: "/base/icon",
        children: [
          basePath("icon", "Icon 图标"),
          basePath("button", "Button 按钮"),
          basePath("floatButton", "FloatButton 浮动按钮"),
          basePath("text", "Text 文字")
        ]
      },
      {
        title: "视图组件",
        path: "/view/avatar",
        children: [
          viewPath("avatar", "Avatar 头像"),
          viewPath("tag", "Tag 标签"),
          viewPath("timeline", "Timeline 时间轴"),
          viewPath("swiper", "Swiper 滑动视图"),
          viewPath("steps", "Steps 步骤条"),
          viewPath("searchBar", "SearchBar 搜索栏"),
          viewPath("shopBar", "ShopBar 购物栏"),
          viewPath("titleBar", "TitleBar 标题栏"),
          viewPath("divider", "Divider 分割线"),
          viewPath("curtain", "Curtain 幕帘")
        ]
      },
      {
        title: "操作反馈",
        path: "/action/modal",
        children: [
          actionPath("modal", "Modal 模态框"),
          actionPath("progress", "Progress 进度条"),
          actionPath("loading", "Loading 加载"),
          actionPath("animation", "Animation 动画"),
          actionPath("message", "Message 提示消息"),
          actionPath("tip", "Tip 提示"),
          actionPath("swiperAction", "SwiperAction 滑动操作"),
          actionPath("actionSheet", "ActionSheet 动作面板")
        ]
      },
      {
        title: "表单组件",
        path: "/form/form",
        children: [
          formPath("form", "Form 表单"),
          formPath("input", "Input 输入框"),
          formPath("radio", "Radio 单选按钮"),
          formPath("checkbox", "Checkbox 多选按钮"),
          formPath("switch", "Switch 开关"),
          formPath("select", "Select 选择器"),
          formPath("imagePicker", "ImagePicker 图片选择器")
        ]
      },
      {
        title: "布局组件",
        path: "/layout/layout",
        children: [
          layoutPath("layout", "Layout 基本布局"),
          layoutPath("flex", "Flex 弹性布局"),
          layoutPath("grid", "Grid 栅格布局"),
          layoutPath("menuList", "MenuList 菜单列表"),
          layoutPath("card", "Card 卡片"),
          layoutPath("drawer", "Drawer 抽屉"),
          layoutPath("screenDrawer", "ScreenDrawer 全屏抽屉"),
          layoutPath("accordion", "Accordion 手风琴")
        ]
      },
      {
        title: "导航组件",
        path: "/navigate/navBar",
        children: [
          navigatePath("navBar", "NavBar 导航栏"),
          navigatePath("tabBar", "TabBar 标签栏"),
          navigatePath("tabs", "Tabs 标签页"),
          navigatePath("verticalTab", "VertialTab 垂直导航")
        ]
      },
      {
        title: "内置工具",
        path: "/util/rule",
        children: [utilPath("rule", "rule 校验")]
      }
    ],
    lastUpdated: "上次更新",
    markdown: {
      lineNumbers: true
    }
  }
};
