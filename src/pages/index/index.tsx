import Taro, { useState } from '@tarojs/taro';
import ClLayout from '../../components/layout';
import ClTitleBar from '../../components/titleBar';
import ClTimeline from '../../components/timeline';
import ClDivider from '../../components/divider';


export default function Index() {
  return (
    <ClLayout>
        <ClDivider color='blue' size='xxlarge'>我是分割线</ClDivider>
        <ClTitleBar title='时间轴' textColor='black' type='icon' subTitle='timeline'/>
        <ClTimeline times={[
          {
            node: '2019'
          },
          {
            content: ['我是内容，默认背景']
          }, {
            content: ['我是内容，有背景'],
            bgColor: 'light-blue'
          }, {
            content: ['我是里程碑，我有图标'],
            bgColor: 'light-red',
            icon: 'emoji'
          }, {
            content: ['我是里程碑，我有图标，我图标有颜色'],
            bgColor: 'red',
            icon: 'emoji',
            iconColor: 'red'
          }
        ]}
        />
      </ClLayout>
  )
}