# `useIpcRenderer`

![Electron Badge](https://img.shields.io/badge/-Electron-turquoise)

Hook that responds to ipcMain events (way of communicating between Electron's main process and the renderer)

```tsx
export const Component = () => {
  useIpcRenderer(
    "user:create",
    () => console.log("create user..."),
    [user] // optional React state deps
  )
}
```

[electronjs.org/docs/api/ipc-renderer](https://www.electronjs.org/docs/api/ipc-renderer)
