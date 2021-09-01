import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export default function getLocalTime(utcTime) {
  return dayjs.utc(utcTime).local().format('DD.MM. - HH:mm:ss')
}
