import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { useEffect, useRef, useState } from 'react'
import { css } from 'styled-components'
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system'

import { Link } from './Link'

import Logo from '../assets/icons/logo.svg'
import UserIcon from '../assets/icons/user-single.svg'
import PlusIcon from '../assets/icons/plus.svg'

const CatalogPath = '/catalog'

export const Navbar = ({ ...props }) => {
  const [isAriaChecked, setIsAriaChecked] = useState(false)
  const mainHeaderRef = useRef(null)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      if (lastScrollY > scrollY) {
        mainHeaderRef.current.style.top = '0'
      } else if (scrollY > 40 && !isAriaChecked) {
        mainHeaderRef.current.style.top = '-80px'
      }

      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMenuIconClick = () => {
    setIsAriaChecked((state) => !state)
  }

  return (
    <Header
      className="header center-page-content center-content"
      id="mainHeader"
      ref={mainHeaderRef}
      {...props}
    >
      <LogoContainer>
        <img src={Logo} alt="Finder logo" width="116px" height="32px" />
      </LogoContainer>

      <nav
        className="navbar"
        aria-label="Main Menu"
        role="navigation"
        id="desktopNav"
      >
        <ul className="navbar-list" id="desktopNavList">
          <li className="navbar-item">
            <Link
              to={`${CatalogPath}?condition=1`}
              className="navbar-link"
              children="Novos"
            />
          </li>

          <li className="navbar-item">
            <Link
              to={`${CatalogPath}?condition=2`}
              className="navbar-link"
              children="Usados"
            />
          </li>
          <li className="navbar-item">
            <Link to="#vender" className="navbar-link" children="Vender" />
          </li>
          <li className="navbar-item">
            <Link to="#comprar" className="navbar-link" children="Comprar" />
          </li>
          <li className="navbar-item">
            <Link
              to="#novidades"
              className="navbar-link"
              children="Novidades e Reviews"
            />
          </li>
        </ul>

        <div className="navbar-actions center-content">
          <Link
            className="navbar-link"
            to="#entrar"
            children={
              <>
                <i className="icon user--icon"></i>
                <span>Entrar</span>
              </>
            }
          />
          <Link
            className="navbar-link navbar-btn"
            role="button"
            aria-label="Vender"
            to="#entrar"
            children={
              <>
                <i className="icon plus--icon"></i>
                <span>Vender</span>
              </>
            }
          />
        </div>
      </nav>

      <nav
        className={`navbar ${isAriaChecked ? 'overlay' : ''}`}
        aria-label="Main Menu"
        role="navigation"
        id="mobileNav"
      >
        <div className="overlay-content">
          <ul className="navbar-list" id="mobileNavList">
            <li className="navbar-item">
              <Link to="#entrar" className="navbar-link" children="Entrar" />
            </li>
            <li className="navbar-item">
              <Link
                to={`${CatalogPath}?condition=1`}
                className="navbar-link"
                children="Novos"
              />
            </li>
            <li className="navbar-item">
              <Link
                to={`${CatalogPath}?condition=2`}
                className="navbar-link"
                children="Usados"
              />
            </li>
            <li className="navbar-item">
              <Link to="#vender" className="navbar-link" children="Vender" />
            </li>
            <li className="navbar-item">
              <Link to="#comprar" className="navbar-link" children="Comprar" />
            </li>
            <li className="navbar-item">
              <Link
                to="#novidades"
                className="navbar-link"
                children="Novidades e Reviews"
              />
            </li>
          </ul>
        </div>
      </nav>

      <label
        htmlFor="menuIconCheckbox"
        className={`hamburguer ${isAriaChecked ? 'triggered' : ''}`}
        id="menuIcon"
        role="button"
        aria-label="Menu"
        aria-checked={isAriaChecked}
        onClick={handleMenuIconClick}
      >
        <span className="line line--top"></span>
        <span className="line line--middle"></span>
        <span className="line line--bottom"></span>
      </label>
    </Header>
  )
}

