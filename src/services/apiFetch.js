export default function fetchLocations() {
  return fetch('http://localhost:5000/api/get-location').then(function (
    response
  ) {
    return response.json()
  })
}

export function fetchThing(id) {
  return fetch(`http://localhost:5000/api/get-thing/${id}`).then((response) =>
    response.json()
  )
}
