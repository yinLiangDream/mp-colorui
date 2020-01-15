import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClCalendar, ClTitleBar } from "../../../index";
import dayjs from "dayjs";

export default function Calendar() {
  return (
    <View>
      <ClTitleBar title="表现形式 平铺/卡片" textColor="black" type="icon" />
      <ClCalendar showType="card" />
      <ClCalendar showType="full" />
      <ClTitleBar title="显示类型 周/月" textColor="black" type="icon" />
      <ClCalendar showType="card" calendarType="month" />
      <ClCalendar showType="card" calendarType="week" />
      <ClTitleBar title="禁止的日期" textColor="black" type="icon" />
      <ClCalendar
        showType="card"
        calendarType="month"
        disabledDay={[
          [
            dayjs()
              .add(3, "day")
              .format("YYYY-MM-DD"),
            dayjs()
              .add(7, "day")
              .format("YYYY-MM-DD")
          ]
        ]}
      />
      <ClTitleBar title="激活的颜色" textColor="black" type="icon" />
      <ClCalendar
        showType="card"
        calendarType="month"
        activeColor="gradualGreen"
      />
      <ClTitleBar title="日期的提示/角标" textColor="black" type="icon" />
      <ClCalendar
        showType="card"
        calendarType="month"
        tipDay={[
          {
            date: dayjs()
              .add(3, "day")
              .format("YYYY-MM-DD"),
            tipTop: "生日",
            tipBottom: "可预约",
            tipTopColor: "red",
            tipBottomColor: "green"
          },
          {
            date: dayjs()
              .add(8, "day")
              .format("YYYY-MM-DD"),
            tipTop: "回家",
            tipBottom: "可预约",
            tipTopColor: "red",
            tipBottomColor: "olive"
          }
        ]}
        badge={[
          {
            date: dayjs()
              .add(4, "day")
              .format("YYYY-MM-DD"),
            color: "red",
            num: 3
          },
          {
            date: dayjs()
              .add(8, "day")
              .format("YYYY-MM-DD"),
            color: "pink"
          }
        ]}
      />
      <ClTitleBar title="高亮周末" textColor="black" type="icon" />
      <ClCalendar showType="card" highlightWeekend />
    </View>
  );
}

Calendar.config = {
  navigationBarTitleText: "Calendar 日历"
};
