import { Image, Input, View, ScrollView } from "@tarojs/components";
import Taro, { useState, pxTransform, useEffect, useMemo } from "@tarojs/taro";
import ClButton from "../button";
import ClIcon from "../icon/index";
import { IProps } from "../../../@types/input";

import "./index.scss";
import { classNames, screenPercent } from "../../components/utils/index";
import ClSearchResult from "../searchBar/searchResult/index";
import ClCard from "../card";

function ClInput(props: IProps) {
  const [focus, setFocus] = useState(false);
  const [normalType, setNormalType] = useState();
  const [tempInput, setTempInput] = useState("");
  const [initValue, setInitValue] = useState(props.value);
  const [inputId, setInputId] = useState(`cl-input-${+new Date()}`);
  const [materialWidth, setMaterialWidth] = useState("0px");
  const [defaultValue, setDefaultValue] = useState(props.defaultValue);
  const [showComplete, setShowComplete] = useState(false);
  const [firstInit, setFirstInit] = useState(true);
  useMemo(() => {
    if (props.defaultValue !== "" && defaultValue === "") {
      setDefaultValue(defaultValue);
    }
  }, [props.defaultValue]);
  const isH5 = Taro.ENV_TYPE.WEB === Taro.getEnv();

  const onChange = (event: any) => {
    setFirstInit(false);
    let input = event.detail.value;
    setInitValue(input);
    props.autoComplete && setShowComplete(true);
    if (props.type === "number") {
      if (Taro.ENV_TYPE.WEB === Taro.getEnv()) {
        if (!isNaN(event.data - 0)) {
          if (event.data === null) {
            input = tempInput.slice(0, tempInput.length - 1);
          } else {
            input = tempInput + parseInt(`${event.data - 0}`);
          }
        } else {
          input = tempInput;
        }
        setTempInput(input);
        setTimeout(() => {
          setInitValue(input);
        });
      } else {
        input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
        if (input !== null) {
          setTempInput(input);
          setInitValue(input);
        } else {
          setTimeout(() => {
            setInitValue(tempInput);
          });
        }
      }
    } else if (props.type === "digit") {
      if (Taro.ENV_TYPE.WEB === Taro.getEnv()) {
        if (!isNaN(event.data - 0)) {
          if (event.data === null) {
            input = tempInput.slice(0, tempInput.length - 1);
          } else {
            input = tempInput + parseInt(`${event.data - 0}`);
          }
        } else {
          input =
            event.data === "." && tempInput.indexOf(".") === -1
              ? tempInput + event.data
              : tempInput;
        }
        setTempInput(input);
        setTimeout(() => {
          setInitValue(input);
        });
      } else {
        input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
        if (input !== null) {
          setTempInput(input);
          setInitValue(input);
        } else {
          setTimeout(() => {
            setInitValue(tempInput);
          });
        }
      }
    } else {
      setInitValue(input);
    }
    props.onChange && props.onChange(input);
  };
  const onBlur = (event: any) => {
    setFocus(false);
    props.onBlur && props.onBlur(event.detail.value);
  };
  const onFocus = (event: any) => {
    setFocus(true);
    props.onFocus && props.onFocus(event.detail.value);
  };
  const onIconClick = (event: any) => {
    props.onIconClick && props.onIconClick(event);
  };
  const onImageClick = (event: any) => {
    props.onImageClick && props.onImageClick(event);
  };
  if (props.type !== "password") {
    if (props.type !== normalType) {
      setNormalType(props.type === "digit" ? "text" : props.type);
    }
  }
  const iconComponent = props.icon ? (
    <View onClick={onIconClick}>
      <ClIcon {...props.icon} />
    </View>
  ) : (
    ""
  );
  const buttonComponent = props.button ? <ClButton {...props.button} /> : "";
  const imageComponent = props.image ? (
    <View onClick={onImageClick} style={{}}>
      <Image
        src={props.image || ""}
        mode="aspectFit"
        style={{
          maxWidth: Taro.pxTransform(100),
          maxHeight: Taro.pxTransform(100)
        }}
      />
    </View>
  ) : (
    ""
  );
  const autoCompleteComponent = props.autoComplete ? (
    <View
      style={{
        position: "absolute",
        top: pxTransform(100),
        left: pxTransform(0),
        width: `100%`,
        display: showComplete ? "" : "none"
      }}
    >
      <ClCard shadow={false} bgColor={this.props.bgColor} type="full">
        <ScrollView scrollY style={{ maxHeight: "300px" }}>
          <ClSearchResult
            showLoading={props.completeLoading}
            result={
              props.completes
                ? props.completes.map(str => ({
                    title: str
                  }))
                : []
            }
            onTouchResult={index => {
              if (props.completes) {
                setInitValue(props.completes[index]);
                setTempInput(props.completes[index]);
                props.onTouchResult &&
                  props.onTouchResult(props.completes[index], index);
              }
              setShowComplete(false);
            }}
          />
        </ScrollView>
      </ClCard>
    </View>
  ) : (
    ""
  );
  let {
    title,
    placeholder,
    value,
    adjustPosition,
    type,
    maxLength,
    disabled,
    renderCustomRight,
    autoFocus
  } = props;
  let titleWidth =
    props.titleWidth === "auto"
      ? {}
      : {
          width: pxTransform(props.titleWidth || 200)
        };
  useMemo(() => {
    setInitValue(value);
  }, [props.value]);
  useEffect(() => {
    if (props.pattern === "material") {
      if (isH5) {
        const content: any = document.querySelector(`#${inputId}`);
        const width = content.clientWidth;
        setMaterialWidth(pxTransform(width / screenPercent));
      } else {
        const query = Taro.createSelectorQuery().in(this.$scope);
        const view = query.select("#cl-input");
        view.boundingClientRect().exec(res => {
          const data = res[0];
          setMaterialWidth(pxTransform(data.width / screenPercent));
        });
      }
    }
  }, [props.title]);
  const renderMaterialTitle = (
    <View
      className={`${focus || initValue ? "materialFocus" : "materialBlur"}`}
      style={titleWidth}
      id="cl-input"
    >
      {title}
    </View>
  );
  const renderMaterialTitle_H5 = (
    <View
      className={`${focus || initValue ? "materialFocus" : "materialBlur"}`}
      style={titleWidth}
      id={inputId}
    >
      {title}
    </View>
  );
  const normalTitle = (
    <View className="title" style={titleWidth}>
      {title}
    </View>
  );
  return (
    <View
      className={classNames(
        `cu-form-group ${focus ? "focus" : "blur"}`,
        props.className
      )}
      style={Object.assign({ position: "relative" }, props.style)}
    >
      {title && props.pattern === "normal" ? normalTitle : ""}
      {title && props.pattern === "material"
        ? isH5
          ? renderMaterialTitle_H5
          : renderMaterialTitle
        : ""}
      <View
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          alignItems: "center",
          flex: 1
        }}
      >
        <Input
          autoFocus={autoFocus}
          placeholder={placeholder}
          value={firstInit && defaultValue ? defaultValue : initValue}
          onInput={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          adjustPosition={adjustPosition}
          type={normalType}
          password={type === "password"}
          maxLength={maxLength || -1}
          disabled={disabled}
          style={{
            textAlign: props.align,
            flex: "1 0 auto",
            paddingLeft: `${
              props.pattern === "material" && !(focus || initValue)
                ? materialWidth
                : 0
            }`,
            paddingRight: props.clear ? pxTransform(60) : ""
          }}
        />
        <View
          style={{
            position: "absolute",
            right: 0,
            display:
              props.clear && initValue !== "" && !firstInit
                ? "relative"
                : "none"
          }}
          onClick={e => {
            e.stopPropagation();
            setInitValue("");
          }}
        >
          <ClIcon iconName="roundclosefill" size="xsmall" color="gray" />
        </View>
      </View>
      {iconComponent}
      {buttonComponent}
      {imageComponent}
      {renderCustomRight}
      {autoCompleteComponent}
    </View>
  );
}

ClInput.options = {
  addGlobalClass: true
};
ClInput.defaultProps = {
  autoFocus: false,
  titleWidth: "auto",
  align: "left",
  pattern: "normal",
  value: undefined,
  placeholder: "",
  type: "text",
  adjustPosition: true,
  defaultValue: "",
  completeLoading: false,
  completes: [],
  autoComplete: false,
  onTouchResult: () => {}
} as IProps;
export default ClInput;
