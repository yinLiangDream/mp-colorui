import { Radio, RadioGroup, Text, View } from "@tarojs/components";
import React, { useState, useEffect } from "react";
import H5Radio from "./h5";
import ListRadio from "./components/ListRadio";
import { IProps } from "../../../@types/radio";
import { classNames, isWeApp } from "../../lib";

export default function ClRadio(props: IProps) {
  const type = props.type || "normal";
  const shapeClassName = () => props.shape || "normal";
  const title = props.title || "";
  const colorClassName = () => props.color || "green";
  const directionClassName = props.direction === "horizontal" ? "flex" : "";
  const list = props.radioGroup || [];

  const [checkedValue, setCheckedValue] = useState(props.checkedValue);

  useEffect(() => {
    setCheckedValue(checkedValue);
  }, [props.checkedValue]);

  const changeRadio = e => {
    props.onChange && props.onChange(e.detail.value);
  };
  const radioComponent = list.map(item => (
    <View
      className="padding-xs"
      key={"radio-" + item.value}
      onClick={() => {
        !props.disabled && setCheckedValue(item.value);
      }}
    >
      <Text className="padding-right-sm">{item.key}</Text>
      <Radio
        className={`${colorClassName()} ${shapeClassName()}`}
        checked={item.value === checkedValue}
        value={item.value || ""}
        disabled={props.disabled}
      />
    </View>
  ));
  const formRadioComponent = (
    <View className="cu-form-group">
      <View className="title">{title}</View>
      <View className={directionClassName}>{radioComponent}</View>
    </View>
  );

  const renderListComponent = () => (
    <ListRadio
      onChange={value => {
        changeRadio({ detail: { value } });
      }}
      list={list}
      checkedValue={props.checkedValue}
      disabled={props.disabled}
    />
  );

  const formOrNormalComponent = (
    <RadioGroup
      onChange={changeRadio}
      className={`${type === "form" ? "block" : ""}`}
    >
      {type === "form" ? (
        formRadioComponent
      ) : (
        <View className={directionClassName}>{radioComponent}</View>
      )}
    </RadioGroup>
  );

  const weappComponent =
    type === "list" ? renderListComponent() : formOrNormalComponent;

  const RadioComponent = !isWeApp ? <H5Radio {...props} /> : weappComponent;

  return (
    <View
      className={classNames(props.className)}
      style={Object.assign({}, props.style)}
    >
      {RadioComponent}
    </View>
  );
}

ClRadio.defaultProps = {
  type: "normal",
  shape: "normal",
  title: "",
  colorClassName: "green",
  directionClassName: "",
  radioGroup: []
} as IProps;

ClRadio.options = {
  addGlobalClass: true
};
