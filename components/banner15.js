import React from 'react'

import PropTypes from 'prop-types'

const Banner15 = (props) => {
  return (
    <>
      <div className="banner15-container thq-section-padding">
        <div className="banner15-max-width thq-section-max-width">
          <div className="banner15-container1">
            <h2 className="banner15-title thq-heading-2">{props.heading1}</h2>
            <h3 className="banner15-text thq-heading-3">{props.content1}</h3>
          </div>
          <button type="button" className="thq-button-filled">
            {props.action1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner15-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner15-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner15-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner15-title {
            text-align: center;
          }
          .banner15-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner15.defaultProps = {
  content1: 'Your trusted legal partner in Southeast Asia',
  action1: 'Learn More',
  heading1: 'Welcome to Danneskiold & Associates',
}

Banner15.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner15
