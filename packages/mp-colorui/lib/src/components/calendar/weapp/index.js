import { pxTransform } from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import dayjs from 'dayjs';
import ClGrid from '../../grid';
import ClText from '../../text';
import ClFlex from '../../flex';
import ClLayout from '../../layout';
import ClCard from '../../card';
import ClIcon from '../../icon';
import { classNames } from '../../../lib';
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../../../lib/model';
import ClButton from '../../button';
import ClTip from '../../tip';
import '../index.scss';
export default function Calendar_weapp(props) {
    const { highlightWeekendColor, calendarType, showType, activeColor, tipDay, backToToday, disabledDay, badge, onChange, onClick, highlightWeekend, specialDay } = props;
    const FORMAT_DATE = 'YYYY-MM-DD';
    const THIS_WEEK = 'thisWeek';
    const PRE_WEEK = 'preWeek';
    const NEXT_WEEK = 'nextWeek';
    const PRE_MONTH = 'preMonth';
    const THIS_MONTH = 'thisMonth';
    const NEXT_MONTH = 'nextMonth';
    const today = dayjs().format(FORMAT_DATE);
    const mapChangeWeekIndex = [PRE_WEEK, THIS_WEEK, NEXT_WEEK];
    const mapChangeMonthIndex = [PRE_MONTH, THIS_MONTH, NEXT_MONTH];
    const [thisWeek, setThisWeek] = useState([]);
    const [preWeek, setPreWeek] = useState([]);
    const [nextWeek, setNextWeek] = useState([]);
    const [thisMonth, setThisMonth] = useState([]);
    const [preMonth, setPreMonth] = useState([]);
    const [nextMonth, setNextMonth] = useState([]);
    const [chooseDate, setChooseDate] = useState(today);
    const [currentDate, setCurrentDate] = useState(dealYearMonth(dayjs(today)));
    const [currentActive, setCurrentActive] = useState(1);
    const [currentActiveLines, setCurrentActiveLines] = useState(5);
    const [showMonths, setShowMonths] = useState(false);
    const [currentYear, setCurrentYear] = useState(dayjs().year());
    const selectDate = month => {
        const year = currentYear;
        const date = `${year}-${month + 1}-01`;
        changeMonth(date);
        setShowMonths(false);
        setCurrentDate(dealYearMonth(dayjs(date)));
    };
    function dealYearMonth(day) {
        return `${day.year()}年${day.month() + 1}月`;
    }
    const clickDate = ({ item }) => {
        if (item.disabled)
            return;
        if (item.empty)
            return;
        if (calendarType === 'week') {
            const weeks = {
                thisWeek,
                preWeek,
                nextWeek
            };
            Object.keys(weeks).forEach(week => {
                weeks[week].forEach(item => (item.active = false));
            });
        }
        else {
            const months = {
                thisMonth,
                preMonth,
                nextMonth
            };
            Object.keys(months).forEach(month => {
                months[month].forEach(item => (item.active = false));
            });
        }
        item.active = true;
        setChooseDate(item.date);
        onClick && onClick(item.date);
    };
    const getPreNextArray = (index, data) => {
        const varChange = calendarType === 'week'
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
        const dataChange = calendarType === 'week'
            ? {
                PRE: 'tempPreWeek',
                THIS: 'tempThisWeek',
                NEXT: 'tempNextWeek'
            }
            : {
                PRE: 'tempPreMonth',
                THIS: 'tempThisMonth',
                NEXT: 'tempNextMonth'
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
    };
    const changeDate = (arrayIndex) => {
        let currentDate = '';
        if (calendarType === 'week') {
            const oldWeeks = {
                thisWeek,
                preWeek,
                nextWeek
            };
            const showWeeks = oldWeeks[mapChangeWeekIndex[arrayIndex]];
            setCurrentDate(dealYearMonth(dayjs(showWeeks[3].date)));
            currentDate = dayjs(showWeeks[3].date).format('YYYY-MM');
            const newWeeks = getWeeks(oldWeeks[mapChangeWeekIndex[arrayIndex]][3].date);
            const current = getPreNextArray(arrayIndex, newWeeks);
            setCurrentActive(arrayIndex);
            setPreWeek(current[PRE_WEEK]);
            setNextWeek(current[NEXT_WEEK]);
            setThisWeek(current[THIS_WEEK]);
        }
        else {
            const oldMonths = {
                thisMonth,
                preMonth,
                nextMonth
            };
            const showMonths = oldMonths[mapChangeMonthIndex[arrayIndex]];
            currentDate = dayjs(showMonths[8].date).format('YYYY-MM');
            setCurrentDate(dealYearMonth(dayjs(showMonths[8].date)));
            setCurrentActiveLines(Math.ceil(showMonths.length / 7));
            const newMonths = getMonths(oldMonths[mapChangeMonthIndex[arrayIndex]][8].date);
            const current = getPreNextArray(arrayIndex, newMonths);
            setCurrentActive(arrayIndex);
            setPreMonth(current[PRE_MONTH]);
            setNextMonth(current[NEXT_MONTH]);
            setThisMonth(current[THIS_MONTH]);
        }
        onChange && onChange(currentDate);
    };
    function changeMonth(date) {
        if (calendarType === 'week') {
            const weeks = getWeeks(date);
            let newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1;
            setCurrentActive(newIndex);
            const current = getPreNextArray(newIndex, weeks);
            setPreWeek(current[PRE_WEEK]);
            setNextWeek(current[NEXT_WEEK]);
            setThisWeek(current[THIS_WEEK]);
        }
        else {
            const months = getMonths(date);
            let newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1;
            setCurrentActive(newIndex);
            const current = getPreNextArray(newIndex, months);
            setPreMonth(current[PRE_MONTH]);
            setNextMonth(current[NEXT_MONTH]);
            setThisMonth(current[THIS_MONTH]);
        }
    }
    const handleBackToToday = () => {
        setChooseDate(today);
        changeMonth(today);
    };
    function dealEveryDay({ i, currentDay, date }) {
        const thisNum = i - currentDay;
        const method = thisNum > 0 ? 'add' : 'subtract';
        const day = dayjs(date)[method](Math.abs(thisNum), 'day');
        const tipDayArray = tipDay || [];
        let dateData = {
            timeStamp: day.valueOf(),
            date: day.format(FORMAT_DATE),
            month: day.get('month'),
            day: day.get('date'),
            year: day.get('year'),
            today: today === day.format(FORMAT_DATE),
            old: dayjs(today).valueOf() - day.valueOf() > 0,
            active: chooseDate === day.format(FORMAT_DATE),
            tipTop: '',
            tipBottom: '',
            badge: {
                show: false,
                color: 'red',
                num: ''
            },
            disabled: false,
            special: {
                show: false,
                color: 'green'
            },
            highlight: highlightWeekend ? [0, 6].includes(day.get('day')) : false
        };
        // tip
        const tipIndex = tipDayArray.findIndex(item => item.date === dateData.date);
        if (tipIndex >= 0) {
            const tipData = tipDayArray[tipIndex];
            dateData = Object.assign(dateData, {
                tipTop: tipData.tipTop || '',
                tipBottom: tipData.tipBottom || '',
                tipTopColor: tipData.tipTopColor,
                tipBottomColor: tipData.tipBottomColor
            });
        }
        // badge
        if (typeof badge === 'string' && dateData.date === badge) {
            Object.assign(dateData.badge, { show: true });
        }
        else if (badge instanceof Array) {
            badge.forEach(item => {
                if (item.date === dateData.date) {
                    Object.assign(dateData.badge, {
                        show: true,
                        color: item.color || 'red',
                        num: item.num || ''
                    });
                }
            });
        }
        // disabledDay
        if (disabledDay instanceof Array) {
            disabledDay.forEach((item) => {
                if (typeof item === 'string') {
                    dateData.disabled = dateData.date === item;
                }
                else if (item instanceof Array) {
                    let minDate = item[0] && dayjs(item[0]).valueOf();
                    let maxDate = item[1] && dayjs(item[1]).valueOf();
                    if (minDate && maxDate) {
                        dateData.disabled =
                            dateData.timeStamp > minDate && dateData.timeStamp < maxDate;
                    }
                    else if (minDate) {
                        dateData.disabled = dateData.timeStamp > minDate;
                    }
                    else if (maxDate) {
                        dateData.disabled = dateData.timeStamp < maxDate;
                    }
                }
            });
        }
        // specialDay
        if (specialDay instanceof Array) {
            specialDay.forEach(item => {
                if (typeof item === 'string') {
                    dateData.special.show = item === dateData.date;
                }
                else if (typeof item === 'object') {
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
    function getWeeks(date) {
        const weekday = dayjs(date).day();
        const tempThisWeek = [];
        const tempPreWeek = [];
        const tempNextWeek = [];
        let i = -7;
        while (1) {
            if (i >= 14)
                break;
            const dateData = dealEveryDay({
                i,
                currentDay: weekday,
                date
            });
            if (i < 0) {
                tempPreWeek.push(dateData);
            }
            else if (i >= 7) {
                tempNextWeek.push(dateData);
            }
            else {
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
    function fillMonths(months) {
        const firstDay = months[0];
        let weekday = dayjs(firstDay.date).day();
        while (weekday) {
            months.unshift({
                timeStamp: weekday,
                date: '',
                month: '',
                day: '',
                year: '',
                today: false,
                old: false,
                active: false,
                tipTop: '',
                tipBottom: '',
                badge: {
                    show: false,
                    color: 'red',
                    num: ''
                },
                disabled: false,
                special: {
                    show: false,
                    color: 'green'
                },
                empty: true
            });
            weekday--;
        }
        return months;
    }
    function getMonths(date) {
        const tempThisMonth = [];
        const tempPreMonth = [];
        const tempNextMonth = [];
        const preMonthDays = dayjs(date).subtract(1, 'month').daysInMonth();
        const thisMonthDays = dayjs(date).daysInMonth();
        const thisDays = dayjs(date).date();
        const nextMonthDays = dayjs(date).add(1, 'month').daysInMonth();
        let i = -preMonthDays + 1;
        while (1) {
            if (i > nextMonthDays + thisMonthDays)
                break;
            const dateData = dealEveryDay({
                i,
                currentDay: thisDays,
                date
            });
            if (i <= 0) {
                tempPreMonth.push(dateData);
            }
            else if (i > thisMonthDays) {
                tempNextMonth.push(dateData);
            }
            else {
                tempThisMonth.push(dateData);
            }
            i++;
        }
        return {
            tempThisMonth: fillMonths(tempThisMonth),
            tempPreMonth: fillMonths(tempPreMonth),
            tempNextMonth: fillMonths(tempNextMonth)
        };
    }
    // useEffect(() => {}, [preWeek, nextWeek, thisWeek]);
    useEffect(() => {
        if (calendarType === 'week') {
            const weeks = getWeeks(today);
            setPreWeek(weeks.tempPreWeek);
            setThisWeek(weeks.tempThisWeek);
            setNextWeek(weeks.tempNextWeek);
        }
        else {
            const months = getMonths(today);
            setPreMonth(months.tempPreMonth);
            setThisMonth(months.tempThisMonth);
            setNextMonth(months.tempNextMonth);
        }
    }, [calendarType]);
    const weekGridComponent = [
        '周日',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六'
    ].map((week, index) => (React.createElement(View, { key: week },
        React.createElement(ClText, { align: 'center', size: 'small', lineSpacing: 'small', textColor: highlightWeekend
                ? [0, 6].includes(index)
                    ? highlightWeekendColor
                    : 'black'
                : 'black' }, week))));
    const BGClassName = BG_COLOR_LIST[activeColor || 'blue'];
    const oldTextClassName = TEXT_COLOR_LIST['gray'];
    const weeksComponent = [preWeek, thisWeek, nextWeek].map((week, index) => (React.createElement(SwiperItem, { key: week[3].date },
        React.createElement(ClGrid, { col: 7 }, week.map(item => (React.createElement(View, { key: item.timeStamp, onClick: clickDate.bind(this, {
                item,
                type: mapChangeWeekIndex[index]
            }) },
            React.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                React.createElement(ClFlex, { align: 'center', justify: 'center' },
                    React.createElement(View, { style: {
                            position: 'relative'
                        }, className: classNames([
                            'day-normal',
                            `${item.disabled ? BG_COLOR_LIST['gray'] : ''}`,
                            `${item.special.show && !item.active
                                ? BG_COLOR_LIST[item.special.color]
                                : ''}`,
                            {
                                [BGClassName]: !item.disabled && item.active,
                                [oldTextClassName]: item.old
                            }
                        ]) },
                        React.createElement(View, { className: classNames([
                                {
                                    ['cu-tag badge']: item.badge.show
                                },
                                BG_COLOR_LIST[item.badge.color]
                            ]) }, item.badge.num),
                        React.createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                            React.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: pxTransform(50) }, textColor: item.active && !item.disabled
                                    ? undefined
                                    : item.tipTopColor, text: item.tipTop }),
                            React.createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                    ? highlightWeekendColor
                                    : undefined }),
                            React.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: pxTransform(50) }, textColor: item.active && !item.disabled
                                    ? undefined
                                    : item.tipBottomColor, text: item.tipBottom }))))))))))));
    const monthsComponent = [preMonth, thisMonth, nextMonth].map((month, index) => (React.createElement(SwiperItem, { key: month[3].date },
        React.createElement(ClGrid, { col: 7 }, month.map(item => (React.createElement(View, { key: item.timeStamp, onClick: clickDate.bind(this, {
                item,
                type: mapChangeWeekIndex[index]
            }) },
            React.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                React.createElement(ClFlex, { align: 'center', justify: 'center' },
                    React.createElement(View, { style: {
                            position: 'relative'
                        }, className: classNames([
                            'day-normal',
                            `${item.disabled ? BG_COLOR_LIST['gray'] : ''}`,
                            `${item.special.show && !item.active
                                ? BG_COLOR_LIST[item.special.color]
                                : ''}`,
                            {
                                [BGClassName]: !item.disabled && item.active,
                                [oldTextClassName]: item.old
                            }
                        ]) },
                        React.createElement(View, { className: classNames([
                                {
                                    ['cu-tag badge']: item.badge.show
                                },
                                BG_COLOR_LIST[item.badge.color]
                            ]) }, item.badge.num),
                        React.createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                            React.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: pxTransform(50) }, textColor: item.active && !item.disabled
                                    ? undefined
                                    : item.tipTopColor, text: item.tipTop }),
                            React.createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                    ? highlightWeekendColor
                                    : undefined }),
                            React.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: pxTransform(50) }, textColor: item.active && !item.disabled
                                    ? undefined
                                    : item.tipBottomColor, text: item.tipBottom }))))))))))));
    const months = Array.from(Array(12)).map((_item, index) => `${index + 1}月`);
    return (React.createElement(ClCard, { type: showType },
        React.createElement(View, { className: classNames([BG_COLOR_LIST['white'], 'cuCalendar']) },
            React.createElement(ClLayout, { padding: 'small', paddingDirection: 'bottom' },
                React.createElement(ClFlex, { justify: 'between', align: 'center' },
                    React.createElement(ClTip, { renderMessage: React.createElement(View, null,
                            React.createElement(ClLayout, null,
                                React.createElement(ClFlex, { align: 'center', justify: 'between' },
                                    React.createElement(View, { onClick: () => {
                                            setCurrentYear(currentYear - 1);
                                        } },
                                        React.createElement(ClIcon, { iconName: 'pullleft' })),
                                    React.createElement(ClText, { text: currentYear + '' }),
                                    React.createElement(View, { onClick: () => {
                                            setCurrentYear(currentYear + 1);
                                        } },
                                        React.createElement(ClIcon, { iconName: 'pullright' })))),
                            React.createElement(ClGrid, { col: 4 }, months.map((item, index) => (React.createElement(View, { key: item, className: classNames([
                                    'flex justify-center align-center'
                                ]) },
                                React.createElement(ClLayout, { margin: 'small', marginDirection: 'vertical' },
                                    React.createElement(ClButton, { size: 'small', bgColor: 'light-gray', shadow: false, long: true, text: item, onClick: () => {
                                            selectDate(index);
                                        } }))))))), mode: 'click', width: 300, show: showMonths, onChange: () => {
                            setShowMonths(!showMonths);
                        } },
                        React.createElement(ClButton, { shape: 'round', shadow: false, size: 'small' },
                            React.createElement(ClText, { className: 'chooseDate', lineSpacing: 'normal', text: currentDate }))),
                    backToToday ? (React.createElement(View, { onClick: () => {
                            handleBackToToday();
                        } },
                        React.createElement(ClButton, { shadow: false, size: 'small' },
                            React.createElement(ClText, { className: 'backToToday', lineSpacing: 'normal' }, "\u4ECA")))) : (''))),
            React.createElement(View, { className: 'week' },
                React.createElement(ClGrid, { col: 7, className: 'solid-bottom' }, weekGridComponent),
                React.createElement(Swiper, { current: currentActive, circular: true, style: {
                        width: '100%',
                        height: calendarType === 'week'
                            ? pxTransform(120)
                            : pxTransform(120 * currentActiveLines)
                    }, onChange: e => {
                        if (currentActive !== e.detail.current)
                            changeDate(e.detail.current);
                    } }, calendarType === 'week' ? weeksComponent : monthsComponent)))));
}
Calendar_weapp.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map