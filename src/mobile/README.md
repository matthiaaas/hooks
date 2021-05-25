# `useMobile`

![Web Badge](https://img.shields.io/badge/-Web-blueviolet)

Check if user is on mobile device

```tsx
export const Page = () => {
  const isMobile = useMobile()

  return <div>{isMobile && <span>Mobile Device</span>}</div>
}
```

## API

```ts
const isMobile = useMobile({
  breakpoint: 580, // only match screen width
  userAgent: true // only match user agent
})
```
