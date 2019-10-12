
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
