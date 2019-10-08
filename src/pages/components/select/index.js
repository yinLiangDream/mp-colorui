import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClSelect, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { dateCode, mutiCode, regionCode, singleCode, timeCode } from './code'

const single = ['苹果', '桃子', '葡萄', '火龙果', '西瓜']

const muti = [['水果', '蔬菜'], ['苹果', '桃子', '葡萄', '火龙果', '西瓜']]
export default function Select () {
  return (
    <ClLayout>
      <ClTitleBar
        title="单列选择"
        textColor="black"
        type="icon"
        subTitle="selector"
      />
      <ClCard>
        <ClSelect
          selector={{ range: single }}
          mode="selector"
          title="选择水果"
        />
      </ClCard>
      <GenerateCode code={singleCode}/>

      <ClTitleBar
        title="多列选择"
        textColor="black"
        type="icon"
        subTitle="multiSelector"
      />
      <ClCard>
        <ClSelect
          multiSelector={{
            range: muti
          }}
          mode="multiSelector"
          title="选择水果"
        />
      </ClCard>
      <GenerateCode code={mutiCode}/>

      <ClTitleBar
        title="时间选择"
        textColor="black"
        type="icon"
        subTitle="time"
      />
      <ClCard>
        <ClSelect mode="time" title="选择时间"/>
      </ClCard>
      <GenerateCode code={timeCode}/>

      <ClTitleBar
        title="地区选择"
        textColor="black"
        type="icon"
        subTitle="region"
      />
      <ClCard>
        <ClSelect mode="region" title="选择地点"/>
      </ClCard>
      <GenerateCode code={regionCode}/>

      <ClTitleBar
        title="日期选择"
        textColor="black"
        type="icon"
        subTitle="date"
      />
      <ClCard>
        <ClSelect mode="date" title="选择日期"/>
      </ClCard>
      <GenerateCode code={dateCode}/>
    </ClLayout>
  )
}

Select.options = {
  navigationBarTitleText: 'Select 选择器'
}
