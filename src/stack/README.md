# `useStack`

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

## API

```ts
const stack = useStack()

stack.addFocus(key)
stack.hasFocus(key)
stack.hasSubFocus(key)
stack.removeFocus(key)
```
