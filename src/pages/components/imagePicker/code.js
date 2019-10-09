export const normalCode = `
\`\`\`
const [imgList, setImgList] = useState([]);

const success = list => {
  setImgList(list);
};

<ClImagePicker
  chooseImgObj={{
    success
  }}
  imgList={imgList}
/>

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
\`\`\`
`;
export const maxCode = `
\`\`\`
<ClImagePicker chooseImgObj={{ count: 3 }} />
\`\`\`
`;

export const beforeDelCode = `
\`\`\`
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
\`\`\`
`;
