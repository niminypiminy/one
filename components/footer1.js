import React from 'react'

import PropTypes from 'prop-types'

const Footer1 = (props) => {
  return (
    <>
      <footer className={`footer1-footer ${props.rootClassName} `}>
        <span className="footer1-text">{props.text}</span>
      </footer>
      <style jsx>
        {`
          .footer1-footer {
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
          .footer1-text {
            color: var(--dl-color-gray-black);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }

          .footer1-root-class-name2 {
            margin-top: var(--dl-space-space-threeunits);
          }
          .footer1-root-class-name3 {
            margin-top: var(--dl-space-space-threeunits);
          }
          .footer1-root-class-name4 {
            margin-top: var(--dl-space-space-fourunits);
          }
          .footer1-root-class-name5 {
            margin-top: var(--dl-space-space-fourunits);
          }
          .footer1-root-class-name6 {
            margin-top: var(--dl-space-space-fourunits);
          }
          .footer1-root-class-name7 {
            margin-top: var(--dl-space-space-fourunits);
          }
          .footer1-root-class-name8 {
            margin-top: var(--dl-space-space-sixunits);
          }
          .footer1-root-class-name9 {
            margin-top: var(--dl-space-space-twounits);
          }
          .footer1-root-class-name10 {
            margin-top: var(--dl-space-space-twounits);
          }
          .footer1-root-class-name11 {
            margin-top: var(--dl-space-space-twounits);
          }
          .footer1-root-class-name12 {
            margin-top: var(--dl-space-space-twounits);
          }
          .footer1-root-class-name13 {
            margin-top: var(--dl-space-space-twounits);
          }
          .footer1-root-class-name14 {
            margin-top: var(--dl-space-space-threeunits);
          }
          .footer1-root-class-name15 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .footer1-root-class-name16 {
            margin-top: var(--dl-space-space-twounits);
          }
          .footer1-root-class-name17 {
            margin-top: var(--dl-space-space-fourunits);
          }
          .footer1-root-class-name18 {
            margin-top: var(--dl-space-space-fourunits);
          }
          .footer1-root-class-name19 {
            height: auto;
          }

          .footer1-root-class-name26 {
            margin-top: var(--dl-space-space-sixunits);
          }
          @media (max-width: 1600px) {
            .footer1-text {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 767px) {
            .footer1-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer1-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer1-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .footer1-text {
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

Footer1.defaultProps = {
  rootClassName: '',
  text: '© 2024 Danneskiold & Associates LP., All Rights Reserved.',
}

Footer1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Footer1
