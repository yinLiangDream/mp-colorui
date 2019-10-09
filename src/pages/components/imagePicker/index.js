import Taro, { useState } from "@tarojs/taro";
import {
  ClCard,
  ClImagePicker,
  ClLayout,
  ClTitleBar,
  ClButton
} from "mp-colorui";
import GenerateCode from "../../../usedComponents/generateCode";
import { beforeDelCode, maxCode, normalCode } from "./code";

export default function ImagePicker() {
  const [imgList, setImgList] = useState([]);
  const success = list => {
    setImgList(list);
  };
  return (
    <ClLayout>
      <ClTitleBar
        title="默认"
        textColor="black"
        type="icon"
        subTitle="default"
      />
      <ClCard>
        <ClImagePicker
          chooseImgObj={{
            success
          }}
          imgList={imgList}
        />
        <ClLayout padding="normal" paddingDirection="around">
          <ClButton
            shape="round"
            long
            onClick={() => {
              console.log(this.state);
              setImgList(
                imgList.map(item => {
                  item.status = "loading";
                  return item;
                })
              );
              imgList.forEach((item, index) => {
                item.status = "loading";
                setTimeout(() => {
                  item.status = "success";
                  if (index === 1) item.status = "fail";
                  setImgList(imgList);
                }, (index + 1) * 1000);
              });
            }}
          >
            开始上传
          </ClButton>
        </ClLayout>
      </ClCard>
      <GenerateCode code={normalCode} />

      <ClTitleBar
        title="最多选择 3 张图片"
        textColor="black"
        type="icon"
        subTitle="most"
      />
      <ClCard>
        <ClImagePicker chooseImgObj={{ count: 3 }} />
      </ClCard>
      <GenerateCode code={maxCode} />

      <ClTitleBar
        title="删除图片确认操作"
        textColor="black"
        type="icon"
        subTitle="beforeDelete"
      />
      <ClCard>
        <ClImagePicker
          chooseImgObj={{ count: 3 }}
          beforeDel={async () => {
            const res = await Taro.showModal({
              title: "您确认要删除吗"
            });
            console.log(res);
            if (res.confirm) return true;
            if (res.cancel) return false;
          }}
        />
      </ClCard>
      <GenerateCode code={beforeDelCode} />
    </ClLayout>
  );
}

ImagePicker.config = {
  navigationBarTitleText: "ImagePicker 图片选择器"
};
