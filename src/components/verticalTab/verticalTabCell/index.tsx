import React from 'react'
import ClCard from "../../card";

import {IProps} from '../../../../@types/verticalTabCell'

export default function ClVerticalTabCell(props: IProps) {
  return (
    <ClCard>
      {props.children}
    </ClCard>
  )
}

ClVerticalTabCell.options = {
  addGlobalClass: true
}
