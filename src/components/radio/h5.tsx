import Taro, { useEffect, useState } from "@tarojs/taro";
import { Text, View } from "@tarojs/components";

import { IProps } from "../../../@types/radio";
import ListRadio from "./components/ListRadio";
import { classNames } from "../../lib";

export default function RadioH5(props: IProps) {
  const type = props.type || "normal";
  const shapeClassName = props.shape || "normal";
  const title = props.title || "";
  const colorClassName = props.color || "green";
  const directionClassName = props.direction === "horizontal" ? "flex" : "";
  const list = props.radioGroup || [];
  const [activeValue, setActiveValue] = useState(props.checkedValue);

  const clickRadio = (name, index) => {
    setActiveValue(name);
  };

  useEffect(() => {
    props.onChange && props.onChange(activeValue);
  }, [activeValue]);

  const radioComponent = list.map((item, index) => (
    <View className="padding-xs" key={item.value}>
      <Text className="padding-right-sm">{item.key}</Text>
      <View
        onClick={() => {
          if (!props.disabled) {
            clickRadio(item.value, index);
          }
        }}
        className={classNames([
          "h5-radio",
          colorClassName,
          shapeClassName,
          {
            checked: activeValue === item.value,
            disabled: props.disabled
          }
        ])}
      >
        <View className="h5-radio-wrapper">
          <View className="h5-radio-input h5-radio-input-checked" />
        </View>
      </View>
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
        setActiveValue(value);
      }}
      list={list}
      checkedValue={activeValue}
      disabled={props.disabled}
    />
  );

  const formOrNormalComponent = (
    <View className="h5-radio-group">
      {type === "form" ? (
        formRadioComponent
      ) : (
        <View className={directionClassName}>{radioComponent}</View>
      )}
    </View>
  );

  const weappComponent =
    type === "list" ? renderListComponent() : formOrNormalComponent;

  return <View>{weappComponent}</View>;
}

RadioH5.defaultProps = {
  type: "normal",
  shape: "normal",
  title: "",
  colorClassName: "green",
  directionClassName: "",
  radioGroup: []
} as IProps;

RadioH5.options = {
  addGlobalClass: true
};
