import Taro, { pxTransform, useEffect, useState } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { IProps } from "../../../@types/accordion";
import ClIcon from "../icon";
import { screenPercent } from "../utils";
import classNames from "classnames";

export default function ClAccordion(props: IProps) {
  const { open, title, animation, onClick, card } = props;
  const [show, setShow] = useState(open);
  const [height, setHeight] = useState(0);
  const id = `cl-accordion-content-${+new Date()}`;
  useEffect(() => {
    if (show) {
      const query = Taro.createSelectorQuery().in(this.$scope);
      const view = query.select(`#${id}`);
      view.boundingClientRect().exec(res => {
        const data = res[0];
        setHeight(data.height);
      });
    } else {
      setHeight(0);
    }
  }, [show]);
  return (
    <View
      className={classNames(
        "cu-list menu",
        {
          "card-menu": card
        },
        props.className
      )}
      style={Object.assign(
        {
          overflow: "hidden",
          height: pxTransform(98 + height / screenPercent),
          transition: `all ${animation ? `${props.speed}s` : 0} linear`,
          color: "black"
        },
        props.style
      )}
    >
      <View
        className={`cu-item`}
        onClick={() => {
          onClick && onClick(!show);
          setShow(!show);
        }}
      >
        <View
          className="flex justify-between align-center"
          style={{ width: "100%" }}
        >
          <View>{title}</View>
          <View
            style={{
              transition: `all ${props.speed}s linear`,
              transform: `rotate(${show ? "90deg" : "0"})`
            }}
          >
            <ClIcon iconName={"right"} size={"small"} />
          </View>
        </View>
      </View>
      <View id={id} className="bg-white">
        {this.props.children}
      </View>
    </View>
  );
}

ClAccordion.options = {
  addGlobalClass: true
};

ClAccordion.defaultProps = {
  open: false,
  title: "",
  animation: true,
  onClick: () => {},
  card: false,
  speed: 0.15
} as IProps;
