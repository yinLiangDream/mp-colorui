
```jsx
const animationName = ['fade', 'scale-up', 'scale-down', 'slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'shake']

animationName.map(name => (
  <ClLayout key={name} margin='normal' marginDirection='around'>
    <ClAnimation type={name === nowName ? name : ''} >
      <ClButton long shape='round' onClick={() => {showAnimation(name)}} text={name} />
    </ClAnimation>
  </ClLayout>
))
```
