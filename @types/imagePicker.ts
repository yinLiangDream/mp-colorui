import { ComponentClass } from "react";
import { BaseComponent } from "./baseType";

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
  sizeType?: ("original" | "compressed")[];
  /**
   * 选择图片的来源
   *
   * 默认值 `album`
   *
   * 可选类型 [`album`, `camera`]
   */
  sourceType?: ("album" | "camera")[];
  /**
   * 选择成功回调函数
   */
  success?: (list?: imgList) => void;
  /**
   * 选择失败回调函数
   */
  fail?: (list?: imgList) => void;
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (list?: imgList) => void;
};

export type imgList = {
  url: string;
  status: "success" | "fail" | "loading" | "none";
}[];

export type TBeforeDel = (index: number) => boolean;

export interface IProps extends BaseComponent {
  /**
   * 选择图片对象
   *
   * 可选以下参数 `count`, `sizeType`, `sourceType`, `success`, `fail`, `complete`
   */
  chooseImgObj?: TChooseImgObj;
  /**
   * 图片列表
   */
  imgList?: imgList;
  /**
   * 删除之前确认函数
   */
  beforeDel?: TBeforeDel;
  /**
   * 显示的最大数量
   *
   * 默认值 `0` 代表不限制
   */
  max?: number;
}

declare const ImagePicker: ComponentClass<IProps>;

export default ImagePicker;
