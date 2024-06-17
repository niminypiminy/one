import React from 'react'

import PropTypes from 'prop-types'

const Banner14 = (props) => {
  return (
    <>
      <div className="banner14-container thq-section-padding">
        <div className="banner14-max-width thq-section-max-width">
          <div className="banner14-container1">
            <h2 className="banner14-title thq-heading-2">{props.heading1}</h2>
            <h3 className="banner14-text thq-heading-3">{props.content1}</h3>
          </div>
          <button type="button" className="thq-button-filled">
            {props.action1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner14-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner14-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner14-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner14-title {
            text-align: center;
          }
          .banner14-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner14.defaultProps = {
  content1: 'Your trusted partner for all legal matters',
  heading1: 'Welcome to Danneskiold & Associates',
  action1: 'Contact Us',
}

Banner14.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default Banner14
