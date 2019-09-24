import Taro, { useState, useMemo, useEffect, pxTransform } from '@tarojs/taro';
import classnames from 'classnames';
import { IProps } from '../../../@types/actionSheet';
import ClCard from '../card';
import { generateId } from '../utils';
import { bgColorType, bgColorMoreType, lightBgColorType } from '../utils/types';
import ClText from '../text';
import { View } from '@tarojs/components';
import ClLayout from '../layout';

import './index.scss';

import { BG_COLOR_LIST } from '../utils/model';

export default function ClActionSheet(props: IProps) {
  const {
    type,
    tip,
    isOpened,
    closeWithShadow,
    options,
    cancelText,
    showCancel,
    cancelBgColor,
    cancelFontColor,
    onClick,
    onCancel
  } = props;
  const [actionsArr, setActionsArr] = useState([] as any[]);
  const [show, setShow] = useState(false);
  useMemo(() => {
    const list = options || [];
    setActionsArr(
      list.map((item: any) => {
        item.cu_action_sheet_id = generateId();
        return item;
      })
    );
  }, [options]);
  useMemo(() => {
    setShow(!!isOpened);
  }, [isOpened]);
  const click = (index: number) => {
    onClick && onClick(index);
  };
  const cancelComponent = (
    <View>
      <View
        onClick={(e) => {
          e.stopPropagation()
          onCancel && onCancel();
        }}
        style={{
          marginTop: pxTransform(20)
        }}
        className={classnames([
          {
            cu_action_sheet_card: type === 'card'
          }
        ])}
      >
        <ClCard bgColor={cancelBgColor} type="full" active>
          <ClText text={cancelText} textColor={cancelFontColor} align="center" />
        </ClCard>
      </View>
    </View>
  );
  const tipComponent = (
    <ClText align="center" bgColor="gray" textColor="grey">
      <ClLayout padding="xsmall" paddingDirection="vertical">
        {tip}
      </ClLayout>
    </ClText>
  );
  const actionsComponents = actionsArr.map(
    (
      item: {
        cu_action_sheet_id: string;
        text: string;
        bgColor: bgColorType | bgColorMoreType | lightBgColorType;
      },
      index: number
    ) => (
        <View
          onClick={click.bind(this, index)}
          className={classnames([
            {
              cu_action_sheet_line: index !== actionsArr.length - 1
            },
            BG_COLOR_LIST[item.bgColor]
          ])}
          key={item.cu_action_sheet_id}
        >
          <ClCard bgColor={item.bgColor} type="full" active>
            {item.text}
          </ClCard>
        </View>
      )
  );
  return (
    <View
      className={classnames([
        'cu-modal bottom-modal',
        {
          show: show
        }
      ])}
      onClick={e => {
        closeWithShadow && setShow(false);
        onCancel && onCancel();
        e.stopPropagation();
      }}
    >
      <View
        className="cu-dialog"
        style={{ maxHeight: '70vh', backgroundColor: `${type === 'card' ? 'transparent' : '#f8f8f8'}` }}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <View
          className={classnames([
            {
              cu_action_sheet_card: type === 'card'
            }
          ])}
        >
          {tip ? tipComponent : ''}
          {actionsComponents}
        </View>
        {showCancel ? cancelComponent : ''}
        <View style={{ height: '20px', width: '100%' }} />
      </View>
    </View>
  );
}

ClActionSheet.options = {
  addGlobalClass: true
};

ClActionSheet.defaultProps = {
  tip: '',
  isOpened: false,
  closeWithShadow: true,
  actions: [],
  cancelText: '取消',
  showCancel: false,
  cancelBgColor: 'white',
  cancelFontColor: undefined,
  onClick: () => { },
  onCancel: () => { }
} as IProps;
