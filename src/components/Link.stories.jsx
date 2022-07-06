import React from 'react'

import { Link } from './Link'

export default {
  component: Link,
  title: 'Link',
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  to: '/',
  children: 'Default Link',
}

export const Custom = Template.bind({})
Custom.args = {
  to: '/',
  children: 'Custom Link',
  color: 'gray.n900',
}
