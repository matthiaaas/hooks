import { ChangeEvent, useEffect, useState } from "react"

let timeout: NodeJS.Timeout = null

const useSearch = <T>(
  collection: T[],
  filterRule: (item: T, term: string) => boolean,
  cooldown: number = 200
) => {
  const [term, setTerm] = useState("")
  const [results, setResults] = useState<T[]>(collection)

  const handleSearch = (
    eventOrTerm: string | ChangeEvent<HTMLInputElement>
  ) => {
    if (typeof eventOrTerm === "string") {
      setTerm(eventOrTerm)
    } else {
      setTerm(eventOrTerm.currentTarget.value.trim())
    }
  }

  useEffect(() => {
    const applySearch = () =>
      setResults(collection.filter(item => filterRule(item, term)))

    timeout = setTimeout(applySearch, cooldown)
    return () => clearTimeout(timeout)
  }, [term, collection])

  return {
    results,
    term,
    go: handleSearch
  }
}

export default useSearch
