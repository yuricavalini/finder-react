import React from 'react'

import { Text } from './Text'

export default {
  component: Text,
  title: 'Text',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'h5',
        'h4',
        'h3',
        'h2',
        'h1',
        'display',
      ],
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    fontStyle: {
      control: { type: 'select' },
      options: ['normal', 'italic', 'oblique', 'initial', 'inherit'],
    },
  },
  args: {
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'left',
    fontStyle: 'normal',
  },
}

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hello World',
}
