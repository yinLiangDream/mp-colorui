import { Text, View } from '@tarojs/components';
import Taro, { useState } from '@tarojs/taro';
import { IProps } from '../../../@types/imagePicker';



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
      success: function(res) {
        console.log(res);
        const selectArray: string[] = res.tempFilePaths;
        selectArray.forEach(url => {
          if (!imgList.includes(url)) imgList.push(url);
        });
        setImgList(imgList);
        chooseImgObj.success && chooseImgObj.success();
      },
      fail: chooseImgObj.fail || function() {},
      complete: chooseImgObj.complete || function() {}
    });
  };
  const viewImage = (url: string) => {
    Taro.previewImage({
      urls: imgList,
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

  const imgComponet = imgList.map((url, index) => (
    <View
      className='padding-xs bg-img'
      key={url}
      style={{ backgroundImage: `url(${url})` }}
      onClick={() => {
        viewImage(url);
      }}
    >
      <View
        className='cu-tag bg-red'
        onClick={e => {
          delImg(index, e);
          e.stopPropagation();
        }}
      >
        <Text className='cuIcon-close' />
      </View>
    </View>
  ));

  return (
    <View className='cu-form-group'>
      <View className='grid col-4 grid-square flex-sub'>
        {imgComponet}
        <View className='padding-xs solids' onClick={ChooseImage}>
          <Text className='cuIcon-cameraadd' />
        </View>
      </View>
    </View>
  );
}

ClImagePicker.options = {
  addGlobalClass: true
};
