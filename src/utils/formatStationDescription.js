export default function removeFirstWordFromStationName(stationName = '') {
  return stationName.split(' ').slice(1).join(' ')
}
