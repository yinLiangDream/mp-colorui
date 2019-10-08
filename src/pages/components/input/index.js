import Taro from '@tarojs/taro'
import { ClCard, ClInput, ClLayout, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import {
  autoPushCode,
  contentCode,
  disabledCode,
  longCode,
  patternCode,
  placeholderCode,
  titleCode,
  titleWidthCode,
  typeCode,
  valueCode
} from './code'

export default function Input () {
  return (
    <ClLayout>
      <ClTitleBar title="默认值" textColor="black" type="icon"/>
      <ClCard>
        <ClInput defaultValue="我是预先输入的内容"/>
      </ClCard>
      <GenerateCode code={valueCode}/>

      <ClTitleBar title="标题" textColor="black" type="icon" subTitle="title"/>
      <ClCard>
        <ClInput title="姓名" placeholder="请输入姓名"/>
        <ClInput title="年龄" placeholder="请输入年龄" type="number"/>
      </ClCard>
      <GenerateCode code={titleCode}/>

      <ClTitleBar title="形式" textColor="black" type="icon" subTitle="title"/>
      <ClCard>
        <ClInput title="标准形式" placeholder="请输入姓名"/>
        <ClInput
          title="material 形式"
          placeholder="请输入年龄"
          type="number"
          pattern="material"
        />
      </ClCard>
      <GenerateCode code={patternCode}/>

      <ClTitleBar
        title="标题宽度"
        textColor="black"
        type="icon"
        subTitle="title"
      />
      <ClCard>
        <ClInput title="auto" placeholder="请输入姓名"/>
        <ClInput
          title="200宽度"
          placeholder="请输入年龄"
          type="number"
          titleWidth={200}
        />
      </ClCard>
      <GenerateCode code={titleWidthCode}/>

      <ClTitleBar
        title="占位符"
        textColor="black"
        type="icon"
        subTitle="placeholder"
      />
      <ClCard>
        <ClInput placeholder="我是提示内容"/>
      </ClCard>
      <GenerateCode code={placeholderCode}/>

      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type"/>
      <ClCard>
        <ClInput placeholder="我可以输入任何文本" type="text"/>
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入数字" type="number"/>
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入密码" type="password"/>
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入浮点数" type="digit"/>
      </ClCard>
      <ClCard>
        <ClInput placeholder="我可以输入身份证" type="idcard"/>
      </ClCard>

      <GenerateCode code={typeCode}/>

      <ClTitleBar title="长度" textColor="black" type="icon" subTitle="long"/>
      <ClCard>
        <ClInput
          placeholder="我只能输入 10 个字符"
          type="text"
          maxLength={10}
        />
      </ClCard>
      <GenerateCode code={longCode}/>

      <ClTitleBar
        title="禁止输入"
        textColor="black"
        type="icon"
        subTitle="disabled"
      />
      <ClCard>
        <ClInput placeholder="我禁止输入" type="text" disabled/>
      </ClCard>
      <GenerateCode code={disabledCode}/>

      <ClTitleBar
        title="自动上推"
        textColor="black"
        type="icon"
        subTitle="adjustPosition"
      />
      <ClCard>
        <ClInput placeholder="我自动上推" type="text" adjustPosition/>
      </ClCard>
      <GenerateCode code={autoPushCode}/>

      <ClTitleBar
        title="后置内容"
        textColor="black"
        type="icon"
        subTitle="more"
      />
      <ClCard>
        <ClInput
          placeholder="我有图标"
          type="text"
          adjustPosition
          icon={{ iconName: 'emoji' }}
          onIconClick={() => {
            Taro.showToast({
              title: '您点击了图标',
              icon: 'none'
            })
          }}
        />
      </ClCard>
      <ClCard>
        <ClInput
          onImageClick={() => {
            Taro.showToast({
              title: '您点击了图片',
              icon: 'none'
            })
          }}
          placeholder="我有图片"
          type="text"
          adjustPosition
          image="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/330.jpg"
        />
      </ClCard>
      <ClCard>
        <ClInput
          placeholder="我有按钮"
          type="text"
          adjustPosition
          button={{
            text: '按钮',
            bgColor: 'light-blue',
            onClick () {
              Taro.showToast({
                title: '您点击了按钮',
                icon: 'none'
              })
            }
          }}
        />
      </ClCard>
      <GenerateCode code={contentCode}/>
    </ClLayout>
  )
}

Input.config = {
  navigationBarTitleText: 'Input 输入框'
}
