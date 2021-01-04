import { pxTransform } from "@tarojs/taro";
import React, { Component } from "react";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import { IProps } from "../../../../@types/calendar";
import dayjs from "dayjs";
import ClGrid from "../../grid";
import ClText from "../../text";
import ClFlex from "../../flex";
import ClLayout from "../../layout";
import ClCard from "../../card";
import ClIcon from "../../icon";
import { classNames } from "../../../lib";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../../../lib/model";
import ClButton from "../../button";
import ClTip from "../../tip";

import "../index.scss";

interface IState {
  thisWeek: any[];
  preWeek: any[];
  nextWeek: any[];
  thisMonth: any[];
  nextMonth: any[];
  preMonth: any[];
  chooseDate: string;
  currentDate: string;
  currentActive: number;
  currentActiveLines: number;
  showMonths: boolean;
  today: string;
  currentYear: number;
}

const FORMAT_DATE = "YYYY-MM-DD";
const THIS_WEEK = "thisWeek";
const PRE_WEEK = "preWeek";
const NEXT_WEEK = "nextWeek";
const PRE_MONTH = "preMonth";
const THIS_MONTH = "thisMonth";
const NEXT_MONTH = "nextMonth";
const mapChangeWeekIndex = [PRE_WEEK, THIS_WEEK, NEXT_WEEK];
const mapChangeMonthIndex = [PRE_MONTH, THIS_MONTH, NEXT_MONTH];
let render = false;

function dealYearMonth(day) {
  return `${day.year()}年${day.month() + 1}月`;
}

export default class Calendar_h5 extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  constructor(props) {
    super(props);
    const today = dayjs().format(FORMAT_DATE);

