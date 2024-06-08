import React from 'react'

import PropTypes from 'prop-types'

const Banner12 = (props) => {
  return (
    <>
      <div className="banner12-container thq-section-padding">
        <div className="banner12-max-width thq-section-max-width">
          <div className="banner12-container1">
            <h2 className="banner12-title thq-heading-2">{props.heading1}</h2>
            <h3 className="banner12-text thq-heading-3">{props.content1}</h3>
          </div>
          <button type="button" className="thq-button-filled">
            {props.action1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner12-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner12-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner12-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner12-title {
            text-align: center;
          }
          .banner12-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner12.defaultProps = {
  content1: 'Company mission statement',
  action1: 'Call to Action',
  heading1: 'Company Name',
}

Banner12.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner12
