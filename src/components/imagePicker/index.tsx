import { Text, View, Image } from "@tarojs/components";
import Taro, { useState } from "@tarojs/taro";
import { classNames } from "../../lib";
import {
  IProps,
  imgList as imgListType,
  TChooseImgObj
} from "../../../@types/imagePicker";

import ClIcon from "../icon";
import "./index.scss";

interface IState {
  imgList: {
    url: string;
    status: string;
    disabled?: boolean;
  }[];
}

export default class ClImagePicker extends Taro.Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps: IProps = {
    beforeDel: index => true,
    max: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      imgList: props.imgList || []
    };
  }

  private ChooseImage() {
    const { chooseImgObj, max } = this.props;
    const { imgList } = this.state;
    const maxPic = max || 0;
    const chooseImg = chooseImgObj as TChooseImgObj;
    Taro.chooseImage({
      count: chooseImg.count || 9,
      sizeType: chooseImg.sizeType || ["original", "compressed"],
      sourceType: chooseImg.sourceType || ["album"],
      success: res => {
        const selectArray: imgListType = res.tempFilePaths.map(url => ({
          url,
          status: "none"
        }));
        selectArray.forEach(item => {
          if (!imgList.find(obj => item.url === obj.url)) {
            if (maxPic) {
              maxPic > imgList.length && imgList.push(item);
            } else {
              imgList.push(item);
            }
          }
        });
        this.setState({
          imgList
        });
        chooseImg.success && chooseImg.success.call(this, imgList);
      },
      fail() {
        chooseImg.fail && chooseImg.fail.call(this, imgList);
      },
      complete() {
        chooseImg.complete && chooseImg.complete.call(this, imgList);
      }
    });
  }

  public viewImage(url: string) {
    Taro.previewImage({
      urls: this.state.imgList.map(item => item.url),
      current: url
    });
  }

  public delImg(index: number) {
    let flag = true;
    const { imgList } = this.state;
    const del = (index: number) => {
      imgList.splice(index, 1);
      this.setState({
        imgList
      });
    };
    new Promise(resolve => {
      if (this.props.beforeDel) {
        resolve(this.props.beforeDel(index));
      } else {
        del(index);
      }
    }).then((res: boolean) => {
      flag = res;
      if (flag) {
        del(index);
      }
    });
  }

  public render() {
    const { className, style, max } = this.props;
    const { imgList } = this.state;
    // const chooseImg = chooseImgObj || {};
    const maxPic = max || 0;
    const imgComponent = imgList.map((item, index) => (
      <View
        className="padding-xs bg-img bg-gray"
        key={item.url}
        style={{ borderRadius: "6px", position: "relative" }}
        onClick={() => {
          this.viewImage.call(this, item.url);
        }}
      >
        <Image
          src={item.url}
          mode="widthFix"
          style={{
            width: "100%",
            position: "absolute",
            left: "50%",
            top: "50%",
            right: "0",
            bottom: "0",
            transform: "translate(-50%, -50%)"
          }}
        />
        {item.status === "none" && !item.disabled ? (
          <View
            className="cu-tag bg-red"
            onClick={e => {
              e.stopPropagation();
              this.delImg.call(this, index);
            }}
            style={{
              backgroundColor: "rgba(355, 355, 355, 0.8)"
            }}
          >
            <ClIcon iconName="close" color="black" size="xsmall" />
          </View>
        ) : (
          ""
        )}
        {
          <View
            className="cu-tag"
            style={{
              backgroundColor: "rgba(355, 355, 355, 0.8)",
              display: `${item.status === "fail" ? "" : "none"}`
            }}
          >
            <ClIcon iconName="warnfill" size="xsmall" color="red" />
          </View>
        }
        {
          <View
            className="cu-tag"
            style={{
              backgroundColor: "rgba(355, 355, 355, 0.8)",
              display: `${item.status === "success" ? "" : "none"}`
            }}
          >
            <ClIcon iconName="roundcheckfill" size="xsmall" color="olive" />
          </View>
        }
        {
          <View
            className="cu-tag"
            style={{
              backgroundColor: "rgba(355, 355, 355, 0.8)",
              display: `${item.status === "loading" ? "" : "none"}`
            }}
          >
            <View className="imagePicker-rotate-360">
              <ClIcon iconName="loading" size="xsmall" color="blue" />
            </View>
          </View>
        }
      </View>
    ));
    return (
      <View
        className={classNames("cu-form-group", className)}
        style={Object.assign({}, style)}
      >
        <View className="grid col-4 grid-square flex-sub">
          {imgComponent}
          {(maxPic === 0 || maxPic !== imgList.length) && (
            <View
              className="padding-xs bg-gray"
              onClick={this.ChooseImage.bind(this)}
              style={{ borderRadius: "6px" }}
            >
              <Text className="cuIcon-cameraadd" />
            </View>
          )}
        </View>
      </View>
    );
  }
}

