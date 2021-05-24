# `useLocalStorage`

![Web Badge](https://img.shields.io/badge/-Web-blueviolet)

React state that automatically syncs with localStorage

```tsx
const defaultSettings = {
  toggle: false
}

export const Settings = () => {
  const [settings, setSettings] = useLocalStorage("settings", defaultSettings, true)

  const handleToggle = () => {
    setSettings(settings => ({
      ...settings,
      toggle: !settings.toggle
    }))
  }

  return (
    <button onClick={handleToggle}>Toggle</button>
  )
}
```

## API

```ts
const [state, setState] = useLocalStorage(key, defaultState, sync)
```

### Parameters

- `key`: Local Storage key identifier
- `defaultState`: A fallback state if no stored value is found
- `sync`: _(optional)_ Update state if storage value updates from elsewhere
