---

## 使用说明

```jsx
import { ClImagePicker } from "mp-colorui";
```

## 一般用法

### 图片列表

```jsx
<ClImagePicker imgList={[]} />
```

### 选择图片参数

```jsx
<ClImagePicker
  chooseImgObj={{
    count: 3,
    sourceType: ["album", "camera"],
    sizeType: ["original", "compressed"],
    success: () => {},
    fail: () => {},
    complete: () => {}
  }}
/>
```

### 小程序代码示例

```jsx
state = {
  imgList: []
}

success (list = []) {
  this.setState({
    imgList: list
  })
}

<View>
  <ClImagePicker
    chooseImgObj={{
      success: this.success.bind(this)
    }}
    imgList={this.state.imgList}
    />
  <ClLayout padding='normal' paddingDirection='around'>
    <ClButton
      shape='round'
      long
      onClick={() => {
        this.setState({
          imgList: this.state.imgList.map((item: any) => {
            item.status = 'loading'
            return item
          })
        })
        this.state.imgList.forEach((item: any, index: number) => {
          item.status = 'loading'
          setTimeout(() => {
            item.status = 'success'
            if (index === 1) item.status = 'fail'
            this.setState({
              imgList: this.state.imgList
            })
          }, (index + 1) * 1000)
        })
      }}
      >开始上传</ClButton>
  </ClLayout>
</View>
```

## 参数说明

### ImagePicker 参数

| 参数         | 说明           | 类型                                                | 可选值                                    | 默认值 |
| ------------ | -------------- | --------------------------------------------------- | ----------------------------------------- | ------ |
| chooseImgObj | _选择图片对象_ | [chooseImgObj](/form/imagePicker?id=chooseImgObj)[] | [详情](/form/imagePicker?id=chooseimgobj) | []     |
| imgList      | _图片列表_     | [imgList](/form/imagePicker?id=imglist)[]           | -                                         | []     |

### imgList

| 参数   | 说明         | 类型   | 可选值                            | 默认值 |
| ------ | ------------ | ------ | --------------------------------- | ------ |
| url    | 图片 url     | string | -                                 | -      |
| status | 图片上传状态 | string | `none`,`loading`,`success`,`fail` | `none` |

### chooseImgObj

| 参数       | 说明               | 类型     | 可选值                      | 默认值                     |
| ---------- | ------------------ | -------- | --------------------------- | -------------------------- |
| count      | _选择图片个数_     | number   | -                           | 9                          |
| sizeType   | _所选的图片的尺寸_ | string[] | _`original`_,_`compressed`_ | ['original', 'compressed'] |
| sourceType | _选择图片的来源_   | string[] | _`album`_,_`camera`_        | ['album']                  |
| success    | _选择成功回调函数_ |          |                             |                            |

### chooseImgObj 事件

| 事件名称 | 说明                                               | 参数返回 |
| -------- | -------------------------------------------------- | -------- |
| success  | _选择成功回调函数_                                 | -        |
| fail     | _选择失败回调函数_                                 | -        |
| complete | _接口调用结束的回调函数（调用成功、失败都会执行）_ | -        |

### ImagePicker 事件

| 事件名称  | 说明               | 参数返回 |
| --------- | ------------------ | -------- |
| beforeDel | _删除之前确认函数_ | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/imagePicker/index" />
