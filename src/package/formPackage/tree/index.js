import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClTitleBar, ClCard, ClTree } from "../../../index";

export default function Tree() {
  const data = [
    {
      name: "中国",
      checked: true,
      children: [
        {
          name: "江苏"
        },
        {
          name: "浙江",
          children: [
            {
              name: "杭州"
            },
            {
              name: "台州"
            }
          ]
        }
      ]
    },
    {
      name: "美国",
      open: true,
      children: [
        {
          name: "旧金山",
          checked: true
        },
        {
          name: "洛杉矶"
        }
      ]
    }
  ];
  return (
    <View>
      <ClTitleBar title="选择选项" textColor="black" type="icon" />
      <ClCard>
        <ClTree data={data} showCheck />
      </ClCard>
      <ClCard>
        <ClTree
          data={data}
          onClickItem={item => {
            Taro.showToast({
              icon: "none",
              title: item.name
            });
          }}
        />
      </ClCard>
      <ClTitleBar title="颜色" textColor="black" type="icon" />
      <ClCard>
        <ClTree data={data} color="brown" showCheck />
      </ClCard>
    </View>
  );
}

Tree.config = {
  navigationBarTitleText: "Tree 树形结构"
};
