import { Checkbox, CheckboxGroup, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { IProps } from "../../../@types/checkbox";
import ClCheckboxH5 from "./h5";
import { classNames, isWeApp } from "../utils";

export default function ClCheckbox(props: IProps) {
  const colorClassName = props.color || "green";
  const type = props.type === "form" ? "form" : "";
  const shapeClassName = props.shape === "round" ? "round" : "";
  const directionClassName = props.direction === "horizontal" ? "flex" : "";
  const list = props.checkboxGroup ? props.checkboxGroup : [];
  const title = props.title;
  const checkboxComponent = list.map(item => (
    <View className="padding-xs" key={item.value}>
      {item.key ? <Text className="padding-right-sm">{item.key}</Text> : ""}
      <Checkbox
        className={`${colorClassName} ${shapeClassName} ${
          props.more ? "more" : ""
        }`}
        value={item.value || ""}
        checked={item.checked}
        disabled={item.disabled}
      />
    </View>
  ));
  const formComponent = (
    <View className="cu-form-group">
      <View className="title">{title}</View>
      <View className={directionClassName}>{checkboxComponent}</View>
    </View>
  );
  const change = e => {
    props.onChange && props.onChange(e.detail.value);
  };
  const component = !isWeApp ? (
    <ClCheckboxH5 {...props} />
  ) : (
    <CheckboxGroup
      className={`${type === "form" ? "block" : ""}`}
      onChange={change}
    >
      {type === "form" ? (
        formComponent
      ) : (
        <View className={directionClassName}>{checkboxComponent}</View>
      )}
    </CheckboxGroup>
  );
  return (
    <View
      className={classNames(props.className)}
      style={Object.assign({}, props.style)}
    >
      {component}
    </View>
  );
}

ClCheckbox.options = {
  addGlobalClass: true
};
