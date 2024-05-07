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
          .footer1-root-class-name {
            margin-top: var(--dl-space-space-threeunits);
          }
          .footer1-root-class-name1 {
            margin-top: var(--dl-space-space-threeunits);
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
  text: '© 2024 Danneskiold & Associates LP., All Rights Reserved.',
  rootClassName: '',
}

Footer1.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer1
