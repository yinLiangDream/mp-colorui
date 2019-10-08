import '@tarojs/async-await';
import Taro, { Component, Config } from '@tarojs/taro';
import Index from './pages/index';
import './style/index.scss';

if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  require('nerv-devtools')
}

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      // 首页
      'pages/index/index',
      'pages/update/index',

      // 组件导航
      'pages/base/index',
      'pages/action/index',
      'pages/form/index',
      'pages/layout/index',
      'pages/navigate/index',
      'pages/view/index',

      // 组件
      'pages/components/icon/index',
      'pages/components/color/index',
      'pages/components/text/index',
      'pages/components/button/index',
      'pages/components/avatar/index',
      'pages/components/tag/index',
      'pages/components/timeline/index',
      'pages/components/swiper/index',
      'pages/components/steps/index',
      'pages/components/searchBar/index',
      'pages/components/shopBar/index',
      'pages/components/titleBar/index',
      'pages/components/modal/index',
      'pages/components/progress/index',
      'pages/components/loading/index',
      'pages/components/input/index',
      'pages/components/radio/index',
      'pages/components/checkbox/index',
      'pages/components/switch/index',
      'pages/components/select/index',
      'pages/components/imagePicker/index',
      'pages/components/layout/index',
      'pages/components/flex/index',
      'pages/components/grid/index',
      'pages/components/menuList/index',
      'pages/components/card/index',
      'pages/components/drawer/index',
      'pages/components/screenDrawer/index',
      'pages/components/navBar/index',
      'pages/components/tabBar/index',
      'pages/components/tabs/index',
      'pages/components/animation/index',
      'pages/components/verticalTab/index',
      'pages/components/accordion/index',
      'pages/components/floatButton/index',
      'pages/components/message/index',
      'pages/components/divider/index',
      'pages/components/form/index',
      'pages/components/tip/index',
      'pages/components/swiperAction/index',
      'pages/components/actionSheet/index',
      'pages/components/curtain/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    navigateToMiniProgramAppIdList: ['wx8abaf00ee8c3202e']
  };

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
