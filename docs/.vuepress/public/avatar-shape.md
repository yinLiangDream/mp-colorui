
```jsx
const headerArray = [
   {
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg'
  }, {
    bgColor: 'blue',
    text: 'M'
  }, {
    bgColor: 'blue',
    icon: 'emoji'
  }, {
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
    tag: 'female',
    tagColor: 'light-pink'
  }
]

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='radius' />

<ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' />
```
