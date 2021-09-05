import React from 'react'

import SearchStation from './Input'

export default {
  title: 'Search Station Input',
  component: SearchStation,
  argTypes: {
    backgroundColor: { control: 'color', backgroundColor: 'blue' },
  },
}

const Template = () => <SearchStation />

export const Input = Template.bind({})
