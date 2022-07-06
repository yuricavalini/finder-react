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

import ArrowPointing from '../../assets/icons/arrow-pointing.svg'
import ChevronIcon from '../../assets/icons/chevron.svg'
import SearchwIcon from '../../assets/icons/searchw.svg'
import DividerIcon from '../../assets/icons/divider.svg'
import AppleIcon from '../../assets/icons/apple.svg'
import GoogleIcon from '../../assets/icons/google.svg'

import OpelIcon from '../../assets/icons/opel.svg'
import AudiIcon from '../../assets/icons/audi.svg'
import MercedesIcon from '../../assets/icons/mercedes-benz.svg'
import ToyotaIcon from '../../assets/icons/toyota.svg'
import MazdaIcon from '../../assets/icons/mazda.svg'
import NissanIcon from '../../assets/icons/nissan.svg'
import HyundaiIcon from '../../assets/icons/hyundai.svg'
import LexusIcon from '../../assets/icons/lexus.svg'
import HondaIcon from '../../assets/icons/honda.svg'
import RenaultIcon from '../../assets/icons/renault.svg'
import InfinitIcon from '../../assets/icons/infiniti.svg'
import MitsubishiIcon from '../../assets/icons/mitsubishi.svg'

import SearchIcon from '../../assets/icons/search.svg'
import FileIcon from '../../assets/icons/file.svg'
import SettingsIcon from '../../assets/icons/settings.svg'
import InfoIcon from '../../assets/icons/info.svg'
import UserIcon from '../../assets/icons/user.svg'
import CalculatorIcon from '../../assets/icons/calculator.svg'

import PhoneBorder from '../../assets/images/phone-border.svg'
import CarPhone from '../../assets/images/car-phone.png'

import CalendarIcon from '../../assets/icons/calendar.svg'

