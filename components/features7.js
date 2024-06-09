import React from 'react'

import PropTypes from 'prop-types'

const Features7 = (props) => {
  return (
    <>
      <div className="features7-layout226 thq-section-padding">
        <div className="features7-max-width thq-section-max-width thq-grid-auto-300">
          <div className="thq-flex-column">
            <span className="features7-over-title1 thq-body-small">
              {props.feature1Slogan}
            </span>
            <div className="thq-flex-column features7-content">
              <h3 className="features7-title1 thq-heading-3">
                {props.feature1Title}
              </h3>
              <span className="features7-description1 thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features7-over-title2 thq-body-small">
              {props.feature2Slogan}
            </span>
            <div className="thq-flex-column features7-content1">
              <strong className="features7-title2 thq-heading-3">
                {props.feature2Title}
              </strong>
              <span className="features7-description2 thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features7-over-title3 thq-body-small">
              {props.feature3Slogan}
            </span>
            <div className="thq-flex-column features7-content2">
              <strong className="features7-title3 thq-heading-3">
                {props.feature3Title}
              </strong>
              <span className="features7-description3 thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features7-layout226 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
          }
          .features7-max-width {
            align-self: flex-start;
          }
          .features7-over-title1 {
            font-weight: 600;
          }
          .features7-title1 {
            text-align: center;
          }
          .features7-description1 {
            text-align: center;
          }
          .features7-over-title2 {
            font-weight: 600;
          }
          .features7-title2 {
            text-align: center;
          }
          .features7-description2 {
            text-align: center;
          }
          .features7-over-title3 {
            font-weight: 600;
          }
          .features7-title3 {
            text-align: center;
          }
          .features7-description3 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .features7-content {
              align-items: center;
            }
            .features7-content1 {
              align-items: center;
            }
            .features7-content2 {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

Features7.defaultProps = {
  feature3Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature1Slogan: 'Slogan',
  feature2Slogan: 'Slogan',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature3Slogan: 'Slogan',
  feature2Title: 'Discover the Magic of Lorem Ipsum Text Generation',
}

Features7.propTypes = {
  feature3Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features7
