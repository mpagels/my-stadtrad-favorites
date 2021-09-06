import React from 'react'

import FooterNavBar from './FooterNavBar'

export default {
  title: 'FooterNavBar',
  component: FooterNavBar,
  argTypes: {
    backgroundColor: { control: 'color', backgroundColor: 'blue' },
  },
}

const Template = () => <FooterNavBar />

export const Input = Template.bind({})
