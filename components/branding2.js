import React from 'react'

import PropTypes from 'prop-types'

const Branding2 = (props) => {
  return (
    <>
      <div className={`branding2-branding ${props.rootClassName} `}>
        <img
          alt={props.Logo_alt}
          src={props.Logo_src}
          className="branding2-logo"
        />
        <h2 className="branding2-company-name">{props.CompanyName}</h2>
      </div>
      <style jsx>
        {`
          .branding2-branding {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .branding2-logo {
            width: 26px;
            height: 26px;
            object-fit: cover;
          }
          .branding2-company-name {
            color: #222223;
            font-size: 36px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 54px;
          }

          @media (max-width: 767px) {
            .branding2-logo {
              width: 15px;
              height: 15px;
            }
            .branding2-company-name {
              font-size: 21px;
              line-height: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

Branding2.defaultProps = {
  Logo_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Logo_alt: 'image',
  CompanyName: 'Helpa',
  rootClassName: '',
}

Branding2.propTypes = {
  Logo_src: PropTypes.string,
  Logo_alt: PropTypes.string,
  CompanyName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Branding2
