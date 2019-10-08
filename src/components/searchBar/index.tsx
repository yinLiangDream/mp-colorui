import { Button, Input, ScrollView, Text, View } from "@tarojs/components";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from "../utils/model";
import { IProps } from "../../../@types/searchBar";
import ClCard from "../card";
import ClSearchResult from "./searchReault";
import { classNames } from "@/components/utils";

interface IState {
  showSearch?: boolean;
  value?: string;
}

export default class ClSearchBar extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps: IProps = {
    shape: "radius",
    fix: false,
    searchType: "button",
    leftIcons: [],
    bgColor: undefined,
    rightButtonColor: "white",
    rightTextColor: "black",
    placeholder: "请搜索",
    showLoading: false,
    showResult: false,
    result: [],
    onTouchResult: () => {}
  };
  state: IState = {
    showSearch: false,
    value: ""
  };

  onIconClick(index: number) {
    this.props.onIconClick && this.props.onIconClick(index);
  }

  onSearch(e) {
    e.stopPropagation();
    this.props.onSearch && this.props.onSearch(this.state.value || "");
  }

  onFocus() {
    this.setState({
      showSearch: true
    });
  }

  onBlur(e) {
    this.setState({
      showSearch: false,
      value: e.detail.value
    });
  }

  onInput(e) {
    this.setState({
      value: e.detail.value
    });
    this.props.onInput && this.props.onInput(e.detail.value);
  }

  static onPreventProp(e) {
    e.stopPropagation();
  }

  render(): any {
    const bgColorClassName = this.props.bgColor
      ? BG_COLOR_LIST[this.props.bgColor]
      : "";
    const buttonColorClassName = this.props.rightButtonColor
      ? BG_COLOR_LIST[this.props.rightButtonColor]
      : "";
    const textColorClassName = this.props.rightTextColor
      ? TEXT_COLOR_LIST[this.props.rightTextColor]
      : "";
    const leftIconComponent = this.props.leftIcons
      ? this.props.leftIcons.map((item, index) => (
          <View
            key={index}
            className={`cu-avatar round cuIcon-${item}`}
            onClick={this.onIconClick.bind(this, index)}
          />
        ))
      : "";
    const searchComponent = (
      <View className={`search-form ${this.props.shape}`}>
        <Text className="cuIcon-search" />
        <Input
          placeholder={this.props.placeholder}
          confirmType="search"
          type="text"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          focus={this.state.showSearch}
          adjustPosition
          value={this.state.value}
          onConfirm={this.onSearch.bind(this)}
          onInput={this.onInput.bind(this)}
        />
      </View>
    );
    const buttonComponent = (
      <View className="action" onClick={ClSearchBar.onPreventProp.bind(this)}>
        <Button
          className={`cu-btn shadow-blur ${
            this.props.shape
          } ${buttonColorClassName} ${textColorClassName}`}
          onClick={this.onSearch.bind(this)}
        >
          搜索
        </Button>
      </View>
    );
    const textComponent = (
      <View className="action" onClick={ClSearchBar.onPreventProp.bind(this)}>
        <Text
          className={`${textColorClassName}`}
          onClick={this.onSearch.bind(this)}
        >
          搜索
        </Text>
      </View>
    );
    return (
      <View
        style={
          this.props.fix
            ? { position: "fixed", top: "0", width: "100vw", zIndex: 10 }
            : ""
        }
      >
        <View
          className={classNames(
            `cu-bar ${bgColorClassName}`,
            this.props.className
          )}
          style={Object.assign({ position: "relative" }, this.props.style)}
        >
          {leftIconComponent}
          {searchComponent}
          {this.props.searchType === "text"
            ? textComponent
            : this.props.searchType === "none"
            ? ""
            : buttonComponent}
          {this.props.showResult ? (
            <View
              style={{
                position: "absolute",
                width: "100%",
                zIndex: 11,
                top: pxTransform(100)
              }}
            >
              {(this.props.result && this.props.result.length) ||
              this.props.showLoading ? (
                <ClCard shadow={false} bgColor={this.props.bgColor}>
                  <ScrollView scrollY style={{ maxHeight: "300px" }}>
                    <ClSearchResult
                      result={this.props.result}
                      showLoading={this.props.showLoading}
                      onTouchResult={this.props.onTouchResult}
                    />
                  </ScrollView>
                </ClCard>
              ) : (
                ""
              )}
            </View>
          ) : (
            ""
          )}
        </View>
      </View>
    );
  }
}
