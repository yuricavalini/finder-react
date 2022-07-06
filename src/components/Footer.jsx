import { useState, useEffect } from 'react'

import { fechDataFromApi } from '../helpers/utils'

import styled, { css } from 'styled-components'

import Logo from '../assets/icons/logo.svg'
import WorldIcon from '../assets/icons/world.svg'
import PinIcon from '../assets/icons/pin.svg'
import MailIcon from '../assets/icons/mail.svg'
import SendIcon from '../assets/icons/send.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import FacebookIcon from '../assets/icons/facebook.svg'
import TwitterIcon from '../assets/icons/twitter.svg'
import TelegramIcon from '../assets/icons/telegram.svg'
import MessengerIcon from '../assets/icons/messenger.svg'

export const Footer = ({ ...props }) => {
  const [locales, setLocales] = useState([])

  // Initial render
  useEffect(() => {
    fechDataFromApi('locale').then(({ data }) => setLocales(data))
  }, [])
  return (
    <StyledFooter {...props}>
      <div className="footer-header center-content">
        <div className="footer-content">
          <a href="#" className="logo-container center-content">
            <img src={Logo} alt="Finder logo" width="115px" height="auto" />
          </a>

          <div className="location-options">
            <div className="location-options-field center-content">
              <i className="globe--icon"></i>
              <select name="language" id="language" defaultValue="">
                <option value="">pt-BR</option>
              </select>
            </div>
            <div className="location-options-field center-content">
              <i className="location--icon"></i>
              <select name="local" id="local" defaultValue="">
                {locales.length ? (
                  locales?.map((locale, index) => {
                    return (
                      <option key={locale.id} value={locale.id}>
                        {locale.value}
                      </option>
                    )
                  })
                ) : (
                  <option value="">Local</option>
                )}
              </select>
            </div>
          </div>
        </div>
      </div>

      <section className="footer-section">
        <nav className="footer-content" role="navigation">
          <div className="footer-newsletter">
            <h2>Cadastre-se na newsletter</h2>
            <p>Não perca nenhuma oferta relevante!</p>

            <div className="newsletter-input-container">
              <i className="mail--icon"></i>
              <input type="text" placeholder="Informe seu email" />

              <button type="button" aria-label="Enviar seu email">
                <i className="send--icon"></i>
              </button>
            </div>
          </div>

          <div className="footer-lists-wrapper">
            <div className="footer-list-container">
              <h2 className="footer-list-tittle">Comprar ou Vender</h2>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-container">
              <h2 className="footer-list-tittle">Sobre</h2>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-container">
              <h2 className="footer-list-tittle">Perfil</h2>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Loren ipsum
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-contacts">
            <div className="footer-contacts-channels">
              <div className="footer-contacts-phone">
                <i className="phone--icon"></i>
                <span>(11) 1111-1111</span>
              </div>
              <div className="footer-contacts-email">
                <i className="mail--icon"></i>
                <span>email@finder.com.br</span>
              </div>
            </div>

            <div className="footer-contacts-media">
              <ul className="footer-contacts-list">
                <li className="footer-contacts-item">
                  <a
                    href="#"
                    className="footer-contacts-link"
                    aria-label="Facebook link"
                  >
                    <i className="facebook--icon"></i>
                    <span className="visually-hidden">Facebook link</span>
                  </a>
                </li>
                <li className="footer-contacts-item">
                  <a
                    href="#"
                    className="footer-contacts-link"
                    aria-label="Twitter link"
                  >
                    <i className="twitter--icon"></i>
                    <span className="visually-hidden">Twitter link</span>
                  </a>
                </li>
                <li className="footer-contacts-item">
                  <a
                    href="#"
                    className="footer-contacts-link"
                    aria-label="Telegram link"
                  >
                    <i className="telegram--icon"></i>
                    <span className="visually-hidden">Telegram link</span>
                  </a>
                </li>
                <li className="footer-contacts-item">
                  <a
                    href="#"
                    className="footer-contacts-link"
                    aria-label="Messenger link"
                  >
                    <i className="messenger--icon"></i>
                    <span className="visually-hidden">Messenger link</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <div className="footer-copyright">
        <div className="footer-content">
          <p>
            Copyright © Finder | Gama Academy. Todos os direitos reservados -
            Este é um projeto acadêmico.
          </p>

          <div className="footer-copyright-links">
            <a href="#" className="copyright-link">
              Termos de uso
            </a>
            <a href="#" className="copyright-link">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer(
  ({ theme }) => css`
    background: linear-gradient(
        0deg,
        rgba(69, 64, 86, 0.2),
        rgba(69, 64, 86, 0.2)
      ),
      #1f1b2d;
    font-family: ${theme.fonts.primary};

    .footer-header {
      padding: 24px;
      border-bottom: 1px solid ${theme.colors.white.n150};
    }

    .footer-header .footer-content,
    .footer-section .footer-content,
    .footer-copyright .footer-content {
      max-width: ${theme.widths.maxContent};
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1 1 100%;
      margin: 0 auto;
    }

    .footer-copyright .footer-content {
      flex-wrap: wrap;
      gap: 24px;
    }

    .footer-section {
      padding: 0 24px;
    }

    .footer-section .footer-content {
      align-items: flex-start;
      padding-top: 56px;
    }

    .footer-section .footer-content > *:not(:last-child) {
      margin-right: 16px;
    }

    .footer-header .footer-content .location-options {
      display: flex;
      align-items: center;
    }

    .footer-header .footer-content .location-options .location-options-field {
      font-size: ${theme.fontSizes.base};
      font-weight: ${theme.fontWeights.regular};
      line-height: ${theme.lineHeights.base};
      color: ${theme.colors.white.n500};
    }

    .footer-header
      .footer-content
      .location-options
      .location-options-field
      select {
      max-width: 112px;
    }

    .footer-header
      .footer-content
      .location-options
      .location-options-field
      option {
      color: ${theme.colors.gray.n900};
    }

    .footer-header
      .footer-content
      .location-options
      .location-options-field:first-of-type {
      margin-right: 24px;
    }

    .footer-header
      .footer-content
      .location-options
      .location-options-field
      .globe--icon {
      width: 100%;
      height: 18px;
      max-width: 18px;
      min-width: 18px;
      margin-right: 4px;
      background-color: ${theme.colors.white.n000};
      mask-image: url(${WorldIcon});
      -webkit-mask-image: url(${WorldIcon});
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-size: cover;
      -webkit-mask-size: cover;
    }

    .footer-header
      .footer-content
      .location-options
      .location-options-field
      .location--icon {
      width: 100%;
      height: 18px;
      max-width: 18px;
      min-width: 18px;
      mask-image: url(${PinIcon});
      -webkit-mask-image: url(${PinIcon});
      background-color: ${theme.colors.white.n000};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      margin-right: 4px;
    }

    .footer-header
      .footer-content
      .location-options
      .location-options-field
      select {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      color: inherit;
      background-color: transparent;
      border: none;
    }

    .footer-section .footer-content .footer-newsletter {
      display: flex;
      flex-direction: column;
      max-width: 306px;
      flex: 1 1 100%;
    }

    .footer-section .footer-content .footer-newsletter h2 {
      font-size: ${theme.fontSizes.h5};
      line-height: ${theme.lineHeights.h5};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.white.n000};
      margin-bottom: 12px;
    }

    .footer-section .footer-content .footer-newsletter p {
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      font-weight: ${theme.fontWeights.regular};
      color: ${theme.colors.white.n700};
      margin-bottom: 24px;
    }

    .footer-section
      .footer-content
      .footer-newsletter
      .newsletter-input-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1 1 100%;
      padding: 7px 8px;
      border: 1px solid ${theme.colors.white.n120};
      border-radius: ${theme.borderRadius.base};
      background-color: ${theme.colors.white.n040};
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.regular};
      line-height: ${theme.lineHeights.sm};
    }

    .footer-section
      .footer-content
      .footer-newsletter
      .newsletter-input-container
      .mail--icon {
      width: 100%;
      height: 18px;
      max-width: 18px;
      min-width: 18px;
      mask-image: url(${MailIcon});
      -webkit-mask-image: url(${MailIcon});
      background-color: ${theme.colors.white.n500};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      margin-left: 8px;
    }

    .footer-section
      .footer-content
      .footer-newsletter
      .newsletter-input-container
      input {
      height: 36px;
      margin: 0 8px;
      width: 100%;
      padding: 0 8px;
      background-color: transparent;
      border: none;
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }

    .footer-section
      .footer-content
      .footer-newsletter
      .newsletter-input-container
      button {
      padding: 10px;
      background-color: ${theme.colors.primary};
      border: none;
      border-radius: ${theme.borderRadius.sm};
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-transition: background-color 0.2s ease-in;
      -moz-transition: background-color 0.2s ease-in;
      -o-transition: background-color 0.2s ease-in;
      transition: background-color 0.2s ease-in;
    }

    .footer-section
      .footer-content
      .footer-newsletter
      .newsletter-input-container
      button:hover {
      background-color: ${theme.colors.white.n000};
    }

    .footer-section
      .footer-content
      .footer-newsletter
      .newsletter-input-container
      button:hover
      > .send--icon {
      background-color: ${theme.colors.primary};
    }

    .footer-section
      .footer-content
      .footer-newsletter
      .newsletter-input-container
      button
      .send--icon {
      width: 100%;
      height: 16px;
      max-width: 16px;
      min-width: 16px;
      mask-image: url(${SendIcon});
      -webkit-mask-image: url(${SendIcon});
      background-color: ${theme.colors.white.n000};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: background-color 0.2s ease-in;
      -moz-transition: background-color 0.2s ease-in;
      -o-transition: background-color 0.2s ease-in;
      transition: background-color 0.2s ease-in;
    }

    .footer-section .footer-content .footer-lists-wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      flex: 1 1 100%;
    }

    .footer-section .footer-content .footer-lists-wrapper > *:not(:last-child) {
      margin-right: 16px;
    }

    .footer-section
      .footer-content
      .footer-lists-wrapper
      .footer-list-container
      .footer-list-tittle {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.white.n000};
      margin-bottom: 12px;
    }

    .footer-section
      .footer-content
      .footer-lists-wrapper
      .footer-list-container
      .footer-list-link {
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      font-weight: ${theme.fontWeights.regular};
      color: ${theme.colors.white.n700};
      text-decoration-color: transparent;
      text-decoration-style: solid;
      text-decoration-line: underline;
      -webkit-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      -o-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
    }

    .footer-section
      .footer-content
      .footer-lists-wrapper
      .footer-list-container
      .footer-list-link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    .footer-section .footer-content .footer-contacts {
      max-width: 178px;
      min-width: 178px;
    }

    .footer-section .footer-content .footer-contacts .footer-contacts-channels {
      margin-bottom: 32px;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-phone,
    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-email {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1 1 100%;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-phone
      .phone--icon,
    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-email
      .mail--icon {
      width: 100%;
      height: 18px;
      max-width: 18px;
      min-width: 18px;
      background-color: ${theme.colors.primary};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      margin-right: 4px;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-phone
      .phone--icon {
      mask-image: url(${PhoneIcon});
      -webkit-mask-image: url(${PhoneIcon});
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-email
      .mail--icon {
      mask-image: url(${MailIcon});
      -webkit-mask-image: url(${MailIcon});
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-phone
      span,
    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-channels
      .footer-contacts-email
      span {
      flex: 1 1 100%;
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
      font-weight: ${theme.fontWeights.regular};
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      > .footer-contacts-list
      .footer-contacts-item:not(:last-child) {
      margin-right: 8px;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      .footer-contacts-link {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${theme.colors.white.n040};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      .footer-contacts-link
      i {
      width: 100%;
      height: 14px;
      max-width: 14px;
      min-width: 14px;
      background-color: ${theme.colors.white.n000};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item,
    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      .footer-contacts-link,
    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      i {
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item:hover
      > .footer-contacts-link {
      background-color: ${theme.colors.white.n000};
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item:hover
      i {
      background-color: ${theme.colors.primary};
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      .facebook--icon {
      mask-image: url(${FacebookIcon});
      -webkit-mask-image: url(${FacebookIcon});
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      .twitter--icon {
      mask-image: url(${TwitterIcon});
      -webkit-mask-image: url(${TwitterIcon});
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      .telegram--icon {
      mask-image: url(${TelegramIcon});
      -webkit-mask-image: url(${TelegramIcon});
    }

    .footer-section
      .footer-content
      .footer-contacts
      .footer-contacts-media
      .footer-contacts-item
      .messenger--icon {
      mask-image: url(${MessengerIcon});
      -webkit-mask-image: url(${MessengerIcon});
    }

    .footer-copyright {
      padding: 96px 24px 48px 24px;
    }

    .footer-copyright {
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.regular};
      line-height: ${theme.lineHeights.sm};
      color: ${theme.colors.white.n700};
    }

    .footer-copyright .footer-content p {
      text-align: center;
    }

    .footer-copyright .footer-content .footer-copyright-links {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      gap: 24px;
    }

    .footer-copyright .footer-content .footer-copyright-links .copyright-link {
      color: ${theme.colors.white.n700};
      text-decoration-color: transparent;
      text-decoration-style: solid;
      text-decoration-line: underline;
      -webkit-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      -o-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
      transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
    }

    .footer-copyright
      .footer-content
      .footer-copyright-links
      .copyright-link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    @media screen and (max-width: 1110px) {
      .footer-section .footer-content {
        flex-wrap: wrap;
        justify-content: center;
        gap: 48px;
      }

      .footer-section .footer-content .footer-newsletter {
        max-width: 100%;
        flex: 1 1 100%;
        text-align: center;
        align-items: center;
      }

      .footer-section
        .footer-content
        .footer-newsletter
        .newsletter-input-container {
        max-width: 68vw;
        width: 100%;
      }

      .footer-section .footer-content .footer-lists-wrapper {
        flex: 1 1 100%;
        justify-content: space-evenly;
      }

      .footer-section .footer-content > *:not(:last-child) {
        margin-right: 0;
      }

      .footer-section .footer-content .footer-contacts {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 400px;
        width: 100%;
        gap: 24px;
        flex-wrap: wrap;
      }

      .footer-section
        .footer-content
        .footer-contacts
        .footer-contacts-channels {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .footer-section
        .footer-content
        .footer-contacts
        .footer-contacts-channels,
      .footer-section
        .footer-content
        .footer-contacts
        .footer-contacts-channels
        .footer-contacts-phone,
      .footer-section
        .footer-content
        .footer-contacts
        .footer-contacts-channels
        .footer-contacts-email {
        margin-bottom: 0;
      }
    }

    @media screen and (max-width: 1000px) {
      .footer-copyright .footer-content {
        justify-content: center;
        gap: 24px;
      }
    }

    @media screen and (max-width: 600px) {
      .footer-section .footer-content {
        gap: 56px;
      }

      .footer-section
        .footer-content
        .footer-lists-wrapper
        > *:not(:last-child) {
        margin-right: 0;
      }

      .footer-section .footer-content .footer-lists-wrapper {
        flex-direction: column;
        gap: 24px;
        align-items: center;
        text-align: center;
      }

      .footer-section
        .footer-content
        .footer-lists-wrapper
        .footer-list-container {
        margin: 0;
      }

      .footer-section
        .footer-content
        .footer-lists-wrapper
        .footer-list-container
        .footer-list {
        text-align: center;
      }
    }

    @media screen and (max-width: 425px) {
      .footer-header .footer-content {
        gap: 24px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .footer-section .footer-content .footer-contacts {
        flex-direction: column;
      }
    }

    @media screen and (max-width: 292px) {
      .footer-header .footer-content .location-options {
        flex-direction: column;
        gap: 24px;
      }

      .footer-header
        .footer-content
        .location-options
        .location-options-field:first-of-type {
        margin-right: 0;
      }
    }
  `
)
