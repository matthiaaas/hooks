# hooks

Copy & paste ready, highly customizable hooks I frequently use in React projects

## Released Packages

- [Framer Motion Hooks (matthiaaas/framer-motion-hooks)](https://github.com/matthiaaas/framer-motion-hooks)
- [Electron Context Menu (transflow/use-electron-context-menu)](https://github.com/transflow/use-electron-context-menu)

## All Hooks

### [`useClientPortal`](src/portal)

![Web Badge](https://img.shields.io/badge/-Web-blueviolet)

React DOM Portal on the client side (especially useful for Next.js)

```tsx
export const Modal = () => {
  const { Portal } = useClientPortal({
    selector: "#el" // optional
  })

  return (
    <Portal>
      <Wrapper>...</Wrapper>
    </Portal>
  )
}
```

### [`useStack`](src/stack)

![Web Badge](https://img.shields.io/badge/-Web-blueviolet)

Focus & modal management functions

```tsx
export const Modal = () => {
  const stack = useStack()

  if (!stack.hasFocus("myModal")) return null

  return (
    <Wrapper>
      <h2>Modal</h2>
    </Wrapper>
  )
}
```

#### API

```ts
const stack = useStack()

stack.addFocus(key)
stack.hasFocus(key)
stack.hasSubFocus(key)
stack.removeFocus(key)
```

### [`useIpcRenderer`](src/ipcRenderer)

![Electron Badge](https://img.shields.io/badge/-Electron-turquoise)

Hook that responds to ipcMain events (way of communicating between Electron's main process and the renderer)

[electronjs.org/docs/api/ipc-renderer](https://www.electronjs.org/docs/api/ipc-renderer)

```tsx
export const Component = () => {
  useIpcRenderer(
    "user:create",
    () => console.log("create user..."),
    [user] // optional React state deps
  )
}
```

### [`useLocalStorage`](src/storage)

![Web Badge](https://img.shields.io/badge/-Web-blueviolet)

React state that automatically syncs with localStorage

```tsx
const defaultSettings = {
  toggle: false
}

export const Settings = () => {
  const [settings, setSettings] = useLocalStorage(
    "settings",
    defaultSettings,
    true
  )

  const handleToggle = () => {
    setSettings(settings => ({
      ...settings,
      toggle: !settings.toggle
    }))
  }

  return <button onClick={handleToggle}>Toggle</button>
}
```

#### API

```ts
const [state, setState] = useLocalStorage(key, defaultState, sync)
```

### [`useMobile`](src/mobile)

![Web Badge](https://img.shields.io/badge/-Web-blueviolet)

Check if user is on mobile device

```tsx
export const Page = () => {
  const isMobile = useMobile()

  return <div>{isMobile && <span>Mobile Device</span>}</div>
}
```

#### API

```ts
const isMobile = useMobile({
  breakpoint: 580, // only match screen width
  userAgent: true // only match user agent
})
```

### [`useRangePicker`](src/rangepicker)

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

#### API

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
