# `useClientPortal`

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
