```jsx
const showMore = () => {
  Taro.showToast({
    icon: "none",
    title: "您点击了更多"
  });
};

<ClNoticeBar text={shortText} single showMore onMore={showMore} />
<ClNoticeBar text={longText} single showMore onMore={showMore} />
<ClNoticeBar text={longText} showMore onMore={showMore} />
<ClNoticeBar
  text={longText}
  single
  marquee
  showMore
  onMore={showMore}
/>
```
