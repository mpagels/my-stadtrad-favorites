export default function fetchLocations() {
  return fetch('/api/get-location').then(function (response) {
    return response.json()
  })
}

export function fetchThing(id) {
  return fetch(`/api/get-thing/${id}`).then((response) => response.json())
}
