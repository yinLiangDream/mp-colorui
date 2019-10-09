export const colorCode = `
\`\`\`
<ClNavBar
  leftIcon={[
    {
      icon: "roundleftfill-copy",
      text: "返回上一页"
    }
  ]}
  bgColor="light-blue"
  title="我是标题"
  onClickLeftIcon={index => {
    Taro.navigateBack();
  }}
/>
\`\`\`
`;

export const iconCode = `
\`\`\`
const leftIcon = [
  {
    icon: "emoji",
    color: "black",
    text: "左侧文字"
  }
];

const rightIcon = [
  {
    icon: "like",
    color: "blue"
  }
];

<ClNavBar
  leftIcon={leftIcon}
  rightIcon={rightIcon}
  title="我是标题"
  onClickLeftIcon={index => {
    Taro.showToast({
      title: leftIcon[index].icon,
      icon: "none"
    });
  }}
  onClickRightIcon={index => {
    Taro.showToast({
      title: rightIcon[index].icon,
      icon: "none"
    });
  }}
/>
\`\`\`
`;
