
```jsx
const align = ["start", "end", "center"];

align.map(al => (
  <ClCard key={al}>
    <ClFlex align={al}>
      <ClCard bgColor="light-blue" shadow={false}>
        <View>{al}</View>
        <View>{al}</View>
      </ClCard>
      <ClCard bgColor="light-blue" shadow={false}>
        <View>{al}</View>
      </ClCard>
    </ClFlex>
  </ClCard>
));
```
