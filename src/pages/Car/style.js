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

import HeartIcon from '../../assets/icons/heart.svg'
import ShareIcon from '../../assets/icons/share.svg'
import ChevronIcon from '../../assets/icons/chevron.svg'
import ImageIcon from '../../assets/icons/image.svg'

import DashboardIcon from '../../assets/icons/dashboard.svg'
import PinMarketIcon from '../../assets/icons/pin-market.svg'
import FilledStarIcon from '../../assets/icons/filled-star.svg'
import PhoneTwoIcon from '../../assets/icons/phone2.svg'
import MailIcon from '../../assets/icons/mail.svg'
import PlayVideoIcon from '../../assets/icons/play-video.svg'
import CheckboxFilledIcon from '../../assets/icons/checkbox-filled.svg'

import CheckIcon from '../../assets/icons/check.svg'
import SteeringWheelIcon from '../../assets/icons/steering-wheel.svg'
import DrivingTestIcon from '../../assets/icons/driving-test.svg'
import AccidentIcon from '../../assets/icons/accident.svg'

import DividerHorizontalIcon from '../../assets/icons/divider-horizontal.svg'
import DividerIcon from '../../assets/icons/divider.svg'

import ArrowPointingIcon from '../../assets/icons/arrow-pointing.svg'

export const CardHeader = styled.header(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin: 32px 0 24px 0;

    .card-header-wrapper {
      max-width: ${theme.widths.maxContent};
      width: 100%;

      & > div {
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
      }
    }

    h1 {
      color: ${theme.colors.text.white};
      font-size: ${theme.fontSizes.h3};
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.h3};
      text-align: left;
    }
  `
)

export const Breadcrumbs = styled.nav(
  ({ theme }) => css`
    margin-bottom: 24px;

    p {
      cursor: pointer;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      padding: 0px;
      gap: 8px;
      flex-wrap: wrap;

      .breadcrumb-item {
        display: flex;
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.regular};
        line-height: ${theme.lineHeights.sm};
        align-items: center;
        justify-content: flex-start;

        &:hover a {
          color: ${theme.colors.primary};
          text-decoration: underline;
        }

        a {
          color: ${theme.colors.white.n500};
          margin-left: 8px;
          text-decoration-color: transparent;
          text-decoration-style: solid;
          text-decoration-line: underline;
          -webkit-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
          -moz-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
          -o-transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
          transition: color 0.2s ease-in, text-decoration 0.2s ease-in;
        }

        &.active a {
          color: ${theme.colors.text.white};

          &:hover {
            color: ${theme.colors.primary};
          }
        }
      }

      & > *:not(:first-of-type)::before {
        content: '';
        display: inline-block;
        mask-image: url(${ChevronIcon});
        -webkit-mask-image: url(${ChevronIcon});
        background-color: ${theme.colors.text.white};
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: cover;
        mask-size: cover;
        display: inline-block;
        background-size: cover;
        width: 1.2rem;
        height: 1.2rem;
        max-width: 1.2rem;
        max-height: 1.2rem;
        transform: rotate(-90deg);
        background-color: ${theme.colors.white.n500};
      }
    }
  `
)

export const CardHeaderIcons = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > *:not(:first-child) {
      margin-left: 8px;
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${theme.colors.white.n040};
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: initial;

      &:hover {
        background-color: ${theme.colors.white.n000};
        -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
        -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
        -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
        transition: color 0.2s ease-in, background-color 0.2s ease-in;
      }
    }

    button:hover i,
    .share--icon:hover,
    .heart--icon:hover {
      background-color: ${theme.colors.primary};
      -webkit-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
    }

    .share--icon {
      mask-image: url(${ShareIcon});
      -webkit-mask-image: url(${ShareIcon});
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

    .heart--icon {
      mask-image: url(${HeartIcon});
      -webkit-mask-image: url(${HeartIcon});
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
  `
)

