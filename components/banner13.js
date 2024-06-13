import React from 'react'

import PropTypes from 'prop-types'

const Banner13 = (props) => {
  return (
    <>
      <div className="banner13-container thq-section-padding">
        <div className="banner13-max-width thq-section-max-width">
          <div className="banner13-container1">
            <h2 className="banner13-title thq-heading-2">{props.heading1}</h2>
            <h3 className="banner13-text thq-heading-3">{props.content1}</h3>
          </div>
          <button type="button" className="thq-button-filled">
            {props.action1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner13-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner13-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner13-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner13-title {
            text-align: center;
          }
          .banner13-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner13.defaultProps = {
  action1: 'Learn More',
  content1: 'Your trusted legal partner in Southeast Asia',
  heading1: 'Welcome to Danneskiold & Associates',
}

Banner13.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner13
