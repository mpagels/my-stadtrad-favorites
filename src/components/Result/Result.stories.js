import React from 'react'

import Result from './Result'

export default {
  title: 'Result',
  component: Result,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <Result {...args} />
  </ul>
)

export const ResultItemsIsFav = Template.bind({})
ResultItemsIsFav.args = {
  station_description: 'StadtRad-Station U Lohmühlenstraße / Steindamm',
  isFav: true,
}
export const ResultItemsIsNoFav = Template.bind({})
ResultItemsIsNoFav.args = {
  station_description: 'StadtRad-Station U Lohmühlenstraße / Steindamm',
  isFav: false,
}
