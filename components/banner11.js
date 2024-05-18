import React from 'react'

import PropTypes from 'prop-types'

const Banner11 = (props) => {
  return (
    <>
      <div className="banner11-container thq-section-padding">
        <div className="banner11-max-width thq-section-max-width">
          <div className="banner11-container1">
            <h2 className="banner11-title thq-heading-2">{props.heading1}</h2>
            <h3 className="banner11-text thq-heading-3">{props.content1}</h3>
          </div>
          <button type="button" className="thq-button-filled">
            {props.action1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner11-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner11-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner11-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner11-title {
            text-align: center;
          }
          .banner11-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner11.defaultProps = {
  content1: 'Company mission statement',
  action1: 'Call to Action',
  heading1: 'Company Name',
}

Banner11.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner11
