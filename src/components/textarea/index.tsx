import Taro, { useState, useEffect, pxTransform } from "@tarojs/taro";
import { Textarea, View } from "@tarojs/components";
import { IProps } from "../../../@types/textarea";
import ClFlex from "../../components/flex";
import ClText from "../../components/text";
import ClLayout from "../../components/layout";
import { classNames } from "../../components/utils";

import "./index.scss";
import { BG_COLOR_LIST } from "@/components/utils/model";

export default function ClTextarea(props: IProps) {
  const {
    value,
    autoFocus,
    focus,
    placeholder,
    maxLength,
    disabled,
    showConfirmBar,
    showLengthTip,
    bgColor,
    shadow,
    height,
    overMaxForbidden,
    onChange,
    onFocus,
    onBlur,
    onConfirm,
    onLineChange
  } = props;
  const [tempValue, setTempValue] = useState("");
  const tip = (
    <View className={"tip"}>
      <ClLayout padding={"small"} paddingDirection={"right"}>
        <ClFlex>
          <ClText
            text={`${tempValue.length}`}
            size={"small"}
            textColor={
              maxLength && !overMaxForbidden && maxLength < tempValue.length
                ? "red"
                : undefined
            }
          />
          <View>
            <ClText
              text={`/${maxLength}`}
              size={"small"}
              textColor={
                maxLength && !overMaxForbidden && maxLength < tempValue.length
                  ? "red"
                  : undefined
              }
            />
          </View>
        </ClFlex>
      </ClLayout>
    </View>
  );
  useEffect(() => {
    setTempValue(value || "");
  }, [value]);
  return (
    <View className={classNames(["cu-textarea"])}>
      <View
        style={{
          position: "relative",
          width: "100%",
          borderRadius: pxTransform(12)
        }}
        className={classNames([
          { shadow },
          BG_COLOR_LIST[bgColor || "white"],
          "solid"
        ])}
      >
        <Textarea
          style={{
            height: `${height ? pxTransform(height) : pxTransform(300)}`,
            padding: `${pxTransform(10)} ${pxTransform(14)} ${pxTransform(40)}`,
            width: "100%",
            border: "none"
          }}
          className={classNames([BG_COLOR_LIST[bgColor || "white"]])}
          value={value || ""}
          autoFocus={autoFocus}
          focus={focus}
          placeholder={placeholder}
          maxlength={overMaxForbidden ? maxLength : undefined}
          disabled={disabled}
          showConfirmBar={showConfirmBar}
          onLineChange={e => {
            onLineChange && onLineChange(e.detail);
          }}
          onConfirm={e => {
            onConfirm && onConfirm(e.detail.value);
          }}
          onInput={e => {
            setTempValue(e.detail.value);
            onChange && onChange(e.detail.value);
          }}
          onFocus={e => {
            onFocus && onFocus(e.detail.value);
          }}
          onBlur={e => {
            onBlur && onBlur(e.detail.value);
          }}
        />
        {showLengthTip ? tip : ""}
      </View>
    </View>
  );
}

ClTextarea.options = {
  addGlobalClass: true
};
ClTextarea.defaultProps = {
  value: "",
  autoFocus: false,
  focus: false,
  placeholder: "",
  maxLength: 0,
  disabled: false,
  showConfirmBar: false,
  showLengthTip: false,
  height: 0,
  overMaxForbidden: false,
  bgColor: "white",
  shadow: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onConfirm: () => {},
  onLineChange: () => {}
} as IProps;
