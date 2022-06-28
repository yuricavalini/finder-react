import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled, { css } from 'styled-components'
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system'

import { usePagination } from '../hooks/usePagination'
import { DOTS } from '../helpers/constants'

import ChevronIcon from '../assets/icons/chevron.svg'

export const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
  ...props
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]
  const isFirstPage = currentPage === 1

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <NavigationContainer aria-label="pagination" role="navigation" {...props}>
      <Wrapper>
        <Item onClick={onPrevious} disabled={isFirstPage}>
          <ArrowLeft disabled={isFirstPage} />
        </Item>

        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <Item
                key={pageNumber}
                disabled={true}
                className="pagination-item dots"
              >
                &#8230;
              </Item>
            )
          }

          return (
            <Item
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={pageNumber === currentPage ? 'active' : ''}
            >
              {pageNumber}
            </Item>
          )
        })}

        <Item onClick={onNext} disabled={isLastPage}>
          <ArrowRight disabled={isLastPage} />
        </Item>
      </Wrapper>
    </NavigationContainer>
  )
}

const NavigationContainer = styled.nav(
  `
  display: flex;
  justify-content: center;
  align-items: center;
`,
  border,
  color,
  flexbox,
  layout,
  space,
  typography
)

const Wrapper = styled.ul(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    gap: 8px;
    font-family: ${theme.fonts.primary};
    font-size: 16px;
    min-height: 24px;
    line-height: 24px;
  `
)

const Item = styled.li(
  ({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.gray.n650};
    cursor: ${disabled ? 'default' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    max-width: 24px;
    max-height: 24px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    -webkit-transition: background-color 0.2s ease-in;
    -moz-transition: background-color 0.2s ease-in;
    -o-transition: background-color 0.2s ease-in;
    transition: background-color 0.2s ease-in;

    &:hover {
      background-color: ${theme.colors.white.n000};
      color: ${theme.colors.primary};
      font-weight: ${theme.fontWeights.bold};
    }

    &.active {
      font-weight: 700;
      background-color: ${theme.colors.white.n000};
      color: ${theme.colors.primary};
      width: 24px;
      height: 24px;
      text-align: center;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  `
)

const ArrowLeft = styled.i(
  ({ theme, disabled }) => css`
    width: 100%;
    height: 16px;
    max-width: 16px;
    min-width: 16px;
    background-color: ${disabled
      ? theme.colors.gray.n650
      : theme.colors.white.n000};
    mask-image: url(${ChevronIcon});
    -webkit-mask-image: url(${ChevronIcon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-size: cover;
    transform: rotate(90deg);
    -webkit-transition: background-color 0.2s ease-in;
    -moz-transition: background-color 0.2s ease-in;
    -o-transition: background-color 0.2s ease-in;
    transition: background-color 0.2s ease-in;

    &:hover {
      background-color: ${disabled
        ? theme.colors.white.n000
        : theme.colors.primary};
    }
  `
)

const ArrowRight = styled.i(
  ({ theme, disabled }) => css`
    width: 100%;
    height: 16px;
    max-width: 16px;
    min-width: 16px;
    background-color: ${disabled
      ? theme.colors.gray.n650
      : theme.colors.white.n000};
    mask-image: url(${ChevronIcon});
    -webkit-mask-image: url(${ChevronIcon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-size: cover;
    transform: rotate(-90deg);
    -webkit-transition: background-color 0.2s ease-in;
    -moz-transition: background-color 0.2s ease-in;
    -o-transition: background-color 0.2s ease-in;
    transition: background-color 0.2s ease-in;

    &:hover {
      background-color: ${disabled
        ? theme.colors.white.n000
        : theme.colors.primary};
    }
  `
)

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
}
