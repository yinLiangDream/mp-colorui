import Taro, { pxTransform, useState } from '@tarojs/taro'
import { ScrollView, View } from "@tarojs/components";
import { IProps } from '../../../@types/verticalTab'
import { screenPercent } from '../utils'

import './index.scss'

let scrollTimer: any = undefined;
export default function ClVerticalTab(props: IProps) {
  let scrollTab = false;
  let id = '';
  const currentId = props.current ? props.current : props.tabs[0].id;
  const tabs: {
    name: string;
    id: string;
    top?: number;
    bottom?: number;
  }[] = props.tabs || [];
  const [current, setCurrent] = useState(currentId);
  const [verticalNavTop, setVerticalNavTop] = useState(tabs.findIndex(item => item.name === props.tabs[0].name));
  const [scrollId, setScrollId] = useState(currentId);
  const [scrollContent, setScrollContent] = useState(0);
  const [clickTab, setClickTab] = useState(false);
  // const [scrollTimer, setScrollTimer] = useState(0);
  const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB
  const onScroll = (e) => {
    if (clickTab) return
    let tabHeight = 0;
    for (let i = 0; i < tabs.length; i++) {
      const query = Taro.createSelectorQuery()
      const view = query.select('#' + tabs[i].id);
      view.fields({
        size: true
      }, (data: any) => {
        tabs[i].top = tabHeight;
        tabHeight = tabHeight + data.height;
        tabs[i].bottom = tabHeight;
      }).exec();
    }
    let scrollTop = e.detail.scrollTop + 20;
    isH5 && setScrollContent(e.detail.scrollTop)
    if (!scrollTab) {
      for (let i = 0; i < tabs.length; i++) {
        if (scrollTop > (tabs[i].top || 0) && scrollTop < (tabs[i].bottom || 0)) {
          // console.log(i)
          setVerticalNavTop(i);
          setCurrent(tabs[i].id);
          return false
        }
      }
    }
  }
  const onH5Scroll = (e) => {
    if (clickTab) return
    if (scrollTimer) clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      onScroll(e)
      clearTimeout(scrollTimer)
    }, 300)
  }
  const tabsComponent = tabs.map((item, index) => (
    <View key={index} className={`cu-item ${current === item.id ? 'cur' : ''}`} onClick={() => {
      id = item.id;
      scrollTab = true;
      changeTop(id);
      setCurrent(item.id);
      setVerticalNavTop(tabs.findIndex(tab => tab.name === item.name));
      Taro.ENV_TYPE.WEB !== Taro.getEnv() && setScrollId(item.id);
      setClickTab(true);
      setTimeout(() => {
        setClickTab(false);
      }, 500)
    }}
    >{item.name}</View>
  ));
  const changeTop = async (id) => {
    const query = Taro.createSelectorQuery()
    const view = query.select('#' + id);
    const topView = query.select('#' + tabs[0].id);
    let top = 0;
    top = await new Promise(resolve => {
      topView.fields({
        rect: true
      }, (data: any) => {
        console.log('1', data)
        resolve(data.top)
        // top = data.top;
      }).exec()
    })
    await new Promise(resolve => {
      view.fields({
        rect: true
      }, (data: any) => {
        setTimeout(() => {
          console.log('2', data)
          const endTop = Math.abs(top - data.top);
          setScrollContent(endTop);
          scrollTab = false;
          resolve()
        }, 300)
      }).exec();
    })
  };
  const weappComponent = (
    <ScrollView scrollY scrollWithAnimation style={{ height: pxTransform(props.height) }} scrollIntoView={scrollId}
      onScroll={onScroll} scrollTop={scrollContent} enableBackToTop={props.backTop}>
      {this.props.children}
    </ScrollView>
  )
  const h5Component = (
    <ScrollView scrollY scrollWithAnimation style={{ height: pxTransform(props.height) }}
      onScroll={onH5Scroll} scrollTop={scrollContent} enableBackToTop={props.backTop}>
      {this.props.children}
    </ScrollView>
  )
  return (
    <View className='flex'>
      <ScrollView scrollY scrollWithAnimation className='VerticalNav nav' style={{ height: pxTransform(props.height) }}
        scrollTop={(verticalNavTop - 1) * screenPercent * 100} enableBackToTop={props.backTop}>
        {tabsComponent}
      </ScrollView>
      {isH5 ? h5Component : weappComponent}
    </View>

  )
}

ClVerticalTab.options = {
  addGlobalClass: true
}

ClVerticalTab.defaultProps = {
  tabs: [{ name: '', id: '' }],
  height: 0,
  current: '',
  backTop: false
} as IProps
