import React from 'react'
import { useQuery } from 'react-query'

export default function Stadtrad() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      'https://iot.hamburg.de/v1.1/Datastreams(143)/Observations?$top=2&$select=phenomenonTime,result&$orderby=phenomenonTime+desc'
    ).then((res) => res.json())
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <p>Last update: {data.value[0].phenomenonTime}</p>
      <p>Verfügbare Fahrräder: {data.value[0].result}</p>
    </div>
  )
}
