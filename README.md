# hooks

Copy & paste ready hooks I frequently use in React projects

## All Hooks

### [`useClientPortal`](src/portal)

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
