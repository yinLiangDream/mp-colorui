export const normalCode = `
\`\`\`
function gen(item, index) {
  return {
    text: \`标签 \${index + 1}\`,
    id: \`id-\${index}\`
  };
}

const defaultTabs = [...new Array(10)].map(gen)

<ClTabs tabs={defaultTabs}>
  {
    defaultTabs.map(item => (
      <View key={item.id} id={item.id}>
        {item.text}
      </View>
    ))
  }
</ClTabs>
\`\`\`
`;

export const moveCode = `
\`\`\`
function gen(item, index) {
  return {
    text: \`标签 \${index + 1}\`,
    id: \`id-\${index}\`
  };
}

const defaultTabs = [...new Array(10)].map(gen)

<ClTabs tabs={defaultTabs} touchMove>
  {defaultTabs.map(item => (
    <View key={item.id} id={item.id}>
      {item.text}
    </View>
  ))}
</ClTabs>
\`\`\`
`;

export const verbCode = `
const verbTabs = [
  {
    text: "标签 1",
    id: "verb-1"
  },
  {
    text: "标签 2",
    id: "verb-2"
  },
  {
    text: "标签 3",
    id: "verb-3"
  }
];

<ClTabs tabs={verbTabs} type="verb">
  {verbTabs.map(item => (
    <View key={item.id} id={item.id}>
      {item.text}
    </View>
  ))}
</ClTabs>
`;

export const centerCode = `
\`\`\`
const verbTabs = [
  {
    text: "标签 1",
    id: "verb-1"
  },
  {
    text: "标签 2",
    id: "verb-2"
  },
  {
    text: "标签 3",
    id: "verb-3"
  }
];

<ClTabs
  tabs={verbTabs.map(item => ({
    text: item.text,
    id: item.id + "-1"
  }))}
  type="center"
>
  {verbTabs.map(item => (
    <View key={item.id} id={item.id + "-1"}>
      {item.text}
    </View>
  ))}
</ClTabs>
\`\`\`
`;

export const colorCode = `
\`\`\`
const verbTabs = [
  {
    text: "标签 1",
    id: "verb-1"
  },
  {
    text: "标签 2",
    id: "verb-2"
  },
  {
    text: "标签 3",
    id: "verb-3"
  }
];

<ClTabs
  tabs={verbTabs.map(item => ({
    text: item.text,
    id: item.id + "-2"
  }))}
  type="center"
  activeColor="red"
  bgColor="black"
>
  {verbTabs.map(item => (
    <View key={item.id} id={item.id + "-2"}>
      {item.text}
    </View>
  ))}
</ClTabs>
\`\`\`
`;

export const iconCode = `
\`\`\`
const iconTabs = [
  {
    text: "标签 1",
    icon: "emoji",
    id: "icon-1"
  },
  {
    text: "标签 2",
    icon: "addressbook",
    id: "icon-2"
  },
  {
    text: "标签 3",
    icon: "discoverfill",
    id: "icon-3"
  }
];

<ClCard>
  <ClTabs tabs={iconTabs} type="center">
    {iconTabs.map(item => (
      <View key={item.id} id={item.id}>
        {item.text}
      </View>
    ))}
  </ClTabs>
</ClCard>
\`\`\`
`;
