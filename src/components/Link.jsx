import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import propTypes from '@styled-system/prop-types'
import { flexbox, space, layout, typography, color } from 'styled-system'

export const Link = ({ to, children, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled(RouterLink)`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white.n700};
  text-decoration-color: transparent;
  text-decoration-style: solid;
  text-decoration-line: underline;
  -webkit-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
  -moz-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
  -o-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
  transition: color 0.2s ease-in, text-decoration 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${color}
`

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
}
