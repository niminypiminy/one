import React from 'react'

import PropTypes from 'prop-types'

const Footer11 = (props) => {
  return (
    <>
      <footer className={`footer11-footer ${props.rootClassName} `}>
        <span className="footer11-text">{props.text}</span>
      </footer>
      <style jsx>
        {`
          .footer11-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .footer11-text {
            color: var(--dl-color-gray-black);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }

          .footer11-root-class-name2 {
            margin-top: 48px;
          }
          .footer11-root-class-name3 {
            margin-top: 48px;
          }
          .footer11-root-class-name4 {
            margin-top: 64px;
          }
          .footer11-root-class-name5 {
            margin-top: 64px;
          }
          .footer11-root-class-name6 {
            margin-top: 64px;
          }
          .footer11-root-class-name7 {
            margin-top: 64px;
          }
          .footer11-root-class-name8 {
            margin-top: 96px;
          }
          .footer11-root-class-name9 {
            margin-top: 32px;
          }
          .footer11-root-class-name10 {
            margin-top: 32px;
          }
          .footer11-root-class-name11 {
            margin-top: 32px;
          }
          .footer11-root-class-name12 {
            margin-top: 32px;
          }
          .footer11-root-class-name13 {
            margin-top: 32px;
          }
          .footer11-root-class-name14 {
            margin-top: 48px;
          }
          .footer11-root-class-name15 {
            margin-top: 80px;
          }
          .footer11-root-class-name16 {
            margin-top: 32px;
          }
          .footer11-root-class-name17 {
            margin-top: 64px;
          }
          .footer11-root-class-name18 {
            margin-top: 64px;
          }
          .footer11-root-class-name19 {
            height: auto;
          }

          @media (max-width: 1600px) {
            .footer11-text {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 767px) {
            .footer11-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer11-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer11-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .footer11-text {
              color: var(--dl-color-gray-black);
              font-size: 1.2rem;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Footer11.defaultProps = {
  rootClassName: '',
  text: '© 2024 Danneskiold & Associates LP., All Rights Reserved.',
}

Footer11.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Footer11
