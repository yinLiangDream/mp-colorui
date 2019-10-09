import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClAccordion, ClLayout } from "mp-colorui";
import { TaroRichTextNoWxParse } from "taro_rich_text";

export default function GenerateCode(props) {
  return (
    <View>
      {Taro.getEnv() === Taro.ENV_TYPE.WEB ? (
        ""
      ) : (
        <ClLayout padding="normal" paddingDirection="bottom">
          <ClAccordion title="示例代码" card>
            <ClLayout padding="normal" paddingDirection="around">
              <TaroRichTextNoWxParse
                raw={false}
                richText={props.code}
                type="markdown"
              />
            </ClLayout>
          </ClAccordion>
        </ClLayout>
      )}
    </View>
  );
}

GenerateCode.defaultProps = {
  code: ""
};
