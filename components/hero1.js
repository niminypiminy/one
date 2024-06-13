import React from 'react'

import PropTypes from 'prop-types'

const Hero1 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero1-max-width thq-section-max-width">
          <div className="thq-flex-row hero1-container">
            <div className="hero1-column">
              <div className="hero1-content">
                <h1 className="thq-heading-1 hero1-heading1">
                  {props.heading1}
                </h1>
                <p className="thq-body-large hero1-content1">
                  {props.content1}
                </p>
              </div>
              <div className="hero1-actions">
                <button className="thq-button-filled hero1-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
                <button className="thq-button-outline hero1-button1">
                  <span className="thq-body-small">{props.action2}</span>
                </button>
              </div>
            </div>
            <div className="hero1-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero1-image1 thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero1-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero1-column {
            gap: 24px;
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero1-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero1-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero1-container1 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 35%;
            justify-content: flex-start;
          }
          .hero1-image1 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            flex-grow: 1;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .hero1-container {
              flex-direction: column;
            }
            .hero1-container1 {
              width: 100%;
              padding-top: 56.25%;
            }
          }
          @media (max-width: 767px) {
            .hero1-heading1 {
              text-align: center;
            }
            .hero1-content1 {
              text-align: center;
            }
            .hero1-actions {
              width: 100%;
              justify-content: center;
            }
            .hero1-image1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero1-actions {
              flex-direction: column;
            }
            .hero1-button {
              width: 100%;
            }
            .hero1-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero1.defaultProps = {
  action2: 'Secondary action',
  action1: 'Learn More',
  image1Alt: 'Law firm building',
  content1:
    'Your trusted legal partner for immigration visas, company registration, and criminal law cases.',
  image1Src:
    'https://images.unsplash.com/photo-1467664631004-58beab1ece0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODI0NzYwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Welcome to Danneskiold & Associates',
}

Hero1.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero1
