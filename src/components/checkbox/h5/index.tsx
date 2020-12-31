import { View, Text } from "@tarojs/components";
import Taro, { pxTransform } from "@tarojs/taro";
import { Component } from "react";
import { IProps } from "../../../../@types/checkbox";
import { classNames } from "../../../lib";

interface IState {
  list: any[];
}

class ClCheckboxH5 extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps: IProps = {
    color: "green",
    type: "normal",
    shape: "normal",
    direction: "vertical",
    checkboxGroup: [],
    title: ""
  };

  constructor() {
    super(...arguments);
    this.state = {
      list: []
    } as IState;
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (prevProps.checkboxGroup !== this.props.checkboxGroup) {
      const currentCheckBox = this.props.checkboxGroup || [];
      this.setState({
        list: currentCheckBox.map(checkbox => {
          const hasExit = this.state.list.find(
            item => item.key === checkbox.key
          );
          return hasExit ? Object.assign(hasExit, checkbox) : checkbox;
        })
      });
    }
  }

  componentDidMount(): void {
    this.setState({
      list: this.props.checkboxGroup || []
    });
  }

  private change() {
    const arr = this.state.list
      .filter(item => item.checked)
      .map(item => item.value || "");
    this.props.onChange && this.props.onChange(arr);
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
    const colorClassName = this.props.color || "green";
    const type = this.props.type === "form" ? "form" : "";
    const directionClassName =
      this.props.direction === "horizontal" ? "flex" : "";
    const title = this.props.title;
    const checkboxComponent = this.state.list.map(item => (
      <View className="padding-xs" key={item.value}>
        {item.key ? (
          <Text
            className="padding-right-sm"
            style={{
              lineHeight: `${pxTransform(46)}`,
              display: "inline-block",
              verticalAlign: "text-bottom"
            }}
          >
            {item.key}
          </Text>
        ) : (
          ""
        )}
        <View
          className={classNames([
            "h5-checkbox-input",
            {
              round: this.props.shape,
              checked: item.checked,
              disabled: item.disabled,
              more: this.props.more
            }
          ])}
          onClick={() => {
            if (!item.disabled) {
              const checkItem =
                this.state.list &&
                this.state.list.find(has => has.value === item.value);
              if (checkItem) checkItem.checked = !item.checked;
              this.setState({
                list: [...this.state.list]
              });
              this.change();
            }
          }}
        />
      </View>
    ));
    const formComponent = (
      <View className="cu-form-group">
        <View className="title">{title}</View>
        <View className={directionClassName}>{checkboxComponent}</View>
      </View>
    );
    return (
      <View className={`h5-checkbox ${colorClassName}`}>
        {type === "form" ? formComponent : checkboxComponent}
      </View>
    );
  }
}

export default ClCheckboxH5;
