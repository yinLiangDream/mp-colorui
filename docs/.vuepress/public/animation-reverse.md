
```jsx
const animationName = ['fade', 'scale-up', 'scale-down', 'slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'shake']

animationName.map(name => (
  <ClLayout key={name} margin='normal' marginDirection='around'>
    <ClAnimation type={`${name}s` === nowName ? name : ''} reverse>
      <ClButton long shape='round' bgColor='light-blue' onClick={() => {showAnimation(`${name}s`)}} text={name} />
    </ClAnimation>
  </ClLayout>
))
```
