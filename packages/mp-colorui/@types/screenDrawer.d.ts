import { ComponentClass } from "react";
import { BaseComponent } from "./baseType";

export interface IProps extends BaseComponent {
  /**
   * 显示 screenDrawer
   *
   * 默认值 `false`
   */
  show?: boolean;
  /**
   * 点击返回小箭头触发
   */
  onHide?: () => void;
  renderPage: any;
  renderDrawer: any;
}

declare const ScreenDrawer: ComponentClass<IProps>;

export default ScreenDrawer;
