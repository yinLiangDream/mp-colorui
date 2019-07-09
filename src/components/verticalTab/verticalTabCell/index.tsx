import Taro from '@tarojs/taro'
import ClCard from "../../card";

import {IProps} from '../../../../@types/verticalTabCell'

export default function ClVerticalTabCell(props: IProps) {
  return (
    <ClCard>
      {this.props.children}
    </ClCard>
  )
}

ClVerticalTabCell.options = {
  addGlobalClass: true
}
