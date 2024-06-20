import React from 'react'

import PropTypes from 'prop-types'

const Features91 = (props) => {
  return (
    <>
      <div className="features91-layout186 thq-section-padding">
        <div className="thq-section-max-width thq-flex-column">
          <h2 className="features91-text thq-heading-2">
            {props.feature1Title}
          </h2>
          <p className="features91-text1 thq-body-large">
            {props.feature1Description}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .features91-layout186 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features91-text {
            z-index: 2;
            text-align: center;
          }
          .features91-text1 {
            z-index: 2;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Features91.defaultProps = {
  feature1Title: 'Wide Range of Legal Services',
  feature1Description:
    'Specializing in immigration visas, company registration, and criminal law',
}

Features91.propTypes = {
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features91
