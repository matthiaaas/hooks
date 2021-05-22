import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react"

interface IStackContext {
  focus: string[]
  hasFocus: (key: string) => boolean
  hasSubFocus: (key: string) => boolean
  addFocus: (key: string) => void
  removeFocus: (key: string) => void
}

const defaultStack: IStackContext = {
  focus: ["base"],
  hasFocus: () => true,
  hasSubFocus: () => true,
  addFocus: () => {},
  removeFocus: () => {}
}

export const StackContext = createContext<IStackContext>(defaultStack)

export const useStackValue = (): IStackContext => {
  const [focus, setFocus] = useState(["base"])

  const hasFocus = useCallback((key: string) => focus[0] === key, [focus])

  const hasSubFocus = useCallback((key: string) => focus.includes(key), [focus])

  const addFocus = useCallback(
    (key: string) => setFocus(focus => [key, ...focus]),
    []
  )

  const removeFocus = useCallback(
    (key: string) => setFocus(focus => focus.filter(item => item !== key)),
    []
  )

  return {
    focus,
    hasFocus,
    hasSubFocus,
    addFocus,
    removeFocus
  }
}

/**
 * `useStack` returns focus & modal management functions
 */
const useStack = () => useContext(StackContext)

export default useStack
