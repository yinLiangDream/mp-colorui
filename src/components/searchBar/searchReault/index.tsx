import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import ClFlex from '../../flex'
import ClText from '../../text'
import ClLayout from '../../layout'

import './index.scss'
import ClIcon from '../../icon'

export default function ClSearchResult (props: any) {
  const result: {
    title?: string;
    desc?: string;
  }[] = props.result || []
  const showLoading = props.showLoading
  const onTouchResult = props.onTouchResult
  const resultComponent = result.map((item, index) => (
    <View key={index} className='cl_search_result' onClick={() => {onTouchResult(index)}}>
      <ClLayout padding='xsmall' paddingDirection='vertical'>
        <ClText text={item.title} size='large' />
        <ClText text={item.desc} size='xsmall' cut />
      </ClLayout>
    </View>
  ))
  const loadingComponent = (
    <ClLayout padding='normal' paddingDirection='vertical'>
      <View className='cl_search_loading'>
        <ClIcon iconName='loading2' />
      </View>
    </ClLayout>
  )
  return (
    <View style={{ width: '100%' }}>
      <ClFlex direction='column' align='center' justify='center'>
        {showLoading ? loadingComponent : resultComponent}
      </ClFlex>
    </View>
)
}

ClSearchResult.options = {
  addGlobalClass: true
}

