```jsx
<ClCalendar
  showType="card"
  calendarType="month"
  disabledDay={[
    [
      dayjs()
        .add(3, "day")
        .format("YYYY-MM-DD"),
      dayjs()
        .add(7, "day")
        .format("YYYY-MM-DD")
    ]
  ]}
/>
```
