export const normalCode = `
\`\`\`
const animationName = ['fade', 'scale-up', 'scale-down', 'slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'shake']

animationName.map(name => (
  <ClLayout key={name} margin='normal' marginDirection='around'>
    <ClAnimation type={name === nowName ? name : ''} >
      <ClButton long shape='round' onClick={() => {showAnimation(name)}} text={name} />
    </ClAnimation>
  </ClLayout>
))
\`\`\`
`

export const reverseCode = `
\`\`\`
const animationName = ['fade', 'scale-up', 'scale-down', 'slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'shake']

animationName.map(name => (
  <ClLayout key={name} margin='normal' marginDirection='around'>
    <ClAnimation type={\`\${name}s\` === nowName ? name : ''} reverse>
      <ClButton long shape='round' bgColor='light-blue' onClick={() => {showAnimation(\`\${name}s\`)}} text={name} />
    </ClAnimation>
  </ClLayout>
))
\`\`\`
`

export const delayCode = `
\`\`\`
animationName.map((name, index) => (
  <ClLayout key={name} margin='normal' marginDirection='around'>
    <ClAnimation type={\`\${begin ? "scale-up" : "none"}\`} delay={index/10}>
      <ClButton long shape='round' bgColor='brown' onClick={() => {beginAnimation(index)}} text={\`\${
        index ? index / 10 + "s" : "开始执行"
      }\`} />
    </ClAnimation>
  </ClLayout>
))
\`\`\`
`
