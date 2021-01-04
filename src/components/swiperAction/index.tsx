import Taro, { pxTransform } from "@tarojs/taro";
import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { IProps } from "../../../@types/swiperAction";

import "./index.scss";
import { BG_COLOR_LIST } from "../../lib/model";
import { classNames, generateId, isH5, screenPercent } from "../../lib";
import ClLayout from "../layout";

export default function ClSwiperAction(props: IProps) {
  const [initOptions, setInitOptions] = useState(props.options || []);
  const [contentId, setContentId] = useState(generateId());
  const [actionWidth, setActionWidth] = useState<number>(0);
  const [lastPoint, setLastPoint] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [lastTranslateX, setLastTranslateX] = useState(0);
  const [showAnimation, setShowAnimation] = useState(0);
  const [beforeMove, setBeforeMove] = useState(0);
  const [show, setShow] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(() => {
    const list = props.options || [];
    const newOprions = list.map((item: any) => {
      item.cu_index_id = generateId();
      return item;
    });
    setInitOptions(newOprions);

    if (isH5) {
      const query: Element | null = document.querySelector(`#${contentId}`);
      if (query) {
        const width = query.clientWidth;
        setActionWidth(width);
      }
    } else {
      const query = Taro.createSelectorQuery().in(this.$scope);
      this.componentDidMount = () => {
        setTimeout(() => {
          const view = query.select("#contentId");
          try {
            view.boundingClientRect().exec((rect: any) => {
              const res = rect[0];
              const width: number = res.width;
              setActionWidth(width);
              setInit(true);
            });
          } catch (e) {
            throw e;
          }
        }, 500);
      };
    }
  }, [props.options]);
  const actionsComponent = initOptions.map((item: any, index: number) => (
    <View
      className={`${
        BG_COLOR_LIST[item.bgColor || "white"]
      } flex justify-center align-center cl-swiper-action__action__item`}
      style={{ height: "100%" }}
      key={item.cu_index_id}
      onClick={() => {
        props.onClick && props.onClick(index);
        if (props.autoClose) setTranslateX(0);
      }}
    >
      <ClLayout padding="small" paddingDirection="horizontal">
        {item.text}
      </ClLayout>
    </View>
  ));
  useEffect(() => {
    setShow(false);
    if (translateX === 0) {
      setShow(false);
      props.onClose && props.onClose();
    } else if (Math.abs(translateX) === actionWidth) {
      setTimeout(() => {
        setShow(true);
      }, 300);
      props.onOpened && props.onOpened();
    }
  }, [translateX]);
  useEffect(() => {
    setShow(!!props.show);
    if (props.show) {
      if (props.direction === "left") {
        setTranslateX(actionWidth);
      } else {
        setTranslateX(-actionWidth);
      }
    }
  }, [props.show, actionWidth]);
  return (
    <View
      className={classNames("cl-swiper-action", props.className)}
      style={Object.assign({}, props.style)}
      onClick={e => {
        e.stopPropagation();
      }}
      onTouchStart={e => {
        if (props.disabled) return;
        setLastPoint(e.touches[0].clientX);
        setBeforeMove(e.touches[0].clientX);
        setLastTranslateX(translateX);
        setShowAnimation(0);
      }}
      onTouchMove={e => {
        if (props.disabled) return;
        const nowPoint = e.touches[0].clientX;
        // 为正则右，为负则左
        let distance = nowPoint - lastPoint;
        if (props.direction === "right") {
          distance =
            Math.abs(lastTranslateX) === actionWidth
              ? distance < 0
                ? 0
                : distance
              : lastTranslateX === 0
              ? distance > 0
                ? 0
                : distance
              : distance;
        }
        if (props.direction === "left") {
          distance =
            Math.abs(lastTranslateX) === actionWidth
              ? distance > 0
                ? 0
                : distance
              : lastTranslateX === 0
              ? distance < 0
                ? 0
                : distance
              : distance;
        }
        setTranslateX(lastTranslateX + distance * screenPercent);
      }}
      onTouchEnd={e => {
        if (props.disabled) return;
        setShowAnimation(0.3);
        const touches: any = e.changedTouches[0];
        const nowClientX = touches.clientX;
        const move = beforeMove - nowClientX;
        const isRight = props.direction === "right";
        // 向左滑动一定距离
        if (move > 20) {
          setTranslateX(isRight ? -actionWidth : 0);
          setLastTranslateX(isRight ? -actionWidth : 0);
          // 向右滑动一定距离
        } else if (move < -20) {
          setTranslateX(isRight ? 0 : actionWidth);
          setLastTranslateX(isRight ? 0 : actionWidth);
        } else {
          setLastTranslateX(lastTranslateX);
          setTranslateX(lastTranslateX);
        }
      }}
    >
      <View
        style={{
          transform: `translateX(${pxTransform(translateX / screenPercent)})`,
          transition: `all 0.3s ease-in`,
          position: "relative"
        }}
      >
        {props.children}
        {isH5 ? (
          <View
            className="cl-swiper-action__action"
            id={contentId}
            style={{
              right: `${
                props.direction === "right"
                  ? pxTransform(-actionWidth / screenPercent)
                  : "auto"
              }`,
              left: `${
                props.direction === "left"
                  ? pxTransform(-actionWidth / screenPercent)
                  : "auto"
              }`,
              zIndex: init ? 1 : -1
            }}
          >
            {actionsComponent}
          </View>
        ) : (
          <View
            className="cl-swiper-action__action"
            id="contentId"
            style={{
              right: `${
                props.direction === "right"
                  ? pxTransform(-actionWidth / screenPercent)
                  : "auto"
              }`,
              left: `${
                props.direction === "left"
                  ? pxTransform(-actionWidth / screenPercent)
                  : "auto"
              }`,
              zIndex: init ? 1 : -1
            }}
          >
            {actionsComponent}
          </View>
        )}
      </View>
    </View>
  );
}

ClSwiperAction.options = {
  addGlobalClass: true
};

ClSwiperAction.defaultProps = {
  show: false,
  disabled: false,
  autoClose: false,
  options: [],
  direction: "right",
  onClick: () => {},
  onClose: () => {},
  onOpened: () => {}
} as IProps;
