export const colorCode = `
<ClShopBar 
  onClickTab={(index) => {this.clickIcon(index)}}
  onClickButton={(index) => {this.clickButton(index)}} 
  bgColor='gray'
  tabs={tabs}
  buttons={buttons}
/>

<ClShopBar 
  onClickTab={(index) => {this.clickIcon(index)}}
  onClickButton={(index) => {this.clickButton(index)}} 
  bgColor='light-blue' 
  tabs={tabs}
  buttons={buttons}
/>

<ClShopBar 
  onClickTab={(index) => {this.clickIcon(index)}}
  onClickButton={(index) => {this.clickButton(index)}} 
  bgColor='gradualGreen' 
  tabs={tabs}
  buttons={buttons}
/>
`

export const dividCode = `
\`\`\`
<ClShopBar 
  onClickTab={(index) => {this.clickIcon(index)}}
  onClickButton={(index) => {this.clickButton(index)}} 
  bgColor='gray'
  tabs={tabs}
  border
  buttons={buttons}
/>
\`\`\`
`

export const badgeCode = `
\`\`\`
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
\`\`\`
`
