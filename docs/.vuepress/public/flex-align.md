```jsx
const align = ["start", "end", "center", "stretch"];

align.map(al => (
  <ClCard key={al}>
    <ClFlex align={al}>
      <View className="bg-gradual-blue padding margin">
        <View>{al}</View>
        <View>{al}</View>
      </View>

      <View className="bg-gradual-blue padding margin">
        <View style={{ height: "100%" }}>{al}</View>
      </View>
    </ClFlex>
  </ClCard>
));
```
