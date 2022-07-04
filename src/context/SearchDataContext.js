import React, { createContext, useState } from 'react'

const SearchDataContext = createContext(null)

export const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({})
  const [searchDataResult, setSearchDataResult] = useState([])

  return (
    <SearchDataContext.Provider
      value={{
        searchData,
        setSearchData,
        searchDataResult,
        setSearchDataResult,
      }}
    >
      {children}
    </SearchDataContext.Provider>
  )
}

export const SearchDataContent = SearchDataContext
