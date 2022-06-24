import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { border, flexbox, layout, space } from 'styled-system'

export const ButtonCheckbox = ({
  checked,
  onChange,
  label,
  name,
  id,
  ...props
}) => {
  return (
    <Container {...props}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};

  & label {
    display: flex;
    flex: 1 1 100%;
  }

  & span {
    width: 100%;
    padding: 8px 16px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.base};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.base};
    line-height: ${({ theme }) => theme.lineHeights.base};
    color: ${({ theme }) => theme.colors.white.n000};
    background-color: ${({ theme }) => theme.colors.blue.n900};
    user-select: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in, color 0.2s ease-in,
      box-shadow 0.2s ease-in;
  }

  & input {
    display: none;
  }

  & label input:checked + span {
    background-color: ${({ theme }) => theme.colors.white.n000};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  ${space}
  ${layout}
  ${border}
  ${flexbox}
`

ButtonCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.flexbox,
}
