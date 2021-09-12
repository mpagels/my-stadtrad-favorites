const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const fetch = require('node-fetch')
const cors = require('cors')

app.use(cors())

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/api/get-location', async (req, res) => {
  const locations = await Promise.all([
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
  const flattenLocations = locations.map((location) => location.value).flat()
  const response = flattenLocations.map((location) => {
    return {
      station_description: location.description,
      thing_id: location['@iot.id'],
    }
  })

  res.status(200).json(response)
})

app.get('/api/get-thing/:thing_id', async (req, res) => {
  const { thing_id } = req.params

  const thing = await fetch(
    `https://iot.hamburg.de/v1.0/Things(${thing_id})/Datastreams`
  ).then((res) => res.json())

  const dataStream_id = thing.value[0]['@iot.id']

  const getThingName = await fetch(
    thing.value[0]['Thing@iot.navigationLink']
  ).then((res) => res.json())

  const getAvailablesBikes = await fetch(
    `https://iot.hamburg.de/v1.0/Datastreams(${dataStream_id})/Observations?$top=2&$select=phenomenonTime,result&$orderby=phenomenonTime+desc`
  ).then((res) => res.json())

  const availableBikes = getAvailablesBikes.value[0].result
  const lastUpdated = getAvailablesBikes.value[0].phenomenonTime

  const [lat, long] = getLocationPoints(thing)

  const response = {
    station_description: getThingName.description,
    coordinates: [long, lat],
    dataStream_id,
    availableBikes,
    lastUpdated,
    thing_id,
  }
  res.status(200).json(response)
})

function getLocationPoints(thing) {
  const coordinates = thing.value[0].observedArea.coordinates
  const isArray = Array.isArray(coordinates[1])
  if (isArray) {
    return thing.value[0].observedArea.coordinates[1]
  } else return thing.value[0].observedArea.coordinates
}
