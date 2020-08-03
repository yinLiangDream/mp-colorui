import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClTimeline, ClLoading } from 'mp-colorui'

export default function Update() {
  const [showLoading, setShowLoading] = useState(false)
  const [updateList, setUpdateList] = useState([])
  useEffect(() => {
    setShowLoading(true)
    Taro.request({
      url:
        'https://mp-colorui-1255362963.cos.ap-chengdu.myqcloud.com/update/update.json'
    }).then(res => {
      const data = res.data.reverse()
      const newUpdateList = []
      let version = '0'
      let time = []
      data.forEach(item => {
        const currentVersionArr = item.title.split('.')
        const currentVersion = currentVersionArr[0] + currentVersionArr[1]
        const timeArr = item.time.split('-')
        if (time.length === 0) {
          time = timeArr
        } else if (time[0] !== timeArr[0] || time[1] !== timeArr[1]) {
          newUpdateList.unshift({
            node: `${time[0]}-${time[1]}`
          })
          time = timeArr
        }
        if (currentVersion !== version) {
          version = currentVersion
          newUpdateList.unshift({
            ...item,
            bgColor: 'gradualRed',
            iconColor: 'red'
          })
        } else {
          newUpdateList.unshift({
            ...item,
            bgColor: 'gradualBlue',
            iconColor: 'blue'
          })
        }
      })
      setUpdateList(newUpdateList)
      setShowLoading(false)
    })
  }, [])

  return (
    <ClCard type='full'>
      <ClLoading show={showLoading} />
      <ClLayout
        padding='xlarge'
        paddingDirection='bottom'
        margin='xlarge'
        marginDirection='bottom'
      >
        <ClTimeline times={updateList} />
      </ClLayout>
    </ClCard>
  )
}

Update.config = {
  navigationBarTitleText: '更新日志'
}
