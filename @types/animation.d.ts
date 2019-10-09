import { ComponentClass } from "react";
import { BaseComponent } from "./baseType";

export interface IProps extends BaseComponent {
  type:
    | "fade"
    | "scale-up"
    | "scale-down"
    | "slide-top"
    | "slide-bottom"
    | "slide-left"
    | "slide-right"
    | "shake"
    | "none";
  reverse?: boolean;
  children?: any;
  delay?: number;
  duration?: number;
  onAnimationStart?: (e: any) => void;
  onAnimationEnd?: (e: any) => void;
}

declare const ClAnimation: ComponentClass<IProps>;

export default ClAnimation;
