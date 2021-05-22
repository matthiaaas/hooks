import { ReactNode } from "react"

import { StackContext, useStackValue } from "./useStack"

interface IProviderProps {
  children: ReactNode
}

const StackProvider = ({ children }: IProviderProps) => {
  const stackValue = useStackValue()

  return (
    <StackContext.Provider value={stackValue}>{children}</StackContext.Provider>
  )
}

export default StackProvider
