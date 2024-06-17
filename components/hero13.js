import React from 'react'

import PropTypes from 'prop-types'

const Hero13 = (props) => {
  return (
    <>
      <div className="hero13-header78">
        <div className="hero13-column thq-section-max-width thq-section-padding">
          <div className="hero13-content">
            <h1 className="hero13-text thq-heading-1">{props.heading1}</h1>
            <p className="hero13-text1 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero13-actions">
            <button className="thq-button-filled hero13-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button className="thq-button-outline hero13-button1">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div>
        <div className="hero13-content1">
          <div className="hero13-row">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero13-placeholder-image thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero13-placeholder-image01 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero13-placeholder-image02 thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero13-placeholder-image03 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero13-placeholder-image04 thq-img-ratio-1-1"
            />
          </div>
          <div className="hero13-row1">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero13-placeholder-image05 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero13-placeholder-image06 thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero13-placeholder-image07 thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero13-placeholder-image08 thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero13-placeholder-image09 thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero13-placeholder-image10 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero13-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero13-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero13-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero13-text {
            text-align: center;
          }
          .hero13-text1 {
            text-align: center;
          }
          .hero13-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero13-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .hero13-row {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .hero13-placeholder-image {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image01 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image02 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image03 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image04 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-row1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .hero13-placeholder-image05 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image06 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image07 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image08 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image09 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image10 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          @media (max-width: 767px) {
            .hero13-header78 {
              padding: var(--dl-space-space-threeunits);
            }
            .hero13-content1 {
              width: 100%;
            }
            .hero13-row {
              width: 100%;
              flex-direction: column;
            }
            .hero13-placeholder-image {
              width: 100%;
            }
            .hero13-placeholder-image01 {
              width: 100%;
            }
            .hero13-placeholder-image02 {
              width: 100%;
            }
            .hero13-placeholder-image03 {
              width: 100%;
            }
            .hero13-placeholder-image04 {
              width: 100%;
            }
            .hero13-row1 {
              width: 100%;
              display: none;
              flex-direction: column;
            }
            .hero13-placeholder-image05 {
              width: 100%;
            }
            .hero13-placeholder-image06 {
              width: 100%;
            }
            .hero13-placeholder-image07 {
              width: 100%;
            }
            .hero13-placeholder-image08 {
              width: 100%;
            }
            .hero13-placeholder-image09 {
              width: 100%;
            }
            .hero13-placeholder-image10 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero13-header78 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .hero13-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero13-button {
              width: 100%;
            }
            .hero13-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero13.defaultProps = {
  image9Src:
    'https://images.unsplash.com/photo-1652295679657-8e2df3256497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1563198804-b144dfc1661c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1:
    'Danneskiold & Associates - Your Trusted Legal Partner in Southeast Asia',
  image3Alt: 'Hero Image',
  action2: 'Contact Us',
  action1: 'Learn More',
  content1:
    'Providing expert legal counsel and advocacy in immigration visas, company registration, criminal law, and more.',
  image3Src:
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1537075205063-4df28ad235ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1545225383-f5596b804c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Law firm building in Southeast Asia',
  image5Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1605433975283-263394f3514e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1587893904881-5784452cd931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1571930883464-0ae2f10014bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1703584207584-943910159000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image8Src:
    'https://images.unsplash.com/photo-1593115057322-e94b77572f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMyNTEyMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero13.propTypes = {
  image9Src: PropTypes.string,
  image10Src: PropTypes.string,
  heading1: PropTypes.string,
  image3Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image8Src: PropTypes.string,
}

export default Hero13
