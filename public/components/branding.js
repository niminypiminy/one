import React from 'react'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className="branding-branding">
        <span className="branding-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .branding-text {
            color: rgba(18, 40, 33, 1);
            font-size: 24px;
            line-height: 36px;
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  text: 'Eireahmon Ruaidhri',
}

Branding.propTypes = {
  text: PropTypes.string,
}

export default Branding
