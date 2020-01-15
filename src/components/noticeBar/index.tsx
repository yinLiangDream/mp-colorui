import Taro, { pxTransform, useEffect, useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { IProps } from "../../../@types/noticeBar";
import ClText from "../text";
import ClIcon from "../icon/index";
import ClFlex from "../flex";
import { BG_COLOR_LIST } from "../../lib/model";
import { generateId, isH5, screenPercent } from "../../lib";
import classnames from "classnames";
import ClLayout from "../layout";
import "../text/index.scss";

import "./index.scss";

export default function ClNoticeBar(props: IProps) {
  const {
    text,
    bgColor,
    single,
    marquee,
    speed,
    showMore,
    moreText,
    icon,
    close,
    onClose,
    onMore
  } = props;
  const [singleContentWidth, setSingleContentWidth] = useState("100%");
  const [contentWidth, setContentWidth] = useState(0);
  const [marqueeSpeed, setMarqueeSpeed] = useState(speed);
  const [textId] = useState(generateId());
  const [contentId] = useState(generateId());
  const [marqueeClass, setMarqueeClass] = useState(single && marquee);
  const [show, setShow] = useState(true);
  const cut = single && !marquee;

  useEffect(() => {
    setMarqueeClass(single && marquee);
    if (single) {
      let width = 180;
      if (!showMore) width = 50;
      if (close) width += 50;
      setSingleContentWidth(`calc(100vw - ${pxTransform(width)})`);
    }
    const query = Taro.createSelectorQuery().in(this.$scope);
    const promise = new Promise(resolve => {
      query
        .select(isH5 ? contentId : "#contentId")
        .boundingClientRect(content => {
          resolve(content);
        })
        .exec();
    });
    promise.then((content: any) => {
      query
        .select(isH5 ? textId : "#textId")
        .boundingClientRect((res: any) => {
          if (res.width < content.width) {
            setMarqueeClass(false);
            setMarqueeSpeed(0);
            return;
          }
          setContentWidth(-res.width);
          function beginInterval(time) {
            let timer;
            timer = setInterval(() => {
              setContentWidth(res.width);
              setMarqueeSpeed(0);
              clearInterval(timer);
              let timeout;
              timeout = setTimeout(() => {
                setContentWidth(-res.width);
                const percentSpeed = res.width / (speed as number);
                const speedNow =
                  (speed as number) + content.width / percentSpeed;
                setMarqueeSpeed(speedNow);
                beginInterval(speedNow);
                clearTimeout(timeout);
              }, 50);
            }, (time as number) * 1000);
          }
          beginInterval(marqueeSpeed);
        })
        .exec();
    });
  }, [props.showMore, props.single, props.speed]);

  const showMoreComponent = showMore ? (
    <View
      style={{
        flex: "0 0 auto",
        zIndex: 1,
        paddingRight: pxTransform(10),
        paddingLeft: pxTransform(10)
      }}
      onClick={() => {
        onMore && onMore();
      }}
    >
      <ClFlex align={"center"}>
        <ClText text={moreText} textColor={"gray"} size={"small"} />
        <ClIcon iconName={"right"} color={"gray"} size={24} />
      </ClFlex>
    </View>
  ) : (
    ""
  );
  const showCloseComponent = close ? (
    <View
      onClick={() => {
        setShow(false);
        onClose && onClose();
      }}
    >
      <ClIcon iconName={"close"} size={24} color={"gray"} />
    </View>
  ) : (
    ""
  );
  return (
    <View
      className={classnames(
        "cu-notice",
        `${BG_COLOR_LIST[bgColor || "yellow"]}`
      )}
    >
      {show ? (
        <ClFlex
          align={"center"}
          justify={"between"}
          style={{ minHeight: pxTransform(40) }}
        >
          <ClLayout
            margin="xsmall"
            marginDirection="right"
            style={{ zIndex: 10, flex: "0 0 auto" }}
          >
            <View>
              <ClLayout padding="xsmall" paddingDirection="horizontal">
                <ClFlex>
                  {showCloseComponent}
                  <ClIcon iconName={icon || "notificationfill"} size={24} />
                </ClFlex>
              </ClLayout>
            </View>
          </ClLayout>
          <View
            id={isH5 ? contentId : "contentId"}
            style={{
              flex: "1 1 auto",
              overflow: "hidden",
              minHeight: pxTransform(40)
            }}
          >
            <View
              className={classnames([
                "text-sm",
                {
                  "text-cut": cut
                }
              ])}
              style={{
                lineHeight: pxTransform(42),
                transition: `all ${marqueeClass ? marqueeSpeed : 0}s linear`,
                transform: `translateX(${
                  marqueeClass ? pxTransform(contentWidth / screenPercent) : 0
                })`,
                whiteSpace: "nowrap",
                width: singleContentWidth
              }}
            >
              <Text
                id={isH5 ? textId : "textId"}
                className={classnames([
                  {
                    "cl-text__nowrap": single,
                    "cl-text__wrap": !single
                  }
                ])}
              >
                {text}
              </Text>
            </View>
          </View>
          {showMoreComponent}
        </ClFlex>
      ) : (
        ""
      )}
    </View>
  );
}

ClNoticeBar.options = {
  addGlobalClass: true
};

ClNoticeBar.defaultProps = {
  text: "",
  bgColor: "light-yellow",
  single: false,
  marquee: false,
  speed: 5,
  showMore: false,
  moreText: "查看详情",
  icon: "notificationfill",
  close: false,
  onClose: () => {},
  onMore: () => {}
} as IProps;
