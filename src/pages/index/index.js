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
import { provinceArr, getAreaData } from "../../components/utils/area";
import ClMenuList from "../../components/menuList";
import ClSwiperAction from "../../components/swiperAction/index";
import ClActionSheet from "../../components/actionSheet/index";
import ClCurtain from "../../components/curtain/index";
import ClTabs from "../../components/tabs";
import ClSelect from "../../components/select/index";
import ClNoticeBar from "../../components/noticebar/index";
import ClAvatar from "../../components/avatar";
import ClShopBar from "../../components/shopBar";

export default function Index() {
  const [showLoading, setLoading] = useState(true);
  return (
    <View>
      <ClInput
        defaultValue="自动补全"
        style={{
          zIndex: 1
        }}
        autoComplete
        completes={["补全内容 1", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2", "补全内容 2"]}
        completeLoading={showLoading}
        clear
        onChange={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
      />
    </View>
  );
}
