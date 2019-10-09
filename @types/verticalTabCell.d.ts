import { ComponentClass } from "react";
import { BaseComponent } from "./baseType";

export interface IProps extends BaseComponent {
  children: any;
}

declare const VerticalTabCell: ComponentClass<IProps>;
export default VerticalTabCell;
