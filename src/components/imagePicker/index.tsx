import { Text, View, Image } from '@tarojs/components';
import Taro, { useState } from '@tarojs/taro';
import { IProps, imgList } from '../../../@types/imagePicker';
import ClIcon from '../icon';

import './index.scss'

export default function ClImagePicker(props: IProps) {
  const chooseImgObj = props.chooseImgObj || {};
  const [imgList, setImgList] = useState(() => {
    const tempImg = props.imgList || [];
    return [...tempImg];
  });

  const ChooseImage = () => {
    Taro.chooseImage({
      count: chooseImgObj.count || 9,
      sizeType: chooseImgObj.sizeType || ['original', 'compressed'],
      sourceType: chooseImgObj.sourceType || ['album'],
      success: (res) => {
        console.log(res);
        const selectArray: imgList = res.tempFilePaths.map((url => ({ url, status: 'none' })));
        selectArray.forEach(item => {
          if (!imgList.find(obj => item.url === obj.url)) imgList.push(item);
        });
        setImgList(imgList);
        chooseImgObj.success && chooseImgObj.success.call(this, imgList);
      },
      fail() {
        chooseImgObj.fail && chooseImgObj.fail.call(this, imgList)
      },
      complete() {
        chooseImgObj.complete && chooseImgObj.complete.call(this, imgList)
      }
    });
  };
  const viewImage = (url: string) => {
    Taro.previewImage({
      urls: imgList.map(item => item.url),
      current: url
    });
  };

  const delImg = async (index: number, e: any) => {
    e.stopPropagation();
    let flag = true;
    if (props.beforeDel) {
      flag = await props.beforeDel(index);
    }
    if (flag) {
      imgList.splice(index, 1);
      setImgList(imgList);
    }
  };

  const imgComponet = imgList.map((item, index) => (
    <View
      className='padding-xs bg-img bg-gray'
      key={item.url}
      style={{ borderRadius: '6px', position: 'relative' }}
      onClick={() => {
        viewImage(item.url);
      }}
    >
      <Image src={item.url} mode='widthFix' style={{ width: '100%', position: 'absolute', left: '0', top: '0', right: '0', bottom: '0' }} />
      {item.status === 'none' ?
        <View
          className='cu-tag bg-red'
          onClick={e => {
            delImg(index, e);
            e.stopPropagation();
          }}
          style={{ backgroundColor: 'rgba(355, 355, 355, 0.8)' }}
        >
          <ClIcon iconName='close' color='black' size='xsmall' />
        </View> : ''}
      {
        <View className='cu-tag' style={{ backgroundColor: 'rgba(355, 355, 355, 0.8)', display: `${item.status === 'fail' ? '' : 'none'}` }}>
          <ClIcon iconName='warnfill' size='xsmall' color='red' />
        </View>
      }
      {
        <View className='cu-tag' style={{ backgroundColor: 'rgba(355, 355, 355, 0.8)', display: `${item.status === 'success' ? '' : 'none'}` }}>
          <ClIcon iconName='roundcheckfill' size='xsmall' color='olive' />
        </View>
      }
      {
        <View className='cu-tag' style={{ backgroundColor: 'rgba(355, 355, 355, 0.8)', display: `${item.status === 'loading' ? '' : 'none'}` }}>
          <View className='imagePicker-rotate-360'>
            <ClIcon iconName='loading' size='xsmall' color='blue' />
          </View>
        </View>
      }
    </View>
  ));

  return (
    <View className='cu-form-group'>
      <View className='grid col-4 grid-square flex-sub'>
        {imgComponet}
        <View className='padding-xs bg-gray' onClick={ChooseImage} style={{ borderRadius: '6px' }}>
          <Text className='cuIcon-cameraadd' />
        </View>
      </View>
    </View>
  );
}

ClImagePicker.options = {
  addGlobalClass: true
};
