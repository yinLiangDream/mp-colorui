import Taro, { useState } from "@tarojs/taro";
import { ClCard, ClLayout, ClRadio, ClTitleBar } from "../../../index";

const radioGroup = [
  {
    key: "男生",
    value: "male"
  },
  {
    key: "女生",
    value: "female"
  }
];

export default function Radio() {
  const [checkedValue, setCheckedValue] = useState("male");
  return (
    <ClLayout>
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClCard>
        <ClRadio
          type="normal"
          title="normal"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
        />
      </ClCard>
      <ClCard>
        <ClRadio
          type="form"
          title="性别"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
        />
      </ClCard>
      <ClCard>
        <ClRadio
          type="list"
          title="性别"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
        />
      </ClCard>

      <ClTitleBar
        title="方向"
        textColor="black"
        type="icon"
        subTitle="direction"
      />
      <ClCard>
        <ClRadio
          type="form"
          title="性别"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
          direction="horizontal"
        />
      </ClCard>
      <ClCard>
        <ClRadio
          type="form"
          title="性别"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
          direction="vertical"
        />
      </ClCard>

      <ClTitleBar title="颜色" textColor="black" type="icon" subTitle="color" />
      <ClCard>
        <ClRadio
          type="normal"
          title="normal"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
          direction="horizontal"
          color="blue"
        />
      </ClCard>
      <ClCard>
        <ClRadio
          type="form"
          title="性别"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
          direction="horizontal"
          color="red"
        />
      </ClCard>

      <ClTitleBar title="形状" textColor="black" type="icon" subTitle="shape" />
      <ClCard>
        <ClRadio
          type="normal"
          shape="normal"
          title="normal"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
          direction="horizontal"
          color="blue"
        />
      </ClCard>
      <ClCard>
        <ClRadio
          type="form"
          shape="radio"
          title="性别"
          radioGroup={radioGroup}
          checkedValue={checkedValue}
          direction="horizontal"
          color="red"
        />
      </ClCard>
    </ClLayout>
  );
}

Radio.config = {
  navigationBarTitleText: "Radio 单选按钮"
};
