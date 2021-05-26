# `useRangePicker`

![Web Badge](https://img.shields.io/badge/-Web-blueviolet)

Range picker utilities

```tsx
export const Calendar = () => {
  const rangePicker = useRangePicker({
    onChange: (start, end) => console.log(start, end)
  })

  return (
    <Wrapper>
      <Months>
        {rangePicker.months.map((month, i) => (
          <Month key={i}>{month.format("MMMM")}</Month>
        ))}
      </Months>
      <DaysMonths>
        {rangePicker.days.map((days, i) => (
          <Days key={i}>
            {days.map(day =>
              day ? (
                <Day
                  selected={rangePicker.is(day, "selected")}
                  between={rangePicker.is(day, "between")}
                  onClick={() => rangePicker.select(day)}
                  onMouseEnter={() => rangePicker.preview(day)}
                >
                  {day.format("D")}
                </Day>
              ) : (
                <div />
              )
            )}
          </Days>
        ))}
      </DaysMonths>
    </Wrapper>
  )
}
```

## API

```ts
const rangePicker = useRangePicker({
  start: moment(),
  onChange: (start, end) => {}
})

rangePicker.select(day)
rangePicker.preview(day)
rangePicker.is(day, "selected")
rangePicker.clear()
rangePicker.months // array of moment months
rangePicker.days // array[] of moment days
```
