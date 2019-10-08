import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { IProps } from "../../../@types/divider";
import { TEXT_COLOR_LIST, SIZE } from "../utils/model";
import ClLayout from "../layout";
import { classNames } from "@/components/utils";

export default function ClDivider(props: IProps) {
  const { color, size } = props;
  const colorClassName = TEXT_COLOR_LIST[color || "grey"];
  const sizeClassName = `text-${SIZE[size || "normal"]}`;
  return (
    <View
      className={classNames(props.className)}
      style={Object.assign({}, props.style)}
    >
      <ClLayout padding="normal" paddingDirection="vertical">
        <View className={`${colorClassName} ${sizeClassName} cu-divider`}>
          {this.props.children}
        </View>
      </ClLayout>
    </View>
  );
}

ClDivider.options = {
  addGlobalClass: true
};
ClDivider.defaultProps = {
  color: "grey",
  size: "normal"
} as IProps;
