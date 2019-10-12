
```jsx
function gen(item, index) {
  return {
    text: `标签 ${index + 1}`,
    id: `id-${index}`
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
```
