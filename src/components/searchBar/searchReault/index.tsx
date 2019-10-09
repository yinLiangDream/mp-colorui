import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import ClFlex from "../../flex";
import ClText from "../../text";
import ClLayout from "../../layout";

import "./index.scss";
import ClIcon from "../../icon";
import { classNames, generateId } from "../../../components/utils";

export default function ClSearchResult(props: any) {
  const [resultState, setResultState] = useState(props.result || []);
  useEffect(() => {
    const list = props.result || [];
    setResultState(
      list.map((item: any) => {
        item.cu_search_bar_result_id = generateId();
        return item;
      })
    );
  }, [props.result]);
  const result: {
    title?: string;
    desc?: string;
  }[] = resultState || [];
  const showLoading = props.showLoading;
  const onTouchResult = props.onTouchResult;
  const resultComponent = result.map((item: any, index: number) => (
    <View
      key={item.cu_search_bar_result_id}
      className="cl_search_result"
      onClick={() => {
        onTouchResult(index);
      }}
    >
      <ClLayout padding="xsmall" paddingDirection="vertical">
        <ClText text={item.title} size="large" />
        <ClText text={item.desc} size="xsmall" cut />
      </ClLayout>
    </View>
  ));
  const loadingComponent = (
    <ClLayout padding="normal" paddingDirection="vertical">
      <View className="cl_search_loading">
        <ClIcon iconName="loading2" />
      </View>
    </ClLayout>
  );
  return (
    <View
      className={classNames(props.className)}
      style={Object.assign({ width: "100%" }, props.style)}
    >
      <ClFlex direction="column" align="center" justify="center">
        {showLoading ? loadingComponent : resultComponent}
      </ClFlex>
    </View>
  );
}

ClSearchResult.options = {
  addGlobalClass: true
};
