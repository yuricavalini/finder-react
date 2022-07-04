import { useState, useEffect, useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { css } from 'styled-components'

import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system'

import { api } from '../services/api'
import {
  removeUndefinedFields,
  fechDataFromApi,
  paramsSerializer,
} from '../helpers/utils'

import { SearchDataContent } from '../context/SearchDataContext'

import { ButtonCheckbox } from '../components/ButtonCheckbox'

import CarIcon from '../assets/icons/car.svg'
import PinIcon from '../assets/icons/pin.svg'
import StarIcon from '../assets/icons/star.svg'
import ListIcon from '../assets/icons/list.svg'
import SearchIcon from '../assets/icons/search.svg'
import ChevronIcon from '../assets/icons/chevron.svg'

export const Searchbar = ({ ...props }) => {
  // Searchbar Component Data
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [cartypes, setTypes] = useState([])
  const [locations, setLocations] = useState([])
  const [searchbarData, setSearchbarData] = useState({})

  // SearchDataContent - Context
  const { searchData, setSearchData, searchDataResult, setSearchDataResult } =
    useContext(SearchDataContent)

  // REACT ROUTER DOM HOOKS
  let [searchParams, setSearchParams] = useSearchParams()
  let navigate = useNavigate()

  // Initial render
  useEffect(() => {
    fechDataFromApi('brands').then(({ data }) => setBrands(data))
    fechDataFromApi('card_models').then(({ data }) => setModels(data))
    fechDataFromApi('cartype').then(({ data }) => setTypes(data))
    fechDataFromApi('locale').then(({ data }) => setLocations(data))
  }, [])

  // Handle functions
  const handleOnChangeSearchField = (e) => {
    setSearchbarData({ ...searchbarData, search: e.target.value })
  }
  const handleOnChangeBrandField = (e) => {
    setSearchbarData({ ...searchbarData, brand: e.target.value })
  }
  const handleOnChangeModelField = (e) => {
    setSearchbarData({ ...searchbarData, model: e.target.value })
  }
  const handleOnChangeCarTypeField = (e) => {
    setSearchbarData({ ...searchbarData, cartype: e.target.value })
  }
  const handleOnChangeLocationField = (e) => {
    setSearchbarData({ ...searchbarData, location: e.target.value })
  }
  const handleOnChangeConditionFirst = (e) => {
    setSearchbarData({ ...searchbarData, conditionFirst: e.target.checked })
  }
  const handleOnChangeConditionSecond = (e) => {
    setSearchbarData({ ...searchbarData, conditionSecond: e.target.checked })
  }

  const processConditionsValues = () => {
    return new Promise((resolve, reject) => {
      let conditions = []

      if (searchbarData?.conditionFirst) {
        conditions.push(0)
      }
      if (searchbarData?.conditionSecond) {
        conditions.push(1)
      }

      resolve(conditions)
    })
  }

  const processSearchParams = () => {
    return new Promise(async (resolve, reject) => {
      let searchParamsObject = {
        condition: [],
        brand: undefined,
        model: undefined,
        cartype: undefined,
        location: undefined,
      }

      const conditions = await processConditionsValues()

      if (conditions?.length) {
        for (const condition of conditions) {
          searchParamsObject.condition.push(condition)
        }
      }
      if (searchbarData?.brand) {
        searchParamsObject.brand = searchbarData.brand
      }
      if (searchbarData?.model) {
        searchParamsObject.model = searchbarData.model
      }
      if (searchbarData?.cartype) {
        searchParamsObject.cartype = searchbarData.cartype
      }
      if (searchbarData?.location) {
        searchParamsObject.location = searchbarData.location
      }

      resolve(searchParamsObject)
    })
  }

  const sendSearchData = async (e) => {
    e.preventDefault()

    let searchParamsObject = await processSearchParams()
    removeUndefinedFields(searchParamsObject)

    api
      .get('/adverts', {
        params: searchParamsObject,
      })
      .then(async (response) => {
        const searchParamsSerialized = await paramsSerializer(
          searchParamsObject
        )
        setSearchParams(searchParamsSerialized)
        setSearchData(searchParamsObject)
        setSearchDataResult(response.data)
        return searchParamsSerialized
      })

      .then((searchParamsSerialized) =>
        navigate(`/catalog/?${searchParamsSerialized}`, {
          replace: true,
        })
      )
      .catch((err) => console.error(err))
  }

  return (
    <>
      <ConditionsContainer>
        <ButtonCheckbox
          onChange={handleOnChangeConditionFirst}
          label="Novo"
          id="conditionFirst"
          name="conditionFirst"
          checked={searchbarData?.conditionFirst}
          maxWidth="72px"
          mr="12px"
        />

        <ButtonCheckbox
          onChange={handleOnChangeConditionSecond}
          label="Usado"
          id="conditionSecond"
          name="conditionSecond"
          checked={searchbarData?.conditionSecond}
          maxWidth="80px"
        />
      </ConditionsContainer>

      <div className="searchbar">
        <SearchbarForm {...props} onSubmit={sendSearchData}>
          <SearchbarField className="search-input">
            <SearchFieldIcon className="search--icon"></SearchFieldIcon>

            <label className="visually-hidden" htmlFor="search">
              Pesquisar
            </label>

            <input
              type="text"
              placeholder="Pesquise por...."
              id="search"
              name="search"
              value={searchbarData?.search}
              onChange={handleOnChangeSearchField}
            />
          </SearchbarField>

          <SearchbarField>
            <SearchFieldIcon className="star--icon"></SearchFieldIcon>
            <SearchbarFieldWrapperSelect>
              <label className="visually-hidden" htmlFor="brand">
                Marca
              </label>

              <select
                name="brand"
                id="brand"
                value={searchbarData?.brand}
                onChange={handleOnChangeBrandField}
              >
                <option value="" defaultValue>
                  Marca
                </option>

                {brands?.map((brand, index) => {
                  return (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  )
                })}
              </select>
              <i className="chevron--icon" tabIndex="-1"></i>
            </SearchbarFieldWrapperSelect>
          </SearchbarField>

          <SearchbarField>
            <SearchFieldIcon className="model--icon"></SearchFieldIcon>

            <SearchbarFieldWrapperSelect>
              <label className="visually-hidden" htmlFor="model">
                Modelo
              </label>
              <select
                name="model"
                id="model"
                value={searchbarData?.model}
                onChange={handleOnChangeModelField}
              >
                <option value="" defaultValue>
                  Modelo
                </option>

                {models?.map((model, index) => {
                  return (
                    <option key={model.id} value={model.name}>
                      {model.name}
                    </option>
                  )
                })}
              </select>
              <i className="chevron--icon" tabIndex="-1"></i>
            </SearchbarFieldWrapperSelect>
          </SearchbarField>

          <SearchbarField>
            <SearchFieldIcon className="car--icon"></SearchFieldIcon>

            <SearchbarFieldWrapperSelect>
              <label className="visually-hidden" htmlFor="cartype">
                Tipo
              </label>

              <select
                name="cartype"
                id="cartype"
                value={searchbarData?.cartype}
                onChange={handleOnChangeCarTypeField}
              >
                <option value="" defaultValue>
                  Tipo
                </option>

                {cartypes?.map((cartype, index) => {
                  return (
                    <option key={cartype.id} value={cartype.value}>
                      {cartype.value}
                    </option>
                  )
                })}
              </select>
              <i className="chevron--icon" tabIndex="-1"></i>
            </SearchbarFieldWrapperSelect>
          </SearchbarField>

          <SearchbarField>
            <SearchFieldIcon className="location--icon"></SearchFieldIcon>

            <SearchbarFieldWrapperSelect>
              <label className="visually-hidden" htmlFor="location">
                Local
              </label>
              <select
                name="location"
                id="location"
                value={searchbarData?.location}
                onChange={handleOnChangeLocationField}
              >
                <option value="" defaultValue>
                  Local
                </option>

                {locations?.map((location, index) => {
                  return (
                    <option key={location.id} value={location.id}>
                      {location.value}
                    </option>
                  )
                })}
              </select>
              <i className="chevron--icon" tabIndex="-1"></i>
            </SearchbarFieldWrapperSelect>
          </SearchbarField>

          <SearchButton
            className="center-content"
            type="submit"
            aria-label="Pesquisar"
          >
            Pesquisar
          </SearchButton>
        </SearchbarForm>
      </div>
    </>
  )
}

const ConditionsContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const SearchbarForm = styled.form(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex: 1 1 100%;
    max-width: ${theme.widths.maxContent};
    padding: 7px 8px;
    background: ${theme.colors.white.n040};
    border: 1px solid ${theme.colors.white.n120};
    border-radius: ${theme.borderRadius.lg};

    @media screen and (max-width: 1000px) {
      & {
        flex-wrap: wrap;
        gap: 12px;
        justify-content: space-between;
      }
    }
  `,
  space,
  layout,
  color,
  typography,
  border,
  flexbox
)

const SearchbarField = styled.div(
  ({ theme }) => css`
    display: flex;
    flex: 1 1 100%;
    align-items: center;
    margin-left: 20px;
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.base};
    color: ${theme.colors.white.n500};
    max-width: 200px;

    &.search-input {
      max-width: 100%;
      margin-left: 12px;
    }

    &:not(:last-of-type)::after {
      content: '';
      width: 1px;
      height: 40px;
      background-color: ${theme.colors.white.n150};
    }

    input,
    select {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      color: inherit;
      background-color: transparent;
      border: none;
      height: 40px;
      width: 100%;
    }

    input {
      margin-right: 20px;
      margin-left: 8px;
      padding: 0 8px;
    }

    select {
      appearance: none;
      padding: 0 8px;
      padding: 0 28px 0 8px;

      option {
        color: ${theme.colors.bg.primary};
      }
    }

    @media screen and (max-width: 1000px) {
      & {
        max-width: 45%;
        margin: 0 12px;
      }

      &.search-input {
        max-width: 100%;
      }

      &:not(:last-of-type)::after {
        display: none;
      }

      input {
        margin-right: 0;
      }
    }

    @media screen and (max-width: 682px) {
      & {
        max-width: 100%;
      }
    }
  `
)

const SearchFieldIcon = styled.i(
  ({ theme }) => css`
    width: 100%;
    height: 20px;
    max-width: 20px;
    min-width: 20px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-size: cover;

    &.search--icon {
      background-color: ${theme.colors.white.n500};
      mask-image: url(${SearchIcon});
      -webkit-mask-image: url(${SearchIcon});
    }

    &.star--icon {
      background-color: ${theme.colors.white.n500};
      mask-image: url(${StarIcon});
      -webkit-mask-image: url(${StarIcon});
    }

    &.model--icon {
      background-color: ${theme.colors.white.n500};
      mask-image: url(${ListIcon});
      -webkit-mask-image: url(${ListIcon});
    }

    &.car--icon {
      background-color: ${theme.colors.white.n500};
      mask-image: url(${CarIcon});
      -webkit-mask-image: url(${CarIcon});
    }

    &.location--icon {
      background-color: ${theme.colors.white.n500};
      mask-image: url(${PinIcon});
      -webkit-mask-image: url(${PinIcon});
    }
  `
)

const SearchbarFieldWrapperSelect = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    margin-right: 20px;
    margin-left: 8px;

    i.chevron--icon {
      position: absolute;
      content: '';
      width: 100%;
      height: 16px;
      max-width: 16px;
      min-width: 16px;
      background-color: ${theme.colors.white.n500};
      mask-image: url(${ChevronIcon});
      -webkit-mask-image: url(${ChevronIcon});
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-size: cover;
      -webkit-mask-size: cover;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
    }

    @media screen and (max-width: 1000px) {
      & {
        margin-right: 0;
      }
    }
  `
)

const SearchButton = styled.button(
  ({ theme }) => css`
    padding: 14px 32px;
    border: none;
    border-radius: ${theme.borderRadius.base};
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.base};
    color: ${theme.colors.text.white};
    background-color: ${theme.colors.primary};
    user-select: none;
    cursor: pointer;
    max-width: 142px;
    width: 100%;
    -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white.n000};
    }

    @media screen and (max-width: 1000px) {
      & {
        max-width: 100%;
      }
    }
  `
)
