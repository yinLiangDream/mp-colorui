
```jsx
const percent = ["sub", "twice", "treble"];

percent.map((perc, index) => (
  <View key={perc} className={`flex-${perc}`}>
    <ClCard type="full" bgColor={`light-${colors[index]}`}>
      {perc}({index + 1})
    </ClCard>
  </View>
));
```
