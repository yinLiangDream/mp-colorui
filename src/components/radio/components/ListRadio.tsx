import Taro, {useState} from '@tarojs/taro'
import {Text, View} from '@tarojs/components'
import {TList} from '../../../../@types/radio';

interface IProps {
  list: TList;
  checkedValue: String;
  onChange: (value) => void
}

export default function ListRadio(props: IProps) {
  const list = props.list || [];
  const checkedValue = props.checkedValue;
  const [checked, setChecked] = useState(checkedValue);
  const listComponent = list.map((item, index) => (
    <View
      key={index}
      className={`cu-item ${checked === item.value ? 'checked' : ''}`}
      onClick={() => {
        setChecked(item.value || '');
        props.onChange && props.onChange(item.value)
      }}>
      <View className='content flex align-center'>
        <Text>{item.key}</Text>
      </View>
    </View>
  ))
  return (
    <View className={`cu-list menu`}>
      {listComponent}
    </View>
  )
}

ListRadio.defaultProps = {
  list: [],
  checkedValue: '',
  onChange: () => {
  }
} as IProps;

ListRadio.options = {
  addGlobalClass: true
}
