import { ComponentClass } from 'react';

export type TChooseImgObj = {
  /**
   * 选择图片个数
   *
   * 默认值 `9`
   */
  count?: number;
  /**
   * 所选的图片的尺寸
   *
   * 默认值 `original`
   *
   * 可选参数 [`original` , `compressed`]
   */
  sizeType?: ('original' | 'compressed')[];
  /**
   * 选择图片的来源
   *
   * 默认值 `album`
   *
   * 可选类型 [`album`, `camera`]
   */
  sourceType?: ('album' | 'camera')[];
  /**
   * 选择成功回调函数
   */
  success?: () => void;
  /**
   * 选择失败回调函数
   */
  fail?: () => void;
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: () => void;
};

export type TBeforeDel = (index: number) => boolean;

export interface IProps {
  /**
   * 选择图片对象
   *
   * 可选以下参数 `count`, `sizeType`, `sourceType`, `success`, `fail`, `complete`
   */
  chooseImgObj: TChooseImgObj;
  /**
   * 图片列表
   */
  imgList?: string[];
  /**
   * 删除之前确认函数
   */
  beforeDel?: TBeforeDel;
}

export interface UploaderProps extends IProps {}
declare const Uploader: ComponentClass<UploaderProps>;

export default Uploader;
