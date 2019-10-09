import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClSwitch, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { colorCode, shapeCode, typeCode } from './code'

export default function Switch () {
  return (
    <ClLayout>
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type"/>
      <ClCard>
        <ClSwitch type="normal"/>
      </ClCard>
      <ClCard>
        <ClSwitch type="form" title="~(≧▽≦)/~啦啦啦"/>
      </ClCard>
      <GenerateCode code={typeCode}/>

      <ClTitleBar title="形状" textColor="black" type="icon" subTitle="shape"/>
      <ClCard>
        <ClSwitch type="form" title="~(≧▽≦)/~啦啦啦" shape="normal"/>
      </ClCard>
      <ClCard>
        <ClSwitch type="form" title="~(≧▽≦)/~啦啦啦" shape="radius"/>
      </ClCard>
      <GenerateCode code={shapeCode}/>

      <ClTitleBar title="颜色" textColor="black" type="icon" subTitle="color"/>
      <ClCard>
        <ClSwitch
          type="form"
          title="~(≧▽≦)/~啦啦啦"
          shape="normal"
          color="cyan"
        />
      </ClCard>
      <ClCard>
        <ClSwitch
          type="form"
          title="~(≧▽≦)/~啦啦啦"
          shape="radius"
          color="red"
        />
      </ClCard>
      <GenerateCode code={colorCode}/>
    </ClLayout>
  )
}

Switch.config = {
  navigationBarTitleText: 'Switch 开关'
}
