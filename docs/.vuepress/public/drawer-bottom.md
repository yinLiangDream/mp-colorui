
```jsx
<ClDrawer
  show={bottom}
  direction="bottom"
  onCancel={() => {
    setBottom(false);
  }}
>
  <ClCard type="full">
    <View style={{ height: pxTransform(300) }}>我是下侧抽屉</View>
  </ClCard>
</ClDrawer>
```