// export default function ClImagePicker(props: IProps) {
//   const chooseImgObj = props.chooseImgObj || {};
//   const maxPic = props.max || 0;
//   const [imgList, setImgList] = useState(() => {
//     const tempImg = props.imgList || [];
//     return [...tempImg];
//   });

//   const ChooseImage = () => {
//     Taro.chooseImage({
//       count: chooseImgObj.count || 9,
//       sizeType: chooseImgObj.sizeType || ["original", "compressed"],
//       sourceType: chooseImgObj.sourceType || ["album"],
//       success: res => {
//         console.log(res);
//         const selectArray: imgListType = res.tempFilePaths.map(url => ({
//           url,
//           status: "none"
//         }));
//         selectArray.forEach(item => {
//           if (!imgList.find(obj => item.url === obj.url)) {
//             if (maxPic) {
//               maxPic > imgList.length && imgList.push(item);
//             } else {
//               imgList.push(item);
//             }
//           }
//         });
//         setImgList(imgList);
//         chooseImgObj.success && chooseImgObj.success.call(this, imgList);
//       },
//       fail() {
//         chooseImgObj.fail && chooseImgObj.fail.call(this, imgList);
//       },
//       complete() {
//         chooseImgObj.complete && chooseImgObj.complete.call(this, imgList);
//       }
//     });
//   };
//   const viewImage = (url: string) => {
//     Taro.previewImage({
//       urls: imgList.map(item => item.url),
//       current: url
//     });
//   };

//   const delImg = (index: number) => {
//     let flag = true;
//     const del = (index: number) => {
//       imgList.splice(index, 1);
//       setImgList(imgList);
//     };
//     new Promise(resolve => {
//       if (props.beforeDel) {
//         resolve(props.beforeDel(index));
//       } else {
//         del(index);
//       }
//     }).then((res: boolean) => {
//       flag = res;
//       if (flag) {
//         del(index);
//       }
//     });
//   };

//   const imgComponent = imgList.map((item, index) => (
//     <View
//       className="padding-xs bg-img bg-gray"
//       key={item.url}
//       style={{ borderRadius: "6px", position: "relative" }}
//       onClick={() => {
//         viewImage(item.url);
//       }}
//     >
//       <Image
//         src={item.url}
//         mode="widthFix"
//         style={{
//           width: "100%",
//           position: "absolute",
//           left: "0",
//           top: "0",
//           right: "0",
//           bottom: "0",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       />
//       {item.status === "none" ? (
//         <View
//           className="cu-tag bg-red"
//           onClick={e => {
//             e.stopPropagation();
//             delImg(index);
//           }}
//           style={{ backgroundColor: "rgba(355, 355, 355, 0.8)" }}
//         >
//           <ClIcon iconName="close" color="black" size="xsmall" />
//         </View>
//       ) : (
//         ""
//       )}
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "fail" ? "" : "none"}`
//           }}
//         >
//           <ClIcon iconName="warnfill" size="xsmall" color="red" />
//         </View>
//       }
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "success" ? "" : "none"}`
//           }}
//         >
//           <ClIcon iconName="roundcheckfill" size="xsmall" color="olive" />
//         </View>
//       }
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "loading" ? "" : "none"}`
//           }}
//         >
//           <View className="imagePicker-rotate-360">
//             <ClIcon iconName="loading" size="xsmall" color="blue" />
//           </View>
//         </View>
//       }
//     </View>
//   ));

//   return (
//     <View
//       className={classNames("cu-form-group", props.className)}
//       style={Object.assign({}, props.style)}
//     >
//       <View className="grid col-4 grid-square flex-sub">
//         {imgComponent}
//         {(maxPic === 0 || maxPic !== imgList.length) && (
//           <View
//             className="padding-xs bg-gray"
//             onClick={ChooseImage}
//             style={{ borderRadius: "6px" }}
//           >
//             <Text className="cuIcon-cameraadd" />
//           </View>
//         )}
//       </View>
//     </View>
//   );
// }
// ClImagePicker.defaultProps = {
//   beforeDel: index => true,
//   max: 0
// } as IProps;

// ClImagePicker.options = {
//   addGlobalClass: true
// };
