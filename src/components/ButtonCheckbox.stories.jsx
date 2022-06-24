import React from 'react'

import { ButtonCheckbox } from './ButtonCheckbox'

export default {
  component: ButtonCheckbox,
  title: 'ButtonCheckbox',
  argTypes: {
    onChange: { action: 'changed' },
  },
}

const Template = (args) => <ButtonCheckbox {...args} />

export const New = Template.bind({})
New.args = {
  checked: true,
  label: 'Novo',
  name: 'novo',
  id: 'novo',
  maxWidth: '72px',
}

export const Used = Template.bind({})
Used.args = {
  checked: true,
  label: 'Usado',
  name: 'used',
  id: 'used',
  maxWidth: '80px',
}
