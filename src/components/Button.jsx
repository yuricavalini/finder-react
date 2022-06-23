import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system'

export const Button = ({ disabled, children, onClick, ...props }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 24px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${flexbox}
`

Button.PropTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.element,
  onClick: PropTypes.func,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.border,
  ...propTypes.flexbox,
}
