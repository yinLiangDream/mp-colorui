import { View } from "@tarojs/components";
import React from 'react';
import { classNames } from "../../lib";
import { IProps } from "../../../@types/grid";

export default function ClGrid(props: IProps) {
  const colClassName = `col-${props.col}`;
  const squareClassName = props.mode === "square" ? "grid-square" : "";
  const gridComponent = (
    <View
      className={classNames(
        `grid ${colClassName} ${squareClassName}`,
        props.className
      )}
      style={Object.assign({}, props.style)}
    >
      {props.children}
    </View>
  );
  return gridComponent;
}

ClGrid.options = {
  addGlobalClass: true
};

ClGrid.defaultProps = {
  col: 3,
  mode: "normal"
};
