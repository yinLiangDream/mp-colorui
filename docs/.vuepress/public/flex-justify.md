
```jsx
const justify = ["start", "end", "center", "between", "around"];

justify.map(jus => (
  <ClCard key={jus}>
    <ClFlex justify={jus}>
      <ClCard bgColor="light-blue" shadow={false}>
        {jus}
      </ClCard>
      <ClCard bgColor="light-blue" shadow={false}>
        {jus}
      </ClCard>
    </ClFlex>
  </ClCard>
));
```