    this.state = {
      thisWeek: [],
      preWeek: [],
      nextWeek: [],
      thisMonth: [],
      nextMonth: [],
      preMonth: [],
      currentYear: dayjs().year(),
      chooseDate: today,
      currentDate: dealYearMonth(dayjs(today)),
      currentActive: 1,
      currentActiveLines: 5,
      showMonths: false,
      today
    } as IState;
  }
  selectDate(month) {
    const year = this.state.currentYear;
    const date = `${year}-${month + 1}-01`;
    this.changeMonth(date);
    this.setState({
      showMonths: false,
      currentDate: dealYearMonth(dayjs(date))
    });
  }
  clickDate({ item }) {
    if (item.disabled) return;
    if (item.empty) return;
    if (this.props.calendarType === "week") {
      const weeks = {
        thisWeek: this.state.thisWeek,
        preWeek: this.state.preWeek,
        nextWeek: this.state.nextWeek
      };
      Object.keys(weeks).forEach(week => {
        weeks[week].forEach(item => (item.active = false));
      });
    } else {
      const months = {
        thisMonth: this.state.thisMonth,
        preMonth: this.state.preMonth,
        nextMonth: this.state.nextMonth
      };
      Object.keys(months).forEach(month => {
        months[month].forEach(item => (item.active = false));
      });
    }
    item.active = true;
    this.setState({
      chooseDate: item.date
    });
    this.props.onClick && this.props.onClick(item.date);
  }
  getPreNextArray(index: number, data) {
    const varChange =
      this.props.calendarType === "week"
        ? {
            PRE: PRE_WEEK,
            THIS: THIS_WEEK,
            NEXT: NEXT_WEEK
          }
        : {
            PRE: PRE_MONTH,
            THIS: THIS_MONTH,
            NEXT: NEXT_MONTH
          };
    const dataChange =
      this.props.calendarType === "week"
        ? {
            PRE: "tempPreWeek",
            THIS: "tempThisWeek",
            NEXT: "tempNextWeek"
          }
        : {
            PRE: "tempPreMonth",
            THIS: "tempThisMonth",
            NEXT: "tempNextMonth"
          };
    let current = {
      [varChange.PRE]: data[dataChange.PRE],
      [varChange.THIS]: data[dataChange.THIS],
      [varChange.NEXT]: data[dataChange.NEXT]
    };
    if (index === 0) {
      current[varChange.PRE] = data[dataChange.THIS];
      current[varChange.THIS] = data[dataChange.NEXT];
      current[varChange.NEXT] = data[dataChange.PRE];
    }
    if (index === 2) {
      current[varChange.PRE] = data[dataChange.NEXT];
      current[varChange.THIS] = data[dataChange.PRE];
      current[varChange.NEXT] = data[dataChange.THIS];
    }
    return current;
  }
  changeDate(e) {
    let arrayIndex = e.detail.current;
    if (render) {
      arrayIndex = 1;
      render = false;
    }
    let currentChangeDate = "";
    if (this.props.calendarType === "week") {
      const oldWeeks = {
        thisWeek: this.state.thisWeek,
        preWeek: this.state.preWeek,
        nextWeek: this.state.nextWeek
      };
      const showWeeks = oldWeeks[mapChangeWeekIndex[arrayIndex]];
      if (showWeeks && showWeeks.length) {
        this.setState({
          currentDate: dealYearMonth(dayjs(showWeeks[3].date))
        });
        currentChangeDate = dayjs(showWeeks[3].date).format("YYYY-MM");
        const newWeeks = this.getWeeks(
          oldWeeks[mapChangeWeekIndex[arrayIndex]][3].date
        );
        const current = this.getPreNextArray(arrayIndex, newWeeks);
        this.setState({
          preWeek: current[PRE_WEEK],
          nextWeek: current[NEXT_WEEK],
          thisWeek: current[THIS_WEEK]
        });
      }
    } else {
      const oldMonths = {
        thisMonth: this.state.thisMonth,
        preMonth: this.state.preMonth,
        nextMonth: this.state.nextMonth
      };
      const showMonths = oldMonths[mapChangeMonthIndex[arrayIndex]];
      if (showMonths && showMonths.length) {
        currentChangeDate = dayjs(showMonths[8].date).format("YYYY-MM");
        this.setState({
          currentDate: dealYearMonth(dayjs(showMonths[8].date)),
          currentActiveLines: Math.ceil(showMonths.length / 7)
        });
        const newMonths = this.getMonths(
          oldMonths[mapChangeMonthIndex[arrayIndex]][8].date
        );
        const current = this.getPreNextArray(arrayIndex, newMonths);
        this.setState({
          preMonth: current[PRE_MONTH],
          nextMonth: current[NEXT_MONTH],
          thisMonth: current[THIS_MONTH]
        });
      }
    }
    this.setState({
      currentActive: arrayIndex
    });
    this.props.onChange && this.props.onChange(currentChangeDate);
  }

  changeMonth(date) {
    if (this.props.calendarType === "week") {
      const weeks = this.getWeeks(date);
      let newIndex =
        this.state.currentActive + 1 > 2 ? 0 : this.state.currentActive + 1;
      const current = this.getPreNextArray(newIndex, weeks);
      this.setState({
        currentActive: newIndex,
        preWeek: current[PRE_WEEK],
        nextWeek: current[NEXT_WEEK],
        thisWeek: current[THIS_WEEK]
      });
    } else {
      const months = this.getMonths(date);
      let newIndex =
        this.state.currentActive + 1 > 2 ? 0 : this.state.currentActive + 1;
      const current = this.getPreNextArray(newIndex, months);
      this.setState({
        currentActive: newIndex,
        preMonth: current[PRE_MONTH],
        nextMonth: current[NEXT_MONTH],
        thisMonth: current[THIS_MONTH]
      });
    }
  }
  handleBackToToday() {
    this.setState({
      chooseDate: this.state.today
    });
    this.changeMonth(this.state.today);
  }
  dealEveryDay({ i, currentDay, date }) {
    const thisNum = i - currentDay;
    const method = thisNum > 0 ? "add" : "subtract";
    const day = dayjs(date)[method](Math.abs(thisNum), "day");
    const tipDayArray = this.props.tipDay || [];
    let dateData = {
      timeStamp: day.valueOf(),
      date: day.format(FORMAT_DATE),
      month: day.get("month"),
      day: day.get("date"),
      year: day.get("year"),
      today: this.state.today === day.format(FORMAT_DATE),
      old: dayjs(this.state.today).valueOf() - day.valueOf() > 0,
      active: this.state.chooseDate === day.format(FORMAT_DATE),
      tipTop: "",
      tipBottom: "",
      badge: {
        show: false,
        color: "red",
        num: ""
      },
      disabled: false,
      special: {
        show: false,
        color: "green"
      },
      highlight: this.props.highlightWeekend
        ? [0, 6].includes(day.get("day"))
        : false
    };
    // tip
    const tipIndex = tipDayArray.findIndex(item => item.date === dateData.date);
    if (tipIndex >= 0) {
      const tipData = tipDayArray[tipIndex];
      dateData = Object.assign(dateData, {
        tipTop: tipData.tipTop || "",
        tipBottom: tipData.tipBottom || "",
        tipTopColor: tipData.tipTopColor,
        tipBottomColor: tipData.tipBottomColor
      });
    }
    // badge
    if (
      typeof this.props.badge === "string" &&
      dateData.date === this.props.badge
    ) {
      Object.assign(dateData.badge, { show: true });
    } else if (this.props.badge instanceof Array) {
      this.props.badge.forEach(item => {
        if (item.date === dateData.date) {
          Object.assign(dateData.badge, {
            show: true,
            color: item.color || "red",
            num: item.num || ""
          });
        }
      });
    }

    // disabledDay
    if (this.props.disabledDay instanceof Array) {
      this.props.disabledDay.forEach((item: any) => {
        if (typeof item === "string") {
          dateData.disabled = dateData.date === item;
        } else if (item instanceof Array) {
          let minDate = item[0] && dayjs(item[0]).valueOf();
          let maxDate = item[1] && dayjs(item[1]).valueOf();
          if (minDate && maxDate) {
            dateData.disabled =
              dateData.timeStamp > minDate && dateData.timeStamp < maxDate;
          } else if (minDate) {
            dateData.disabled = dateData.timeStamp > minDate;
          } else if (maxDate) {
            dateData.disabled = dateData.timeStamp < maxDate;
          }
        }
      });
    }

    // specialDay
    if (this.props.specialDay instanceof Array) {
      this.props.specialDay.forEach(item => {
        if (typeof item === "string") {
          dateData.special.show = item === dateData.date;
        } else if (typeof item === "object") {
          const date = item.date;
          const color = item.color;
          Object.assign(dateData.special, {
            date: date === dateData.date,
            color
          });
        }
      });
    }

    return dateData;
  }
  getWeeks(date: string) {
    const weekday: number = dayjs(date).day();
    const tempThisWeek: any[] = [];
    const tempPreWeek: any[] = [];
    const tempNextWeek: any[] = [];
    let i = -7;
    while (1) {
      if (i >= 14) break;
      const dateData = this.dealEveryDay({
        i,
        currentDay: weekday,
        date
      });

      if (i < 0) {
        tempPreWeek.push(dateData);
      } else if (i >= 7) {
        tempNextWeek.push(dateData);
      } else {
        tempThisWeek.push(dateData);
      }
      i++;
    }
    return {
      tempThisWeek,
      tempPreWeek,
      tempNextWeek
    };
  }
  fillMonths(months) {
    const firstDay = months[0];
    let weekday = dayjs(firstDay.date).day();
    while (weekday) {
      months.unshift({
        timeStamp: weekday,
        date: "",
        month: "",
        day: "",
        year: "",
        today: false,
        old: false,
        active: false,
        tipTop: "",
        tipBottom: "",
        badge: {
          show: false,
          color: "red",
          num: ""
        },
        disabled: false,
        special: {
          show: false,
          color: "green"
        },
        empty: true
      });
      weekday--;
    }
    return months;
  }
  getMonths(date) {
    const tempThisMonth: any[] = [];
    const tempPreMonth: any[] = [];
    const tempNextMonth: any[] = [];
    const preMonthDays = dayjs(date)
      .subtract(1, "month")
      .daysInMonth();
    const thisMonthDays = dayjs(date).daysInMonth();
    const nextMonthDays = dayjs(date)
      .add(1, "month")
      .daysInMonth();
    const thisDays = dayjs(date).date();
    let i = -preMonthDays + 1;
    while (1) {
      if (i > nextMonthDays + thisMonthDays) break;
      const dateData = this.dealEveryDay({
        i,
        currentDay: thisDays,
        date
      });

      if (i <= 0) {
        tempPreMonth.push(dateData);
      } else if (i > thisMonthDays) {
        tempNextMonth.push(dateData);
      } else {
        tempThisMonth.push(dateData);
      }
      i++;
    }
    return {
      tempThisMonth: this.fillMonths(tempThisMonth),
      tempPreMonth: this.fillMonths(tempPreMonth),
      tempNextMonth: this.fillMonths(tempNextMonth)
    };
  }
  initCalendar() {
    if (this.props.calendarType === "week") {
      const weeks = this.getWeeks(this.state.today);
      this.setState({
        preWeek: weeks.tempPreWeek,
        thisWeek: weeks.tempThisWeek,
        nextWeek: weeks.tempNextWeek
      });
    } else {
      const months = this.getMonths(this.state.today);
      this.setState({
        preMonth: months.tempPreMonth,
        thisMonth: months.tempThisMonth,
        nextMonth: months.tempNextMonth
      });
    }
    render = true;
  }
  componentDidMount(): void {
    this.initCalendar();
  }
  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (prevProps.calendarType !== this.props.calendarType) {
      this.initCalendar();
    }
  }
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const {
      thisWeek,
      thisMonth,
      preWeek,
      preMonth,
      nextWeek,
      nextMonth,
      showMonths,
      currentDate,
      currentActiveLines,
      currentYear
    } = this.state;
    const {
      highlightWeekend,
      highlightWeekendColor,
      activeColor,
      showType,
      backToToday,
      calendarType
    } = this.props;
    const weekGridComponent = [
      "周日",
      "周一",
      "周二",
      "周三",
      "周四",
      "周五",
      "周六"
    ].map((week, index) => (
      <View key={week}>
        <ClText
          align={"center"}
          size={"small"}
          lineSpacing={"small"}
          textColor={
            highlightWeekend
              ? [0, 6].includes(index)
                ? highlightWeekendColor
                : "black"
              : "black"
          }
        >
          {week}
        </ClText>
      </View>
    ));
    const BGClassName = BG_COLOR_LIST[activeColor || "blue"];
    const oldTextClassName = TEXT_COLOR_LIST["gray"];
    const weeksComponent = preWeek.length
      ? [preWeek, thisWeek, nextWeek].map((week, index) => (
          <SwiperItem key={week[3].date}>
            <ClGrid col={7}>
              {week.map(item => (
                <View
                  key={item.timeStamp}
                  onClick={() => {
                    this.clickDate({
                      item
                    });
                  }}
                >
                  <ClLayout padding={"small"} paddingDirection={"vertical"}>
                    <ClFlex align={"center"} justify={"center"}>
                      <View
                        style={{
                          position: "relative"
                        }}
                        className={classNames([
                          "day-normal",
                          `${item.disabled ? BG_COLOR_LIST["gray"] : ""}`,
                          `${
                            item.special.show && !item.active
                              ? BG_COLOR_LIST[item.special.color]
                              : ""
                          }`,
                          {
                            [BGClassName]: !item.disabled && item.active,
                            [oldTextClassName]: item.old
                          }
                        ])}
                      >
                        <View
                          className={classNames([
                            {
                              ["cu-tag badge"]: item.badge.show
                            },
                            BG_COLOR_LIST[item.badge.color]
                          ])}
                        >
                          {item.badge.num}
                        </View>
                        <ClFlex
                          align={"center"}
                          justify={"center"}
                          direction={"column"}
                        >
                          <ClText
                            size={12}
                            align={"center"}
                            cut={true}
                            style={{ maxWidth: pxTransform(50) }}
                            textColor={
                              item.active && !item.disabled
                                ? undefined
                                : item.tipTopColor
                            }
                            text={item.tipTop}
                          />
                          <ClText
                            text={item.day}
                            textColor={
                              !item.active && !item.disabled && item.highlight
                                ? highlightWeekendColor
                                : undefined
                            }
                          />
                          <ClText
                            size={12}
                            align={"center"}
                            cut={true}
                            style={{ maxWidth: pxTransform(50) }}
                            textColor={
                              item.active && !item.disabled
                                ? undefined
                                : item.tipBottomColor
                            }
                            text={item.tipBottom}
                          />
                        </ClFlex>
                      </View>
                    </ClFlex>
                  </ClLayout>
                </View>
              ))}
            </ClGrid>
          </SwiperItem>
        ))
      : "";

    const monthsComponent = [preMonth, thisMonth, nextMonth].every(
      item => item.length > 0
    )
      ? [preMonth, thisMonth, nextMonth].map((month, index) => (
          <SwiperItem key={month[3].date}>
            <ClGrid col={7}>
              {month.map(item => (
                <View
                  key={item.timeStamp}
                  onClick={() => {
                    this.clickDate({
                      item
                    });
                  }}
                >
                  <ClLayout padding={"small"} paddingDirection={"vertical"}>
                    <ClFlex align={"center"} justify={"center"}>
                      <View
                        style={{
                          position: "relative"
                        }}
                        className={classNames([
                          "day-normal",
                          `${item.disabled ? BG_COLOR_LIST["gray"] : ""}`,
                          `${
                            item.special.show && !item.active
                              ? BG_COLOR_LIST[item.special.color]
                              : ""
                          }`,
                          {
                            [BGClassName]: !item.disabled && item.active,
                            [oldTextClassName]: item.old
                          }
                        ])}
                      >
                        <View
                          className={classNames([
                            {
                              ["cu-tag badge"]: item.badge.show
                            },
                            BG_COLOR_LIST[item.badge.color]
                          ])}
                        >
                          {item.badge.num}
                        </View>
                        <ClFlex
                          align={"center"}
                          justify={"center"}
                          direction={"column"}
                        >
                          <ClText
                            size={12}
                            align={"center"}
                            cut={true}
                            style={{ maxWidth: pxTransform(50) }}
                            textColor={
                              item.active && !item.disabled
                                ? undefined
                                : item.tipTopColor
                            }
                            text={item.tipTop}
                          />
                          <ClText
                            text={item.day}
                            textColor={
                              !item.active && !item.disabled && item.highlight
                                ? highlightWeekendColor
                                : undefined
                            }
                          />
                          <ClText
                            size={12}
                            align={"center"}
                            cut={true}
                            style={{ maxWidth: pxTransform(50) }}
                            textColor={
                              item.active && !item.disabled
                                ? undefined
                                : item.tipBottomColor
                            }
                            text={item.tipBottom}
                          />
                        </ClFlex>
                      </View>
                    </ClFlex>
                  </ClLayout>
                </View>
              ))}
            </ClGrid>
          </SwiperItem>
        ))
      : "";

    const months = Array.from(Array(12)).map((item, index) => `${index + 1}月`);

    return (
      <ClCard type={showType}>
        <View className={classNames([BG_COLOR_LIST["white"], "cuCalendar"])}>
          <ClLayout padding={"small"} paddingDirection={"bottom"}>
            <ClFlex justify={"between"} align={"center"}>
              <ClTip
                renderMessage={
                  <View>
                    <ClLayout>
                      <ClFlex align={"center"} justify={"between"}>
                        <View onClick={() => {
                          this.setState({
                            currentYear: currentYear - 1
                          })
                        }}>
                          <ClIcon iconName={"pullleft"} />
                        </View>
                        <ClText text={currentYear + ""} />
                        <View onClick={() => {
                          this.setState({
                            currentYear: currentYear + 1
                          })
                        }}>
                          <ClIcon iconName={"pullright"} />
                        </View>
                      </ClFlex>
                    </ClLayout>
                    <ClGrid col={4}>
                      {months.map((item, index) => (
                        <View
                          key={item}
                          className={classNames([
                            "flex justify-center align-center"
                          ])}
                        >
                          <ClLayout margin={"small"} marginDirection={"vertical"}>
                            <ClButton
                              size={"small"}
                              bgColor={"light-gray"}
                              shadow={false}
                              long
                              text={item}
                              onClick={() => {
                                this.selectDate(index);
                              }}
                            />
                          </ClLayout>
                        </View>
                      ))}
                    </ClGrid>
                  </View>
                }
                mode={"click"}
                width={300}
                show={this.state.showMonths}
                onChange={() => {
                  const currentShow = !showMonths
                  this.setState({
                    showMonths: currentShow
                  });
                }}
              >
                <ClButton shape={"round"} shadow={false} size={"small"}>
                  <ClText
                    className={"chooseDate"}
                    lineSpacing={"normal"}
                    text={currentDate}
                  />
                </ClButton>
              </ClTip>
              {backToToday ? (
                <View
                  onClick={() => {
                    this.handleBackToToday();
                  }}
                >
                  <ClButton shadow={false} size={"small"}>
                    <ClText className={"backToToday"} lineSpacing={"normal"}>
                      今
                    </ClText>
                  </ClButton>
                </View>
              ) : (
                ""
              )}
            </ClFlex>
          </ClLayout>
          <View className="week">
            <ClGrid col={7} className="solid-bottom">
              {weekGridComponent}
            </ClGrid>
            <Swiper
              current={this.state.currentActive}
              skipHiddenItemLayout
              circular
              key={'key-' + Math.random()}
              style={{
                width: "100%",
                height:
                  calendarType === "week"
                    ? pxTransform(120)
                    : pxTransform(120 * currentActiveLines)
              }}
              onChange={(e) => {
                if (this.state.currentActive !== e.detail.current) this.changeDate(e)
              }}
            >
              {calendarType === "week" ? weeksComponent : monthsComponent}
            </Swiper>
          </View>
        </View>
      </ClCard>
    );
  }
}