export const ContentWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;

    .content {
      max-width: ${theme.widths.maxContent};
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .column {
        max-width: 746px;
        width: 100%;
      }

      .previews {
        display: flex;
        max-width: 746px;
        width: 100%;
        border-radius: 0px;
        margin: 16px 0 40px 0;
        gap: 16px;
        flex-direction: row;
        overflow-x: auto;
        flex-wrap: nowrap;
        justify-content: flex-start;

        &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        &:hover::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        &::-webkit-scrollbar-track {
          background: ${theme.colors.white.n150};
          border-radius: 20px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${theme.colors.white.n000};
          border-radius: 20px;
          border: 3px solid ${theme.colors.white.n000};
        }

        img {
          cursor: pointer;

          &:hover {
            opacity: 0.8;
            transition: 0.3s;
          }
        }

        .video-preview,
        img {
          flex: 1 1 100%;
          max-width: 136px;
          border-radius: 8px;
          width: 100%;
          max-height: 100px;
          margin-bottom: 16px;
        }

        .video-preview {
          display: flex;
          background-color: ${theme.colors.white.n040};
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100px;
          cursor: pointer;
          flex-shrink: 0;

          &:hover {
            opacity: 0.8;
            transition: 0.3s;
          }

          .play-video--icon {
            display: block;
            width: 24px;
            height: 24px;
            mask-image: url(${PlayVideoIcon});
            -webkit-mask-image: url(${PlayVideoIcon});
            background-color: ${theme.colors.white.n000};
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-size: cover;
            mask-size: cover;
            margin-bottom: 8px;
          }

          span {
            color: ${theme.colors.white.n700};
          }
        }

        .active-preview {
          border: 1px solid ${theme.colors.primary};
          opacity: 1;
        }

        img {
          opacity: 0.5;
        }
      }

      .wrapper {
        position: relative;
        overflow: hidden;
        transition: all linear 0.3s;

        &,
        & .slider-gallery,
        & .slider-gallery img {
          border-radius: ${theme.borderRadius.lg};
          max-width: 746px;
          max-height: 420px;
          width: 100%;
          height: auto;
          border-radius: none;
        }

        .slider-gallery {
          max-width: 746px;
          max-height: 420px;
          height: 100%;
          width: 100%;
          overflow: hidden;
          border-radius: ${theme.borderRadius.lg};
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;

          img {
            display: none;
            max-height: 420px;
            position: absolute;
            top: 0;
            top: 50%;
            left: 0;
            right: 0;
            left: 0;
            margin: auto;
            transform: translateY(-50%);

            &.show {
              display: block;
              object-fit: cover;
              position: absolute;
              left: 0;
              right: 0;
              left: 0;
              display: block;
              object-fit: cover;
              border-radius: 0;
            }
          }
        }

        .icons {
          .wishlist {
            position: absolute;
            top: 2rem;
            width: 3.2rem;
            height: 3.2rem;
            box-shadow: ${theme.shadows.default};
            color: ${theme.colors.primary};
            border-radius: 50%;
            cursor: pointer;
          }

          div {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &.arrow-left-container,
            &.arrow-right-container {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: ${theme.colors.white.n000};
              top: 50%;
              transform: translateY(-50%);
            }

            &.arrow-left-container {
              position: absolute;
              left: 2%;

              &:hover {
                opacity: 0.8;
                transition: 0.3s;
              }
            }

            &.arrow-right-container {
              position: absolute;
              right: 2%;

              &:hover {
                opacity: 0.8;
                transition: 0.3s;
              }
            }

            &.pagination {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 64px;
              height: 32px;
              position: absolute;
              right: 0;
              bottom: 0;
              margin: 0 24px 24px 0;

              .pagination-counter {
                font-weight: ${theme.fontWeights.bold};
                font-size: ${theme.fontSizes.h5};
                line-height: ${theme.lineHeights.h5};
                color: ${theme.colors.white.n000};
              }
            }
          }

          .chevron--icon {
            mask-image: url(${ChevronIcon});
            -webkit-mask-image: url(${ChevronIcon});
            width: 100%;
            height: 20px;
            max-width: 20px;
            min-width: 20px;
            background-color: ${theme.colors.gray.n700};
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-size: cover;
            mask-size: cover;

            &.rotate-icon-left {
              transform: rotate(90deg);
            }

            &.rotate-icon-right {
              transform: rotate(-90deg);
            }
          }

          .image--icon {
            mask-image: url(${ImageIcon});
            -webkit-mask-image: url(${ImageIcon});
            width: 100%;
            height: 24px;
            max-width: 24px;
            min-width: 24px;
            background-color: ${theme.colors.white.n000};
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-size: cover;
            mask-size: cover;
            margin-right: 8px;
          }
        }
      }
    }

    @media screen and (max-width: 504px) {
      & .content .previews {
        margin-bottom: 62px;
      }
    }

    @media screen and (max-width: 352px) {
      & .content .previews {
        margin-bottom: 96px;
      }
    }
  `
)

export const Specifications = styled.div(
  ({ theme }) => css`
    max-width: 746px;
    width: 100%;
    color: ${theme.colors.white.n000};

    h1 {
      font-size: ${theme.fontSizes.h4};
      line-height: ${theme.lineHeights.h4};
      font-weight: ${theme.fontWeights.bold};
      text-align: left;
      margin-bottom: 24px;
    }

    ul li {
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.base};
      font-weight: ${theme.fontWeights.regular};
      text-align: left;
      color: ${theme.colors.white.n700};

      &:not(:last-of-type) {
        margin-bottom: 8px;
      }

      strong {
        font-size: ${theme.fontSizes.base};
        line-height: ${theme.lineHeights.base};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.white.n000};
        margin-right: 4px;
      }
    }

    @media screen and (max-width: 1134px) {
      &.specifications h1,
      &.specifications ul li {
        text-align: center;
      }
    }
  `
)

export const Sidebar = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-width: 0;
    max-width: 526px;
    width: 100%;
    color: ${theme.colors.white.n000};
    margin-top: 51px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 24px;
    flex: 1 1 300px;

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        opacity: 0.8;
        transition: 0.3s;
      }
    }

    input {
      border: none;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }

    h1 {
      font-size: 28px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 16px;
    }

    .meta .mileage {
      display: flex;
      justify-content: start;
      align-items: center;

      .divider {
        width: 16px;
        height: 20px;
        margin-right: 16px;
        opacity: 0.15;
        border-right: 1px solid ${theme.colors.white.n000};
      }

      .distance {
        display: flex;
        align-items: center;

        .dashboard--icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          mask-image: url(${DashboardIcon});
          -webkit-mask-image: url(${DashboardIcon});
          background-color: ${theme.colors.white.n000};
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: cover;
          mask-size: cover;
          margin-right: 4px;
        }
      }

      .location {
        display: flex;
        align-items: center;

        span {
          text-decoration: underline;
        }

        .pin--icon {
          display: inline-block;
          width: 18px;
          height: 18px;
          mask-image: url(${PinMarketIcon});
          -webkit-mask-image: url(${PinMarketIcon});
          background-color: ${theme.colors.white.n000};
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: cover;
          mask-size: cover;
          margin-right: 4px;
        }
      }
    }

    .author {
      background-color: ${theme.colors.white.n040};
      padding: 20px;
      border-radius: 8px;
      margin: 32px 0;

      .info .info-actions {
        margin-top: 32px;
      }

      .basic {
        display: flex;
        justify-content: start;
        align-items: center;

        display: flex;
        justify-content: start;
        margin: 8px 0 16px 0;

        img {
          width: 48px;
          height: 48px;
          margin-right: 8px;
        }

        & > div {
          max-width: 85%;

          & > h1 {
            font-size: ${theme.fontSizes.h5};
            line-height: ${theme.lineHeights.h5};
            font-weight: ${theme.fontWeights.bold};
            color: ${theme.colors.white.n000};
            margin-bottom: 4px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .reviews {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .filled-star--icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            min-width: 16px;
            min-height: 16px;
            mask-image: url(${FilledStarIcon});
            -webkit-mask-image: url(${FilledStarIcon});
            background-color: yellow;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-size: cover;
            mask-size: cover;

            &:not(:last-of-type) {
              margin-right: 2px;
            }
          }

          span {
            margin-left: 4px;
            font-size: ${theme.fontSizes.sm};
            line-height: ${theme.lineHeights.sm};
            font-weight: ${theme.fontWeights.regular};
            color: ${theme.colors.white.n700};
            min-width: 70px;
          }
        }

        p {
          display: inline-block;
        }
      }

      .info .others a {
        font-size: ${theme.fontSizes.base};
        line-height: ${theme.lineHeights.base};
        font-weight: ${theme.fontWeights.regular};
        color: ${theme.colors.white.n000};
        text-decoration: underline;
        -webkit-transition: color 0.2s ease-in;
        -moz-transition: color 0.2s ease-in;
        -o-transition: color 0.2s ease-in;
        transition: color 0.2s ease-in;

        &:hover {
          color: ${theme.colors.primary};
        }
      }

      .info button {
        height: 52px;
        width: 187px;
        left: 0px;
        top: 0px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;

        .phone2--icon {
          width: 20px;
          height: 20px;
          mask-image: url(${PhoneTwoIcon});
          -webkit-mask-image: url(${PhoneTwoIcon});
          background-color: ${theme.colors.white.n000};
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: cover;
          mask-size: cover;
          margin-right: 4px;
          -webkit-transition: background-color 0.2s ease-in;
          -moz-transition: background-color 0.2s ease-in;
          -o-transition: background-color 0.2s ease-in;
          transition: background-color 0.2s ease-in;
        }

        &.outlined {
          border: 1px solid ${theme.colors.white.n000};
          background: ${theme.colors.blue.n900};
          color: ${theme.colors.white.n000};

          -webkit-transition: color 0.2s ease-in, background 0.2s ease-in;
          -moz-transition: color 0.2s ease-in, background 0.2s ease-in;
          -o-transition: color 0.2s ease-in, background 0.2s ease-in;
          transition: color 0.2s ease-in, background 0.2s ease-in;

          &:hover {
            border: 1px solid ${theme.colors.bg.primary};
            background: ${theme.colors.white.n000};
            color: ${theme.colors.bg.primary};

            .phone2--icon {
              background-color: ${theme.colors.bg.primary};
            }
          }
        }

        .mail--icon {
          width: 100%;
          height: 20px;
          max-width: 20px;
          mask-image: url(${MailIcon});
          -webkit-mask-image: url(${MailIcon});
          background-color: ${theme.colors.white.n000};
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: cover;
          mask-size: cover;
          margin-right: 4px;
          -webkit-transition: background-color 0.2s ease-in;
          -moz-transition: background-color 0.2s ease-in;
          -o-transition: background-color 0.2s ease-in;
          transition: background-color 0.2s ease-in;
        }

        &.primary {
          background: ${theme.colors.primary};
          color: ${theme.colors.white.n000};
          margin-top: 16px;
          -webkit-transition: color 0.2s ease-in, background 0.2s ease-in;
          -moz-transition: color 0.2s ease-in, background 0.2s ease-in;
          -o-transition: color 0.2s ease-in, background 0.2s ease-in;
          transition: color 0.2s ease-in, background 0.2s ease-in;

          &:hover {
            background: ${theme.colors.white.n000};
            color: ${theme.colors.primary};

            .mail--icon {
              background-color: ${theme.colors.primary};
            }
          }
        }
      }
    }

    .subscribe {
      border: 1px solid ${theme.colors.white.n150};
      padding: 19px 20px;
      border-radius: 8px;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;

      .input-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid ${theme.colors.white.n120};
        margin: 0 auto;
        padding: 7px 8px;
        background: ${theme.colors.bg.primary};
        border-radius: 8px;
        margin: 24px 0;

        input {
          width: 100%;
          height: 40px;
          margin-right: 8px;
          padding: 0 8px;
          color: ${theme.colors.white.n000};
          font-size: ${theme.fontSizes.base};
          line-height: ${theme.lineHeights.base};
          font-weight: ${theme.fontWeights.regular};
        }

        button {
          background: ${theme.colors.primary};
          padding: 10px 24px;
          gap: 10px;
          width: 126px;
          height: 44px;
          border-radius: 8px;
          color: ${theme.colors.white.n000};
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0px;
          text-align: center;
          -webkit-transition: color 0.2s ease-in, background 0.2s ease-in;
          -moz-transition: color 0.2s ease-in, background 0.2s ease-in;
          -o-transition: color 0.2s ease-in, background 0.2s ease-in;
          transition: color 0.2s ease-in, background 0.2s ease-in;

          &:hover {
            background: ${theme.colors.white.n000};
            color: ${theme.colors.primary};
          }
        }

        .mail--icon {
          width: 18px;
          height: 18px;
          min-width: 18px;
          min-height: 18px;
          mask-image: url(${MailIcon});
          -webkit-mask-image: url(${MailIcon});
          background-color: ${theme.colors.white.n500};
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: cover;
          mask-size: cover;
          margin: 0 8px 0 10px;
        }
      }

      label {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
      }

      .checkbox-filled--icon {
        display: inline-block;
        width: 100%;
        height: 20px;
        max-width: 20px;
        mask-image: url(${CheckboxFilledIcon});
        -webkit-mask-image: url(${CheckboxFilledIcon});
        background-color: ${theme.colors.primary};
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: cover;
        mask-size: cover;
      }

      .styled-checkbox {
        align-items: start;

        i {
          margin: 2px 4px 0 0;
        }

        span {
          color: ${theme.colors.white.n700};
          text-overflow: initial;
          white-space: initial;
        }
      }
    }

    @media screen and (max-width: 1134px) {
      /* Sidebar.div */
      & {
        max-width: 746px;
        width: 100%;
        margin-top: 51px;
        text-align: left;
        margin-left: 0;
        flex: 1 1 auto;

        .car-price {
          text-align: center;
        }

        .meta {
          margin: 0 auto;
        }

        .author .info {
          display: flex;
          flex: 1 1 auto;
          justify-content: space-between;

          .info-wrapper {
            max-width: 67%;
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
          }

          .info-actions {
            display: flex;
            flex-direction: column;
            margin-top: 0;
            justify-content: space-between;
            flex: 1 1 auto;
            align-items: flex-end;
          }

          .info-actions button.primary {
            margin-top: 0;
          }
        }

        .subscribe .styled-checkbox {
          justify-content: flex-start;
        }
      }
    }

    @media screen and (max-width: 680px) {
      .author .info {
        flex-direction: column;
        align-items: flex-start;

        .info-wrapper {
          width: 100%;
          max-width: 100%;
        }

        .basic > div {
          max-width: 90%;
        }

        .info-actions {
          margin-top: 32px;

          button:not(:first-of-type) {
            margin-top: 16px;
          }
        }
      }
    }
  `
)

