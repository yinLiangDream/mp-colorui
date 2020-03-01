```jsx
const [barLoading, setBarLoading] = useState(false);
const [barContentLoading, setBarContentLoading] = useState(false);

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

<ClLoading type='bar' show={barLoading} />
```
