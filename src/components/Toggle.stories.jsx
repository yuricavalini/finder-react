import React from 'react'

import { Toggle } from './Toggle'

export default {
  component: Toggle,
  title: 'Toggle',
}

const Template = (args) => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  label: 'Default toggle label',
}
