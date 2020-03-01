```jsx
const [imageLoading, setImageLoading] = useState(false);
const [imageContentLoading, setImageContentLoading] = useState(false);

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

<ClLoading
  type="image"
  show={imageLoading}
  imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"
/>;
```
