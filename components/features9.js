import React from 'react'

import PropTypes from 'prop-types'

const Features9 = (props) => {
  return (
    <>
      <div className="features9-layout186 thq-section-padding">
        <div className="thq-section-max-width thq-flex-column">
          <h2 className="features9-text thq-heading-2">
            {props.feature1Title}
          </h2>
          <p className="features9-text1 thq-body-large">
            {props.feature1Description}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .features9-layout186 {
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
          .features9-text {
            z-index: 2;
            text-align: center;
          }
          .features9-text1 {
            z-index: 2;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Features9.defaultProps = {
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature1Title: 'Catchy title is what you see here in this feature section',
}

Features9.propTypes = {
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features9
