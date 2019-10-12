
```jsx
const tags = [
  {
    text: '文明',
    color: 'light-blue'
  }, {
    text: '和谐',
    color: 'brown'
  }, {
    text: '民主',
    color: 'brown',
    plain: true
  }
]

<ClTag tags={tags.slice(0, 1)} shape='radius' />

<ClTag tags={tags.slice(0, 1)} shape='normal' />

<ClTag tags={tags.slice(0, 1)} shape='round' />
```
