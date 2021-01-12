import { Button, Input, ScrollView, Text, View } from '@tarojs/components'
import { pxTransform } from '@tarojs/taro'
import React, { useState } from 'react'
import { BG_COLOR_LIST, TEXT_COLOR_LIST } from '../../lib/model'
import { IProps } from '../../../@types/searchBar'
import ClCard from '../card'
import ClSearchResult from './searchResult'
import { classNames } from '../../lib'
import ClIcon from '../icon'

export default (props: IProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState('');

  const onIconClick = (index: number) => {
    props.onIconClick && props.onIconClick(index)
  }

  const onSearch = (e) => {
    e.stopPropagation()
    props.onSearch && props.onSearch(value || '')
  }

  const onFocus = (e) => {
    props.onFocus && props.onFocus(value || '')
    setShowSearch(true)
    setValue(e.detail.value)
  }

  const onBlur = (e) => {
    props.onBlur && props.onBlur(value || '')
    setShowSearch(false)
    setValue(e.detail.value)
  }

  const onInput = (e) => {
    setValue(e.detail.value)
    props.onInput && props.onInput(e.detail.value)
  }

  const onPreventProp = (e) => {
    e.stopPropagation()
  }

  const {
    bgColor,
    rightButtonColor,
    rightTextColor,
    leftIcons,
    shape,
    placeholder,
    clear,
    fix,
    className,
    style,
    searchType,
    showResult,
    result,
    showLoading,
    onScrollToLower,
    onScrollToUpper,
    onTouchResult
  } = props
  const bgColorClassName = bgColor ? BG_COLOR_LIST[bgColor] : ''
  const buttonColorClassName = rightButtonColor
    ? BG_COLOR_LIST[rightButtonColor]
    : ''
  const textColorClassName = rightTextColor
    ? TEXT_COLOR_LIST[rightTextColor]
    : ''
  const leftIconComponent = leftIcons
    ? leftIcons.map((item, index) => (
      <View
        key={'key-' + index}
        className={`cu-avatar round cuIcon-${item}`}
        onClick={() => onIconClick(index)}
      />
    ))
    : ''
  const searchComponent = (
    <View className={`search-form ${shape}`}>
      <Text className='cuIcon-search' />
      <Input
        placeholder={placeholder}
        confirmType='search'
        type='text'
        onFocus={onFocus}
        onBlur={onBlur}
        focus={showSearch}
        adjustPosition
        autoFocus={props.autoFocus}
        value={value}
        onConfirm={onSearch}
        onInput={onInput}
      />
      {clear && value ? (
        <View
          onClick={e => {
            const { onClear } = props
            e.stopPropagation()
            setValue('')
            onClear && onClear()
          }}
        >
          <ClIcon
            iconName='close'
            size={32}
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          />
        </View>
      ) : (
        ''
      )}
    </View>
  )
  const buttonComponent = (
    <View className='action' onClick={onPreventProp}>
      <Button
        className={`cu-btn shadow-blur ${shape} ${buttonColorClassName} ${textColorClassName}`}
        onClick={onSearch}
      >
        搜索
      </Button>
    </View>
  )
  const textComponent = (
    <View className='action' onClick={onPreventProp}>
      <Text
        className={`${textColorClassName}`}
        onClick={onSearch}
      >
        搜索
      </Text>
    </View>
  )
  return (
    <View
      style={
        fix ? { position: 'fixed', top: '0', width: '100vw', zIndex: 10 } : ''
      }
    >
      <View
        className={classNames(`cu-bar ${bgColorClassName}`, className)}
        style={Object.assign({ position: 'relative' }, style)}
      >
        {leftIconComponent}
        {searchComponent}
        {searchType === 'text'
          ? textComponent
          : searchType === 'none'
            ? ''
            : buttonComponent}
        {showResult ? (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              zIndex: 11,
              top: pxTransform(100)
            }}
          >
            {(result && result.length) || showLoading ? (
              <ClCard shadow={false} bgColor={bgColor}>
                <ScrollView
                  scrollY
                  style={{ maxHeight: '300px' }}
                  onScrollToLower={() => {
                    onScrollToLower && onScrollToLower()
                  }}
                  onScrollToUpper={() => {
                    onScrollToUpper && onScrollToUpper()
                  }}
                >
                  <ClSearchResult
                    result={result}
                    showLoading={showLoading}
                    onTouchResult={index => {
                      onTouchResult && onTouchResult(index)
                    }}
                  />
                </ScrollView>
              </ClCard>
            ) : (
              ''
            )}
          </View>
        ) : (
          ''
        )}
      </View>
    </View>
  )
}
