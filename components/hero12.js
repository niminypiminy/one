import React from 'react'

import PropTypes from 'prop-types'

const Hero12 = (props) => {
  return (
    <>
      <div className="hero12-header76">
        <div className="hero12-max-width thq-section-max-width">
          <div className="hero12-column thq-section-padding">
            <h1 className="thq-heading-1 hero12-text">{props.heading1}</h1>
            <p className="thq-body-large hero12-text1">{props.content1}</p>
            <div className="hero12-actions">
              <button className="thq-button-filled hero12-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero12-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
          <div className="hero12-content">
            <div className="hero12-column1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero12-placeholder-image thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero12-placeholder-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero12-placeholder-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="hero12-column2">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero12-placeholder-image3 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero12-placeholder-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero12-placeholder-image5 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero12-placeholder-image6 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero12-header76 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .hero12-max-width {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .hero12-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero12-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero12-content {
            gap: var(--dl-space-space-unit);
            width: 50%;
            height: 900px;
            display: flex;
            position: relative;
            align-items: center;
          }
          .hero12-column1 {
            gap: 16px;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero12-placeholder-image {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero12-placeholder-image1 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero12-placeholder-image2 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero12-column2 {
            gap: 16px;
            width: 50%;
            height: auto;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero12-placeholder-image3 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero12-placeholder-image4 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero12-placeholder-image5 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero12-placeholder-image6 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          @media (max-width: 991px) {
            .hero12-header76 {
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .hero12-max-width {
              flex-direction: column;
            }
            .hero12-column {
              width: 100%;
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .hero12-content {
              width: auto;
              height: auto;
              flex-direction: column;
            }
            .hero12-column1 {
              width: auto;
              margin-top: 0px;
              margin-left: -200px;
              flex-direction: row;
            }
            .hero12-placeholder-image {
              width: 400px;
            }
            .hero12-placeholder-image1 {
              width: 400px;
            }
            .hero12-placeholder-image2 {
              width: 400px;
            }
            .hero12-column2 {
              width: auto;
              flex-direction: row;
            }
            .hero12-placeholder-image3 {
              width: 400px;
            }
            .hero12-placeholder-image4 {
              width: 400px;
            }
            .hero12-placeholder-image5 {
              width: 400px;
            }
            .hero12-placeholder-image6 {
              width: 400px;
            }
          }
          @media (max-width: 767px) {
            .hero12-column {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .hero12-text {
              text-align: center;
            }
            .hero12-text1 {
              text-align: center;
            }
            .hero12-actions {
              width: 100%;
              justify-content: center;
            }
            .hero12-column1 {
              width: 100%;
              margin-left: 0px;
              flex-direction: column;
            }
            .hero12-placeholder-image {
              width: 100%;
              height: 500px;
            }
            .hero12-placeholder-image1 {
              width: 100%;
              height: 500px;
            }
            .hero12-placeholder-image2 {
              width: 100%;
              height: 500px;
            }
            .hero12-column2 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .hero12-column {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .hero12-text {
              text-align: center;
            }
            .hero12-text1 {
              text-align: center;
            }
            .hero12-actions {
              flex-direction: column;
            }
            .hero12-button {
              width: 100%;
            }
            .hero12-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero12.defaultProps = {
  image4Src:
    'https://images.unsplash.com/photo-1696677528468-7b5af2d5363b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Company registration paperwork',
  image5Alt: 'Immigration visa application process',
  image7Src:
    'https://images.unsplash.com/photo-1555374018-13a8994ab246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Your Trusted Legal Partner',
  image2Alt: 'Team of lawyers discussing case',
  content1:
    'Danneskiold & Associates is dedicated to providing top-notch legal services tailored to your needs. With a focus on attention to detail and care for our clients, we are here to guide you through the legal process.',
  image1Src:
    'https://images.unsplash.com/photo-1702047048032-e734daa2473d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Client receiving legal advice',
  image4Alt: 'Lawyer reviewing documents',
  image3Src:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Legal consultation meeting',
  image2Src:
    'https://images.unsplash.com/photo-1511312817910-ffa2ca5d954e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Criminal law courtroom scene',
  action2: 'Contact Us',
  action1: 'Learn More',
  image6Src:
    'https://images.unsplash.com/photo-1562669382-8722f53de2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero12.propTypes = {
  image4Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image7Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image6Src: PropTypes.string,
}

export default Hero12
