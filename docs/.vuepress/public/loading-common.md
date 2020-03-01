```jsx
const [commonLoading, setCommonLoading] = useState(false);
const [commonContentLoading, setCommonContentLoading] = useState(false);

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
```
