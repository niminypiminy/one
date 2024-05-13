import React from 'react'

import PropTypes from 'prop-types'

const Hero10 = (props) => {
  return (
    <>
      <div className="hero10-container">
        <div className="hero10-column thq-section-padding">
          <div className="hero10-content">
            <h1 className="thq-heading-1 hero10-heading1">{props.heading1}</h1>
            <p className="thq-body-large hero10-content1">{props.content1}</p>
            <div className="hero10-actions">
              <button className="thq-button-filled hero10-button">
                <span>{props.action1}</span>
              </button>
              <button className="thq-button-outline hero10-button1">
                <span>{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero10-image1"
        />
      </div>
      <style jsx>
        {`
          .hero10-container {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
          }
          .hero10-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero10-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero10-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero10-image1 {
            flex: 1;
            width: 100%;
          }
          @media (max-width: 991px) {
            .hero10-container {
              flex-direction: column;
            }
            .hero10-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .hero10-heading1 {
              text-align: center;
            }
            .hero10-content1 {
              text-align: center;
            }
            .hero10-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero10-heading1 {
              text-align: center;
            }
            .hero10-content1 {
              text-align: center;
            }
            .hero10-actions {
              flex-direction: column;
            }
            .hero10-button {
              width: 100%;
            }
            .hero10-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero10.defaultProps = {
  image1Alt: 'PlaceholderImage1314',
  image1Src:
    'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=200',
  action1: 'Main action',
  heading1: 'Engaging hero headline for your website',
  action2: 'Secondary action',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
}

Hero10.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero10
