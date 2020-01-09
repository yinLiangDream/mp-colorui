import { View, Text } from "@tarojs/components";
import Taro, { pxTransform, useMemo, useState } from "@tarojs/taro";
import { IProps } from "../../../../@types/checkbox";

export default function ClCheckboxH5(props: IProps) {
  const [list, setList] = useState(props.checkboxGroup || []);
  useMemo(() => {
    setList(props.checkboxGroup || []);
  }, [props.checkboxGroup]);
  const change = () => {
    const arr = list.filter(item => item.checked).map(item => item.value || "");
    props.onChange && props.onChange(arr);
  };

  const colorClassName = props.color || "green";
  const type = props.type === "form" ? "form" : "";
  const shapeClassName = props.shape === "round" ? "round" : "";
  const directionClassName = props.direction === "horizontal" ? "flex" : "";
  const title = props.title;
  const checkboxComponent = list.map(item => (
    <View className="padding-xs" key={item.value}>
      {item.key ? (
        <Text
          className="padding-right-sm"
          style={{
            lineHeight: `${pxTransform(46)}`,
            display: "inline-block",
            verticalAlign: "text-bottom"
          }}
        >
          {item.key}
        </Text>
      ) : (
        ""
      )}
      <View
        className={`h5-checkbox-input ${shapeClassName} ${
          item.checked ? "checked" : ""
        } ${item.disabled ? "disabled" : ""}`}
        onClick={() => {
          const checkItem = list && list.find(has => has.value === item.value);
          if (checkItem) checkItem.checked = !item.checked;
          setList(list);
          change();
        }}
      />
    </View>
  ));
  const formComponent = (
    <View className="cu-form-group">
      <View className="title">{title}</View>
      <View className={directionClassName}>{checkboxComponent}</View>
    </View>
  );
  return (
    <View className={`h5-checkbox ${colorClassName}`}>
      {type === "form" ? formComponent : checkboxComponent}
    </View>
  );
}

ClCheckboxH5.options = {
  addGlobalClass: true
};
ClCheckboxH5.defaultProps = {
  color: "green",
  type: "normal",
  shape: "normal",
  direction: "vertical",
  checkboxGroup: [],
  title: ""
} as IProps;
