import React from 'react'

import PropTypes from 'prop-types'

const Hero102 = (props) => {
  return (
    <>
      <div className="hero102-container">
        <div className="hero102-column thq-section-padding">
          <div className="hero102-content">
            <h1 className="thq-heading-1 hero102-heading1">{props.heading1}</h1>
            <p className="thq-body-large hero102-content1">{props.content1}</p>
            <div className="hero102-actions">
              <button className="thq-button-filled hero102-button">
                <span>{props.action1}</span>
              </button>
              <button className="thq-button-outline hero102-button1">
                <span>{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero102-image1"
        />
      </div>
      <style jsx>
        {`
          .hero102-container {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
          }
          .hero102-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero102-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero102-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero102-image1 {
            flex: 1;
            width: 100%;
          }
          @media (max-width: 991px) {
            .hero102-container {
              flex-direction: column;
            }
            .hero102-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .hero102-heading1 {
              text-align: center;
            }
            .hero102-content1 {
              text-align: center;
            }
            .hero102-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero102-heading1 {
              text-align: center;
            }
            .hero102-content1 {
              text-align: center;
            }
            .hero102-actions {
              flex-direction: column;
            }
            .hero102-button {
              width: 100%;
            }
            .hero102-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero102.defaultProps = {
  action2: 'Contact Us',
  image1Src:
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1Nzc0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Learn More',
  content1:
    'Providing reliable counsel and advocacy in immigration visas, company registration, and criminal law.',
  image1Alt: 'Law firm building',
  heading1: 'Welcome to Danneskiold & Associates',
}

Hero102.propTypes = {
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero102
