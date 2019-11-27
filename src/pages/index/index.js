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

let timer;

export default function Index() {
  const provinceArr = Object.entries(PCAA["86"]);
  const getAreaData = (province, city) => {
    let tempProvice = province;
    if (!province)
      tempProvice = {
        key: provinceArr[0][0],
        value: provinceArr[0][1]
      };
    const cityArr = Object.entries(PCAA[tempProvice.key]);
    const districtArr = Object.entries(PCAA[city ? city.key : cityArr[0][0]]);
    return {
      province: provinceArr,
      city: cityArr,
      district: districtArr
    };
  };

  const [result, setResult] = useState(
    provinceArr.map(item => ({
      title: `${item[1]}(${item[0]})`,
      desc: getAreaData({
        key: item[0],
        value: item[1]
      }).district.join("|")
    }))
  );
  const [filterResult, setFilterResult] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  const onSearch = value => {
    Taro.showToast({
      title: `您要搜索${value}`,
      icon: "none"
    });
  };

  return (
    <ClLayout>
      <ClTitleBar title="搜索结果&异步 loading" textColor="black" type="icon" />
      <ClSearchBar
        shape="radius"
        bgColor="gradualBlue"
        showLoading={showLoading}
        placeholder="请输入省份或编码"
        searchType="none"
        onTouchResult={index => {
          Taro.showToast({
            title: `您点击了${filterResult[index].title}省`,
            icon: "none"
          });
        }}
        onInput={value => {
          setShowLoading(true);
          if (timer) clearTimeout(timer);
          if (value === "") {
            clearTimeout(timer);
            setTimeout(() => {
              setShowLoading(false);
              setFilterResult([]);
            });
            return;
          }
          timer = setTimeout(() => {
            setShowLoading(false);
            setFilterResult(
              result.filter(
                item => item.title.includes(value) || item.desc.includes(value)
              )
            );
          }, 1000);
        }}
        showResult
        result={filterResult}
      />
      <ClTitleBar
        title="形状&背景色"
        textColor="black"
        type="icon"
        subTitle="shape&bgColor"
        subTitleColor="shadow"
      />
      <ClCard>
        <ClSearchBar
          shape="radius"
          bgColor="grey"
          onSearch={value => {
            onSearch(value);
          }}
        />
      </ClCard>
      <ClCard>
        <ClSearchBar
          shape="round"
          bgColor="light-blue"
          onSearch={value => {
            onSearch(value);
          }}
        />
      </ClCard>

      <ClTitleBar
        title="占位符"
        textColor="black"
        type="icon"
        subTitle="placeholder"
        subTitleColor="shadow"
      />
      <ClCard>
        <ClSearchBar
          shape="round"
          placeholder="请输入你想输入的内容"
          onSearch={value => {
            onSearch(value);
          }}
        />
      </ClCard>

      <ClTitleBar
        title="功能组&按钮颜色"
        textColor="black"
        type="icon"
        subTitle="leftIcons&rightButtonColor"
        subTitleColor="shadow"
      />
      <ClCard>
        <ClSearchBar
          shape="round"
          rightButtonColor="black"
          rightTextColor="white"
          placeholder="请输入你想输入的内容"
          leftIcons={["emoji"]}
          onIconClick={index => {
            Taro.showToast({
              title: `您点击了第${index + 1}个图标`,
              icon: "none"
            });
          }}
          onSearch={value => {
            onSearch(value);
          }}
        />
      </ClCard>
    </ClLayout>
  );
}
