import React from 'react'

import { Select } from './Select'

export default {
  component: Select,
  title: 'Select',
  argTypes: {
    onChange: { action: 'changed' },
  },
  args: {
    options: [
      { value: 'option-test-1', label: 'Option Teste 1' },
      { value: 'option-test-2', label: 'Option Teste 2' },
      { value: 'option-test-3', label: 'Option Teste 3' },
      { value: 'option-test-4', label: 'Option Teste 4' },
    ],
  },
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '290px',
}
