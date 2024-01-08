import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-information">
          <div className="footer-content"></div>
          <span className="footer-copyright">{props.Copyright}</span>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .footer-information {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-copyright {
            color: #122821;
            width: 100%;
            font-size: 14px;
            font-family: Lato;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .footer-footer {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-copyright {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Copyright: '©2022 Eireahmhon Ruaidhri | All Rights Reserved.',
  image_alt: 'image',
  text: 'We defend your rights.',
  image_src: 'ae8d594a-01d8-40a5-9e86-6064e45142cb',
  text1: 'office@ruaidhri.io',
  text2: '+66',
  image_alt1: 'image',
  image_src1: '37cd3f26-39fa-4b74-a654-a069d42a5999',
}

Footer.propTypes = {
  Copyright: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Footer
