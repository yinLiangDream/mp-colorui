import { Switch, View, Text } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import ClAvatar from '../../components/avatar/index';
import ClButton from '../../components/button/index';
import ClCheckbox from '../../components/checkbox/index';
import ClDrawer from '../../components/drawer/index';
import ClIcon from '../../components/icon/index';
import ClInput from '../../components/input/index';
import ClLayout from '../../components/layout/index';
import ClLoading from '../../components/loading/index';
import ClMenuList from '../../components/menuList/index';
import ClModal from '../../components/modal/index';
import ClNavBar from '../../components/navBar';
import ClProgress from '../../components/progress/index';
import ClRadio from '../../components/radio/index';
import ClSearchBar from '../../components/searchBar';
import ClSelect from '../../components/select/index';
import ClShopBar from '../../components/shopBar';
import ClStep from '../../components/steps';
import '../../style/index.scss';
import ClSwiper from '../../components/swiper/index';
import ClSwitch from '../../components/switch/index';
import ClTabBar from '../../components/tabBar/index';
import ClTabs from '../../components/tabs';
import ClTag from '../../components/tag/index';
import ClText from '../../components/text/index';
import ClTimeline from '../../components/timeline';
import ClTitleBar from '../../components/titleBar';
import ClImagePicker from '../../components/imagePicker';

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  state = {
    show: false,
    step: 0
  };

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  tickHandler(time) {
    console.log(time);
  }

  timeupHandler() {
    console.log('timeup');
  }

  click() {
    console.log(arguments);
    let step = this.state.step > 4 ? 0 : this.state.step;
    this.setState({
      step: step += 1
    });
  }

  clickButton(e) {
    console.log(e);
    this.setState({
      show: true
    })
  }

  change(e) {
    this.setState({
      show: e.detail.value
    });
  }

  render() {
    return (
      <View className='index'>
        <ClDrawer direction='left' show={this.state.show} >
          <View>123123</View>
        </ClDrawer>
        <ClModal
          show={this.state.show}
          actions={[{ text: '支付宝' }]}
          title='微信'
          titleBgColor='light-grey'
          closeWithShadow
          close
          renderTitle={<View>123</View>}
          renderAction={
            <ClButton
              size='large'
              shape='round'
              bgColor='gradualOrange'
              openType='getUserInfo'
              onClick={this.clickButton}
              icon='round'
            ><Text>怀念</Text></ClButton>
          }
        >
          <ClSwiper
            list={[
              {
                url: 'https://yys.v.netease.com/Shiranui_final.mp4',
                type: 'video',
                controls: true,
                poster:
                  'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/active/activeBack.jpg'
              },
              {
                url:
                  'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/active/activeBack.jpg',
                type: 'image'
              }
            ]}
          />
        </ClModal>
        <ClSwiper
          type='card'
          list={[
            {
              url: 'https://yys.v.netease.com/Shiranui_final.mp4',
              type: 'video',
              controls: true,
              poster:
                'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/active/activeBack.jpg'
            },
            {
              url:
                'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/active/activeBack.jpg',
              type: 'image'
            }
          ]}
        />
        <ClTimeline
          times={[
            {
              content: 111
            },
            {
              content: 222
            },
            {
              content: 333
            }
          ]}
        />
        <ClMenuList
          list={[
            {
              icon: {
                iconName: 'add'
              },
              title: '112',
              arrow: true
            },
            {
              imgUrl: 'http://www.ysdm.net/common/CleintCaptcha?14',
              title: '222'
            }
          ]}
        />
        <ClImagePicker
          chooseImgObj={{}} />
        <ClCheckbox
          type='form'
          title='checkbox'
          color='olive'
          checkboxGroup={[
            {
              key: '666',
              value: '666',
              checked: true
            },
            {
              key: '777',
              value: '777'
            }
          ]}
        />
        <ClRadio
          type='form'
          title='radio'
          checkedValue='1111'
          color='brown'
          radioGroup={[
            {
              key: 'qqq',
              value: '1111'
            },
            {
              key: 'ddd',
              value: '2222'
            }
          ]}
        />
        <ClSwitch color='red' type='form' title='switch' />
        <ClSelect
          mode='region'
          title='选择器'
          // disabled
          region={{
            value: ['广东省', '广州市', '海珠区']
          }}
          date={
            {
              // rangeKey: 'value',
              // value: '11:59',
              // start: '12:12'
              // fields:'month'
            }
          }
        />
        <ClInput
          title='姓名'
          type='password'
          image='http://www.ysdm.net/common/CleintCaptcha?14'
          onImageClick={this.clickButton}
        />
        <ClAvatar
          shape='round'
          size='large'
          onClick={this.click}
          headerArray={[
            {
              icon: 'round',
              tag: 'male',
              tagColor: 'blue',
              bgColor: 'cyan'
            }
          ]}
        />
        <ClButton
          size='large'
          shape='round'
          bgColor='gradualOrange'
          openType='getUserInfo'
          onClick={this.clickButton.bind(this)}
        >怀念</ClButton>
        <ClText text='KKK' align='center' size='xxlarge' />
        <ClIcon iconName='activity' size='large' color='cyan' />
        <ClLayout
          type='normal'
          baseSelection={{ paddingDirection: 'left', padding: 'small' }}
        >
          <View>qqqqqq</View>
          <View>qqqqqq</View>
          <View>qqqqqq</View>
        </ClLayout>
        <ClTag
          shape='radius'
          badge
          tags={[
            {
              text: '111'
            },
            {
              text: '222'
            },
            {
              text: '333',
              // plain: true,
              color: 'cyan'
            }
          ]}
        />
        <ClProgress percent={60} stripe animation shape='round' />
        <Switch onChange={this.change} />
        <ClLoading
          show={this.state.show}
          type='bar'
          bgColor='light-black'
          modalText='111'
        />
        <ClTabBar
          active={1}
          bgColor='black'
          activeColor='gray'
          fix
          tabs={[
            {
              badge: true,
              icon: 'hot',
              title: '首页'
            },
            {
              badge: false,
              icon: 'info',
              title: '西欧明星哦'
            },
            {
              badge: 99,
              icon: 'repeal',
              title: '嗷嗷嗷',
              action: true
            },
            {
              badge: 8,
              icon: 'weunblock',
              title: '丁丹丹'
            },
            {
              icon: 'video',
              title: '丢丢丢'
            }
          ]}
        />
        <ClShopBar
          tabs={[
            {
              badge: true,
              icon: 'hot',
              title: '首页'
            },
            {
              badge: false,
              icon: 'info',
              title: '西欧明星哦'
            }
          ]}
          buttons={[
            {
              text: '加入购物车',
              bgColor: 'orange'
            },
            {
              text: '点击即送',
              bgColor: 'red'
            }
          ]}
        />
        <ClTitleBar
          text='钢铁侠'
          type='sub-title'
          subTitle='IRON'
          barColor='light-gray'
          textColor='blue'
        />
        <ClNavBar
          title='钢铁侠死了'
          bgColor='black'
          leftIcon={[
            {
              icon: 'back',
              leftText: '复活'
            }
          ]}
          rightIcon={[
            {
              icon: 'video',
              color: 'red'
            }
          ]}
          onClickLeftIcon={this.click}
          onClickRightIcon={this.click}
        />
        <ClSearchBar
          searchType='button'
          shape='round'
          rightButtonColor='white'
          rightTextColor='black'
          onSearch={this.click}
          fix={false}
        />
        <ClTabs
          tabs={[
            {
              icon: 'video',
              text: 'fill'
            },
            {
              icon: 'round',
              text: 'round'
            }
          ]}
          type='center'
        />
        <ClStep
          step={this.state.step}
          steps={[
            {
              title: 'aaa'
            },
            {
              title: 'bbb'
            },
            {
              title: 'ccc'
            },
            {
              title: 'ddd'
            }
          ]}
        />
      </View>
    );
  }
}
