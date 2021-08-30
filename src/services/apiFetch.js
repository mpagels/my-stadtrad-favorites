export default function fetchLocations() {
  return fetch('api/get-location').then(function (response) {
    return response.json()
  })
}

export function fetchThing(id) {
  return fetch(`https://iot.hamburg.de/v1.0/Things(${id})/Datastreams`).then(
    (response) => response.json()
  )
}
