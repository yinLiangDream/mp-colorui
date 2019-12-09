```jsx
<ClCalendar
  showType="card"
  calendarType="month"
  tipDay={[
    {
      date: dayjs()
        .add(3, "day")
        .format("YYYY-MM-DD"),
      tipTop: "生日",
      tipBottom: "可预约",
      tipTopColor: "red",
      tipBottomColor: "green"
    },
    {
      date: dayjs()
        .add(8, "day")
        .format("YYYY-MM-DD"),
      tipTop: "回家",
      tipBottom: "可预约",
      tipTopColor: "red",
      tipBottomColor: "olive"
    }
  ]}
  badge={[
    {
      date: dayjs()
        .add(4, "day")
        .format("YYYY-MM-DD"),
      color: "red",
      num: 3
    },
    {
      date: dayjs()
        .add(8, "day")
        .format("YYYY-MM-DD"),
      color: "pink"
    }
  ]}
/>
```
