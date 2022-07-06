import React from 'react'

import { Icon } from './Icon'

import Calendar from '../assets/icons/calendar.svg'

export default {
  component: Icon,
  title: 'Icon',
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: Calendar,
  iconSize: 18,
  wrapperSize: 32,
  wrapperColor: '#2f2b3d',
  wrapperHoverColor: '#fd5631',
  iconColor: '#fd5631',
  iconHoverColor: '#2f2b3d',
  onClick: () => alert('Clicked'),
}
