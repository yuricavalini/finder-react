import React from 'react'

import { Pagination } from './Pagination'

export default {
  component: Pagination,
  title: 'Pagination',
}

const Template = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  onPageChange: (value) => alert(value),
  totalCount: 40,
  currentPage: 1,
  pageSize: 5,
  siblingCount: 0,
  backgroundColor: 'blue.n900',
}
