import { useCallback, useEffect, useState } from "react"

interface IOptions {
  breakpoint: number // match breakpoint (default: 580)
  userAgent?: boolean // match user agent
}

/**
 * `useMobile` returns true if user is on a mobile device
 *
 * @param options - An object of options
 */
const useMobile = (options: IOptions = { breakpoint: 580 }) => {
  const [isMobile, setMobile] = useState(false)

  const handleResize = useCallback(() => {
    setMobile(window.innerWidth <= options.breakpoint)
  }, [])

  useEffect(() => {
    if (options.userAgent)
      return setMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}

export default useMobile
