import Taro from '@tarojs/taro'
import { ClAvatar, ClCard, ClFlex, ClLayout, ClTitleBar } from 'mp-colorui'
import GenerateCode from '../../../usedComponents/generateCode'
import { headersCode, shadowCode, shapeCode, sizeCode, typeCode } from './code'

const headerArray = [
  {
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg'
  }, {
    bgColor: 'blue',
    text: 'M'
  }, {
    bgColor: 'blue',
    icon: 'emoji'
  }, {
    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
    tag: 'female',
    tagColor: 'light-pink'
  }
]

export default class Avatar extends Taro.Component {
  config = {
    navigationBarTitleText: 'Avatar 头像'
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='形状' textColor='black' type='icon' subTitle='shape'/>
        <ClCard>
          <ClFlex justify='around' align='center'>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='radius'/>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round'/>
          </ClFlex>
        </ClCard>
        <GenerateCode code={shapeCode}/>

        <ClTitleBar title='大小' textColor='black' type='icon' subTitle='size'/>
        <ClCard>
          <ClFlex justify='around' align='center'>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='small'/>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='normal'/>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='large'/>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='xlarge'/>
          </ClFlex>
        </ClCard>
        <ClCard>
          <ClFlex justify='around' align='center'>
            <ClAvatar headerArray={headerArray.slice(1, 2)} shape='round' size='small'/>
            <ClAvatar headerArray={headerArray.slice(1, 2)} shape='round' size='normal'/>
            <ClAvatar headerArray={headerArray.slice(1, 2)} shape='round' size='large'/>
            <ClAvatar headerArray={headerArray.slice(1, 2)} shape='round' size='xlarge'/>
          </ClFlex>
        </ClCard>
        <GenerateCode code={sizeCode}/>

        <ClTitleBar title='阴影' textColor='black' type='icon' subTitle='shadow'/>
        <ClCard>
          <ClFlex justify='around' align='center'>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='small' shadow/>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='normal' shadow/>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='large' shadow/>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='xlarge' shadow/>
          </ClFlex>
        </ClCard>
        <GenerateCode code={shadowCode}/>

        <ClTitleBar title='类型（文字、图标、角标）' textColor='black' type='icon' subTitle='type'/>
        <ClCard>
          <ClFlex justify='around' align='center'>
            <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='normal' shadow/>
            <ClAvatar headerArray={headerArray.slice(1, 2)} shape='round' size='normal' shadow/>
            <ClAvatar headerArray={headerArray.slice(2, 3)} shape='round' size='normal' shadow/>
            <ClAvatar headerArray={headerArray.slice(3, 4)} shape='round' size='normal' shadow/>
          </ClFlex>
        </ClCard>
        <GenerateCode code={typeCode}/>

        <ClTitleBar title='头像组' textColor='black' type='icon' subTitle='array'/>
        <ClCard>
          <ClFlex justify='around' align='center'>
            <ClAvatar headerArray={headerArray} shape='round' size='normal' shadow/>
          </ClFlex>
        </ClCard>
        <GenerateCode code={headersCode}/>
      </ClLayout>
    )
  }
}
