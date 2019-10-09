import Taro from '@tarojs/taro'
import { ClLayout, ClTimeline, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { timelineCode } from './code'

export default class Timeline extends Taro.Component {
  config = {
    navigationBarTitleText: 'Timeline 时间轴'
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='时间轴' textColor='black' type='icon' subTitle='timeline'/>
        <ClTimeline times={[
          {
            node: '2019'
          }, {
            content: ['我是内容，默认背景']
          }, {
            content: ['我是内容，有背景'],
            bgColor: 'light-blue'
          }, {
            content: ['我是里程碑，我有图标'],
            title: '2019 年到啦',
            time: '2019-01-01',
            bgColor: 'light-red',
            icon: 'emoji'
          }, {
            node: '2018'
          }, {
            content: ['我是里程碑，我有图标，我图标有颜色', '我有多行内容'],
            bgColor: 'red',
            icon: 'emoji',
            iconColor: 'red'
          }
        ]}
        />
        <ClLayout margin='normal' marginDirection='vertical'>
          <GenerateCode code={timelineCode}/>
        </ClLayout>
      </ClLayout>
    )
  }
}
