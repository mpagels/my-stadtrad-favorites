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

app.get('/api/get-thing/:id', async (req, res) => {
  console.log('drin')
  const { id } = req.params
  console.log('id', id)
  res.end()
})
