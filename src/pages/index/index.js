import Taro, { useState, useEffect, pxTransform } from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem, Video } from "@tarojs/components";
import ClLayout from "../../components/layout";
import ClAccordion from "../../components/accordion";
import ClCard from "../../components/card";
import ClText from "../../components/text";
import ClTitleBar from "../../components/titleBar";
import ClFlex from "../../components/flex";
import ClButton from "../../components/button";
import ClTip from "../../components/tip";
import ClIcon from "../../components/icon";
import ClForm from "../../components/form";
import ClFormItem from "../../components/form/formItem";
import ClInput from "../../components/input";
import ClCheckbox from "../../components/checkbox";
import ClVerticalTabCell from "../../components/verticalTab/verticalTabCell";
import ClVerticalTab from "../../components/verticalTab";
import ClImagePicker from "../../components/imagePicker";
import ClSearchBar from "../../components/searchBar";
import ClRadio from "../../components/radio";
// import { provinceArr, getAreaData } from "../../components/utils/area";
import ClMenuList from "../../components/menuList";
import ClSwiperAction from "../../components/swiperAction/index";
import ClActionSheet from "../../components/actionSheet/index";
import ClCurtain from "../../components/curtain/index";
import ClTabs from "../../components/tabs";
import ClSelect from "../../components/select/index";
import ClNoticeBar from "../../components/noticebar/index";
import ClAvatar from "../../components/avatar";
import ClShopBar from "../../components/shopBar";
import ClSwiper from "../../components/swiper";

import PCAA from "area-data/pcaa";
import ClCalendar from "../../components/calendar";

export default function Index() {
  const [value, setValue] = useState([
    {
      key: "210000",
      value: "辽宁省"
    },
    {
      key: "210400",
      value: "抚顺市"
    },
    {
      key: "210423",
      value: "清原满族自治县"
    }
  ]);
  return (
    <ClLayout>
      <ClSelect
        mode="region"
        title="选择地点"
        region={{
          value
        }}
      />
      <ClInput
        placeholder="我有按钮"
        type="text"
        adjustPosition
        button={{
          text: "按钮",
          bgColor: "light-blue",
          onClick() {
            Taro.showToast({
              title: "您点击了按钮",
              icon: "none"
            });
          }
        }}
      />
      <ClButton
        onClick={() => {
          setValue([
            {
              key: "210000",
              value: "辽宁省"
            },
            {
              key: "210400",
              value: "抚顺市"
            },
            {
              key: "210421",
              value: "抚顺县"
            }
          ]);
        }}
      >
        11
      </ClButton>
    </ClLayout>
  );
}
