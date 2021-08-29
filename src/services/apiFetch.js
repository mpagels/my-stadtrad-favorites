export default function fetchLocations() {
  return Promise.all([
    fetch(
      'https://iot.hamburg.de/v1.0/Things?$filter=Datastreams/properties/serviceName%20eq%20%27HH_STA_StadtRad%27&$orderby=id&$count=true&$expand=Locations'
    ),
    fetch(
      'https://iot.hamburg.de/v1.0/Things?$skip=100&$filter=%28Datastreams%2Fproperties%2FserviceName+eq+%27HH_STA_StadtRad%27%29&$expand=Locations&$orderby=id+asc&$count=true'
    ),
    fetch(
      'https://iot.hamburg.de/v1.0/Things?$skip=200&$filter=%28Datastreams%2Fproperties%2FserviceName+eq+%27HH_STA_StadtRad%27%29&$expand=Locations&$orderby=id+asc&$count=true'
    ),
  ]).then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(
      responses.map(function (response) {
        return response.json()
      })
    )
  })
}

export function fetchThing(id) {
  return fetch(`https://iot.hamburg.de/v1.0/Things(${id})/Datastreams`).then(
    (response) => response.json()
  )
}
