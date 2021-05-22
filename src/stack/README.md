# `useStack`

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
