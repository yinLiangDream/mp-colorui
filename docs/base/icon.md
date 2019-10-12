## 使用指南

在 `Taro` 文件中引入组件

```jsx
import { ClIcon } from "mp-colorui";
```

## 一般用法

```jsx
<ClIcon iconName="activity" size="large" color="cyan" />
```

## 使用第三方图标库

栗子：我在[阿里巴巴图标库](https://www.iconfont.cn/)添加了第三方图标，请下载至本地打开

![Xnip2019-08-23_10-47-21](https://md-1255362963.cos.ap-chengdu.myqcloud.com/2019-08-23-024942.jpg)

再打开下载文件中的 iconfont.css 文件，文件类似于以下格式：

![Xnip2019-08-23_10-49-19](https://md-1255362963.cos.ap-chengdu.myqcloud.com/2019-08-23-024951.jpg)

最后再将此文件内容复制到项目的 css 中，即完成引用。

使用方式如下：

```jsx
<ClIcon iconName="iconfont icon-RectangleCopy" other />
```

## 参数说明

### Icon 参数

| 参数     | 说明               | 类型            | 可选值                                          | 默认值     |
| :------- | :----------------- | :-------------- | :---------------------------------------------- | :--------- |
| iconName | 图标图案           | string          | 参考下表                                        | -          |
| size     | 图标大小           | string / Number | 大于 10 的整数或者默认支持大小                  | _`normal`_ |
| color    | 图标颜色           | string          | 参考文档 [默认色-标准色](/home/color#标准色) | -          |
| other    | 是否为第三方图标库 | boolean         | -                                               | `false`    |

### size

| 参数      | 说明     | 对应尺寸 |
| --------- | -------- | -------- |
| _xsmall_  | 非常小   | 40       |
| _small_   | 略小     | 48       |
| _normal_  | 正常     | 56       |
| _large_   | 略大     | 64       |
| _xlarge_  | 略略大   | 72       |
| _xxlarge_ | 很大     | 88       |
| _slarge_  | 超大     | 160      |
| _xslarge_ | 比大还大 | 240      |

### iconName

<Icons />
