import Taro from '@tarojs/taro';
import './style/index.scss'

import './app.scss';

export { default as ClAvatar } from './components/avatar';
export { default as ClButton } from './components/button';
export { default as ClIcon } from './components/icon';
export { default as ClInput } from './components/input';
export { default as ClLayout } from './components/layout';
export { default as ClLoading } from './components/loading';
export { default as ClNavBar } from './components/navBar';
export { default as ClProgress } from './components/progress';
export { default as ClSearchBar } from './components/searchBar';
export { default as ClSelect } from './components/select';
export { default as ClShopBar } from './components/shopBar';
export { default as ClStep } from './components/steps';

export { default as ClTabBar } from './components/tabBar';
export { default as ClTabs } from './components/tabs';
export { default as ClTag } from './components/tag';
export { default as ClText } from './components/text';
export { default as ClTitleBar } from './components/titleBar';
export { default as ClSwitch } from './components/switch';
export { default as ClRadio } from './components/radio';
export { default as ClCheckbox } from './components/checkbox';
export { default as ClUploader } from './components/uploader';
export { default as ClMenuList } from './components/menuList';
export { default as ClTimeline } from './components/timeline';
export { default as ClSwiper } from './components/swiper';
export { default as ClModal } from './components/modal';
export { default as ClDrawer } from './components/drawer';
export { default as ClCard } from './components/card'
export { default as Timer } from './components/timer/timer';

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} });