export const StyledMain = styled.main(
  ({ theme }) => css`
    /********** BANNER **********/
    &.main .banner {
      display: flex;
      margin-top: 96px;
      margin-bottom: 8px;
    }

    &.main .banner .banner-info {
      margin-right: 24px;
      max-width: 526px;
      width: 100%;
    }

    &.main .banner .banner-info h1 {
      font-size: ${theme.fontSizes.display};
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.display};
      color: ${theme.colors.text.white};
      margin-bottom: 32px;
    }

    &.main .banner .banner-info h2 {
      font-size: ${theme.fontSizes.lg};
      font-weight: ${theme.fontWeights.regular};
      line-height: ${theme.lineHeights.lg};
      color: ${theme.colors.white.n700};
      width: 416px;
    }

    &.main .banner .banner-image {
      margin-top: 41px;
      width: 100%;
    }

    &.main .banner .banner-image,
    &.main .banner .banner-image .image-container,
    &.main .banner .banner-image .image-container img {
      width: 100%;
    }

    @media screen and (max-width: 1000px) {
      &.main .banner {
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 24px;
      }

      &.main .banner .banner-info {
        margin-right: 0;
        max-width: 100%;
        text-align: center;
      }

      &.main .banner .banner-info h1 {
        width: 100%;
        max-width: 600px;
        margin: 0 auto 18px;
      }

      &.main .banner .banner-info h2 {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }

      &.main .banner .banner-image {
        max-width: 430px;
        width: 100%;
        height: auto;
      }
    }

    @media screen and (max-width: 370px) {
      &.main .banner .banner-info h1 {
        font-size: ${theme.fontSizes.h1};
        line-height: ${theme.lineHeights.h1};
      }
    }

    .types-section {
      margin-top: 72px;
      font-family: ${theme.fonts.primary};
    }

    .types-section--header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .types-section--link {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
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

    .types-section--link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    .types-section--link:hover .types-section--icon.arrow-right-icon {
      background-color: ${theme.colors.primary};
    }

    .types-section--link span {
      margin-right: 8px;
    }

    .types-section--link .types-section--icon {
      width: 100%;
      height: 20px;
      max-width: 20px;
      min-width: 20px;
    }

    .types-section--link .types-section--icon.arrow-right-icon {
      mask-image: url(${ArrowPointing});
      -webkit-mask-image: url(${ArrowPointing});
      background-color: ${theme.colors.white.n700};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .types-section--container {
      margin-top: 32px;
      display: flex;
      flex-flow: row wrap;
      align-content: center;
      justify-content: center;
      flex: 1 1 100%;
      gap: 24px;
    }

    .types-section--card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 240px;
      height: 160px;
      border-radius: 12px;
      -webkit-transition: background-color 0.2s ease-in;
      -moz-transition: background-color 0.2s ease-in;
      -o-transition: background-color 0.2s ease-in;
      transition: background-color 0.2s ease-in;
    }

    .types-section--card:hover {
      background-color: ${theme.colors.white.n040};
    }

    .types-section--title {
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.h3};
      line-height: ${theme.lineHeights.h3};
      font-weight: ${theme.fontWeights.bold};
    }

    img.types-section--img {
      width: auto;
      height: auto;
    }

    .types-section--a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.white.n700};
      cursor: auto;
    }

    .types-section--a span {
      color: ${theme.colors.white.n700};
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
      font-weight: ${theme.fontWeights.bold};
      margin-top: 20px;
      cursor: default;
    }

    @media screen and (max-width: 568px) {
      .types-section .types-section--container {
        overflow-x: auto;
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 16px;
      }

      .types-section .types-section--container .types-section--card {
        margin-bottom: 16px;
        min-width: 200px;
        min-height: 130px;
      }

      .types-section
        .types-section--container
        .types-section--card
        .types-section--a
        span {
        margin-top: 16px;
      }

      .types-section .types-section--container::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      .types-section .types-section--container:hover::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      .types-section .types-section--container::-webkit-scrollbar-track {
        background: ${theme.colors.white.n150};
        border-radius: 20px;
      }

      .types-section .types-section--container::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.white.n000};
        border-radius: 20px;
        border: 3px solid ${theme.colors.white.n000};
      }
    }

    @media screen and (max-width: 450px) {
      .types-section .types-section--header {
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }
    }

    /********** OFERTAS **********/
    section.ofertas {
      margin-top: 72px;
    }

    section.ofertas .headline {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3.2rem;
      gap: 16px;
    }

    section.ofertas .headline h1 {
      font-size: ${theme.fontSizes.h3};
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.h3};
      color: ${theme.colors.white.n000};
    }

    section.ofertas .headline .ofertas-section--link {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
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

    section.ofertas .headline .ofertas-section--link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    section.ofertas
      .headline
      .ofertas-section--link:hover
      .ofertas-section--icon.arrow-right-icon {
      background-color: ${theme.colors.primary};
    }

    section.ofertas .headline .ofertas-section--link span {
      margin-right: 8px;
    }

    section.ofertas .headline .ofertas-section--link .ofertas-section--icon {
      width: 100%;
      height: 20px;
      max-width: 20px;
      min-width: 20px;
    }

    section.ofertas
      .headline
      .ofertas-section--link
      .ofertas-section--icon.arrow-right-icon {
      mask-image: url(${ArrowPointing});
      -webkit-mask-image: url(${ArrowPointing});
      background-color: ${theme.colors.white.n700};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    section.ofertas .card-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem;
    }

    section.ofertas .card-container .latest-card:first-child {
      grid-row: 1 / 3;
    }

    section.ofertas .card-container .slider-mobile {
      display: none;
    }

    @media screen and (max-width: 860px) {
      /********** OFERTAS **********/
      section.ofertas .card-container {
        display: flex;
        flex-wrap: wrap;
      }

      section.ofertas .card-container .latest-card {
        flex: 1 1 40rem;
        flex-basis: 100%;
      }

      section.ofertas .card-container .latest-card .image img {
        max-height: 35rem;
      }

      section.ofertas .card-container .slider-mobile {
        display: block;
        height: 100%;
        overflow: hidden;
        max-height: 263px;
      }

      section.ofertas .card-container .slider-desktop {
        display: none;
      }

      section.ofertas .card-container .latest-card:nth-child(n + 2) {
        display: flex;
        flex-direction: column;
      }
    }

    @media screen and (max-width: 450px) {
      section.ofertas .headline {
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }
    }

    /********** ICON-BRANDS **********/
    .icon-brand-section div {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 96px;
    }

    .icon-brand {
      display: block;
      content: '';
      min-width: 86px;
      min-height: 48px;
      opacity: 40%;
      transition: opacity 0.5s;
    }

    .icon-brand:hover {
      opacity: 100%;
      cursor: pointer;
    }

    .icon-opel {
      background: url(${OpelIcon}) 0 0 no-repeat;
    }

    .icon-audi {
      background: url(${AudiIcon}) 0 0 no-repeat;
    }

    .icon-mercedes-benz {
      background: url(${MercedesIcon}) 0 0 no-repeat;
    }

    .icon-toyota {
      background: url(${ToyotaIcon}) 0 0 no-repeat;
    }

    .icon-mazda {
      background: url(${MazdaIcon}) 0 0 no-repeat;
    }

    .icon-nissan {
      background: url(${NissanIcon}) 0 0 no-repeat;
    }

    .icon-hyundai {
      background: url(${HyundaiIcon}) 0 0 no-repeat;
    }

    .icon-lexus {
      background: url(${LexusIcon}) 0 0 no-repeat;
    }

    .icon-honda {
      background: url(${HondaIcon}) 0 0 no-repeat;
    }

    .icon-renault {
      background: url(${RenaultIcon}) 0 0 no-repeat;
    }

    .icon-infiniti {
      background: url(${InfinitIcon}) 0 0 no-repeat;
    }

    .icon-mitsubishi {
      background: url(${MitsubishiIcon}) 0 0 no-repeat;
    }

    @media screen and (max-width: 260px) {
      .icon-brand-section div {
        flex-direction: row;
        overflow-x: auto;
        flex-wrap: nowrap;
        justify-content: flex-start;
      }

      .icon-brand-section div::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      .icon-brand-section div:hover::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      .icon-brand-section div::-webkit-scrollbar-track {
        background: ${theme.colors.white.n150};
        border-radius: 20px;
      }

      .icon-brand-section div::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.white.n000};
        border-radius: 20px;
        border: 3px solid ${theme.colors.white.n000};
      }

      .icon-brand-section div .icon-brand {
        margin-bottom: 36px;
      }
    }

    /********** DETAILS **********/
    .details-section {
      margin-top: 96px;
      position: relative;
    }

    .details-header {
      padding: 0;
      margin-bottom: 72px;
      gap: 16px;
    }

    .details-header h1 {
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.h3};
      line-height: ${theme.lineHeights.h3};
      font-weight: ${theme.fontWeights.bold};
    }

    .details-section--link {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
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

    .details-section--link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    .details-section--link:hover .details-section--icon.arrow-right-icon {
      background-color: ${theme.colors.primary};
    }

    .details-section--link span {
      margin-right: 8px;
    }

    .details-section--link .details-section--icon {
      width: 100%;
      height: 20px;
      max-width: 20px;
      min-width: 20px;
    }

    .details-section--link .details-section--icon.arrow-right-icon {
      mask-image: url(${ArrowPointing});
      -webkit-mask-image: url(${ArrowPointing});
      background-color: ${theme.colors.white.n700};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .icon-details {
      display: block;
      content: '';
      padding: 12px;
      height: 24px;
      width: 24px;
    }

    .icon-left {
      margin-left: 16px;
    }

    .icon-right {
      margin-right: 16px;
    }

    .icon-file {
      background: url(${FileIcon}) 0 0 no-repeat;
    }

    .icon-search {
      background: url(${SearchIcon}) 0 0 no-repeat;
    }

    .icon-settings {
      background: url(${SettingsIcon}) 0 0 no-repeat;
    }

    .icon-info {
      background: url(${InfoIcon}) 0 0 no-repeat;
    }

    .icon-user {
      background: url(${UserIcon}) 0 0 no-repeat;
    }

    .icon-calculator {
      background: url(${CalculatorIcon}) 0 0 no-repeat;
    }

    .details-container {
      display: flex;
      justify-content: center;
      max-width: ${theme.widths.maxContent};
      width: 100%;
      padding-bottom: 48px;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 64px;
    }

    .details-left {
      margin-right: 9.42%; /* ((122px + 122px) / 1296) * 100 */
    }

    .details-right {
      margin-left: 9.42%; /* ((122px + 122px) / 1296) * 100 */
    }

    .details--card {
      display: flex;
      align-items: flex-start;
      width: 416px;
    }

    .details--centered-car {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .title-left {
      align-items: flex-end;
    }

    .title-right {
      align-items: flex-start;
    }

    .card--title {
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.lg};
      line-height: ${theme.lineHeights.lg};
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: 4px;
    }

    .card-left {
      text-align: right;
    }

    .card--content {
      color: ${theme.colors.white.n700};
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      font-weight: ${theme.fontWeights.regular};
    }

    .auto-car {
      position: relative;
      top: 0;
      width: 80px;
      height: 178px;
      z-index: 1;
    }

    .road-line {
      position: relative;
      top: -10px;
      width: 2px;
    }

    @media screen and (max-width: 1090px) {
      &.main section.details-section .details-container {
        margin-top: 72px;
      }

      &.main
        section.details-section
        .details-container
        .details
        .details--card {
        width: 350px;
      }

      &.main section.details-section .details-container .details--centered-car {
        position: absolute;
        top: -150px;
        left: 50%;
        transform: translateX(-50%) rotate(-90deg);
      }
    }

    @media screen and (max-width: 930px) {
      &.main
        section.details-section
        .details-container
        .details
        .details--card {
        width: 275px;
      }
    }

    @media screen and (max-width: 742px) {
      &.main section.details-section .details-container .details.details-left {
        margin-right: 5%;
      }
      &.main section.details-section .details-container .details.details-right {
        margin-left: 5%;
      }
    }

    @media screen and (max-width: 710px) {
      &.main section.details-section .details-header {
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }

      &.main section.details-section .details-container .details--centered-car {
        top: -120px;
      }
    }

    @media screen and (max-width: 680px) {
      &.main section.details-section .details-container .details.details-left {
        margin-right: 2%;
      }
      &.main section.details-section .details-container .details.details-right {
        margin-left: 2%;
      }
    }

    @media screen and (max-width: 640px) {
      &.main section.details-section .details-header {
        margin-bottom: 102px;
      }

      &.main section.details-section .details-container {
        flex-direction: column;
        gap: 30px;
        margin-top: 102px;
      }

      &.main section.details-section .details-container .details--centered-car {
        top: -80px;
      }

      &.main
        section.details-section
        .details-container
        .details--centered-car
        .auto-car {
        transform: translateY(100%);
      }

      &.main
        section.details-section
        .details-container
        .details--centered-car
        .road-line {
        transform: translateY(-20%);
      }

      &.main section.details-section .details-container .details.details-left {
        margin-right: 0;
      }
      &.main section.details-section .details-container .details.details-right {
        margin-left: 0;
      }

      &.main section.details-section .details-container,
      &.main section.details-section .details-container .details {
        gap: 64px;
      }

      &.main section.details-section .details-container .details {
        align-items: center;
        justify-content: center;
      }

      &.main
        section.details-section
        .details-container
        .details
        .details--card {
        width: 100%;
        max-width: 416px;
        padding: 0 10px;
      }
    }
    @media screen and (max-width: 540px) {
      &.main
        section.details-section
        .details-container
        .details--centered-car
        .road-line {
        visibility: hidden;
        display: none;
      }

      &.main
        section.details-section
        .details-container
        .details--centered-car
        .auto-car {
        transform: none;
        right: 173px;
        top: 4px;
      }
    }

    @media screen and (max-width: 420px) {
      &.main section.details-section .details-container .details--centered-car {
        top: -45px;
      }
    }

    /********** ULTIMOS **********/
    section.ultimos {
      margin-top: 72px;
    }

    section.ultimos .headline {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 3.2rem;
      gap: 16px;
    }

    section.ultimos .headline h1 {
      font-size: ${theme.fontSizes.h3};
      line-height: ${theme.lineHeights.h3};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.white.n000};
    }

    section.ultimos .headline .ultimos-section-actions .actions-buttons {
      margin-right: 17px;
    }

    section.ultimos
      .headline
      .ultimos-section-actions
      .actions-buttons
      *:not(:first-of-type) {
      margin-left: 12px;
    }

    section.ultimos .headline .ultimos-section-actions .ultimos-section--link {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
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

    section.ultimos
      .headline
      .ultimos-section-actions
      .ultimos-section--link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    section.ultimos
      .headline
      .ultimos-section-actions
      .ultimos-section--link:hover
      .ultimos-section--icon.arrow-right-icon {
      background-color: ${theme.colors.primary};
    }

    section.ultimos
      .headline
      .ultimos-section-actions
      .ultimos-section--link
      span {
      margin-right: 8px;
    }

    section.ultimos
      .headline
      .ultimos-section-actions
      .ultimos-section--link
      .ultimos-section--icon {
      width: 100%;
      height: 20px;
      max-width: 20px;
      min-width: 20px;
    }

    section.ultimos
      .headline
      .ultimos-section-actions
      .ultimos-section--link
      .ultimos-section--icon.arrow-right-icon {
      mask-image: url(${ArrowPointing});
      -webkit-mask-image: url(${ArrowPointing});
      background-color: ${theme.colors.white.n700};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    /********** ACCESSORIES **********/
    .accessories-section {
      max-width: ${theme.widths.maxContent};
      padding: 48px;
      background-color: ${theme.colors.white.n040};
      border-radius: ${theme.borderRadius.lg};
      margin: 7.2rem 0 2.4rem 0;
      justify-content: space-between;
      flex: 1 1 100%;
      align-items: center;
    }

    .accessories {
      max-width: 25.8rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      flex: 1 1 100%;
    }

    .article-title {
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.h2};
      line-height: ${theme.lineHeights.h2};
      font-weight: ${theme.fontWeights.bold};
    }

    .accessories-section .article-content {
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.white.n700};
      line-height: ${theme.lineHeights.lg};
      font-weight: ${theme.fontWeights.regular};
      margin: 1.6rem 0 4rem 0;
    }

    .article-content {
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.white.n700};
      line-height: ${theme.lineHeights.lg};
      font-weight: ${theme.fontWeights.regular};
      margin-top: 2.4rem;
      margin-bottom: 4.8rem;
    }

    .button-article {
      background-color: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.base};
      padding: 1rem 2.4rem;
      max-width: 15.8rem;
      width: 100%;
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.base};
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.base};
      cursor: pointer;
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }

    .button-article > span {
      flex: 1 1 100%;
      margin-right: 4px;
    }

    .button-article:hover {
      background-color: ${theme.colors.white.n000};
      color: ${theme.colors.primary};
    }

    .button-article:hover > .button-icon--chevron {
      background-color: ${theme.colors.primary};
    }

    .button-icon--chevron {
      width: 100%;
      height: 18px;
      max-width: 18px;
      min-width: 18px;
      transform: rotate(270deg);
      mask-image: url(${ChevronIcon});
      -webkit-mask-image: url(${ChevronIcon});
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

    .icon-button {
      background: url(${SearchwIcon}) 0 0 no-repeat;
      display: inline-block;
      background-size: cover;
      width: 1.8rem;
      height: 1.8rem;
    }

    .icon-divider {
      background: url(${DividerIcon}) 0 0 no-repeat;
      display: inline-block;
      background-size: cover;
      width: 2.8rem;
      height: 0rem;
      opacity: 40%;
      border: 1px solid ${theme.colors.white.n000};
      transform: rotate(90deg);
    }

    .item--image {
      height: auto;
      width: 100%;
      padding: 0 1.4rem 1.2rem 1.4rem;
    }

    .arrows-accessories {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.6rem;
    }

    .arrows-accessories .icon-accessories {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.6rem;
      height: 3.6rem;
      background-color: ${theme.colors.white.n040};
      border-radius: 50%;
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }

    .arrows-accessories .icon-accessories:hover {
      background-color: ${theme.colors.white.n000};
    }

    .arrows-accessories .icon-accessories:hover > .icon-accessories--chevron {
      background-color: ${theme.colors.primary};
    }

    .arrows-accessories .icon-accessories .icon-accessories--chevron {
      width: 2rem;
      height: 2rem;
      mask-image: url(${ChevronIcon});
      -webkit-mask-image: url(${ChevronIcon});
      background-color: ${theme.colors.white.n700};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .arrows-accessories
      .icon-accessories:first-of-type
      .icon-accessories--chevron {
      transform: rotate(90deg);
    }

    .arrows-accessories
      .icon-accessories:last-of-type
      .icon-accessories--chevron {
      transform: rotate(270deg);
    }

    .car-parts {
      max-width: 85.6rem;
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
      font-weight: ${theme.fontWeights.bold};
      justify-content: space-between;
      flex: 1 1 100%;
      align-items: center;
    }

    .car-parts--itens {
      flex-direction: column;
      align-items: center;
    }

    .app-section {
      margin: 3.3rem auto 7.2rem auto;
      max-width: 107.6rem;
      align-items: center;
      justify-content: space-between;
      flex: 1 1 100%;
    }

    .app-section .app-download {
      max-width: 52.6rem;
      width: 100%;
    }

    .store-button {
      width: 20.1rem;
      height: 6.4rem;
      background: linear-gradient(${theme.colors.gradient.button});
      box-shadow: ${theme.shadows.large};
      border: 0.1rem solid ${theme.colors.gray.n800};
      border-radius: ${theme.borderRadius.base};
      cursor: pointer;
    }

    .button--subtitle {
      font-size: ${theme.fontSizes.sm};
    }

    .button--title {
      margin-top: -0.6rem;
      font-size: ${theme.fontSizes.h4};
    }

    .icon-store {
      display: block;
      content: '';
      padding: 1.7rem;
    }

    .icon-apple {
      background: url(${AppleIcon}) 0 0 no-repeat;
      width: 2.7rem;
      height: 3.5rem;
    }

    .icon-google {
      background: url(${GoogleIcon}) 0 0 no-repeat;
      width: 3rem;
      height: 3.4rem;
    }

    .app-stores {
      gap: 2.4rem;
    }

    .wrapper-phone {
      max-width: 46rem;
      height: 44rem;
      position: relative;
      z-index: 0;
      flex: 1 1 100%;
    }

    .circle-bg {
      background: linear-gradient(${theme.colors.gradient.circle});
      border-radius: 50%;
      display: block;
      position: absolute;
      height: 40.5rem;
      max-width: 42rem;
      width: 100%;
      z-index: 0;
    }

    .phone-shape {
      position: absolute;
      max-width: 24.8rem;
      width: 100%;
      height: 100%;
    }

    .phone-shape--background {
      background: linear-gradient(180deg, #dfdbe3 48.81%, #807e87 100%);
      border-radius: 3rem;
      z-index: 1;
    }

    .phone-shape--border {
      content: '';
      background: url(${PhoneBorder}) 0 0 no-repeat;
      z-index: 2;
    }

    .phone--car {
      content: '';
      background-image: url(${CarPhone});
      background-repeat: no-repeat;
      display: inline-block;
      position: absolute;
      max-width: 39.8rem;
      width: 100%;
      max-height: 21.2rem;
      height: 100%;
      top: 22.8rem;
      right: 8rem;
      z-index: 3;
    }

    .phone--text {
      font-size: ${theme.fontSizes.h4};
      color: ${theme.colors.gray.n900};
      font-weight: ${theme.fontWeights.bold};
      line-height: 130%;
      position: absolute;
      text-align: center;
      max-width: 19.2rem;
      width: 100%;
      top: 3.2rem;
      z-index: 3;
    }

    .button-phone {
      justify-content: space-between;
      color: ${theme.colors.text.white};
      background-color: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.sm};
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.sm};
      margin-top: 1.1rem;
      max-width: 19.2rem;
      border: none;
      padding: 8px 16px;
      z-index: 3;
      width: 100%;
      flex: 1 1 100%;
      -webkit-transition: background-color 0.2s ease-in, color 0.2s ease-in;
      -moz-transition: background-color 0.2s ease-in, color 0.2s ease-in;
      -o-transition: background-color 0.2s ease-in, color 0.2s ease-in;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
    }

    .button-phone:hover {
      background-color: ${theme.colors.white.n000};
      color: ${theme.colors.primary};
    }

    .button-phone:hover > .phone-end::before {
      background-color: ${theme.colors.primary};
    }

    .button-phone:hover > .phone-end .icon-button--search {
      background-color: ${theme.colors.primary};
    }

    .button-phone .phone-end::before {
      background-color: ${theme.colors.white.n400};
      content: '';
      height: 28px;
      width: 1px;
      margin: 0 16px;
      -webkit-transition: background-color 0.2s ease-in;
      -moz-transition: background-color 0.2s ease-in;
      -o-transition: background-color 0.2s ease-in;
      transition: background-color 0.2s ease-in;
    }

    .button-phone .phone-end .icon-button--search {
      display: inline-block;
      width: 18px;
      height: 18px;
      max-width: 18px;
      max-height: 18px;
      mask-image: url(${SearchIcon});
      -webkit-mask-image: url(${SearchIcon});
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

    .d-flex {
      display: flex;
    }

    .gap-17 {
      gap: 1.7rem;
    }

    .gap-12 {
      gap: 1.27rem;
    }

    .rotate {
      transform: rotate(180deg);
    }

    @media screen and (max-width: 1025px) {
      section.app-section {
        flex-wrap: wrap;
        gap: 56px;
        justify-content: center;
      }

      section.app-section .app-download {
        text-align: center;
        max-width: 60rem;
      }

      section.app-section .app-download .app-stores {
        justify-content: center;
        flex-wrap: wrap;
      }

      section.accessories-section {
        flex-direction: column;
        gap: 36px;
      }

      section.accessories-section .accessories {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
      }

      section.accessories-section .article-content {
        margin: 0;
      }
    }

    @media screen and (max-width: 680px) {
      section.accessories-section .car-parts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
    }

    @media screen and (max-width: 600px) {
      section.app-section article.wrapper-phone .phone--car {
        right: initial;
      }
    }

    @media screen and (max-width: 490px) {
      section.accessories-section {
        gap: 48px;
      }

      section.accessories-section .car-parts {
        grid-template-columns: 1fr;
        gap: 16px;
        max-width: 17rem;
      }

      section.accessories-section .accessories {
        white-space: nowrap;
      }

      section.app-section .wrapper-phone {
        display: none;
      }
    }

    /********** LATEST-NEWS **********/
    .latest-news {
      margin-bottom: 80px;
    }

    .latest-news .latest-news-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
    }

    .latest-news .latest-news-header .latest-news-tittle {
      color: ${theme.colors.white.n000};
      font-size: ${theme.fontSizes.h3};
      line-height: ${theme.lineHeights.h3};
      font-weight: ${theme.fontWeights.bold};
    }

    .latest-news .latest-news-header .latest-news-link {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
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

    .latest-news .latest-news-header .latest-news-link:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    .latest-news
      .latest-news-header
      .latest-news-link:hover
      > .arrow-right--icon {
      background-color: ${theme.colors.primary};
    }

    .latest-news .latest-news-header .latest-news-link span {
      margin-right: 8px;
    }

    .latest-news .latest-news-header .latest-news-link .arrow-right--icon {
      width: 100%;
      height: 20px;
      max-width: 20px;
      min-width: 20px;
      mask-image: url(${ArrowPointing});
      -webkit-mask-image: url(${ArrowPointing});
      background-color: ${theme.colors.white.n700};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .latest-news .latest-news-gallery {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .latest-news .latest-news-gallery .latest-news-offer {
      max-width: 416px;
      flex: 1 1 100%;
    }

    .latest-news .latest-news-gallery .latest-news-offer .offer-image-container,
    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-image-container
      .offer-image {
      width: 100%;
      object-fit: cover;
      border-radius: ${theme.borderRadius.lg};
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-tittle-container {
      display: flex;
      margin: 16px 0;
      flex-direction: column;
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-tittle-container
      .offer-tittle {
      font-size: ${theme.fontSizes.xs};
      line-height: ${theme.lineHeights.xs};
      font-weight: ${theme.fontWeights.regular};
      color: ${theme.colors.primary};
      margin-bottom: 4px;
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-tittle-container
      .offer-subtittle {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.white.n700};
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-author-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-author-container
      .author-photo {
      width: 44px;
      height: auto;
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-author-container
      .author-info {
      margin-left: 8px;
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-author-container
      .author-info
      .author-name {
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      font-weight: ${theme.fontWeights.bold};
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-author-container
      .author-info
      .date {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 4px;
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-author-container
      .author-info
      .date
      .calendar--icon {
      width: 100%;
      height: 20px;
      max-width: 20px;
      min-width: 20px;
      mask-image: url(${CalendarIcon});
      -webkit-mask-image: url(${CalendarIcon});
      background-color: ${theme.colors.white.n700};
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-size: cover;
    }

    .latest-news
      .latest-news-gallery
      .latest-news-offer
      .offer-author-container
      .author-info
      .date
      .date-text {
      font-size: ${theme.fontSizes.xs};
      font-weight: ${theme.fontWeights.regular};
      line-height: ${theme.lineHeights.xs};
      margin-left: 4px;
    }

    @media screen and (max-width: 1025px) {
      .latest-news .latest-news-gallery {
        flex-direction: column;
        gap: 48px;
      }

      .latest-news .latest-news-gallery .latest-news-offer {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }

      .latest-news
        .latest-news-gallery
        .latest-news-offer
        .offer-tittle-container {
        margin: 0;
      }
    }

    @media screen and (max-width: 450px) {
      .latest-news .latest-news-header {
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 16px;
      }
    }

    @media screen and (max-width: 350px) {
      .latest-news .latest-news-gallery .latest-news-offer {
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
    }
  `
)
