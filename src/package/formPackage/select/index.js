import Taro from "@tarojs/taro";
import { ClCard, ClLayout, ClSelect, ClTitleBar } from "../../../index";

const single = ["苹果", "桃子", "葡萄", "火龙果", "西瓜"];

const muti = [["水果", "蔬菜"], ["苹果", "桃子", "葡萄", "火龙果", "西瓜"]];
export default function Select() {
  return (
    <ClLayout>
      <ClTitleBar
        title="单列选择"
        textColor="black"
        type="icon"
        subTitle="selector"
      />
      <ClCard>
        <ClSelect
          selector={{ range: single }}
          mode="selector"
          title="选择水果"
        />
      </ClCard>

      <ClTitleBar
        title="多列选择"
        textColor="black"
        type="icon"
        subTitle="multiSelector"
      />
      <ClCard>
        <ClSelect
          multiSelector={{
            range: muti
          }}
          mode="multiSelector"
          title="选择水果"
        />
      </ClCard>

      <ClTitleBar
        title="时间选择"
        textColor="black"
        type="icon"
        subTitle="time"
      />
      <ClCard>
        <ClSelect mode="time" title="选择时间" />
      </ClCard>

      <ClTitleBar
        title="地区选择"
        textColor="black"
        type="icon"
        subTitle="region"
      />
      <ClCard>
        <ClSelect mode="region" title="选择地点" />
      </ClCard>

      <ClTitleBar
        title="日期选择"
        textColor="black"
        type="icon"
        subTitle="date"
      />
      <ClCard>
        <ClSelect mode="date" title="选择日期" />
      </ClCard>
    </ClLayout>
  );
}

Select.options = {
  navigationBarTitleText: "Select 选择器"
};
