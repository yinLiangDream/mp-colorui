import React from 'react';
import { View } from "@tarojs/components";
import { isH5, isWeApp } from "../../lib";
import Calendar_h5 from "./h5";
import Calendar_weapp from "./weapp";

export default function ClCalendar(props) {
    return (React.createElement(View, null,
        isWeApp ? React.createElement(Calendar_weapp, Object.assign({}, props)) : "",
        isH5 ? React.createElement(Calendar_h5, Object.assign({}, props)) : ""));
}
ClCalendar.defaultProps = {
    calendarType: "month",
    showType: "card",
    activeColor: "blue",
    tipDay: [],
    backToToday: true,
    onClick: () => { },
    onChange: () => { },
    badge: [],
    highlightWeekend: false,
    highlightWeekendColor: "blue",
    specialDay: []
};
ClCalendar.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map