export const Latest = styled.section(
  ({ theme }) => css`
    margin-top: 63px;
    margin-bottom: 137px;

    .latest-card {
      /* esse estilo é na sessão de ultimo */
      min-width: 32%;
      height: 90%;
      margin: 0 24px 0 0;
      position: relative;
      left: 0;
      transition: left 0.5s;
    }

    .headline {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 3.2rem;
      gap: 16px;

      h1 {
        font-size: ${theme.fontSizes.h3};
        line-height: ${theme.lineHeights.h3};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.text.white};
      }

      .floating-link {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .link {
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

          &:hover {
            color: ${theme.colors.primary};
            text-decoration: underline;

            .floating-link--icon.floating-link--icon.arrow-right-icon {
              background-color: ${theme.colors.primary};
            }
          }

          .floating-link--icon {
            width: 100%;
            height: 20px;
            max-width: 20px;
            min-width: 20px;
            margin-left: 8px;

            &.arrow-right-icon {
              mask-image: url(${ArrowPointingIcon});
              -webkit-mask-image: url(${ArrowPointingIcon});
              background-color: ${theme.colors.white.n700};
              -webkit-mask-repeat: no-repeat;
              mask-repeat: no-repeat;
              -webkit-mask-size: cover;
              mask-size: cover;
              -webkit-transition: color 0.2s ease-in,
                background-color 0.2s ease-in;
              -moz-transition: color 0.2s ease-in, background-color 0.2s ease-in;
              -o-transition: color 0.2s ease-in, background-color 0.2s ease-in;
              transition: color 0.2s ease-in, background-color 0.2s ease-in;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1110px) {
      .latest-card {
        min-width: 49%;
        margin: 0 15px 0 0;
      }
    }

    /* index page */
    @media screen and (max-width: 710px) {
      .latest-card {
        min-width: 99%;
        margin: 0 10px 0 0;
      }

      &.ultimos .headline.index {
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }

      &.ultimos .headline.index .ultimos-section-actions {
        flex-direction: column;
        gap: 16px;
      }
    }

    /* car page */
    @media screen and (max-width: 574px) {
      &.ultimos .headline.headline-car-page {
        justify-content: center;
      }

      &.ultimos .headline.headline-car-page h1 {
        margin-right: 0;
      }
    }

    @media screen and (max-width: 460px) {
      &.ultimos .headline.headline-car-page h1 {
        margin-right: 0;
        text-align: center;
      }
    }
  `
)

