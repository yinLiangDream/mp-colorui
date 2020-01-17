import { View } from "@tarojs/components";
import Taro, { pxTransform } from "@tarojs/taro";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../../lib/model";
import { IProps } from "../../../@types/timeline";
import ClFlex from "../flex";
import { classNames, generateId } from "../../lib";

export default function ClTimeline(props: IProps) {
  const times = props.times || [];
  const iconColorClassName = color => (color ? TEXT_COLOR_LIST[color] : "");
  const iconClassName = icon => (icon ? `cuIcon-${icon}` : "");
  const bgColorClassName = color => (color ? BG_COLOR_LIST[color] : "");
  const onClick = (index: number) => {
    props.onClick && props.onClick(index);
  };
  const items = times.map((item, index) =>
    item.node ? (
      <View
        className="cu-time"
        key={generateId()}
        onClick={() => {
          onClick(index);
        }}
      >
        {item.node}
      </View>
    ) : (
      <View
        className={`cu-item ${iconColorClassName(
          item.iconColor
        )} ${iconClassName(item.icon)}`}
        key={generateId()}
        onClick={() => {
          onClick(index);
        }}
      >
        <View className={`${bgColorClassName(item.bgColor)} content`}>
          <ClFlex justify="between" align="end">
            <View style={{ fontSize: pxTransform(36) }}>{item.title}</View>
            <View>{item.time}</View>
          </ClFlex>
          {item.content
            ? item.content.map((desc, index) => (
                <View key={"key-" + index}>{desc}</View>
              ))
            : ""}
        </View>
      </View>
    )
  );
  return (
    <View
      className={classNames("cu-timeline", props.className)}
      style={Object.assign({}, props.style)}
    >
      {items}
    </View>
  );
}

ClTimeline.options = {
  addGlobalClass: true
};

ClTimeline.defaultProps = {
  times: [],
  onClick: () => {}
} as IProps;
