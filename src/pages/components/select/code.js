export const singleCode = `
\`\`\`
const single = ["苹果", "桃子", "葡萄", "火龙果", "西瓜"];

<ClSelect
  selector={{ range: single }}
  mode="selector"
  title="选择水果"
/>
\`\`\`
`;

export const mutiCode = `
\`\`\`
const muti = [["水果", "蔬菜"], ["苹果", "桃子", "葡萄", "火龙果", "西瓜"]];

<ClSelect
  multiSelector={{
    range: muti
  }}
  mode="multiSelector"
  title="选择水果"
/>
\`\`\`
`;

export const timeCode = `
\`\`\`
<ClSelect mode="time" title="选择时间" />
\`\`\`
`;

export const regionCode = `
\`\`\`
<ClSelect mode="region" title="选择地点" />
\`\`\`
`;

export const dateCode = `
\`\`\`
<ClSelect mode="date" title="选择日期" />
\`\`\`
`;
