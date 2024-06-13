import React from 'react'

import PropTypes from 'prop-types'

const Hero101 = (props) => {
  return (
    <>
      <div className="hero101-container">
        <div className="hero101-column thq-section-padding">
          <div className="hero101-content">
            <h1 className="thq-heading-1 hero101-heading1">{props.heading1}</h1>
            <p className="thq-body-large hero101-content1">{props.content1}</p>
            <div className="hero101-actions">
              <button className="thq-button-filled hero101-button">
                <span>{props.action1}</span>
              </button>
              <button className="thq-button-outline hero101-button1">
                <span>{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero101-image1"
        />
      </div>
      <style jsx>
        {`
          .hero101-container {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
          }
          .hero101-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero101-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero101-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero101-image1 {
            flex: 1;
            width: 100%;
          }
          @media (max-width: 991px) {
            .hero101-container {
              flex-direction: column;
            }
            .hero101-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .hero101-heading1 {
              text-align: center;
            }
            .hero101-content1 {
              text-align: center;
            }
            .hero101-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero101-heading1 {
              text-align: center;
            }
            .hero101-content1 {
              text-align: center;
            }
            .hero101-actions {
              flex-direction: column;
            }
            .hero101-button {
              width: 100%;
            }
            .hero101-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero101.defaultProps = {
  image1Alt: 'Law firm building',
  image1Src:
    'https://images.unsplash.com/photo-1680458842473-c0c2ad52f2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODI0Nzc3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Learn More',
  content1:
    'Danneskiold & Associates is dedicated to providing top-notch legal services in immigration, company registration, and criminal law.',
  action2: 'Contact Us',
  heading1: 'Your Trusted Legal Partner',
}

Hero101.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero101
