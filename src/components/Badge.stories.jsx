import React from 'react'

import { Badge } from './Badge'

export default {
  component: Badge,
  title: 'Badge',
}

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'used',
  fontColor: 'white',
}
