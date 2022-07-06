import { useState, useEffect, useContext } from 'react'
import { SearchDataContent } from '../../context/SearchDataContext'

export const Catalog = () => {
  // SearchDataContent - Context Data
  const { searchData, setSearchData, searchDataResult } =
    useContext(SearchDataContent)

  return (
    <div>
      <h1>Catalog</h1>
    </div>
  )
}
