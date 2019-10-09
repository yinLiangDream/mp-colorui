export const demoCode = `
\`\`\`
const tabs = [...Array(50)].map((key, index) => ({name: 'tab-' + index, id: 'id-' + index}))

<ClVerticalTab tabs={tabs} height={1000}>
  <View>
    {tabs.map((item) => (
      <View id={item.id} key={item.name}>
        <ClVerticalTabCell>{item.name}</ClVerticalTabCell>
      </View>
    ))}
  </View>
</ClVerticalTab>
\`\`\`
`;
