```jsx
const [lineLoading, setLineLoading] = useState(false);
const [lineLoadingErr, setLineLoadingErr] = useState(false);
const [lineLoadingEnd, setLineLoadingEnd] = useState(false);

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

<ClLoading
  type="line"
  show={lineLoading}
  loadingError={lineLoadingErr}
  noMore={lineLoadingEnd}
/>;
```
