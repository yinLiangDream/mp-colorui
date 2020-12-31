import Taro, { pxTransform } from "@tarojs/taro";
import { useState, useEffect } from "react";
import { ScrollView, View } from "@tarojs/components";
import { IProps } from "../../../@types/verticalTab";
import {
  screenPercent,
  generateId,
  getRectNumber,
  isAliPay,
  classNames
} from "../../lib";

import "./index.scss";

let scrollTimer: any = undefined;
export default function ClVerticalTab(props: IProps) {
  let scrollTab = false;
  let id = "";
  const [tabsState, setTabsState] = useState(props.tabs || []);
  const currentId = props.current ? props.current : props.tabs[0].id;
  const [current, setCurrent] = useState(currentId);
  const [verticalNavTop, setVerticalNavTop] = useState(
    tabsState.findIndex(item => item.name === props.tabs[0].name)
  );
  const [scrollId, setScrollId] = useState(currentId);
  const [scrollContent, setScrollContent] = useState(0);
  const [clickTab, setClickTab] = useState(false);
  useEffect(() => {
    const list = props.tabs || [];
    setTabsState(
      list.map((item: any) => {
        item.cu_vertical_tab_id = generateId();
        return item;
      })
    );
  }, [props.tabs]);
  const tabs: {
    name: string;
    id: string;
    top?: number;
    bottom?: number;
  }[] = tabsState || [];
  // const [scrollTimer, setScrollTimer] = useState(0);
  const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;
  const onScroll = e => {
    if (clickTab) return;
    let tabHeight = 0;
    for (let i = 0; i < tabs.length; i++) {
      const query = Taro.createSelectorQuery();
      const view = query.select("#" + tabs[i].id);
      view.boundingClientRect().exec(res => {
        const data = res[0];
        tabs[i].top = tabHeight;
        tabHeight = tabHeight + data.height;
        tabs[i].bottom = tabHeight;
      });
    }
    let scrollTop = e.detail.scrollTop + 20;
    isH5 && setScrollContent(e.detail.scrollTop);
    if (!scrollTab) {
      for (let i = 0; i < tabs.length; i++) {
        if (
          scrollTop > (tabs[i].top || 0) &&
          scrollTop < (tabs[i].bottom || 0)
        ) {
          // console.log(i)
          setVerticalNavTop(i);
          setCurrent(tabs[i].id);
          return false;
        }
      }
    }
  };
  const onH5Scroll = e => {
    if (clickTab) return;
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      onScroll(e);
      clearTimeout(scrollTimer);
    }, 300);
  };
  const tabsComponent = tabs.map((item: any) => (
    <View
      key={item.cu_vertical_tab_id}
      className={`cu-item ${current === item.id ? "cur" : ""}`}
      onClick={() => {
        id = item.id;
        scrollTab = true;
        changeTop(id);
        setCurrent(item.id);
        setVerticalNavTop(tabs.findIndex(tab => tab.name === item.name));
        setClickTab(true);
        !isH5 && setScrollId(item.id);
        setTimeout(() => {
          setClickTab(false);
        }, 800);
      }}
    >
      {item.name}
    </View>
  ));
  const changeTop = (id: any) => {
    const query = Taro.createSelectorQuery();
    const view = query.select("#" + id);
    const topView = query.select("#" + tabs[0].id);
    let top = 0;
    new Promise(resolve => {
      topView.boundingClientRect().exec(res => {
        const data = res[0];
        resolve(data.top);
      });
    }).then((res: number) => {
      top = res;
      new Promise(resolve => {
        view.boundingClientRect().exec(res => {
          const data = res[getRectNumber()];
          setTimeout(() => {
            const endTop = Math.abs(top - data.top);
            setScrollContent(endTop);
            scrollTab = false;
            resolve();
          }, 300);
        });
      });
    });
  };
  const weappComponent = (
    <ScrollView
      scrollY
      scrollWithAnimation
      scrollAnimationDuration={200}
      style={{
        height: props.height === "full" ? "100%" : pxTransform(props.height),
        maxHeight: "100vh",
        width: "100%"
      }}
      scrollIntoView={scrollId}
      onScroll={onScroll}
      scrollTop={isAliPay ? undefined : scrollContent}
      enableBackToTop={props.backTop}
    >
      {this.props.children}
    </ScrollView>
  );
  const h5Component = (
    <ScrollView
      scrollY
      scrollWithAnimation
      scrollAnimationDuration={200}
      style={{
        height: props.height === "full" ? "100%" : pxTransform(props.height),
        maxHeight: "100vh",
        width: "100%"
      }}
      onScroll={onH5Scroll}
      scrollTop={scrollContent}
      enableBackToTop={props.backTop}
    >
      {this.props.children}
    </ScrollView>
  );
  return (
    <View
      className={classNames("flex", props.className)}
      style={Object.assign({}, props.style)}
    >
      <ScrollView
        scrollY
        scrollWithAnimation
        className="VerticalNav nav"
        style={{
          height: props.height === "full" ? "100%" : pxTransform(props.height),
          maxHeight: "100vh"
        }}
        scrollTop={(verticalNavTop - 1) * screenPercent * 100}
        enableBackToTop={props.backTop}
      >
        {tabsComponent}
      </ScrollView>
      {isH5 ? h5Component : weappComponent}
    </View>
  );
}

ClVerticalTab.options = {
  addGlobalClass: true
};

ClVerticalTab.defaultProps = {
  tabs: [{ name: "", id: "" }],
  height: 0,
  current: "",
  backTop: false
} as IProps;
