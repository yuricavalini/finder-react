import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import propTypes from '@styled-system/prop-types'
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  variant,
} from 'styled-system'

const USED = 'used'
const NEW = 'new'
const CERTIFIED = 'certified'

const getBadgeLabel = (variant) => {
  switch (variant) {
    case USED:
      return 'Usado'

    case NEW:
      return 'Novo'

    case CERTIFIED:
      return 'Certificado'

    default:
      return ''
  }
}

export const Badge = ({ variant, ...props }) => {
  return (
    <StyledSpan variant={variant} {...props}>
      {getBadgeLabel(variant)}
    </StyledSpan>
  )
}

const StyledSpan = styled.span(
  ({ theme }) => css`
    font-family: ${theme.fonts.primary};
    display: inline-block;
    font-size: 14px;
    line-height: ${theme.lineHeights.sm};
    font-weight: ${theme.fontWeights.regular};
    border-radius: ${theme.borderRadius.sm};
    padding: 1px 10px 2px 10px;
    color: ${({ theme }) => theme.colors.white.n000};
    margin-bottom: 4px;
  `,
  ({ theme }) =>
    variant({
      variants: {
        [USED]: {
          backgroundColor: theme.colors.info,
        },
        [NEW]: {
          backgroundColor: theme.colors.warning,
        },
        [CERTIFIED]: {
          backgroundColor: theme.colors.success,
        },
      },
    }),
  space,
  layout,
  color,
  typography,
  border,
  flexbox
)

Badge.propTypes = {
  variant: PropTypes.oneOf([USED, NEW, CERTIFIED]),
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.border,
  ...propTypes.flexbox,
}
