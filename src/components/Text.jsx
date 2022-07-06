import styled from 'styled-components'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import {
  flexbox,
  space,
  layout,
  typography,
  color,
  variant,
} from 'styled-system'

const XS = 'xs'
const SM = 'sm'
const BASE = 'base'
const LG = 'lg'
const H5 = 'h5'
const H4 = 'h4'
const H3 = 'h3'
const H2 = 'h2'
const H1 = 'h1'
const DISPLAY = 'display'

export const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
)

const StyledText = styled.p(
  ({ theme }) => ({
    fontFamily: theme.fonts.primary,
    color: theme.colors.textPrimary,
  }),
  ({ theme }) =>
    variant({
      variants: {
        [XS]: {
          fontSize: theme.fontSizes[XS],
        },
        [SM]: {
          fontSize: theme.fontSizes[SM],
        },
        [BASE]: {
          fontSize: theme.fontSizes[BASE],
        },
        [LG]: {
          fontSize: theme.fontSizes[LG],
        },
        [H5]: {
          fontSize: theme.fontSizes[H5],
        },
        [H4]: {
          fontSize: theme.fontSizes[H4],
        },
        [H3]: {
          fontSize: theme.fontSizes[H3],
        },
        [H2]: {
          fontSize: theme.fontSizes[H2],
        },
        [H1]: {
          fontSize: theme.fontSizes[H1],
        },
        [DISPLAY]: {
          fontSize: theme.fontSizes[DISPLAY],
        },
      },
    }),
  flexbox,
  space,
  layout,
  typography,
  color
)

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.oneOf([XS, SM, BASE, LG, H5, H4, H3, H2, H1, DISPLAY]),
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
}
