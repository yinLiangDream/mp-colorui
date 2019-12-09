import Taro, { useState, useEffect, pxTransform } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
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
  return (
    <ClLayout>
      <ClCalendar
        showType="full"
        tipDay={[
          {
            date: "2019-12-05",
            tipTop: "圣诞",
            tipBottom: "可预约",
            tipTopColor: "blue",
            tipBottomColor: "red"
          }
        ]}
        badge={[
          {
            date: "2019-12-05",
            color: "yellow",
            num: 12
          }
        ]}
        disabledDay={[[, "2019-12-06"]]}
        specialDay={["2019-12-06"]}
      />

      <ClCalendar
        showType="card"
        calendarType="week"
        tipDay={[
          {
            date: "2019-12-05",
            tipTop: "圣诞",
            tipBottom: "可预约",
            tipTopColor: "blue",
            tipBottomColor: "red"
          }
        ]}
        badge={[
          {
            date: "2019-12-05",
            color: "yellow",
            num: 12
          }
        ]}
        disabledDay={[[, "2019-12-06"]]}
        specialDay={["2019-12-06"]}
      />
    </ClLayout>
  );
}
