
```jsx
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
```
