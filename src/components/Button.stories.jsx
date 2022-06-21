import React from 'react'

import { Button } from './Button'

export default {
  component: Button,
  title: 'Example/Button',
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: 142,
  color: 'white.n000',
  bg: 'primary',
  children: 'Primary',
  disabled: false,
}

export const Outlined = Template.bind({})
Outlined.args = {
  width: 142,
  color: 'primary',
  bg: 'white.n000',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'primary',
  children: 'Outlined',
  disabled: false,
}
