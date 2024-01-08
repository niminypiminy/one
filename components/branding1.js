import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Branding1 = (props) => {
  return (
    <>
      <div className="branding1-branding">
        <Link href="/">
          <a className="branding1-link">{props.text}</a>
        </Link>
        <svg viewBox="0 0 1024 1024" className="branding1-icon">
          <path d="M128 128h768v768h-768z"></path>
        </svg>
        <span className="branding1-text">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .branding1-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .branding1-link {
            color: rgb(18, 40, 33);
            font-size: 24px;
            line-height: 36px;
            text-decoration: none;
          }
          .branding1-icon {
            width: 7px;
            height: 7px;
          }
          .branding1-text {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            background-color: #ffce00;
          }
          @media (max-width: 991px) {
            .branding1-icon {
              display: none;
            }
            .branding1-text {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Branding1.defaultProps = {
  text: 'Eireahmon Ruaidhri',
  text1: 'Law Firm',
}

Branding1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Branding1
