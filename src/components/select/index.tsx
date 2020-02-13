import { Picker, View } from "@tarojs/components";
import Taro, { useState, useMemo } from "@tarojs/taro";
import { classNames, getNowDate, isAliPay } from "../../lib";
import { IProps } from "../../../@types/select";
import { getAreaData } from "../../lib/area";

import AlipayMutiSelect from "./components/alipay/mutiSelector";

function ClSelect(props: IProps) {
  const selector = {
    range: (props.selector && props.selector.range) || [],
    value: (props.selector && props.selector.value) || 0,
    rangeKey: (props.selector && props.selector.rangeKey) || undefined
  };
  const mutiSelector = {
    range: (props.multiSelector && props.multiSelector.range) || [],
    value: (props.multiSelector && props.multiSelector.value) || [0, 0],
    rangeKey: (props.multiSelector && props.multiSelector.rangeKey) || undefined
  };
  const timeSelector = {
    value: (props.time && props.time.value) || "00:00",
    start: (props.time && props.time.start) || "00:00",
    end: (props.time && props.time.end) || "23:59"
  };
  const dateSelector = {
    value:
      (props.date && props.date.value) ||
      getNowDate((props.date && props.date.fields) || "day"),
    fields: (props.date && props.date.fields) || "day",
    start: (props.date && props.date.start) || "",
    end: (props.date && props.date.end) || ""
  };
  const getRegionData = (
    province?: { key: string; value: string },
    city?: { key: string; value: string }
  ) => {
    const regionObjData = getAreaData(province, city);
    const provinceArr = regionObjData.province.map(item => ({
      key: item[0],
      value: item[1]
    }));
    const cityArr = regionObjData.city.map(item => ({
      key: item[0],
      value: item[1] as string
    }));
    const districtArr = regionObjData.district.map(item => ({
      key: item[0],
      value: item[1] as string
    }));
    return [provinceArr, cityArr, districtArr];
  };

  const regionSelector = {
    value:
      (props.region && props.region.value) ||
      getRegionData().map(item => item[0])
  };
  // 单选
  const getSelectorValue = index =>
    selector.rangeKey
      ? selector.range[index][selector.rangeKey]
      : selector.range[index];
  const [selected, setSelected] = useState(() =>
    getSelectorValue(selector.value)
  );
  const setSelect = index => {
    const value: string = getSelectorValue(index);
    setSelected(value);
  };
  // 多选
  const getMutiSelectorValue = mutiIndex => {
    const value: any[] = [];
    mutiSelector.range.forEach((item, index) => {
      const rangeValue = mutiIndex[index];
      const temp = mutiSelector.rangeKey
        ? item[rangeValue][mutiSelector.rangeKey]
        : item[rangeValue];
      value.push(temp);
    });
    return value.join(",");
  };
  const [mutiSelected, setMutiSelected] = useState(() =>
    getMutiSelectorValue(mutiSelector.value)
  );
  const setMutiSelect = index => {
    setMutiSelected(getMutiSelectorValue(index));
  };
  // 时间选择
  const getTimeSelectorValue = value => value;
  const [timeSelected, setTimeSelected] = useState(() =>
    getTimeSelectorValue(timeSelector.value)
  );
  const setTimeSelect = value => {
    setTimeSelected(getTimeSelectorValue(value));
  };
  // 日期选择
  const getDateSelectorValue = value => value;
  const [dateSelected, setDateSelected] = useState(() =>
    getDateSelectorValue(dateSelector.value)
  );
  const setDateSelect = value => {
    setDateSelected(getDateSelectorValue(value));
  };
  // 地区选择
  const [areaData, setAreaData] = useState(
    getRegionData(...regionSelector.value)
  );
  const getRegionSelectorValue = (value: any[]) =>
    value.map(item => item.value).join(",");
  const [regionSelected, setRegionSelected] = useState(() =>
    getRegionSelectorValue(regionSelector.value)
  );
  const [confirmRegion, setConfirmRegion] = useState(regionSelector.value);
  const [originAreaData, setOriginAreaData] = useState(areaData);
  const setRegionSelect = value => {
    setRegionSelected(getRegionSelectorValue(value));
  };

  // 单选触发
  const onSelectorChange = (e: any) => {
    const index = e.detail.value;
    setSelect(index);
    props.onChange && props.onChange(index);
  };
  // 多选触发
  const onMutiSelectorChange = (e: any) => {
    const index = e.detail.value;
    setMutiSelect(index);
    props.onChange && props.onChange(index);
  };
  // 多选滚动触发
  const onMutiSelectorColumChange = (e: any) => {
    props.onColumnChange && props.onColumnChange(e.detail);
  };
  // 时间触发
  const onTimeSelectorChange = (e: any) => {
    const index = e.detail.value;
    setTimeSelect(index);
    props.onChange && props.onChange(index);
  };
  // 日期触发
  const onDateSelectorChange = (e: any) => {
    const index = e.detail.value;
    setDateSelect(index);
    props.onChange && props.onChange(index);
  };
  const origin = regionSelector.value.map((item, index) =>
    originAreaData[index].findIndex(obj => obj.key === item.key)
  );

  const onCancel = (e: any) => {
    setAreaData(originAreaData);
    setTempSelect(
      confirmRegion.map((item, index) =>
        originAreaData[index].findIndex(origin => origin.key === item.key)
      )
    );
    props.onCancel && props.onCancel(e);
  };
  // 地区触发
  const onRegionSelectorChange = (e: any) => {
    const detail = e.detail.value;
    const dataSelected = detail.map((key, index) => areaData[index][key]);
    setRegionSelect(dataSelected);
    setOriginAreaData(areaData);
    setConfirmRegion(dataSelected);
    props.onChange && props.onChange(dataSelected);
  };
  const [tempSelect, setTempSelect] = useState(origin);
  const onRegionMutiSelectorColumChange = (e: any) => {
    const detail = e.detail;
    const column = detail.column;
    const index = e.detail.value;
    tempSelect[column] = index;
    if (column !== 2) {
      if (column === 0) {
        tempSelect[1] = 0;
        tempSelect[2] = 0;
        setAreaData(getRegionData(areaData[0][tempSelect[0]]));
      }
      if (column === 1) {
        tempSelect[2] = 0;
        setAreaData(
          getRegionData(areaData[0][tempSelect[0]], areaData[1][tempSelect[1]])
        );
      }
    }
    setTempSelect(tempSelect);
  };
  useMemo(() => {
    switch (props.mode) {
      case "selector": {
        setSelected(getSelectorValue(selector.value));
        break;
      }
      case "multiSelector": {
        setMutiSelected(getMutiSelectorValue(mutiSelector.value));
        break;
      }
      case "region": {
        setRegionSelected(getRegionSelectorValue(regionSelector.value));
        const area = getRegionData(...regionSelector.value);
        setAreaData(area);
        const origin = regionSelector.value.map((item, index) =>
          area[index].findIndex(obj => obj.key === item.key)
        );
        setTempSelect(origin);
        break;
      }
      case "date": {
        setDateSelected(getDateSelectorValue(dateSelector.value));
        break;
      }
      case "time": {
        setTimeSelected(getTimeSelectorValue(timeSelector.value));
        break;
      }
      default: {
      }
    }
  }, [
    props.selector,
    props.region,
    props.date,
    props.time,
    props.multiSelector
  ]);
  // 单选组件
  const selectorComponent = (
    <Picker
      mode="selector"
      range={selector.range}
      rangeKey={selector.rangeKey}
      value={selector.value || 0}
      onChange={onSelectorChange}
      onCancel={onCancel}
      disabled={props.disabled}
    >
      <View className="picker">{selected}</View>
    </Picker>
  );
  // 多选组件
  const mutiSelectorComponent = (
    <Picker
      mode="multiSelector"
      range={mutiSelector.range}
      rangeKey={mutiSelector.rangeKey}
      value={mutiSelector.value}
      onChange={onMutiSelectorChange}
      onColumnChange={onMutiSelectorColumChange}
      onCancel={onCancel}
      disabled={props.disabled}
    >
      <View className="picker">{mutiSelected}</View>
    </Picker>
  );

  // alipay 多选
  const alipayMutiSelectorComponent = <AlipayMutiSelect {...props} />;

  // 时间选择组件
  const timeSelectorComponent = (
    <Picker
      mode="time"
      value={timeSelector.value}
      start={timeSelector.start}
      end={timeSelector.end}
      onChange={onTimeSelectorChange}
      onCancel={onCancel}
      disabled={props.disabled}
    >
      <View className="picker">{timeSelected}</View>
    </Picker>
  );
  // 日期选择组件
  const dateSelectorComponent = (
    <Picker
      mode="date"
      value={dateSelector.value}
      start={dateSelector.start}
      end={dateSelector.end}
      fields={dateSelector.fields}
      onCancel={onCancel}
      onChange={onDateSelectorChange}
    >
      <View className="picker">{dateSelected}</View>
    </Picker>
  );
  // 地区选择组件

  const regionSelectorComponent = (
    <Picker
      mode="multiSelector"
      range={areaData}
      rangeKey={"value"}
      value={tempSelect}
      onChange={onRegionSelectorChange}
      onColumnChange={onRegionMutiSelectorColumChange}
      onCancel={onCancel}
      disabled={props.disabled}
    >
      <View className="picker">{regionSelected}</View>
    </Picker>
  );

  const title = props.title;
  return (
    <View
      className={classNames(
        `cu-form-group ${props.disabled ? "text-gray" : ""}`,
        props.className
      )}
      style={Object.assign({}, props.style)}
    >
      <View className="title">{title || ""}</View>
      {props.mode === "selector" ? selectorComponent : ""}
      {props.mode === "multiSelector" && !isAliPay ? mutiSelectorComponent : ""}
      {props.mode === "multiSelector" && isAliPay
        ? alipayMutiSelectorComponent
        : ""}
      {props.mode === "time" ? timeSelectorComponent : ""}
      {props.mode === "date" ? dateSelectorComponent : ""}
      {props.mode === "region" ? regionSelectorComponent : ""}
    </View>
  );
}

ClSelect.options = {
  addGlobalClass: true
};
ClSelect.defaultProps = {
  mode: "selector",
  selector: [],
  multiSelector: [],
  time: [],
  date: [],
  region: []
} as IProps;
export default ClSelect;
