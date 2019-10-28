```jsx
const [showLoading, setLoading] = useState(true);

<ClInput
  defaultValue="自动补全"
  style={{
    zIndex: 1
  }}
  autoComplete
  completes={["补全内容 1", "补全内容 2"]}
  completeLoading={showLoading}
  onChange={() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }}
/>
```
