import { useState, useEffect, useRef, useContext } from 'react'

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

import { Checkbox } from './Checkbox'

import { carouselMockedData } from '../helpers/carouselMockedData'

import WhishListIcon from '../assets/icons/wishlist.svg'
import ArrowLeft from '../assets/icons/arrow-left.svg'
import ArrowRight from '../assets/icons/arrow-right.svg'
import GearboxIcon from '../assets/icons/gearbox.svg'
import DashboardIcon from '../assets/icons/dashboard.svg'
import PetrolIcon from '../assets/icons/petrol.svg'
import PinMarketIcon from '../assets/icons/pin-market.svg'
import ChevronIcon from '../assets/icons/chevron.svg'

export const CardsCarousel = () => {
  useEffect(() => {
    /********** SLIDER WRAPPER **********/
    let sizeWindow = window.screen.width

    // controles wrapper
    let arrowWrapper = document.querySelectorAll('.arrow-indicator-wrapper')

    // elementos wrapper
    let card = document.querySelectorAll('.wrapper-slider .latest-card')
    let cardPerPage = Math.ceil(card.length / 3)

    // deslocamento de elementos
    let lengthMove = 0
    let movePer = 101.55
    let maxMove = 204

    // Responsividade
    if (sizeWindow <= 1110) {
      cardPerPage = Math.ceil(card.length / 5)
      // movePer = 50.36;
      // maxMove = 504;
    }

    if (sizeWindow <= 710) {
      cardPerPage = Math.ceil(card.length / 12)
      // movePer = 50.36;
      // maxMove = 504;
    }

    // inicializador dos bullets
    let countBullets = Math.ceil(card.length / cardPerPage)
    let bulletContainer = document.querySelector('.bullet-container')

    function initializeBullets() {
      for (let i = 0; i < countBullets; i++) {
        let span = document.createElement('span')
        if (i == 0) {
          span.classList.add('active')
        }
        bulletContainer.appendChild(span)
      }
    }
    initializeBullets()

    let bullets = document.querySelectorAll('.bullet-container span')
    let currentBullet = 0

    function rightMove() {
      lengthMove = lengthMove + movePer
      if (card == 1) {
        lengthMove = 0
      }
      for (const i of card) {
        if (lengthMove > maxMove) {
          lengthMove = lengthMove - movePer
        }
        i.style.left = '-' + lengthMove + '%'
      }
    }

    function leftMove() {
      lengthMove = lengthMove - movePer
      if (lengthMove <= 0) {
        lengthMove = 0
      }
      for (const i of card) {
        if (cardPerPage > 1) {
          i.style.left = '-' + lengthMove + '%'
        }
      }
    }

    function hideBullet() {
      bullets.forEach((bullet) => {
        bullet.classList.remove('active')
      })
    }

    function showBullet() {
      bullets[currentBullet].classList.add('active')
    }

    function controlArrowsClick() {
      if (!arrowWrapper.length) return

      arrowWrapper[1].onclick = () => {
        rightMove()
        currentBullet++

        if (currentBullet < bullets.length) {
          hideBullet()
          showBullet()
        } else {
          currentBullet = bullets.length - 1
        }
      }
      arrowWrapper[0].onclick = () => {
        leftMove()
        currentBullet--

        if (currentBullet >= 0) {
          hideBullet()
          showBullet()
        } else {
          currentBullet = 0
        }
      }
    }
    controlArrowsClick()

    bullets.forEach((bullet, index) => {
      bullet.addEventListener('click', () => {
        if (index < currentBullet) {
          leftMove()
        } else if (index > currentBullet) {
          rightMove()
        }

        currentBullet = index
        hideBullet()
        showBullet()
      })
    })
  }, [])

  return (
    <WrapperContainer>
      <div className="wrapper-slider">
        {carouselMockedData.map((card) => (
          <Card className="latest-card" key={card.id}>
            <div className="wrapper">
              <div className="slider">
                {card.photos.map((photo, index) => (
                  <img
                    key={`car-photo-${index}`}
                    className="show"
                    src={photo}
                    alt={card.description}
                  />
                ))}
              </div>

              <div className="icons">
                <img
                  className="wishlist"
                  src={WhishListIcon}
                  alt="Adicionar aos favoritos"
                />
                <img
                  className="arrow-left"
                  src={ArrowLeft}
                  alt="Imagem anterior"
                />
                <img
                  className="arrow-right"
                  src={ArrowRight}
                  alt="Próxima imagem"
                />
              </div>
            </div>

            <div className="label">
              {card.condition === 0 ? (
                <div className="info warning-label">Novo</div>
              ) : (
                <div className="info info-label">Usado</div>
              )}

              {card.certified && (
                <div className="info success-label">Certificado</div>
              )}
            </div>

            <div className="container">
              <div className="content">
                <div className="info-header">
                  <span>{card.year}</span>

                  <Checkbox
                    label="Compare"
                    name="compare"
                    id={`car-card-${card.id}`}
                  />
                </div>

                <div className="info">
                  <h1>{card.description}</h1>
                  <span>${card.price}</span>
                  <div>
                    <img
                      className="pin-market"
                      src={PinMarketIcon}
                      alt="Estado de venda/locação"
                    />
                    <small>{card.location}</small>
                  </div>
                </div>
              </div>

              <div className="icons">
                <div className="icon">
                  <img src={DashboardIcon} alt="Quilometragem do veículo" />
                  <span>{card.details[0]}</span>
                </div>

                <div className="icon">
                  <img src={GearboxIcon} alt="Transmissão do veículo" />
                  <span>{card.details[1]}</span>
                </div>

                <div className="icon">
                  <img src={PetrolIcon} alt="Combustível de alimentação" />
                  <span>{card.details[2]}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="icons">
        <div className="icon-wrapper--left arrow-indicator-wrapper">
          <i className="slider-arrow-left"> </i>
        </div>

        <div className="icon-wrapper--right arrow-indicator-wrapper">
          <i className="slider-arrow-right"> </i>
        </div>
      </div>

      <div className="bullet-container"></div>
    </WrapperContainer>
  )
}

const WrapperContainer = styled.div(
  ({ theme }) => css`
    position: relative;

    .wrapper-slider {
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .icons {
      .icon-wrapper--right,
      .icon-wrapper--left {
        position: absolute;
        top: calc(
          50% - 32px
        ); /* removes 32px from margin-bottom of the relative positioned parent called .wrapper-slider */
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.white.n040};
        width: 3.6rem;
        height: 3.6rem;
        max-width: 3.6rem;
        max-height: 3.6rem;
        text-align: center;
        border-radius: 50%;
        -webkit-transition: background-color 0.2s ease-in;
        -moz-transition: background-color 0.2s ease-in;
        -o-transition: background-color 0.2s ease-in;
        transition: background-color 0.2s ease-in;

        &:hover,
        &:hover {
          background-color: ${theme.colors.white.n000};

          & i,
          & i {
            background-color: ${theme.colors.primary};
          }
        }

        @media screen and (max-width: 1440px) {
          &,
          & {
            display: none;
          }
        }
      }

      .icon-wrapper--right {
        right: -4.4rem;
      }
      .icon-wrapper--left {
        left: -4.9rem;
      }

      i {
        width: 2rem;
        height: 2rem;
        max-width: 2rem;
        min-width: 2rem;
        background-color: ${theme.colors.white.n000};
        mask-image: url(${ChevronIcon});
        -webkit-mask-image: url(${ChevronIcon});
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-size: cover;
        -webkit-mask-size: cover;
      }

      .slider-arrow-right {
        transform: rotate(270deg);
      }
      .slider-arrow-left {
        transform: rotate(90deg);
      }
    }

    .bullet-container {
      margin: 0 auto;
      text-align: center;
      margin-top: 3.2rem;

      span {
        display: inline-block;
        width: 1.6rem;
        height: 0.6rem;
        border-radius: 4rem;
        background-color: ${theme.colors.white.n000};
        opacity: 0.7;
        margin-left: 0.5rem;
        cursor: pointer;

        &:first-child {
          margin: 0;
        }

        &:hover {
          opacity: 1;
        }

        &.active {
          width: 3.2rem;
          opacity: 1;
        }
      }
    }
  `
)

export const Card = styled.article(
  ({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white.n040};
    border-radius: ${theme.borderRadius.lg};
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    -webkit-transition: opacity 0.2s ease-in, border-color 0.2s ease-in;
    -moz-transition: opacity 0.2s ease-in, border-color 0.2s ease-in;
    -o-transition: opacity 0.2s ease-in, border-color 0.2s ease-in;
    transition: opacity 0.2s ease-in, border-color 0.2s ease-in;

    &:hover {
      border-color: ${theme.colors.white.n150};
    }

    &:hover > .container .content .info h1 {
      color: ${theme.colors.white.n000};
    }

    &:hover .wrapper img {
      opacity: 0.7;
    }

    &:hover .wrapper .icons img {
      opacity: 1;
    }

    &.secondary {
      max-height: 239px;
      flex-direction: row;
      flex: 1 1 auto !important;
    }

    &.secondary .wrapper {
      min-height: 239px;
      width: 40.85%; /* (259px / 634 - 2 (border)) * 100%  */
    }

    &.secondary .wrapper .slider-desktop {
      min-height: 239px;
    }

    &.secondary .container {
      flex: 1 1 auto;
      width: 59.15%; /* (375px / 634 - 2 (border)) * 100% */
    }

    &.secondary .wrapper .slider-desktop img {
      min-height: 239px;
    }

    .label {
      position: absolute;
      top: 2rem;
      left: 2rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }

    .label .info {
      display: inline-block;
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      font-weight: ${theme.fontWeights.regular};
      border-radius: ${theme.borderRadius.sm};
      padding: 1px 10px 2px 10px;
      color: ${theme.colors.white.n000};
      margin-bottom: 4px;
    }

    .label .info-label {
      background-color: ${theme.colors.info};
    }

    .label .warning-label {
      background-color: ${theme.colors.warning};
    }

    .label .success-label {
      background-color: ${theme.colors.success};
    }

    .wrapper {
      position: relative;
      overflow: hidden;
      transition: left linear 0.3s;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 150px;
      max-height: 263px;
    }

    .wrapper img {
      -webkit-transition: opacity 0.2s ease-in;
      -moz-transition: opacity 0.2s ease-in;
      -o-transition: opacity 0.2s ease-in;
      transition: opacity 0.2s ease-in;
    }

    .wrapper .slider {
      height: 100%;
      overflow: hidden;
    }

    .wrapper .slider img {
      display: none;
    }

    .wrapper .slider img.show:first-of-type {
      display: block;
      max-height: 263px;
    }
    /* .wrapper .slider img.show {
      display: block;
      max-height: 263px;
    } */

    .wrapper .icons .wishlist {
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 3.2rem;
      height: 3.2rem;
      box-shadow: ${theme.shadows.default};
      color: ${theme.colors.primary};
      border-radius: 50%;
      cursor: pointer;
    }

    .wrapper .icons .arrow-left,
    .wrapper .icons .arrow-right {
      width: 0.8rem;
      height: 1.4rem;
      color: ${theme.colors.white.n000};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }

    .wrapper .icons .arrow-left {
      left: 1rem;
    }
    .wrapper .icons .arrow-right {
      right: 1rem;
    }

    .wrapper .icons .wishlist,
    .wrapper .icons .arrow-left,
    .wrapper .icons .arrow-right {
      opacity: 0;
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }

    .wrapper:hover .icons .wishlist,
    .wrapper:hover .icons .arrow-left,
    .wrapper:hover .icons .arrow-right {
      opacity: 1;
    }

    .container {
      padding: 2rem;

      display: flex;
      flex-direction: column;
    }

    .container .content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border-bottom: 0.1rem solid ${theme.colors.white.n150};
      margin-bottom: 1.6rem;
    }

    .container .content .info-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .container .content .info-header > span {
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      font-weight: ${theme.fontWeights.regular};
      color: ${theme.colors.white.n000};
    }

    .container .content .info {
      display: flex;
      flex-direction: column;
    }

    .container .content .info span {
      display: block;
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.regular};
      line-height: ${theme.lineHeights.sm};
      color: ${theme.colors.white.n000};
      margin-bottom: 0.4rem;
    }

    .container .content .info div {
      display: flex;
      align-items: center;
      margin-bottom: 1.6rem;
      justify-content: flex-start;
    }

    .container .content .info div .pin-market {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.4rem;
      object-fit: contain;
      opacity: 0.7;
    }

    .container .content .info div small {
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      color: ${theme.colors.white.n700};
      font-weight: ${theme.fontWeights.regular};
    }

    .container .content .info h1 {
      font-size: ${theme.fontSizes.lg};
      line-height: ${theme.lineHeights.lg};
      color: ${theme.colors.white.n700};
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: 0.4rem;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      -webkit-transition: color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in;
      -o-transition: color 0.2s ease-in;
      transition: color 0.2s ease-in;
    }

    .container .content .info > span {
      font-size: ${theme.fontSizes.base};
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.base};
      color: ${theme.colors.primary};
      margin-bottom: 0.4rem;
    }

    .container .icons {
      display: flex;
      gap: 1.2rem;
    }

    .container .icons .icon {
      flex: 1 1 100%;
      background-color: ${theme.colors.gray.n900};
      border-radius: ${theme.borderRadius.base};
      text-align: center;
      padding: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-width: 0;
    }

    .container .icons .icon img {
      width: 2.4rem;
      height: 2.4rem;
      display: inline-block;
      margin-bottom: 0.4rem;
    }

    .container .icons .icon span {
      display: block;
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.xs};
      font-weight: ${theme.fontWeights.regular};
      line-height: ${theme.lineHeights.xs};
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 88px;
      max-width: 100%;
    }

    /* BULLETS */
    .bullets {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }

    .bullets span {
      display: inline-block;
      width: 1.6rem;
      height: 0.6rem;
      border-radius: 4rem;
      background-color: ${theme.colors.white.n000};
      opacity: 0.7;
      margin-left: 0.5rem;
      cursor: pointer;
    }

    .bullets span:first-child {
      margin: 0;
    }

    .bullets span:hover {
      opacity: 1;
    }

    .bullets span.active {
      width: 3.2rem;
      opacity: 1;
    }

    @media only screen and (max-width: 860px) {
      &.secondary {
        max-height: none;
      }

      &.secondary .wrapper {
        max-width: none;
        min-height: 150px;
        width: 100%;
      }

      &.secondary .container {
        width: 100%;
      }
    }
  `
)
