import { Image, Text, View } from "@tarojs/components";
import Taro, { useEffect, useState } from "@tarojs/taro";
import { BG_COLOR_LIST } from "../utils/model";
import { IProps } from "../../../@types/loading";
import { classNames } from "../../components/utils";

// interface IState {
//   loadProgress: number;
//   timer: any;
// }

export default function ClLoading(props: IProps) {
  const [loadProgress, setLoadProgress] = useState(0);
  const loadProgressFn = () => {
    setLoadProgress(100);
  };
  useEffect(() => {
    if (props.show) {
      loadProgressFn();
    }
  }, []);
  useEffect(() => {
    if (props.show) loadProgressFn();
    else {
      setLoadProgress(0);
    }
  }, [props.show]);

  const bgColorClassName = () =>
    props.bgColor ? BG_COLOR_LIST[props.bgColor] : "bg-blue";
  const modalComponent = (
    <View className="cu-load load-modal">
      <Image src={props.imgUrl || ""} mode="aspectFit" />
      <Text className="text-gray">{props.modalText}</Text>
    </View>
  );
  const imageComponent = (
    <View className="cu-load load-image">
      <Image src={props.imgUrl || ""} mode="aspectFit" />
    </View>
  );
  const lineComponent = (
    <View
      className={`cu-load ${
        props.loadingError ? "bg-red erro" : bgColorClassName()
      } ${props.noMore || props.loadingError ? "over" : "loading"}`}
    />
  );
  const long = 100 - loadProgress;
  const barComponent = (
    <View
      className={classNames(
        `load-progress ${props.show ? "show" : "hide"}`,
        props.className
      )}
      style={Object.assign({ top: "0" }, props.style)}
    >
      <View
        className={`load-progress-bar ${bgColorClassName()}`}
        style={{
          transform: `translate3d(-${long}%, 0px, 0px)`,
          transition: "all 5s ease 0s"
        }}
      />
      <View className={`load-progress-spinner text-${props.bgColor}`} />
    </View>
  );
  const show = props.show;
  return show ? (
    props.type === "bar" ? (
      barComponent
    ) : props.type === "line" ? (
      lineComponent
    ) : props.type === "modal" ? (
      modalComponent
    ) : props.type === "image" ? (
      imageComponent
    ) : (
      barComponent
    )
  ) : (
    <View />
  );
}

ClLoading.options = {
  addGlobalClass: true
};

ClLoading.defaultProps = {
  type: "bar",
  bgColor: "blue",
  modalText: "加载中...",
  loadingError: false,
  noMore: false,
  show: false
} as IProps;

// export default class ClLoading extends Component<IProps, IState> {
//   static options = {
//     addGlobalClass: true
//   };
//   static defaultProps: IProps = {
//     type: "bar",
//     bgColor: "blue",
//     modalText: "加载中...",
//     loadingError: false,
//     noMore: false,
//     show: false
//   };
//
//   state: IState = {
//     loadProgress: 0,
//     timer: null
//   };
//   loadProgress() {
//     if (this.state.loadProgress < 100) {
//       this.state.timer = setInterval(() => {
//         this.setState(
//           {
//             loadProgress: this.state.loadProgress + 5
//           },
//           () => {
//             if (this.state.loadProgress > 100) {
//               this.setState({
//                 loadProgress: 100
//               });
//             }
//           }
//         );
//       }, 100);
//     } else {
//       this.setState({
//         loadProgress: 100
//       });
//     }
//   }
//   componentWillReceiveProps(nextProps: IProps) {
//     if (nextProps.show) this.loadProgress();
//     else {
//       clearTimeout(this.state.timer);
//       this.state.timer = null;
//       this.setState({
//         loadProgress: 0
//       });
//     }
//   }
//
//   componentDidMount() {
//     if (this.props.show) this.loadProgress();
//   }
//   render() {
//     const bgColorClassName = () =>
//       this.props.bgColor ? BG_COLOR_LIST[this.props.bgColor] : "bg-blue";
//     const modalComponent = (
//       <View className="cu-load load-modal">
//         <Image src={this.props.imgUrl || ""} mode="aspectFit" />
//         <Text className="text-gray">{this.props.modalText}</Text>
//       </View>
//     );
//     const imageComponent = (
//       <View className="cu-load load-image">
//         <Image src={this.props.imgUrl || ""} mode="aspectFit" />
//       </View>
//     );
//     const lineComponent = (
//       <View
//         className={`cu-load ${
//           this.props.loadingError ? "bg-red erro" : bgColorClassName()
//         } ${this.props.noMore || this.props.loadingError ? "over" : "loading"}`}
//       />
//     );
//     const long = 100 - this.state.loadProgress;
//     const barComponent = (
//       <View
//         className={`load-progress ${this.props.show ? "show" : "hide"}`}
//         style={{ top: "0" }}
//       >
//         <View
//           className={`load-progress-bar ${bgColorClassName()}`}
//           style={{
//             transform: `translate3d(-${long}%, 0px, 0px)`
//           }}
//         />
//         <View className={`load-progress-spinner text-${this.props.bgColor}`} />
//       </View>
//     );
//     const show = this.props.show;
//     return show ? (
//       this.props.type === "bar" ? (
//         barComponent
//       ) : this.props.type === "line" ? (
//         lineComponent
//       ) : this.props.type === "modal" ? (
//         modalComponent
//       ) : this.props.type === "image" ? (
//         imageComponent
//       ) : (
//         barComponent
//       )
//     ) : (
//       <View />
//     );
//   }
// }
