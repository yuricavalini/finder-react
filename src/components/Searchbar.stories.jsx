import React from 'react'

import { Searchbar } from './Searchbar'

export default {
  component: Searchbar,
  title: 'Searchbar',
}

const Template = (args) => <Searchbar {...args} />

export const Default = Template.bind({})
