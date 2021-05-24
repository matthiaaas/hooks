import { useCallback, useEffect, useState } from "react"

const parseStorage = (storage: string | null) => JSON.parse(storage || "")

/**
 * `useLocalStorage` returns a common React state that
 * automatically updates localStorage when the state changes
 *
 * @param key - Local Storage key identifier
 * @param fallbackValue - Default value if no value is stored
 * @param sync - Update state if storage value updates from elsewhere
 */
const useLocalStorage = <T extends unknown>(
  key: string,
  fallbackValue: T,
  sync?: boolean
) => {
  const state = useState<T>(() => {
    if (typeof window === "undefined") return fallbackValue

    const storage = window.localStorage

    if (!storage.hasOwnProperty(key)) return fallbackValue

    return parseStorage(storage.getItem(key))
  })

  const handleSync = useCallback(() => {
    const value = parseStorage(window.localStorage.getItem(key))
    const setState = state[1]
    setState(value)
  }, [])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
    window.dispatchEvent(new Event("storage"))
  }, [state])

  useEffect(() => {
    if (!sync) return

    window.addEventListener("storage", handleSync)
    return () => window.removeEventListener("storage", handleSync)
  }, [sync])

  return state
}

export default useLocalStorage
