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
import Logo from '../assets/icons/logo.svg'
import UserIcon from '../assets/icons/user-single.svg'
import PlusIcon from '../assets/icons/plus.svg'

export const Navbar = ({ ...props }) => {
  return (
    <Header {...props}>
      <LogoContainer href="#">
        <img src={Logo} alt="Finder logo" width="116px" height="32px" />
      </LogoContainer>

      <Nav aria-label="Main Menu" role="navigation">
        <NavList>
          <NavItem>
            <NavLink href="#novos">Novos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#usados">Usados</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#vender">Vender</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#comprar">Comprar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#novidades">Novidades e Reviews</NavLink>
          </NavItem>
        </NavList>

        <NavActions>
          <NavLink href="#entrar">
            <Icon className="user--icon"></Icon>
            <span>Entrar</span>
          </NavLink>
          <NabButton href="#vender" role="button" aria-label="Vender">
            <Icon className="plus--icon"></Icon>
            <span>Vender</span>
          </NabButton>
        </NavActions>
      </Nav>
    </Header>
  )
}

const Header = styled.header(
  ({ theme }) => css`
    background-color: ${theme.colors.bg.primary};
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    margin: 0 auto;
    max-width: ${theme.widths.main};
    width: 100%;
  `,
  space,
  layout,
  color,
  typography,
  border,
  flexbox
)

const LogoContainer = styled.a`
  margin-right: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 116px;
  }
`

const Nav = styled.nav`
  display: flex;
  flex: 1 1 100%;
`

const NavList = styled.ul(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex: 1 1 100%;

    &::before {
      content: '';
      width: 1px;
      height: 24px;
      background-color: ${theme.colors.white.n150};
    }
  `
)

const NavItem = styled.li`
  margin-left: 32px;
  display: flex;
  align-items: center;
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavLink = styled.a(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.sm};
    color: ${theme.colors.gray.n500};
    text-decoration-color: transparent;
    text-decoration-style: solid;
    text-decoration-line: underline;
    -webkit-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
    -moz-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
    -o-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
    transition: color 0.2s ease-in, text-decoration 0.2s ease-in;

    &:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;

      & i {
        background-color: ${theme.colors.primary};
      }
    }
  `
)

const Icon = styled.i(
  ({ theme }) => css`
    width: 16px;
    height: 16px;
    margin-right: 4px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;

    &.user--icon {
      background-color: ${theme.colors.gray.n500};
      mask-image: url(${UserIcon});
      -webkit-mask-image: url(${UserIcon});
    }

    &.plus--icon {
      background-color: ${theme.colors.white.n000};
      mask-image: url(${PlusIcon});
      -webkit-mask-image: url(${PlusIcon});

      &:hover {
        background-color: ${theme.colors.white.n000};
      }
    }
  `
)

const NabButton = styled.a(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 8px 20px;
    margin-left: 32px;
    min-height: 37px;
    border: none;
    border-radius: ${theme.borderRadius.base};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.sm};
    color: ${theme.colors.text.white};
    background-color: ${theme.colors.primary};
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white.n000};

      & i {
        background-color: ${theme.colors.primary};
      }
    }
  `
)

Navbar.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
}
