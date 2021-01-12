import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { IProps } from "../../../@types/tip";
import { classNames, screenPercent, generateId } from "../../lib";
import ClText from "../text";
import ClTip_H5 from "./h5";

import "./index.scss";
import { BG_COLOR_LIST } from "../../lib/model";

ClTip.defaultProps = {
  show: false,
  direction: "bottom",
  bgColor: "white",
  mode: "touch",
  width: 150,
} as IProps;

export default function ClTip(props: IProps) {
  const {
    show = false,
    direction = "bottom",
    bgColor = "white",
    mode = "touch",
    width = 150,
  } = props;
  const [showTip, setShowTip] = useState(show);
  const [distance, setDistance] = useState({
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    transform: "",
    arrowTransform: "",
  });
  const [contentId] = useState(generateId());
  const [messageId] = useState(generateId());
  const [currentDirection, setCurrentDirection] = useState(direction);
  const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;
  const resver2Zero = (params: { direction: any; long: number }[]) => {
    distance.top = "auto";
    distance.left = "auto";
    distance.right = "auto";
    distance.bottom = "auto";
    params.forEach((item) => {
      distance[item.direction] = `${item.long}px`;
    });
    return distance;
  };
  useEffect(() => {
    setShowTip(show);
  }, [show]);
  useEffect(() => {
    setCurrentDirection(props.direction || "bottom");
  }, [props.direction]);
  useEffect(() => {
    function reRender() {
      if (Taro.ENV_TYPE.WEB === Taro.getEnv()) return;
      const query = Taro.createSelectorQuery();
      new Promise((resolve) => {
        query
          .select(`#${contentId}`)
          .boundingClientRect()
          .exec((res) => {
            resolve(res[0]);
          });
      }).then((res: any) => {
        query
          .select(`#${messageId}`)
          .boundingClientRect()
          .exec((data) => {
            const messageData = data[0];
            const contentWidth = width || 100;
            const screenWidth = 750 * screenPercent;
            let customDirection: any[] = [];
            const systemInfo = Taro.getSystemInfoSync();
            const bottomDistance =
              systemInfo.windowHeight - res.top - res.height;
            const leftDistance = screenWidth - res.left - res.width;
            const sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2;
            if (currentDirection === "top") {
              if (res.top < bottomDistance && res.top < messageData.height)
                setCurrentDirection("bottom");
              // props.direction = 'bottom'
              customDirection = [{ direction: "bottom", long: 0 }];
              console.log(res);
              let translateX = (res.width - contentWidth) / 2;
              if (res.left < res.right && res.left < screenWidth / 2) {
                if (Math.abs(translateX) > res.left) translateX = -res.left;
                distance.transform = `translateX(${translateX}px) translateY(-${
                  res.height + 10
                }px)`;
                distance.arrowTransform = `translateX(${
                  Math.abs(translateX) + res.width / 2 - sqrt
                }px) rotate(45deg) translateY(0)`;
              } else {
                const maxRight = screenWidth - res.left;
                if (maxRight < contentWidth)
                  translateX = contentWidth - maxRight;
                distance.transform = `translateX(-${translateX}px) translateY(-${
                  res.height + 10
                }px)`;
                distance.arrowTransform = `translateX(${
                  Math.abs(translateX) + res.width / 2 - sqrt
                }px) rotate(45deg) translateY(30%)`;
              }
            } else if (currentDirection === "bottom") {
              if (
                res.top > bottomDistance &&
                bottomDistance < messageData.height
              )
                setCurrentDirection("bottom");
              // props.direction = 'bottom'
              customDirection = [{ direction: "left", long: 0 }];
              let translateX = (res.width - contentWidth) / 2;
              if (res.left < res.right && res.left < screenWidth / 2) {
                if (Math.abs(translateX) > res.left) translateX = -res.left;
                distance.transform = `translateX(${translateX}px) translateY(${
                  res.height + 10
                }px)`;
                distance.arrowTransform = `translateX(${
                  Math.abs(translateX) + res.width / 2 - sqrt
                }px) rotate(45deg) translateY(0)`;
              } else {
                const maxRight = screenWidth - res.left;
                if (maxRight < contentWidth)
                  translateX = contentWidth - maxRight;
                distance.transform = `translateX(-${translateX}px) translateY(${
                  res.height + 10
                }px)`;
                distance.arrowTransform = `translateX(${
                  Math.abs(translateX) + res.width / 2 - sqrt
                }px) rotate(45deg) translateY(-30%)`;
              }
            } else if (currentDirection === `left`) {
              const diffHeight = messageData.height - res.height;
              if (res.left < contentWidth + 10 && leftDistance > res.left)
                setCurrentDirection("right");
              // props.direction = 'right'
              customDirection = [
                {
                  direction: "right",
                  long: 0,
                },
              ];
              let moveTop =
                bottomDistance - (messageData.height / 2 - res.height / 2);
              let moveBottom =
                res.top - (messageData.height / 2 - res.height / 2);
              if (moveTop > 0) moveTop = 0;
              if (moveBottom > 0) moveBottom = 0;
              distance.arrowTransform = `translateY(${
                messageData.height / 2 - moveTop + moveBottom - sqrt
              }px) translateX(30%) rotate(45deg)`;
              distance.transform = `translateX(${
                -res.width - 10
              }px) translateY(${-diffHeight / 2 + moveTop - moveBottom}px)`;
            } else if (currentDirection === "right") {
              if (leftDistance - 10 < contentWidth && leftDistance < res.left)
                setCurrentDirection("left");
              // props.direction = 'left'
              const diffHeight = messageData.height - res.height;
              if (res.left < contentWidth + 10) setCurrentDirection("right");
              // props.direction = 'right'
              customDirection = [
                {
                  direction: "left",
                  long: 0,
                },
              ];
              let moveTop =
                bottomDistance - (messageData.height / 2 - res.height / 2);
              let moveBottom =
                res.top - (messageData.height / 2 - res.height / 2);
              if (moveTop > 0) moveTop = 0;
              if (moveBottom > 0) moveBottom = 0;
              distance.arrowTransform = `translateY(${
                messageData.height / 2 - moveTop + moveBottom - sqrt
              }px) translateX(-30%) rotate(45deg)`;
              distance.transform = `translateX(${
                res.width + 10
              }px) translateY(${-diffHeight / 2 + moveTop - moveBottom}px)`;
            }
            Object.assign(distance, resver2Zero(customDirection));
            setDistance(distance);
          });
      });
    }
    reRender.call(this);
  }, [width, currentDirection, showTip]);
  const ClTip = (
    <View
      id={contentId}
      onClick={() => {
        if (mode === "click") {
          const show = !showTip;
          setShowTip(show);
          props.onChange && props.onChange(show);
        }
      }}
      onTouchStart={() => {
        if (mode === "touch") {
          const show = !showTip;
          setShowTip(show);
          props.onChange && props.onChange(show);
        }
      }}
      onTouchEnd={() => {
        if (mode === "touch") {
          const show = !showTip;
          setShowTip(show);
          props.onChange && props.onChange(show);
        }
      }}
      className={`cl-tip ${showTip ? "cl-tip__showZindex" : ""}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      <View
        id={messageId}
        className={`cl-tip__content  shadow ${showTip ? "show" : "hide"}`}
        style={{
          width: `${showTip ? width : 0}px`,
          left: distance.left,
          right: distance.right,
          top: distance.top,
          bottom: distance.bottom,
          transform: distance.transform,
        }}
      >
        <View
          className={`cl-tip__arrow ${currentDirection} ${
            BG_COLOR_LIST[bgColor || "white"]
          } ${showTip ? "showArrow" : "hideArrow"}`}
          style={{
            left: distance.left,
            right: distance.right,
            top: distance.top,
            bottom: distance.bottom,
            transform: distance.arrowTransform,
          }}
        />
        <View
          className={`cl-tip__message ${BG_COLOR_LIST[bgColor || "white"]}`}
        >
          <View style={{ width: `${width}px`, padding: "10px" }}>
            <ClText text={props.message} />
            <View
              onClick={(e: any) => {
                e.stopPropagation();
              }}
            >
              {props.renderMessage}
            </View>
          </View>
        </View>
      </View>
      {props.children}
    </View>
  );
  return (
    <View
      className={classNames(props.className)}
      style={Object.assign({}, props.style)}
    >
      {isH5 ? <ClTip_H5 {...props} /> : ClTip}
    </View>
  );
}
