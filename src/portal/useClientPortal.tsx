import { useRef, useState, useEffect, FC } from "react"
import { createPortal } from "react-dom"

interface IOptions {
  selector: string | HTMLElement
}

const defaultOptions = {
  selector: "#__next"
}

/**
 * `useClientPortal` returns a Portal component to render React components into
 *
 * @param options - An object of options e.g. a dom `selector`
 */
const useClientPortal = ({ selector }: IOptions = defaultOptions) => {
  const ref = useRef<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current =
      (typeof selector === "string"
        ? document.querySelector(selector)
        : selector) || document.body
    setMounted(true)
  }, [selector])

  const Portal: FC = mounted
    ? ({ children }) => createPortal(children, ref.current)
    : () => null

  return { Portal }
}

export default useClientPortal
