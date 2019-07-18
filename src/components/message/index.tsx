import Taro, { useState, useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { IProps } from '../../../@types/message';
import ClCard from '../card';
import ClFlex from '../flex';
import ClText from '../text';
import ClIcon from '../icon';

import './index.scss';

let timer;
export default function ClMessage(props: IProps) {
  let tempHeight = 500;
  const { bgColor, type, onClose, message, show, duration } = props;
  const [showMessage, setShowMessage] = useState(show);
  const [contentHeight, setContentHeight] = useState(tempHeight);
  const [tempMessage, setTempMessage] = useState('')
  const [tempType, setTempType] = useState()
  const durationTime = duration || 3;
  const mapColor = {
    success: 'light-green',
    error: 'light-red',
    warn: 'light-yellow',
    info: 'light-grey',
    custom: bgColor
  };
  const caculateHeight = async () => {
    const view = Taro.createSelectorQuery().in(this.$scope);
    const query = view.select('#content');
    return await new Promise(resolve => {
      query
        .fields(
          {
            size: true
          },
          data => {
            resolve(data.height);
          }
        )
        .exec();
    });
  };
  const clickClose = async () => {
    const height = await caculateHeight();
    clearTimeout(timer);
    timer = null;
    setContentHeight(height);
    setShowMessage(false);
    onClose && onClose();
  };
  useEffect(async () => {
    if (!showMessage) {
      props.show = false;
      const height = await caculateHeight();
      tempHeight = height;
      setContentHeight(tempHeight);
      setShowMessage(false);
    } else {
      tempHeight = 0;
      if (duration !== 0) {
        if (timer) {
          clickClose();
          clearTimeout(timer);
          timer = null;
          return;
        }
        timer = setTimeout(() => {
          clickClose();
          clearTimeout(timer);
          timer = null;
          setTempMessage('');
          props.message = '';
        }, durationTime * 1000);
      }
      setContentHeight(tempHeight);
      setShowMessage(true);
    }
  }, [showMessage]);
  useEffect(() => {
    setShowMessage(!!show);
  }, [show]);
  useEffect(() => {
    if (tempMessage !== message && tempMessage) {
      clearTimeout(timer);
      timer = null;
      clickClose();
      setTimeout(() => {
        setShowMessage(true);
        setTempMessage(message || '')
        setTempType(type)
      }, 300);
    }
    if (!tempMessage) {
      setTempMessage(message || '');
      setTempType(type)
    }
  }, [message]);
  return (
    <View
      className='cu-cl-message'
      style={{
        transition: `all 0.2s linear`,
        top: `${showMessage ? '0' : '-' + contentHeight + 'px'}`
      }}
    >
      <View className='cu-cl-message__conetent' id='content'>
        <ClCard bgColor={mapColor[tempType] || 'light-grey'}>
          <ClFlex justify='between' align='center'>
            <ClText text={tempMessage} />
            <View
              onClick={() => {
                clickClose();
              }}
            >
              <ClIcon iconName='close' size='xsmall' />
            </View>
          </ClFlex>
        </ClCard>
      </View>
    </View>
  );
}

ClMessage.options = {
  addGlobalClass: true
};

ClMessage.defaultProps = {
  bgColor: 'light-grey',
  type: 'info',
  onClose: () => {},
  message: '',
  show: false,
  duration: 3
} as IProps;
