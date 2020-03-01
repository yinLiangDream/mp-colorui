import Taro, { useState } from "@tarojs/taro";
import {
  ClCard,
  ClLayout,
  ClLoading,
  ClSwitch,
  ClTitleBar
} from "../../../index";

export default function Loading() {
  const [barLoading, setBarLoading] = useState(false);
  const [barContentLoading, setBarContentLoading] = useState(false);
  const [lineLoading, setLineLoading] = useState(false);
  const [lineLoadingErr, setLineLoadingErr] = useState(false);
  const [lineLoadingEnd, setLineLoadingEnd] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageContentLoading, setImageContentLoading] = useState(false);
  const [commonLoading, setCommonLoading] = useState(false);
  const [commonContentLoading, setCommonContentLoading] = useState(false);
  return (
    <ClLayout>
      <ClTitleBar
        title="bar加载"
        textColor="black"
        type="icon"
        subTitle="bar"
      />
      <ClLoading type="bar" content show={barContentLoading}>
        <ClCard>
          <ClSwitch
            title="bar加载"
            type="form"
            checked={barLoading}
            onChange={flag => {
              setBarLoading(flag);
            }}
          />
          <ClSwitch
            title="bar区域加载"
            type="form"
            checked={barContentLoading}
            onChange={flag => {
              setBarContentLoading(flag);
            }}
          />
        </ClCard>
      </ClLoading>

      <ClLoading type="bar" show={barLoading} />

      <ClTitleBar
        title="common加载"
        textColor="black"
        type="icon"
        subTitle="bar"
      />
      <ClLoading
        type="common"
        show={commonContentLoading}
        commonText="加载 3 秒"
        content
      >
        <ClCard>
          <ClSwitch
            title="common加载"
            type="form"
            checked={commonLoading}
            onChange={flag => {
              setCommonLoading(flag);
              setTimeout(() => {
                setCommonLoading(false);
              }, 3000);
            }}
          />
          <ClSwitch
            title="common区域加载"
            type="form"
            checked={commonContentLoading}
            onChange={flag => {
              setCommonContentLoading(flag);
              setTimeout(() => {
                setCommonContentLoading(false);
              }, 3000);
            }}
          />
        </ClCard>
      </ClLoading>
      <ClLoading type="common" show={commonLoading} commonText="加载 3 秒" />

      <ClTitleBar
        title="line加载"
        textColor="black"
        type="icon"
        subTitle="line"
      />
      <ClLoading
        type="line"
        show={lineLoading}
        loadingError={lineLoadingErr}
        noMore={lineLoadingEnd}
      />

      <ClCard>
        <ClSwitch
          title="line加载"
          type="form"
          checked={lineLoading}
          onChange={flag => {
            setLineLoading(flag);
            if (!flag) {
              setLineLoadingErr(false);
              setLineLoadingEnd(false);
            }
          }}
        />
        <ClSwitch
          title="line加载出错"
          type="form"
          checked={lineLoadingErr}
          onChange={flag => {
            if (flag) {
              setLineLoadingEnd(false);
              setLineLoading(true);
            }
            setLineLoadingErr(flag);
          }}
        />
        <ClSwitch
          title="line加载没有更多了"
          type="form"
          checked={lineLoadingEnd}
          onChange={flag => {
            if (flag) {
              setLineLoadingErr(false);
              setLineLoading(true);
            }
            setLineLoadingEnd(flag);
          }}
        />
      </ClCard>

      <ClTitleBar
        title="modal加载"
        textColor="black"
        type="icon"
        subTitle="modal"
      />
      <ClLoading
        type="modal"
        show={modalLoading}
        imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"
      />
      <ClCard>
        <ClSwitch
          title="modal加载"
          type="form"
          checked={modalLoading}
          onChange={flag => {
            setModalLoading(flag);
            setTimeout(() => {
              setModalLoading(false);
            }, 3000);
          }}
        />
      </ClCard>

      <ClTitleBar
        title="image加载"
        textColor="black"
        type="icon"
        subTitle="image"
      />
      <ClLoading
        type="image"
        show={imageLoading}
        imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"
      />
      <ClLoading
        content
        type="image"
        show={imageContentLoading}
        imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"
      >
        <ClCard>
          <ClSwitch
            title="image加载"
            type="form"
            checked={imageLoading}
            onChange={flag => {
              setImageLoading(flag);
              setTimeout(() => {
                setImageLoading(false);
              }, 3000);
            }}
          />
          <ClSwitch
            title="image区域加载"
            type="form"
            checked={imageContentLoading}
            onChange={flag => {
              setImageContentLoading(flag);
              setTimeout(() => {
                setImageContentLoading(false);
              }, 3000);
            }}
          />
        </ClCard>
      </ClLoading>
    </ClLayout>
  );
}

Loading.config = {
  navigationBarTitleText: "Loading 加载"
};
