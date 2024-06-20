import React from 'react'

import PropTypes from 'prop-types'

const Banner16 = (props) => {
  return (
    <>
      <div className="banner16-container thq-section-padding">
        <div className="banner16-max-width thq-section-max-width">
          <div className="banner16-container1">
            <h2 className="banner16-title thq-heading-2">{props.heading1}</h2>
            <h3 className="banner16-text thq-heading-3">{props.content1}</h3>
          </div>
          <button type="button" className="thq-button-filled">
            {props.action1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner16-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner16-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner16-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner16-title {
            text-align: center;
          }
          .banner16-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner16.defaultProps = {
  content1: 'Your trusted legal partner in Southeast Asia',
  heading1: 'Welcome to Danneskiold & Associates',
  action1: 'Contact Us for a Free Consultation',
}

Banner16.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default Banner16
