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
import ClTextarea from "../../components/textarea";
import ClTree from "../../components/tree";

import PCAA from "area-data/pcaa";
import ClCalendar from "../../components/calendar";

import "./index.scss";

export default class Cl_Form extends Taro.Component {
  static config = {
    navigationBarTitleText: "Form 表单"
  };
  ref = null;
  refFunc = node => {
    this.ref = node;
  };
  handleSubmit() {
    this.ref.validate(success => {
      this.setState({
        message: `数据校验${success ? "通过" : "未通过"}`,
        messageType: success ? "success" : "error",
        showMessage: true
      });
    });
  }
  state = {
    model: {
      name: "我是名字",
      phone: "188",
      hobby: []
    },
    message: "",
    showMessage: false,
    messageType: "info"
  };
  render() {
    const rules = {
      name(rule, value, callback) {
        if (!rule.required(value)) {
          callback("姓名不能为空");
          return false;
        }
        if (value.length > 5) {
          callback("姓名长度不能超过 5");
          return false;
        }
        return true;
      },
      phone(rule, value, callback) {
        if (!rule.required(value)) {
          callback("手机号码不能为空");
          return false;
        }
        if (!rule.phone(value)) {
          callback("手机号码不正确");
          return false;
        }
        return true;
      },
      hobby(rule, value, callback) {
        if (value.length < 2) {
          callback("至少选择 2 项");
          return false;
        }
        return true;
      }
    };
    const { model, showMessage, message, messageType } = this.state;
    return (
      <ClLayout>
        <ClMessage
          message={message}
          show={showMessage}
          type={messageType}
          onClose={() => {
            this.setState({
              showMessage: false
            });
          }}
        />
        <ClTitleBar title="实时校验&&失焦校验" textColor="black" type="icon" />
        <ClCard>
          由于小程序的 view 没有失焦事件，目前组件库只能做到 model
          里面的数据更新就会进行校验，如果想做到失焦校验请手动在 Input
          组件下绑定 onBlur 事件，在此事件里面进行数据更新。 具体用法请看文档。
        </ClCard>
        <ClCard>
          <ClForm ref={this.refFunc} model={model} rules={rules}>
            <ClFormItem prop="name" required>
              <ClInput
                title="姓名（失焦）"
                value={model.name}
                onBlur={value => {
                  this.setState({
                    model: {
                      ...this.state.model,
                      name: value
                    }
                  });
                }}
              />
            </ClFormItem>
            <ClFormItem prop="phone" required>
              <ClInput
                title="手机号码（实时）"
                value={model.phone}
                onChange={value => {
                  this.setState({
                    model: {
                      ...this.state.model,
                      phone: value
                    }
                  });
                }}
              />
            </ClFormItem>
            <ClFormItem prop="hobby">
              <ClCheckbox
                type="form"
                shape="round"
                title="选择爱好"
                checkboxGroup={[
                  {
                    key: "下棋",
                    value: "xiaqi"
                  },
                  {
                    key: "画画",
                    value: "huahua"
                  },
                  {
                    key: "唱歌",
                    value: "singsong"
                  }
                ]}
                onChange={value => {
                  this.setState({
                    model: {
                      ...model,
                      hobby: value
                    }
                  });
                }}
              />
            </ClFormItem>
          </ClForm>
        </ClCard>
        <ClLayout padding="normal" paddingDirection="around">
          <ClButton
            text="校验"
            shape="round"
            long
            onClick={this.handleSubmit.bind(this)}
          />
        </ClLayout>
      </ClLayout>
    );
  }
}
