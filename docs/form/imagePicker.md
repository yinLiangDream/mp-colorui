****

## 使用说明

```jsx
import {ClImagePicker} from 'mp-colorui'
```



## 一般用法

### 图片列表

```jsx
<ClImagePicker imgList={[]} />
```

### 选择图片参数

```jsx
<ClImagePicker chooseImgObj={{
  count: 3,
  sourceType: ['album', 'camera'],
  sizeType: ['original', 'compressed'],
  success: () => { },
  fail: () => { },
  complete: () => { }
}} />
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
| chooseImgObj | *选择图片对象* | [chooseImgObj](/form/imagePicker?id=chooseImgObj)[] | [详情](/form/imagePicker?id=chooseimgobj) | []     |
| imgList      | *图片列表*     | [imgList](/form/imagePicker?id=imglist)[]           | -                                         | []     |



### imgList



| 参数   | 说明         | 类型   | 可选值                            | 默认值 |
| ------ | ------------ | ------ | --------------------------------- | ------ |
| url    | 图片url      | string | -                                 | -      |
| status | 图片上传状态 | string | `none`,`loading`,`success`,`fail` | `none` |

### chooseImgObj

| 参数       | 说明               | 类型     | 可选值                      | 默认值                     |
| ---------- | ------------------ | -------- | --------------------------- | -------------------------- |
| count      | *选择图片个数*     | number   | -                           | 9                          |
| sizeType   | *所选的图片的尺寸* | string[] | *`original`*,*`compressed`* | ['original', 'compressed'] |
| sourceType | *选择图片的来源*   | string[] | *`album`*,*`camera`*        | ['album']                  |
| success    | *选择成功回调函数* |          |                             |                            |

### chooseImgObj 事件

| 事件名称 | 说明                                               | 参数返回 |
| -------- | -------------------------------------------------- | -------- |
| success  | *选择成功回调函数*                                 | -        |
| fail     | *选择失败回调函数*                                 | -        |
| complete | *接口调用结束的回调函数（调用成功、失败都会执行）* | -        |



### ImagePicker 事件

| 事件名称  | 说明               | 参数返回 |
| --------- | ------------------ | -------- |
| beforeDel | *删除之前确认函数* | index    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/imagePicker/index" />
