import { useCallback, useEffect, useState } from "react"
import moment, { Moment } from "moment"

const defaultOptions = {
  start: moment()
}

interface IOptions {
  start?: Moment
  end?: Moment
  onChange?: (start: Moment, end: Moment) => void
}

/**
 * `useRangePicker`
 *
 * @param options
 */
const useRangePicker = (options: IOptions = defaultOptions) => {
  const [start, setStart] = useState<Moment | null>(null)
  const [end, setEnd] = useState<Moment | null>(null)
  const [potentialEnd, setPotentialEnd] = useState<Moment | null>(null)
  const [months, setMonths] = useState<Moment[]>([])
  const [days, setDays] = useState<Moment[][]>([])

  const handleSelect = useCallback(
    (day: Moment) => {
      setPotentialEnd(null)
      if (end) {
        setEnd(null)
        setStart(moment(day))
      } else if (start && day > start) {
        setEnd(moment(day))
      } else {
        setStart(moment(day))
      }
    },
    [start, end]
  )

  const handlePreview = useCallback((day: Moment) => {
    setPotentialEnd(moment(day))
  }, [])

  const handleGet = useCallback(() => {
    return {
      start,
      end
    }
  }, [start, end])

  const handleClear = useCallback(() => {
    setStart(null)
    setEnd(null)
    setPotentialEnd(null)
  }, [])

  const handleIs = useCallback(
    (day: Moment, type: keyof isTypes) => {
      switch (type) {
        case "start":
          return start?.isSame(day, "date")
        case "end":
          return end?.isSame(day, "date")
        case "selected":
          return start?.isSame(day, "date") || end?.isSame(day, "date")
        case "between":
          let until = null

          if (potentialEnd && !end) {
            until = potentialEnd
          } else if (end) {
            until = end
          }

          if (!start || !until) return false

          return day > start && day < until
        default:
          return false
      }
    },
    [start, end, potentialEnd]
  )

  useEffect(() => {
    if (start && end && options.onChange) {
      options.onChange(start, end)
    }
  }, [start, end])

  useEffect(() => {
    setMonths(getUpcomingMonths(moment(options.start), 2))
    setDays(
      getUpcomingDays(moment(options.start), 2).map(days => [
        ...Array(days[0].day()).fill(null),
        ...days
      ])
    )
  }, [])

  return {
    start,
    end,
    months,
    days,
    get: handleGet,
    select: handleSelect,
    preview: handlePreview,
    is: handleIs,
    clear: handleClear
  }
}

export default useRangePicker

type isTypes = {
  selected: string
  between: string
  start: string
  end: string
}

const getUpcomingMonths = (from: Moment, years: number) => {
  const start = from
  const end = moment(from).add(years, "years")

  const months = []

  while (start < end) {
    months.push(moment(start))
    start.add(1, "month")
  }

  return months
}

const getUpcomingDays = (from: Moment, years: number) => {
  const start = from
  const end = moment(from).add(years, "years")

  const days = []

  while (start < end) {
    days.push(
      new Array(moment(start).daysInMonth())
        .fill(null)
        .map((_, i) => moment(start).startOf("month").add(i, "days"))
    )
    start.add(1, "month")
  }

  return days
}
