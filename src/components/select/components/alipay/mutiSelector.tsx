import React, { Component } from "react";
import { IProps } from "../../../../../@types/select";
import { PickerView, PickerViewColumn, View } from "@tarojs/components";
import { classNames } from "../../../../lib";
import ClDrawer from "../../../../components/drawer";
import ClLayout from "../../../../components/layout";
import ClFlex from "../../../../components/flex";
import ClText from "../../../../components/text";

interface IState {
  show: boolean;
  selectedValue: string;
  tempSelected: number[];
  lastSelected: number[];
}

class AlipayMutiSelect extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static state: IState = {
    show: false,
    selectedValue: "",
    tempSelected: [],
    lastSelected: []
  };
  constructor(props) {
    super(props);
  }

  private updateData() {
    const { multiSelector } = this.props;
    const range = (multiSelector && multiSelector.range) || [];
    const rangeKey = (multiSelector && multiSelector.rangeKey) || "";
    const value = (multiSelector && multiSelector.value) || [];
    if (value.length) {
      const selected = range.map((list: any[], index) => list[value[index]]);
      this.setState({
        selectedValue: selected
          .map(item => (typeof item === "string" ? item : item[rangeKey]))
          .join(",")
      });
    } else {
      this.setState({
        selectedValue: range
          .map(item => item[0])
          .map(item => (typeof item === "string" ? item : item[rangeKey]))
          .join(",")
      });
    }
    this.setState({
      lastSelected: value.length ? value : range.map(() => 0)
    });
  }

  componentDidMount(): void {
    this.updateData();
  }

  public onClick() {
    this.setState({
      show: true
    });
  }

  public onConfirm() {
    const { multiSelector } = this.props;
    const range = (multiSelector && multiSelector.range) || [];
    const rangeKey = (multiSelector && multiSelector.rangeKey) || "";
    const current = range.map(item =>
      typeof item[0] === "string" ? item : item[rangeKey]
    );
    this.props.onChange && this.props.onChange(this.state.tempSelected);
    this.setState({
      show: false,
      selectedValue: this.state.tempSelected
        .map((num, index) => current[index][num])
        .join(","),
      lastSelected: this.state.tempSelected
    });
  }

  public onCancel() {
    this.props.onCancel && this.props.onCancel(this.state.lastSelected);
    this.setState({
      show: false,
      tempSelected: this.state.lastSelected
    });
  }

  private tempChangeValue(e) {
    const value = e.detail.value;
    this.props.onColumnChange && this.props.onColumnChange(value);
    this.setState({
      tempSelected: value
    });
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
    const { multiSelector } = this.props;
    const range = (multiSelector && multiSelector.range) || [];
    const rangeKey = (multiSelector && multiSelector.rangeKey) || "";
    const value = (multiSelector && multiSelector.value) || [];
    return (
      <View
        className={classNames(["cu-form-picker"])}
        onClick={this.onClick.bind(this)}
      >
        <View className="picker">{this.state.selectedValue}</View>
        <ClDrawer
          closeWithShadow
          show={this.state.show}
          onCancel={() => {
            this.setState({
              show: false
            });
          }}
        >
          <ClLayout padding={"normal"} paddingDirection="vertical">
            <ClLayout padding={"large"} paddingDirection={"horizontal"}>
              <ClFlex justify={"between"}>
                <View onClick={this.onCancel.bind(this)}>
                  <ClText text="取消" textColor={"green"} />
                </View>
                <View onClick={this.onConfirm.bind(this)}>
                  <ClText text="确定" textColor={"green"} />
                </View>
              </ClFlex>
            </ClLayout>
          </ClLayout>
          <PickerView value={value} onChange={this.tempChangeValue.bind(this)}>
            {range.map((itemList: any[], index) => {
              return (
                <PickerViewColumn key={"key-" + index}>
                  {itemList.map((item, index) => {
                    let name = typeof item !== "string" ? item[rangeKey] : item;
                    return <View key={"key-" + index}>{name}</View>;
                  })}
                </PickerViewColumn>
              );
            })}
          </PickerView>
        </ClDrawer>
      </View>
    );
  }
}

export default AlipayMutiSelect;
