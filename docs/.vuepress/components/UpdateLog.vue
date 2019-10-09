<template>
  <div>
    <div v-for="item in updateList" :key="item.version">
      <h2>Version: {{ item.version }}</h2>
      <p style="color: cadetblue">发布时间: {{ item.time }}</p>
      <div v-for="item in item.desc" style="color: grey">
        <h3 style="color: grey">{{ item.title }}</h3>
        <ul>
          <li v-for="item in item.desc">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
function generatorData(version, time, desc) {
  return {
    version,
    time,
    desc
  };
}

export default {
  data() {
    return {
      updateList: [
        generatorData("0.5.5", "2019-10-09", [
          {
            title: "FEATURE",
            desc: [
              "🌟 Input 组件新增 autoFocus 属性",
              "🎉🎉 所有组件可以添加 className 和 style 属性"
            ]
          }
        ]),
        generatorData("0.5.2", "2019-10-05", [
          {
            title: "BUG",
            desc: [
              "🐞fix Radio 组件，不渲染问题",
              "🐞fix Select 组件，多选不渲染问题",
              "🐞fix According 组件，在某些机型下高度不对的问题"
            ]
          }
        ]),
        generatorData("0.5.1", "2019-09-30", [
          {
            title: "BUG",
            desc: [
              "🐞修复 Swiper 无法自动播放的问题 #19",
              "🐞fix Select 组件 中 selector 的 value 不能动态设置 #18",
              "🐞fix ClAvatar 组件，真机中url 地址为本地图片 显示为全黑 #20"
            ]
          },
          {
            title: "FEATURE",
            desc: [
              "🌟Text 组件新增 lineSpacing 行间距，fontSpacing 字间距， fontWeight 字体粗细 属性",
              "🌟grid 支持 1-10"
            ]
          }
        ]),
        generatorData("0.5.0", "2019-09-25", [
          {
            title: "FEATURE",
            desc: ["🎉🎉全面支持支付宝小程序~"]
          },
          {
            title: "BUG",
            desc: ["🐞修复 Button 缺失的属性，并添加诸多属性"]
          }
        ]),
        generatorData("0.4.12", "2019-09-22", [
          {
            title: "🌟FEATURE",
            desc: ["🌟Input 组件新增 defaultValue 属性"]
          },
          {
            title: "🐞BUG",
            desc: [
              "🐞修复 Button 在H5 flex 布局下会拉伸问题",
              "🐞修复含有 Input 控件的页面会报 width 错误 #12"
            ]
          }
        ]),
        generatorData("0.4.11", "2019-09-18", [
          {
            title: "🎉COMPONENT",
            desc: ["🎉🎉新增 Curtain 幕帘组件"]
          }
        ]),
        generatorData("0.4.10", "2019-09-12", [
          {
            title: "🎉COMPONENT",
            desc: ["🎉🎉新增 ActionSheet 组件"]
          },
          {
            title: "🐞BUG",
            desc: [
              "🐞修复类型声明错误问题",
              "🐞修复 Text 组件无法插入 children 问题"
            ]
          }
        ]),
        generatorData("0.4.9", "2019-09-07", [
          {
            title: "🎉COMPONENT",
            desc: ["🎉🎉新增 SwiperAction 组件"]
          },
          {
            title: "🌟FEATURE",
            desc: ["🌟新增 FloatButton 可自定义位置属性 position"]
          },
          {
            title: "🐞BUG",
            desc: [
              "🐞修复 SearchBar H5端无法输入问题 修复 SearchBar 无效 class 属性问题",
              "🐞修复各种组件因为 key 值编译时报 warning 问题"
            ]
          }
        ]),
        generatorData("0.4.8", "2019-09-02", [
          {
            title: "🐞BUG",
            desc: [
              "🐞修复动态改变 Input 的 value 值，实际界面没有变化的问题",
              "🐞修复 MenuList 组件 shortBorder 属性失效问题",
              "🐞优化 Material Input 表现形式",
              "🐞修复 input=number 某些情况下会失效问题",
              "🐞修复 ImagePicker 小程序端状态图标异常问题"
            ]
          }
        ]),
        generatorData("0.4.7", "2019-08-30", [
          {
            title: "🎉FEATURE",
            desc: [
              "SearchBar 新增 result、showResult、showLoading、onTouchResult 属性"
            ]
          },
          {
            title: "🐞BUG",
            desc: [
              "修复 ImagePicker H5 端更变状态时的报错问题",
              "修复 Tip 组件 H5 下显示位置异常问题",
              "修复多个 SearchBar 状态会共享问题"
            ]
          }
        ]),
        generatorData("0.4.6", "2019-08-29", [
          {
            title: "🎉FEATURE",
            desc: ["重写 ImagePicker 组件，imgList 属性内容更变，请注意❗️"]
          },
          {
            title: "🐞BUG",
            desc: [
              "修复 Utils 没有 @types 类型声明问题",
              "修复 Animation 组件为 type 为 none 的问题",
              "修复 VerticalTab H5 端滚动抖动问题"
            ]
          }
        ]),
        generatorData("0.4.5", "2019-08-28", [
          {
            title: "🐞BUG",
            desc: [
              "修复 Input 组件 align 失效问题",
              "修复 Input 组件无法输入问题",
              "修复 Checkbox 组件在 H5 下 onChange 事件参数错误问题"
            ]
          }
        ]),
        generatorData("0.4.4", "2019-08-28", [
          {
            title: "🎉FEATURE",
            desc: ["组件 Input 新增 titleWidth、align、pattern 属性"]
          },
          {
            title: "🐞BUG",
            desc: [
              "修复 Form 组件校验的一些问题",
              "修复 FormItem required属性，红点显示的位置",
              "取消 Message 组件的阴影",
              "修复 Button 组件 disabled 下仍然有点击效果的问题",
              "修复 Button 组件 disabled 下的颜色一直为白色问题"
            ]
          }
        ]),
        generatorData("0.4.2", "2019-08-27", [
          {
            title: "FEATURE",
            desc: [
              "组件 Flex 新增属性 direction，用于控制浮动布局的方向",
              "组件 Avatar 可自定义大小"
            ]
          },
          {
            title: "BUG",
            desc: [
              "修复 MenuList 组件 list 属性下的 disabled 属性声明为必输项问题",
              "修复无法自定义主题颜色问题",
              "修复组件 Form,FormItem 不设置规则直接会出现err问题",
              "修复组件 FormItem 初始化时就进行数据校验问题"
            ]
          }
        ]),
        generatorData("0.4.1", "2019-08-23", [
          {
            title: "FEATURE",
            desc: ["Icon 组件支持第三方图标"]
          }
        ]),
        generatorData("0.4.0", "2019-08-22", [
          {
            title: "FEATURE",
            desc: ["🎉🎉新增 Tip 组件"]
          },
          {
            title: "BUG",
            desc: [
              "修复 Text 组件不换行问题",
              "修复 Area 类型声明错误",
              "修复 Accordion 组件在某些情况下（父级属性 color 为 white）标题颜色为白色问题"
            ]
          }
        ]),
        generatorData("0.3.7", "2019-08-15", [
          {
            title: "ADAPTATION",
            desc: ["Select 组件 mode=region 模块重构，并且适配 H5 端的地址选择"]
          }
        ]),
        generatorData("0.3.6", "2019-08-06", [
          {
            title: "ADAPTATION",
            desc: ["Swiper Card 模式 H5 适配", "祝大家明天七夕快乐~"]
          }
        ]),
        generatorData("0.3.5", "2019-08-04", [
          {
            title: "ADAPTATION",
            desc: ["VerticalTab 组件 H5 适配"]
          }
        ]),
        generatorData("0.3.4", "2019-08-03", [
          {
            title: "BUG",
            desc: ["修复 FloatButton 不展开仍然有阴影 bug"]
          }
        ]),
        generatorData("0.3.3", "2019-07-31", [
          {
            title: "BUG",
            desc: [
              "修复H5 Switch color 为红色不显示问题",
              "修复小程序 Switch 引入报错问题"
            ]
          }
        ]),
        generatorData("0.3.2", "2019-07-31", [
          {
            title: "ADAPTATION",
            desc: ["Switch H5 适配"]
          }
        ]),
        generatorData("0.3.1", "2019-07-30", [
          {
            title: "ADAPTATION",
            desc: ["Checkbox H5 适配"]
          }
        ]),
        generatorData("0.3.0", "2019-07-28", [
          {
            title: "COMPONENT",
            desc: ["新增 Form, FormItem 组件"]
          },
          {
            title: "API",
            desc: ["新增内置校验函数"]
          },
          {
            title: "BUG",
            desc: [
              "修复 Message 代码不提示问题",
              "修复文档引入组件描述错误",
              "修复 Input 组件 H5 下由于 value 绑定而无法输入的 bug（Taro 的 bug）"
            ]
          }
        ]),
        generatorData("0.2.7", "2019-07-23", [
          {
            title: "COMPONENT",
            desc: ["新增 Divider 分割线组件"]
          },
          {
            title: "BUG",
            desc: [
              "修复 Timeline H5 适配问题",
              "修复 Timeline node 节点展示不正确问题"
            ]
          }
        ]),
        generatorData("0.2.6", "2019-07-19", [
          {
            title: "API",
            desc: ["Card 组件新增 shadow 属性"]
          },
          {
            title: "BUG",
            desc: ["修复 Message 的一些小问题"]
          }
        ]),
        generatorData("0.2.5", "2019-07-18", [
          {
            title: "BUG",
            desc: ["修复 Message 重复提示文字消失问题", "补全 Message 代码提示"]
          }
        ]),
        generatorData("0.2.4", "2019-07-18", [
          {
            title: "COMPONENT",
            desc: ["新增 Message 消息提示组件"]
          },
          {
            title: "API",
            desc: ["新增 Animation 组件 duration 属性"]
          },
          {
            title: "BUG",
            desc: [
              "修复 FloatButton 组件拖动穿透事件，拖动卡顿问题，提升动画速度，并新增收拢动画"
            ]
          }
        ]),
        generatorData("0.2.3", "2019-07-15", [
          {
            title: "COMPONENT",
            desc: ["新增 FloatButton 浮动按钮组件"]
          }
        ]),
        generatorData("0.2.2", "2019-07-13", [
          {
            title: "COMPONENT",
            desc: ["新增 Accordion 手风琴组件"]
          }
        ]),
        generatorData("0.2.1", "2019-07-11", [
          {
            title: "API",
            desc: [
              "Animation 组件",
              "新增 onAnimationStart、onAnimationEnd 事件",
              "Tabs 组件",
              "新增 tabs 属性下的 id 属性",
              "新增 touchMove 可滑动属性",
              "VerticalTab 组件",
              "新增 backTop 属性"
            ]
          },
          {
            title: "BUG",
            desc: [
              "Card 组件",
              "修复插入 children 内容时的异常提醒（不影响使用）"
            ]
          }
        ]),
        generatorData("0.2.0", "2019-07-09", [
          {
            title: "COMPONENT",
            desc: ["新增垂直导航 ClVerticalTab, ClVerticalTabCell 组件"]
          }
        ]),
        generatorData("0.1.7", "2019-07-07", [
          {
            title: "API",
            desc: ["新增 titleBar 组件 renderRight 属性"]
          },
          {
            title: "BUG",
            desc: ["解决 浅色 light-pink 失效问题"]
          }
        ]),
        generatorData("0.1.6", "2019-07-05", [
          {
            title: "API",
            desc: ["新增 MenuList list 下 disabled 属性"]
          },
          {
            title: "BUG",
            desc: ["MenuList 点击失效问题"]
          }
        ]),
        generatorData("0.1.5", "2019-07-05", [
          {
            title: "API",
            desc: ["新增 Radio 组件 type 属性下的 list 属性"]
          }
        ]),
        generatorData("0.1.4", "2019-07-04", [
          {
            title: "COMPONENT",
            desc: ["新增 Animation 动画组件"]
          },
          {
            title: "API",
            desc: [
              "修改 Timeline 组件 times 属性下 content 格式(string --> string[])",
              "新增 Timeline 组件 times 属性下 title 属性(string)",
              "新增 Timeline 组件 times 属性下 node 属性(string)"
            ]
          }
        ]),
        generatorData("0.1.3", "2019-07-02", [
          {
            title: "BUG_FIX",
            desc: [
              "修复 H5 Button 无动效问题",
              "修复 H5 Timeline 线条过细问题",
              "修复 H5 Swiper 未铺满问题",
              "修复 H5 MenuList 图片过大问题"
            ]
          }
        ]),
        generatorData("0.1.1", "2019-07-01", [
          {
            title: "BUG_FIX",
            desc: ["修复 H5 适配的部分问题", "修复 H5 Radio 样式问题"]
          }
        ]),
        generatorData("0.1.0", "2019-06-25", [
          {
            title: "FATURE",
            desc: ["MP-ColorUI 测试版上线"]
          }
        ])
      ]
    };
  }
};
</script>
