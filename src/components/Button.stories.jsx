import React from 'react'

import { Button } from './Button'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    width: 142,
    disabled: false,
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'white.n000',
  bg: 'primary',
  children: 'Primary',
}

export const Outlined = Template.bind({})
Outlined.args = {
  color: 'primary',
  bg: 'white.n000',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'primary',
  children: 'Outlined',
}
