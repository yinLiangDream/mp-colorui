import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import ClIcon from "../icon/index";
import { TEXT_COLOR_LIST } from "../utils/model";
import { IProps } from "../../../@types/menuList";
import { classNames } from "../../components/utils";

export default function ClMenuList(props: IProps) {
  const shortLineClassName = props.shortBorder ? "sm-border" : "";
  const arrowClassName = (arrow: boolean) => (arrow ? "arrow" : "");
  const cardClassName = props.card ? "card-menu" : "";
  const list = props.list || [];

  const click = (index: number) => {
    props.onClick && props.onClick(index);
  };
  const itemComponent = list.map((item, index) => (
    <View
      key={item.title}
      className={`cu-item ${arrowClassName(!!item.arrow)} ${
        item.disabled ? "disabled" : ""
      }`}
      onClick={() => {
        !item.disabled && click(index);
      }}
    >
      <View className="content flex align-center">
        {item.icon && item.icon.iconName ? (
          <View className="margin-right-xs flex align-center">
            <ClIcon {...item.icon} />
          </View>
        ) : (
          ""
        )}
        {item.imgUrl ? (
          <Image
            src={item.imgUrl}
            className="png margin-right-xs"
            mode="aspectFit"
          />
        ) : (
          ""
        )}
        <Text className={`${TEXT_COLOR_LIST[item.titleColor || "black"]}`}>
          {item.title}
        </Text>
      </View>
    </View>
  ));
  return (
    <View
      className={classNames(
        `cu-list menu ${shortLineClassName} ${cardClassName}`,
        props.className
      )}
      style={Object.assign({}, props.style)}
    >
      {itemComponent}
    </View>
  );
}

ClMenuList.defaultProps = {
  shortBorder: false,
  card: false,
  list: []
} as IProps;

ClMenuList.options = {
  addGlobalClass: true
};