const Header = styled.header(
  ({ theme }) => css`
    position: relative;
    z-index: 10;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;

    padding: 0 24px;
    margin: 0 auto;
    max-width: ${theme.widths.main};
    width: 100%;

    #mobileNav,
    #menuIcon.hamburguer {
      display: none !important;
    }

    .navbar {
      display: flex;
      flex: 1 1 100%;
    }

    .navbar .navbar-list {
      display: flex;
      align-items: center;
      flex: 1 1 100%;
    }

    .navbar .navbar-list::before {
      content: '';
      width: 1px;
      height: 24px;
      background-color: ${theme.colors.white.n150};
    }

    .navbar .navbar-list .navbar-item {
      margin-left: 32px;
      display: flex;
      align-items: center;
    }

    .navbar .navbar-link {
      display: flex;
      align-items: center;
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.sm};
      color: ${theme.colors.white.n700};
      text-decoration-color: transparent;
      text-decoration-style: solid;
      text-decoration-line: underline;
      -webkit-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      -o-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
    }

    .navbar .navbar-link .icon {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }

    .navbar .navbar-link .icon.user--icon {
      background-color: ${theme.colors.white.n700};
      mask-image: url(${UserIcon});
      -webkit-mask-image: url(${UserIcon});
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .navbar .navbar-link .icon.plus--icon {
      background-color: ${theme.colors.white.n000};
      mask-image: url(${PlusIcon});
      -webkit-mask-image: url(${PlusIcon});
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .navbar .navbar-link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    .navbar .navbar-link:hover .icon {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    }

    .navbar .navbar-actions .navbar-btn {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      margin-left: 32px;
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
    }

    .navbar .navbar-actions .navbar-btn:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white.n000};
    }

    #mobileNav .navbar-list-container {
      display: none;
    }

    .overlay {
      height: 100%;
      width: 100%;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      background-color: ${theme.colors.gray.n900};
      background-color: ${theme.colors.gray.n995};
      overflow: hidden;
      pointer-events: all;
      transition: 0.5s;
    }

    .overlay #menuIcon.hamburguer {
      position: absolute;
      top: 20px;
      right: 44px;
      right: 24px;
      z-index: 10;
    }

    .overlay-content {
      opacity: 0;
      width: 0;
      overflow: hidden;
    }

    .overlay .overlay-content {
      position: relative;
      top: 0;
      text-align: center;
      width: 100%;
      display: flex;
      opacity: 1;
      transition: opacity 0.5s;
    }

    .overlay .overlay-content .navbar-list {
      flex-direction: column;
      justify-content: center;
    }

    .overlay .overlay-content .navbar-list::before {
      display: none;
    }

    .overlay .overlay-content .navbar-list .navbar-item {
      margin-left: 0;
      padding: 8px;
      width: 100%;
      display: block;
      padding: 0;
    }

    .overlay .overlay-content .navbar-list .navbar-item .navbar-link {
      justify-content: center;
      align-items: center;
      font-size: ${theme.fontSizes.h1};
      line-height: ${theme.lineHeights.h1};
      padding: 8px;
    }

    #menuIcon #menuIconCheckbox {
      display: none;
    }

    #menuIcon.hamburguer {
      position: relative;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
    }

    #menuIcon.hamburguer:hover .line {
      background-color: ${theme.colors.primary};
    }

    #menuIcon.hamburguer .line {
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.white.n000};
      -webkit-transition: transform 0.25s, opacity 0.35s, background-color 0.25s;
      -moz-transition: transform 0.25s, opacity 0.35s, background-color 0.25s;
      -o-transition: transform 0.25s, opacity 0.35s, background-color 0.25s;
      transition: transform 0.25s, opacity 0.35s, background-color 0.25s;
    }

    #menuIcon.hamburguer .line--top {
      transform: translateY(-7px);
    }

    #menuIcon.hamburguer .line--bottom {
      transform: translateY(7px);
    }

    #menuIcon.hamburguer.triggered {
      position: fixed;
      right: 24px;
    }

    #menuIcon.hamburguer.triggered .line {
      background-color: ${theme.colors.primary};
    }

    #menuIcon.hamburguer.triggered .line--top {
      transform: rotate(45deg);
    }

    #menuIcon.hamburguer.triggered .line--middle {
      transform: translateX(16px);
      opacity: 0;
    }

    #menuIcon.hamburguer.triggered .line--bottom {
      transform: rotate(-45deg);
    }

    @media screen and (max-width: 1000px) {
      position: sticky;
      top: 0;
      justify-content: space-between !important;
      background-color: ${theme.colors.gray.n995};
      -webkit-transition: top 0.5s;
      -moz-transition: top 0.5s;
      -o-transition: top 0.5s;
      transition: top 0.5s;

      #desktopNav {
        display: none;
      }

      #mobileNav,
      #menuIcon.hamburguer {
        display: flex !important;
      }

      #mobileNav.navbar {
        pointer-events: none;
      }

      #mobileNav.navbar.overlay {
        pointer-events: all;
      }
    }
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
  z-index: 10;

  img {
    width: 116px;
  }
`

Navbar.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
}
