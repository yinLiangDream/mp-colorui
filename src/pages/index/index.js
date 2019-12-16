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
  const [showLoading, setLoading] = useState(true);
  return (
    <ClLayout>
      <ClTitleBar title="自动聚焦" textColor="black" type="icon" />
      <ClCard>
        <ClInput defaultValue="自动聚焦" autoFocus />
      </ClCard>

      <ClTitleBar title="清除" textColor="black" type="icon" />
      <ClCard>
        <ClInput defaultValue="清除按钮" clear />
      </ClCard>

      <ClTitleBar title="自动补全" textColor="black" type="icon" />
      <ClInput
        defaultValue="自动补全"
        style={{
          zIndex: 1
        }}
        autoComplete
        completes={["补全内容 1", "补全内容 2"]}
        completeLoading={showLoading}
        onChange={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
      />

      <ClTitleBar title="默认值" textColor="black" type="icon" />
      <ClCard>
        <ClInput defaultValue="我是预先输入的内容" />
      </ClCard>

      <ClTitleBar title="标题" textColor="black" type="icon" subTitle="title" />
      <ClCard>
        <ClInput title="姓名" placeholder="请输入姓名" />
        <ClInput title="年龄" placeholder="请输入年龄" type="number" />
      </ClCard>

      <ClTitleBar title="形式" textColor="black" type="icon" subTitle="title" />
      <ClCard>
        <ClInput title="标准形式" placeholder="请输入姓名" />
        <ClInput
          title="material 形式"
          placeholder="请输入年龄"
          type="number"
          pattern="material"
        />
      </ClCard>

      <ClTitleBar
        title="标题宽度"
        textColor="black"
        type="icon"
        subTitle="title"
      />
      <ClCard>
        <ClInput title="auto" placeholder="请输入姓名" />
        <ClInput
          title="200宽度"
          placeholder="请输入年龄"
          type="number"
          titleWidth={200}
        />
      </ClCard>

      <ClTitleBar
        title="占位符"
        textColor="black"
        type="icon"
        subTitle="placeholder"
      />
      <ClCard>
        <ClInput placeholder="我是提示内容" />
      </ClCard>

      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClCard>
        <ClInput placeholder="我可以输入任何文本" type="text" />
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入数字" type="number" />
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入密码" type="password" />
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入浮点数" type="digit" />
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入身份证" type="idcard" />
      </ClCard>

      <ClTitleBar title="长度" textColor="black" type="icon" subTitle="long" />
      <ClCard>
        <ClInput
          placeholder="我只能输入 10 个字符"
          type="text"
          maxLength={10}
        />
      </ClCard>

      <ClTitleBar
        title="禁止输入"
        textColor="black"
        type="icon"
        subTitle="disabled"
      />
      <ClCard>
        <ClInput placeholder="我禁止输入" type="text" disabled />
      </ClCard>

      <ClTitleBar
        title="自动上推"
        textColor="black"
        type="icon"
        subTitle="adjustPosition"
      />
      <ClCard>
        <ClInput placeholder="我自动上推" type="text" adjustPosition />
      </ClCard>

      <ClTitleBar
        title="后置内容"
        textColor="black"
        type="icon"
        subTitle="more"
      />
      <ClCard>
        <ClInput
          placeholder="我有图标"
          type="text"
          adjustPosition
          icon={{ iconName: "emoji" }}
          onIconClick={() => {
            Taro.showToast({
              title: "您点击了图标",
              icon: "none"
            });
          }}
        />
      </ClCard>
      <ClCard>
        <ClInput
          onImageClick={() => {
            Taro.showToast({
              title: "您点击了图片",
              icon: "none"
            });
          }}
          placeholder="我有图片"
          type="text"
          adjustPosition
          image="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/330.jpg"
        />
      </ClCard>
      <ClCard>
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
      </ClCard>
    </ClLayout>
  );
}
