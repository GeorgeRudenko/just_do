/**
 * Interface
 */
interface Data {
  data: Date;
  year: number;
  month: string | number;
  date: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
}

/**
 * Data
 */
const getDataParams = (data?: string): Data => {
  const date =  new Date(data ? data : Date.now())

  return {
    data: date,
    year: date.getFullYear(),
    month: date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    date: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    seconds: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  }
}

/**
 * Methods
 */
// # Get times of day
export const GetTimesOfDay = (): string => {
  const data = new Date(Date.now()).getHours()

  if (data >= 0 && data < 5) {
    return 'Night'
  } else if (data >= 5 && data < 11) {
    return 'Morning'
  } else if (data >= 11 && data < 16) {
    return 'Day'
  } else if (data >= 16 && data <= 23) {
    return 'Evening'
  } else {
    return 'Day'
  }
}
// # Get month name
export const getMonthName = (id: number): string => {
  /**
   * 0 – January
   * 1 - February
   * 2 – March
   * 3 – April
   * 4 – May
   * 5 – June
   * 6 – July
   * 7 – August
   * 8 – September
   * 9 – October
   * 10 – November
   * 11 – December
   */
  switch (id) {
    case 0:
      return 'January'
    case 1:
      return 'February'
    case 2:
      return 'March'
    case 3:
      return 'April'
    case 4:
      return 'May'
    case 5:
      return 'June'
    case 6:
      return 'July'
    case 7:
      return 'August'
    case 8:
      return 'September'
    case 9:
      return 'October'
    case 10:
      return 'November'
    case 11:
      return 'December'
    default:
      throw Error('Undefined month number')
  }
}
// # Get day name
export const getDayName = (id: number): string => {
  /**
   * 0 - Sunday
   * 1 - Monday
   * 2 - Tuesday
   * 3 - Wednesday
   * 4 - Thursday
   * 5 - Friday
   * 6 - Saturday
   */
  switch (id) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      throw Error('Undefined day number')
  }
}
// # Date format
export const DateFormat = (date: string, stroke_format = false): string => {
  // Current data
  const { year: currentYear, month: currentMonth, date: currentDate } = getDataParams()
  // Attributes data
  const { data: attrData, year: attrYear, month: attrMonth, date: attrDate } = getDataParams(date)

  // Conditions
  if (date) {
    // # Year
    if (currentYear === attrYear) {
      // # Month
      if (currentMonth === attrMonth) {
        // # Day
        if (currentDate === attrDate) {
          return 'Today'
        } else if (currentDate < attrDate) {
          return getDayName(attrData.getDay())
        } else {
          return stroke_format ? `${attrDate}.${attrMonth}.${attrYear}` : `${attrDate} ${getMonthName(attrData.getMonth())}`
        }
      } else if (currentMonth < attrMonth) {
        return 'Next month'
      } else {
        return 'Past month'
      }
    } else if (currentYear < attrYear) {
      return 'Next year'
    } else {
      return 'Past year'
    }
  } else {
    return 'Not date'
  }
}
// # Check is current date
export const isPastDate = (date: string): boolean => {
  // Current data
  const { year: currentYear, month: currentMonth, date: currentDate } = getDataParams()
  // Attributes data
  const { year: attrYear, month: attrMonth, date: attrDate } = getDataParams(date)

  if (attrYear >= currentYear) {
    if (attrMonth >= currentMonth) {
      if (attrDate >= currentDate) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  } else {
    return true
  }
}
// # Compare dates
export const CompareDates = (first: string, second: string): boolean => {
  return first === second
}
// # Get current date
export const GetCurrentDate = (): string => {
  // Data
  const { year, month, date } = getDataParams()

  // Value
  return `${year}-${month}-${date}`
}
// # Get current time
export const GetCurrentTime = (): string => {
  // Data
  const { hours, minutes, seconds } = getDataParams()

  return `${hours}:${minutes}:${seconds}`
}
// # Get current date & time
export const GetCurrentDateTime = (): string => {
  // Data
  const { year, month, date, hours, minutes, seconds } = getDataParams()

  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
}
