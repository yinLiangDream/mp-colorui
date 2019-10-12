
```jsx
animationName.map((name, index) => (
  <ClLayout key={name} margin='normal' marginDirection='around'>
    <ClAnimation type={`${begin ? "scale-up" : "none"}`} delay={index/10}>
      <ClButton long shape='round' bgColor='brown' onClick={() => {beginAnimation(index)}} text={`${
        index ? index / 10 + "s" : "开始执行"
      }`} />
    </ClAnimation>
  </ClLayout>
))
```