export const SellerDescription = styled.section(
  ({ theme }) => css`
    margin-top: 9.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .car-ad-icons {
      display: flex;
      background: ${theme.colors.white.n040};
      border-radius: ${theme.borderRadius.lg};
      gap: 2.4rem;
      max-width: 74.6rem;
      width: 100%;
      padding: 24px 42px;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .car-ad-description--icon {
      max-width: 14.8rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1.2rem;
      flex: 1 1 147px;
    }

    .car-ad-description--icon p {
      font-size: ${theme.fontSizes.sm};
      text-align: center;
      color: ${theme.colors.text.white};
    }

    .icon-adv {
      display: block;
      content: '';
      width: 48px;
      height: 48px;
    }

    .icon-ad-check {
      background: url(${CheckIcon}) 0 0 no-repeat;
    }

    .icon-ad-wheel {
      background: url(${SteeringWheelIcon}) 0 0 no-repeat;
    }

    .icon-ad-driving {
      background: url(${DrivingTestIcon}) 0 0 no-repeat;
    }

    .icon-ad-accident {
      background: url(${AccidentIcon}) 0 0 no-repeat;
    }

    .icon-background {
      background-color: ${theme.colors.gray.n950};
      border-radius: ${theme.borderRadius.lg};
      height: 8rem;
      width: 8rem;
    }

    .seller-description {
      margin-top: 4.9rem;
      max-width: 74.6rem;
      width: 100%;
    }

    .seller-description h1 {
      line-height: ${theme.lineHeights.h4};
      font-size: ${theme.fontSizes.h4};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.white.n000};
    }

    .seller-description p {
      margin-top: 2.4rem;
      color: ${theme.colors.white.n700};
    }

    .seller-description .details-section--link {
      display: inline-block;
      margin-top: 0.4rem;
      text-decoration: underline;
      color: ${theme.colors.primary};
    }

    .icon-divider-horizontal {
      background: url(${DividerHorizontalIcon}) 0 0 no-repeat;
      display: inline-block;
      background-size: cover;
      width: 746px;
      height: 0px;
      opacity: 0.15;
      border: 1px solid ${theme.colors.white.n000};
      margin: 3.1rem 0 2.4rem 0;
      max-width: 746px;
      width: 100%;
    }

    .car-ad-footer {
      display: flex;
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.sm};
      align-items: center;
      color: ${theme.colors.white.n700};
      gap: 16px;
    }

    .car-ad-footer .icon-divider {
      background: url(${DividerIcon}) 0 0 no-repeat;
      display: inline-block;
      background-size: cover;
      height: 0rem;
      border: 1px solid #ffffff;
      transform: rotate(90deg);
      opacity: 0.15;
      min-width: 2rem;
    }

    .car-ad-footer--item {
      display: flex;
    }

    .car-ad-footer--item p span {
      font-weight: ${theme.fontWeights.bold};
    }

    @media screen and (max-width: 1134px) {
      & {
        align-items: center;
      }
    }

    @media screen and (max-width: 475px) {
      .car-ad-footer {
        flex-direction: column;
        width: 100%;
      }

      .car-ad-footer .icon-divider {
        width: 100%;
        transform: rotate(180deg);
      }
    }
  `
)
