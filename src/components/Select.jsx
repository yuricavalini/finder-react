import styled, { css } from 'styled-components'
import {
  color,
  typography,
  border,
  flexbox,
  layout,
  space,
} from 'styled-system'

import ChevronIcon from '../assets/icons/chevron.svg'

export const Select = ({ name, id, options, onChange, ...props }) => {
  const handleOnChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <Wrapper {...props}>
      <StyledSelect name={name} id={id} onChange={handleOnChange}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </StyledSelect>
      <i></i>
    </Wrapper>
  )
}

const Wrapper = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 100%;

    & i {
      position: absolute;
      content: '';
      width: 100%;
      height: 14px;
      max-width: 14px;
      min-width: 14px;
      background-color: ${theme.colors.white.n000};
      mask-image: url(${ChevronIcon});
      -webkit-mask-image: url(${ChevronIcon});
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-size: cover;
      -webkit-mask-size: cover;
      top: 50%;
      right: 18px;
      transform: translateY(-50%);
    }
  `,
  space,
  layout,
  border,
  flexbox,
  color,
  typography
)

const StyledSelect = styled.select(
  ({ theme }) => css`
    width: 100%;
    flex: 1 1 100%;
    padding: 9px 17px;
    background: ${theme.colors.blue.n900};
    border: 1px solid ${theme.colors.white.n120};
    border-radius: 8px;
    font-size: 16px;
    line-height: ${({ theme }) => theme.lineHeights.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${theme.colors.white.n000};
    appearance: none;
  `
)
