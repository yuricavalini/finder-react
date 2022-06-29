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

export const Icon = ({
  icon,
  onClick,
  iconSize = 14,
  wrapperSize = 32,
  wrapperColor = '#2f2b3d',
  wrapperHoverColor = '#ffffff',
  iconColor = '#fd5631',
  iconHoverColor = '#ffffff',
  ...props
}) => {
  return (
    <Wrapper
      wrapperColor={wrapperColor}
      wrapperHoverColor={wrapperHoverColor}
      wrapperSize={wrapperSize}
      iconHoverColor={iconHoverColor}
      onClick={onClick}
      {...props}
    >
      <StyledIcon
        icon={icon}
        iconSize={iconSize}
        iconColor={iconColor}
        {...props}
      ></StyledIcon>
    </Wrapper>
  )
}

const Wrapper = styled.div(
  ({ wrapperSize, wrapperColor, wrapperHoverColor, iconHoverColor }) => css`
    cursor: pointer;
    width: ${wrapperSize}px;
    height: ${wrapperSize}px;
    border-radius: 50%;
    background-color: ${wrapperColor};
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;

    &:hover {
      background-color: ${wrapperHoverColor};

      & i {
        background-color: ${iconHoverColor};
      }
    }

    &:hover > i {
    }
  `,
  border,
  color,
  flexbox,
  layout,
  space,
  typography
)

const StyledIcon = styled.i(
  ({ icon, iconSize, iconColor }) => css`
    display: block;
    cursor: pointer;
    width: 100%;
    height: ${iconSize}px;
    max-width: ${iconSize}px;
    min-width: ${iconSize}px;
    background-color: ${iconColor};
    mask-image: url(${icon});
    -webkit-mask-image: url(${icon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;
  `
)

Wrapper.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconSize: PropTypes.number,
  wrapperSize: PropTypes.number,
  wrapperColor: PropTypes.string,
  wrapperHoverColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconHoverColor: PropTypes.string,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
}
