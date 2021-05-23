# hooks

Copy & paste ready hooks I frequently use in React projects

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
