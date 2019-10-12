
```jsx
const tabsBorder = [
  {
    icon: 'emoji',
    badge: false
  }, {
    icon: 'shop',
    badge: 99
  }, {
    icon: 'newfill'
  }
]

<ClShopBar 
  onClickTab={(index) => {this.clickIcon(index)}}
  onClickButton={(index) => {this.clickButton(index)}}
  bgColor='gray' 
  tabs={tabsBorder}
  border
  buttons={tabsBorderButton}
/>
```
