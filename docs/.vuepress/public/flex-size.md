
```jsx
const size = ["xs", "sm", "df", "lg", "xl"];

size.map(cc => (
  <ClCard key={cc}>
    <ClFlex>
      <View className={`basis-${cc}`}>
        <ClCard bgColor="light-blue" type="full" shadow={false}>
          {cc}
        </ClCard>
      </View>
    </ClFlex>
  </ClCard>
));
``