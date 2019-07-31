import Taro, {useRef, useState} from '@tarojs/taro';
import ClLayout from '../../components/layout';
import ClSwitch from "../../components/switch";


export default class Index extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ClLayout>
        <ClSwitch type='form' title='123' color='blue' onChange={(e) => {
          console.log(e)
        }} />
      </ClLayout>
    )
  }
}
