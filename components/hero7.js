import React from 'react'

import PropTypes from 'prop-types'

const Hero7 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero7-max-width thq-section-max-width">
          <div className="hero7-content">
            <h1 className="hero7-text thq-heading-1">{props.heading1}</h1>
            <p className="hero7-text1 thq-body-large">{props.content1}</p>
            <div className="hero7-actions">
              <div className="hero7-container">
                <button className="thq-button-filled hero7-button">
                  <span className="hero7-text2 thq-body-small">
                    {props.action1}
                  </span>
                </button>
              </div>
              <div className="hero7-container1">
                <button className="thq-button-outline hero7-button1">
                  <span className="hero7-text3 thq-body-small">
                    {props.action2}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero7-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero7-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 1000px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero7-text {
            text-align: center;
          }
          .hero7-text1 {
            text-align: center;
          }
          .hero7-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero7-container {
            display: flex;
            align-items: flex-start;
          }
          .hero7-text2 {
            text-align: center;
          }
          .hero7-container1 {
            display: flex;
            align-items: flex-start;
          }
          .hero7-text3 {
            text-align: center;
          }
          @media (max-width: 479px) {
            .hero7-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero7-container {
              width: 100%;
            }
            .hero7-button {
              width: 100%;
            }
            .hero7-container1 {
              width: 100%;
            }
            .hero7-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero7.defaultProps = {
  action2: 'Contact Us',
  action1: 'Learn More',
  heading1: 'Welcome to Danneskiold & Associates',
  content1:
    'Your trusted legal partner for immigration visas, company registration, criminal law, and tax law services in Southeast Asia.',
}

Hero7.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero7
