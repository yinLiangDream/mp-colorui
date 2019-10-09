import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
  ClAvatar,
  ClCard,
  ClFlex,
  ClLayout,
  ClMenuList
} from 'mp-colorui'

export default function UserCenter () {
  const clickMenu = (index) => {
    switch (index) {
      case 0: {
        Taro.setClipboardData({
          data: 'https://yinliangdream.github.io/mp-colorui-doc/#/'
        }).then(() => {
          Taro.showToast({
            title: '复制成功'
          })
        })
        break
      }
      case 1: {
        Taro.setClipboardData({
          data: 'https://github.com/yinLiangDream/mp-colorui'
        }).then(() => {
          Taro.showToast({
            title: '复制成功'
          })
        })
        break
      }
      case 2: {
        Taro.navigateTo({
          url: '/pages/update/index'
        })
        break
      }
      case 3: {
        Taro.navigateToMiniProgram({
          appId: 'wx8abaf00ee8c3202e',
          extraData: {
            id: '74218'
          }
        })
        break
      }
      case 4: {
        Taro.previewImage({
          urls: ['https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/WechatIMG36738.jpeg'],
          current: 'https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/WechatIMG36738.jpeg'
        })
        break
      }
      default: {}
    }
  }
  return (
    <View>
      <ClCard type='full'>
        <ClFlex justify='around' align='center'>
          <View>
            <ClAvatar
              shape='round'
              size='xlarge'
              headerArray={[
                {
                  icon: 'like'
                }
              ]}
            />
          </View>
          <View>如果你觉得不错，可以请作者喝杯茶</View>
        </ClFlex>
      </ClCard>
      <ClLayout padding='normal' paddingDirection='vertical'>
        <ClMenuList
          shortBorder
          onClick={clickMenu}
          list={[
            {
              icon: {
                iconName: 'form',
                size: 'small',
                color: 'grey'
              },
              title: '文档地址',
              arrow: true
            },
            {
              icon: {
                iconName: 'github',
                size: 'small'
              },
              title: 'Github',
              arrow: true
            },
            {
              icon: {
                iconName: 'creativefill',
                size: 'small',
                color: 'olive'
              },
              title: '更新日志',
              arrow: true
            },
            {
              icon: {
                iconName: 'message',
                size: 'small',
                color: 'blue'
              },
              title: '留言',
              arrow: true
            },
            {
              icon: {
                iconName: 'appreciatefill',
                size: 'small',
                color: 'red'
              },
              title: '赞赏',
              arrow: true
            }
          ]}
        />
      </ClLayout>
    </View>
  )
}
