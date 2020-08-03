export default {
  pages: ['pages/index/index', 'pages/update/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MPCOLORUI',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      root: 'package/basePackage',
      pages: [
        'index/index',
        'color/index',
        'icon/index',
        'button/index',
        'floatButton/index',
        'text/index'
      ]
    },
    {
      root: 'package/actionPackage',
      pages: [
        'index/index',
        'modal/index',
        'progress/index',
        'loading/index',
        'message/index',
        'animation/index',
        'tip/index',
        'swiperAction/index',
        'actionSheet/index'
      ]
    },
    {
      root: 'package/formPackage',
      pages: [
        'index/index',
        'form/index',
        'input/index',
        'radio/index',
        'checkbox/index',
        'switch/index',
        'select/index',
        'imagePicker/index',
        'textarea/index',
        'tree/index'
      ]
    },
    {
      root: 'package/layoutPackage',
      pages: [
        'index/index',
        'layout/index',
        'flex/index',
        'grid/index',
        'menuList/index',
        'card/index',
        'drawer/index',
        'screenDrawer/index',
        'accordion/index'
      ]
    },
    {
      root: 'package/navigatePackage',
      pages: [
        'index/index',
        'navBar/index',
        'tabBar/index',
        'tabs/index',
        'verticalTab/index'
      ]
    },
    {
      root: 'package/viewPackage',
      pages: [
        'index/index',
        'avatar/index',
        'tag/index',
        'timeline/index',
        'swiper/index',
        'steps/index',
        'searchBar/index',
        'shopBar/index',
        'titleBar/index',
        'divider/index',
        'curtain/index',
        'noticeBar/index',
        'calendar/index'
      ]
    }
  ],
  navigateToMiniProgramAppIdList: ['wx8abaf00ee8c3202e']
}
