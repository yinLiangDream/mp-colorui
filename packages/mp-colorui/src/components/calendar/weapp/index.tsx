import { pxTransform } from '@tarojs/taro'
import React, { useState, useEffect } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { IProps } from '../../../../@types/calendar'
import dayjs from 'dayjs'
import ClGrid from '../../grid'
import ClText from '../../text'
import ClFlex from '../../flex'
import ClLayout from '../../layout'
import ClCard from '../../card'
import ClIcon from '../../icon'
import { classNames } from '../../../lib'
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../../../lib/model'
import ClButton from '../../button'
import ClTip from '../../tip'

import '../index.scss'

export default function Calendar_weapp(props: IProps) {
  const {
    highlightWeekendColor,
    calendarType,
    showType,
    activeColor,
    tipDay,
    backToToday,
    disabledDay,
    badge,
    onChange,
    onClick,
    highlightWeekend,
    specialDay
  } = props

  const FORMAT_DATE = 'YYYY-MM-DD'
  const THIS_WEEK = 'thisWeek'
  const PRE_WEEK = 'preWeek'
  const NEXT_WEEK = 'nextWeek'
  const PRE_MONTH = 'preMonth'
  const THIS_MONTH = 'thisMonth'
  const NEXT_MONTH = 'nextMonth'
  const today = dayjs().format(FORMAT_DATE)
  const mapChangeWeekIndex = [PRE_WEEK, THIS_WEEK, NEXT_WEEK]
  const mapChangeMonthIndex = [PRE_MONTH, THIS_MONTH, NEXT_MONTH]

  const [thisWeek, setThisWeek] = useState([] as any[])
  const [preWeek, setPreWeek] = useState([] as any[])
  const [nextWeek, setNextWeek] = useState([] as any[])
  const [thisMonth, setThisMonth] = useState([] as any[])
  const [preMonth, setPreMonth] = useState([] as any[])
  const [nextMonth, setNextMonth] = useState([] as any[])
  const [chooseDate, setChooseDate] = useState(today)
  const [currentDate, setCurrentDate] = useState(dealYearMonth(dayjs(today)))
  const [currentActive, setCurrentActive] = useState(1)
  const [currentActiveLines, setCurrentActiveLines] = useState(5)
  const [showMonths, setShowMonths] = useState(false)
  const [currentYear, setCurrentYear] = useState(dayjs().year())

  const selectDate = month => {
    const year = currentYear
    const date = `${year}-${month + 1}-01`
    changeMonth(date)
    setShowMonths(false)
    setCurrentDate(dealYearMonth(dayjs(date)))
  }
  function dealYearMonth(day) {
    return `${day.year()}年${day.month() + 1}月`
  }

  const clickDate = ({ item }) => {
    if (item.disabled) return
    if (item.empty) return
    if (calendarType === 'week') {
      const weeks = {
        thisWeek,
        preWeek,
        nextWeek
      }
      Object.keys(weeks).forEach(week => {
        weeks[week].forEach(item => (item.active = false))
      })
    } else {
      const months = {
        thisMonth,
        preMonth,
        nextMonth
      }
      Object.keys(months).forEach(month => {
        months[month].forEach(item => (item.active = false))
      })
    }

    item.active = true
    setChooseDate(item.date)
    onClick && onClick(item.date)
  }

  const getPreNextArray = (index: number, data) => {
    const varChange =
      calendarType === 'week'
        ? {
            PRE: PRE_WEEK,
            THIS: THIS_WEEK,
            NEXT: NEXT_WEEK
          }
        : {
            PRE: PRE_MONTH,
            THIS: THIS_MONTH,
            NEXT: NEXT_MONTH
          }
    const dataChange =
      calendarType === 'week'
        ? {
            PRE: 'tempPreWeek',
            THIS: 'tempThisWeek',
            NEXT: 'tempNextWeek'
          }
        : {
            PRE: 'tempPreMonth',
            THIS: 'tempThisMonth',
            NEXT: 'tempNextMonth'
          }
    let current = {
      [varChange.PRE]: data[dataChange.PRE],
      [varChange.THIS]: data[dataChange.THIS],
      [varChange.NEXT]: data[dataChange.NEXT]
    }
    if (index === 0) {
      current[varChange.PRE] = data[dataChange.THIS]
      current[varChange.THIS] = data[dataChange.NEXT]
      current[varChange.NEXT] = data[dataChange.PRE]
    }
    if (index === 2) {
      current[varChange.PRE] = data[dataChange.NEXT]
      current[varChange.THIS] = data[dataChange.PRE]
      current[varChange.NEXT] = data[dataChange.THIS]
    }
    return current
  }

  const changeDate = (arrayIndex: number) => {
    let currentDate = ''
    if (calendarType === 'week') {
      const oldWeeks = {
        thisWeek,
        preWeek,
        nextWeek
      }
      const showWeeks = oldWeeks[mapChangeWeekIndex[arrayIndex]]
      setCurrentDate(dealYearMonth(dayjs(showWeeks[3].date)))
      currentDate = dayjs(showWeeks[3].date).format('YYYY-MM')
      const newWeeks = getWeeks(
        oldWeeks[mapChangeWeekIndex[arrayIndex]][3].date
      )
      const current = getPreNextArray(arrayIndex, newWeeks)
      setCurrentActive(arrayIndex)
      setPreWeek(current[PRE_WEEK])
      setNextWeek(current[NEXT_WEEK])
      setThisWeek(current[THIS_WEEK])
    } else {
      const oldMonths = {
        thisMonth,
        preMonth,
        nextMonth
      }
      const showMonths = oldMonths[mapChangeMonthIndex[arrayIndex]]
      currentDate = dayjs(showMonths[8].date).format('YYYY-MM')
      setCurrentDate(dealYearMonth(dayjs(showMonths[8].date)))
      setCurrentActiveLines(Math.ceil(showMonths.length / 7))
      const newMonths = getMonths(
        oldMonths[mapChangeMonthIndex[arrayIndex]][8].date
      )
      const current = getPreNextArray(arrayIndex, newMonths)
      setCurrentActive(arrayIndex)
      setPreMonth(current[PRE_MONTH])
      setNextMonth(current[NEXT_MONTH])
      setThisMonth(current[THIS_MONTH])
    }
    onChange && onChange(currentDate)
  }

  function changeMonth(date) {
    if (calendarType === 'week') {
      const weeks = getWeeks(date)
      let newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1
      setCurrentActive(newIndex)
      const current = getPreNextArray(newIndex, weeks)
      setPreWeek(current[PRE_WEEK])
      setNextWeek(current[NEXT_WEEK])
      setThisWeek(current[THIS_WEEK])
    } else {
      const months = getMonths(date)
      let newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1
      setCurrentActive(newIndex)
      const current = getPreNextArray(newIndex, months)
      setPreMonth(current[PRE_MONTH])
      setNextMonth(current[NEXT_MONTH])
      setThisMonth(current[THIS_MONTH])
    }
  }

  const handleBackToToday = () => {
    setChooseDate(today)
    changeMonth(today)
  }

  function dealEveryDay({ i, currentDay, date }) {
    const thisNum = i - currentDay
    const method = thisNum > 0 ? 'add' : 'subtract'
    const day = dayjs(date)[method](Math.abs(thisNum), 'day')
    const tipDayArray = tipDay || []
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
    }
    // tip
    const tipIndex = tipDayArray.findIndex(item => item.date === dateData.date)
    if (tipIndex >= 0) {
      const tipData = tipDayArray[tipIndex]
      dateData = Object.assign(dateData, {
        tipTop: tipData.tipTop || '',
        tipBottom: tipData.tipBottom || '',
        tipTopColor: tipData.tipTopColor,
        tipBottomColor: tipData.tipBottomColor
      })
    }
    // badge
    if (typeof badge === 'string' && dateData.date === badge) {
      Object.assign(dateData.badge, { show: true })
    } else if (badge instanceof Array) {
      badge.forEach(item => {
        if (item.date === dateData.date) {
          Object.assign(dateData.badge, {
            show: true,
            color: item.color || 'red',
            num: item.num || ''
          })
        }
      })
    }

    // disabledDay
    if (disabledDay instanceof Array) {
      disabledDay.forEach((item: any) => {
        if (typeof item === 'string') {
          dateData.disabled = dateData.date === item
        } else if (item instanceof Array) {
          let minDate = item[0] && dayjs(item[0]).valueOf()
          let maxDate = item[1] && dayjs(item[1]).valueOf()
          if (minDate && maxDate) {
            dateData.disabled =
              dateData.timeStamp > minDate && dateData.timeStamp < maxDate
          } else if (minDate) {
            dateData.disabled = dateData.timeStamp > minDate
          } else if (maxDate) {
            dateData.disabled = dateData.timeStamp < maxDate
          }
        }
      })
    }

    // specialDay
    if (specialDay instanceof Array) {
      specialDay.forEach(item => {
        if (typeof item === 'string') {
          dateData.special.show = item === dateData.date
        } else if (typeof item === 'object') {
          const date = item.date
          const color = item.color
          Object.assign(dateData.special, {
            date: date === dateData.date,
            color
          })
        }
      })
    }

    return dateData
  }

  function getWeeks(date: string) {
    const weekday: number = dayjs(date).day()
    const tempThisWeek: any[] = []
    const tempPreWeek: any[] = []
    const tempNextWeek: any[] = []
    let i = -7
    while (1) {
      if (i >= 14) break
      const dateData = dealEveryDay({
        i,
        currentDay: weekday,
        date
      })

      if (i < 0) {
        tempPreWeek.push(dateData)
      } else if (i >= 7) {
        tempNextWeek.push(dateData)
      } else {
        tempThisWeek.push(dateData)
      }
      i++
    }
    return {
      tempThisWeek,
      tempPreWeek,
      tempNextWeek
    }
  }

  function fillMonths(months) {
    const firstDay = months[0]
    let weekday = dayjs(firstDay.date).day()
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
      })
      weekday--
    }
    return months
  }

  function getMonths(date) {
    const tempThisMonth: any[] = []
    const tempPreMonth: any[] = []
    const tempNextMonth: any[] = []
    const preMonthDays = dayjs(date).subtract(1, 'month').daysInMonth()
    const thisMonthDays = dayjs(date).daysInMonth()
    const thisDays = dayjs(date).date()
    const nextMonthDays = dayjs(date).add(1, 'month').daysInMonth()
    let i = -preMonthDays + 1
    while (1) {
      if (i > nextMonthDays + thisMonthDays) break
      const dateData = dealEveryDay({
        i,
        currentDay: thisDays,
        date
      })

      if (i <= 0) {
        tempPreMonth.push(dateData)
      } else if (i > thisMonthDays) {
        tempNextMonth.push(dateData)
      } else {
        tempThisMonth.push(dateData)
      }
      i++
    }
    return {
      tempThisMonth: fillMonths(tempThisMonth),
      tempPreMonth: fillMonths(tempPreMonth),
      tempNextMonth: fillMonths(tempNextMonth)
    }
  }

  // useEffect(() => {}, [preWeek, nextWeek, thisWeek]);

  useEffect(() => {
    if (calendarType === 'week') {
      const weeks = getWeeks(today)
      setPreWeek(weeks.tempPreWeek)
      setThisWeek(weeks.tempThisWeek)
      setNextWeek(weeks.tempNextWeek)
    } else {
      const months = getMonths(today)
      setPreMonth(months.tempPreMonth)
      setThisMonth(months.tempThisMonth)
      setNextMonth(months.tempNextMonth)
    }
  }, [calendarType])

  const weekGridComponent = [
    '周日',
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六'
  ].map((week, index) => (
    <View key={week}>
      <ClText
        align={'center'}
        size={'small'}
        lineSpacing={'small'}
        textColor={
          highlightWeekend
            ? [0, 6].includes(index)
              ? highlightWeekendColor
              : 'black'
            : 'black'
        }
      >
        {week}
      </ClText>
    </View>
  ))
  const BGClassName = BG_COLOR_LIST[activeColor || 'blue']
  const oldTextClassName = TEXT_COLOR_LIST['gray']

  const weeksComponent = [preWeek, thisWeek, nextWeek].map((week, index) => (
    <SwiperItem key={week[3].date}>
      <ClGrid col={7}>
        {week.map(item => (
          <View
            key={item.timeStamp}
            onClick={clickDate.bind(this, {
              item,
              type: mapChangeWeekIndex[index]
            })}
          >
            <ClLayout padding={'small'} paddingDirection={'vertical'}>
              <ClFlex align={'center'} justify={'center'}>
                <View
                  style={{
                    position: 'relative'
                  }}
                  className={classNames([
                    'day-normal',
                    `${item.disabled ? BG_COLOR_LIST['gray'] : ''}`,
                    `${
                      item.special.show && !item.active
                        ? BG_COLOR_LIST[item.special.color]
                        : ''
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
                        ['cu-tag badge']: item.badge.show
                      },
                      BG_COLOR_LIST[item.badge.color]
                    ])}
                  >
                    {item.badge.num}
                  </View>
                  <ClFlex
                    align={'center'}
                    justify={'center'}
                    direction={'column'}
                  >
                    <ClText
                      size={12}
                      align={'center'}
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
                      align={'center'}
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

  const monthsComponent = [preMonth, thisMonth, nextMonth].map(
    (month, index) => (
      <SwiperItem key={month[3].date}>
        <ClGrid col={7}>
          {month.map(item => (
            <View
              key={item.timeStamp}
              onClick={clickDate.bind(this, {
                item,
                type: mapChangeWeekIndex[index]
              })}
            >
              <ClLayout padding={'small'} paddingDirection={'vertical'}>
                <ClFlex align={'center'} justify={'center'}>
                  <View
                    style={{
                      position: 'relative'
                    }}
                    className={classNames([
                      'day-normal',
                      `${item.disabled ? BG_COLOR_LIST['gray'] : ''}`,
                      `${
                        item.special.show && !item.active
                          ? BG_COLOR_LIST[item.special.color]
                          : ''
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
                          ['cu-tag badge']: item.badge.show
                        },
                        BG_COLOR_LIST[item.badge.color]
                      ])}
                    >
                      {item.badge.num}
                    </View>
                    <ClFlex
                      align={'center'}
                      justify={'center'}
                      direction={'column'}
                    >
                      <ClText
                        size={12}
                        align={'center'}
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
                        align={'center'}
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
    )
  )

  const months = Array.from(Array(12)).map((_item, index) => `${index + 1}月`)

  return (
    <ClCard type={showType}>
      <View className={classNames([BG_COLOR_LIST['white'], 'cuCalendar'])}>
        <ClLayout padding={'small'} paddingDirection={'bottom'}>
          <ClFlex justify={'between'} align={'center'}>
            <ClTip
              renderMessage={
                <View>
                  <ClLayout>
                    <ClFlex align={'center'} justify={'between'}>
                      <View
                        onClick={() => {
                          setCurrentYear(currentYear - 1)
                        }}
                      >
                        <ClIcon iconName={'pullleft'} />
                      </View>
                      <ClText text={currentYear + ''} />
                      <View
                        onClick={() => {
                          setCurrentYear(currentYear + 1)
                        }}
                      >
                        <ClIcon iconName={'pullright'} />
                      </View>
                    </ClFlex>
                  </ClLayout>
                  <ClGrid col={4}>
                    {months.map((item, index) => (
                      <View
                        key={item}
                        className={classNames([
                          'flex justify-center align-center'
                        ])}
                      >
                        <ClLayout margin={'small'} marginDirection={'vertical'}>
                          <ClButton
                            size={'small'}
                            bgColor={'light-gray'}
                            shadow={false}
                            long
                            text={item}
                            onClick={() => {
                              selectDate(index)
                            }}
                          />
                        </ClLayout>
                      </View>
                    ))}
                  </ClGrid>
                </View>
              }
              mode={'click'}
              width={300}
              show={showMonths}
              onChange={() => {
                setShowMonths(!showMonths)
              }}
            >
              <ClButton shape={'round'} shadow={false} size={'small'}>
                <ClText
                  className={'chooseDate'}
                  lineSpacing={'normal'}
                  text={currentDate}
                />
              </ClButton>
            </ClTip>
            {backToToday ? (
              <View
                onClick={() => {
                  handleBackToToday()
                }}
              >
                <ClButton shadow={false} size={'small'}>
                  <ClText className={'backToToday'} lineSpacing={'normal'}>
                    今
                  </ClText>
                </ClButton>
              </View>
            ) : (
              ''
            )}
          </ClFlex>
        </ClLayout>
        <View className='week'>
          <ClGrid col={7} className='solid-bottom'>
            {weekGridComponent}
          </ClGrid>
          <Swiper
            current={currentActive}
            circular
            style={{
              width: '100%',
              height:
                calendarType === 'week'
                  ? pxTransform(120)
                  : pxTransform(120 * currentActiveLines)
            }}
            onChange={e => {
              if (currentActive !== e.detail.current)
                changeDate(e.detail.current)
            }}
          >
            {calendarType === 'week' ? weeksComponent : monthsComponent}
          </Swiper>
        </View>
      </View>
    </ClCard>
  )
}

Calendar_weapp.options = {
  addGlobalClass: true
}
