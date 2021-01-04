import React from "react";
import { View } from "@tarojs/components";
import { IProps } from "../../../@types/calendar";
import { isH5, isWeApp } from "../../lib";

import Calendar_h5 from "./h5";
import Calendar_weapp from "./weapp";

export default function ClCalendar(props: IProps) {
  return (
    <View>
      {isWeApp ? <Calendar_weapp {...props} /> : ""}
      {isH5 ? <Calendar_h5 {...props} /> : ""}
    </View>
  );
}

ClCalendar.defaultProps = {
  calendarType: "month",
  showType: "card",
  activeColor: "blue",
  tipDay: [],
  backToToday: true,
  onClick: () => {},
  onChange: () => {},
  badge: [],
  highlightWeekend: false,
  highlightWeekendColor: "blue",
  specialDay: []
} as IProps;

ClCalendar.options = {
  addGlobalClass: true
};
