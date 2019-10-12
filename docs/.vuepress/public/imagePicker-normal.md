
```jsx
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
```
