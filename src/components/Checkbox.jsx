import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { border, flexbox, layout, space } from 'styled-system'

import CheckboxIcon from '../assets/icons/checkbox.svg'
import FilledCheckboxIcon from '../assets/icons/checkbox-filled.svg'

export const Checkbox = ({
  checked,
  onChange,
  label,
  name,
  id,
  disabled = false,
  ...props
}) => {
  return (
    <StyledLabel disabled={disabled} htmlFor={id} {...props}>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <i className="checkbox-icon"></i>
      <span>{label}</span>
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1.0')};

  & input[type='checkbox'] {
    display: none;
  }

  & input[type='checkbox'] + i {
    width: 100%;
    height: 18px;
    max-width: 18px;
    min-width: 18px;
    background-color: ${({ theme }) => theme.colors.gray.n500};
    mask-image: url(${CheckboxIcon});
    -webkit-mask-image: url(${CheckboxIcon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-size: cover;
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.gray.n500 : theme.colors.primary};
    }
  }

  & input[type='checkbox']:checked + i {
    width: 100%;
    height: 18px;
    max-width: 18px;
    min-width: 18px;
    background-color: ${({ theme }) => theme.colors.primary};
    mask-image: url(${FilledCheckboxIcon});
    -webkit-mask-image: url(${FilledCheckboxIcon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-size: cover;
  }

  & span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray.n700};
    line-height: ${({ theme }) => theme.lineHeights.sm};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin-left: 4px;
  }

  ${space}
  ${layout}
  ${border}
  ${flexbox}
`

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.flexbox,
}
