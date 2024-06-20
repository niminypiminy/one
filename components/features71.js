import React from 'react'

import PropTypes from 'prop-types'

const Features71 = (props) => {
  return (
    <>
      <div className="features71-layout226 thq-section-padding">
        <div className="features71-max-width thq-section-max-width thq-grid-auto-300">
          <div className="thq-flex-column">
            <span className="features71-over-title1 thq-body-small">
              {props.feature1Slogan}
            </span>
            <div className="thq-flex-column features71-content">
              <h3 className="features71-title1 thq-heading-3">
                {props.feature1Title}
              </h3>
              <span className="features71-description1 thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features71-over-title2 thq-body-small">
              {props.feature2Slogan}
            </span>
            <div className="thq-flex-column features71-content1">
              <strong className="features71-title2 thq-heading-3">
                {props.feature2Title}
              </strong>
              <span className="features71-description2 thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <span className="features71-over-title3 thq-body-small">
              {props.feature3Slogan}
            </span>
            <div className="thq-flex-column features71-content2">
              <strong className="features71-title3 thq-heading-3">
                {props.feature3Title}
              </strong>
              <span className="features71-description3 thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features71-layout226 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
          }
          .features71-max-width {
            align-self: flex-start;
          }
          .features71-over-title1 {
            font-weight: 600;
          }
          .features71-title1 {
            text-align: center;
          }
          .features71-description1 {
            text-align: center;
          }
          .features71-over-title2 {
            font-weight: 600;
          }
          .features71-title2 {
            text-align: center;
          }
          .features71-description2 {
            text-align: center;
          }
          .features71-over-title3 {
            font-weight: 600;
          }
          .features71-title3 {
            text-align: center;
          }
          .features71-description3 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .features71-content {
              align-items: center;
            }
            .features71-content1 {
              align-items: center;
            }
            .features71-content2 {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

Features71.defaultProps = {
  feature3Title: 'Integrity and Trust',
  feature1Slogan: 'Your one-stop solution for all legal needs',
  feature2Slogan: 'Dedicated lawyers working directly on your case',
  feature2Description:
    "At Danneskiold & Associates, we believe in providing personalized attention to each case. That's why our in-house attorneys handle your legal matters directly, ensuring quality representation and timely assistance.",
  feature1Description:
    'Danneskiold & Associates offers a wide range of legal services including immigration visas, company registration, criminal law, and tax law. Our experienced attorneys are here to assist you with any legal matter you may encounter.',
  feature3Description:
    'Trust is the foundation of our practice. We prioritize integrity in all our interactions and transactions, ensuring that you receive honest counsel and trustworthy advice every step of the way.',
  feature1Title: 'Comprehensive Legal Services',
  feature3Slogan: 'Your reliable partner in the legal world',
  feature2Title: 'In-House Attorneys',
}

Features71.propTypes = {
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

export default Features71
