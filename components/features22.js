import React from 'react'

import PropTypes from 'prop-types'

const Features22 = (props) => {
  return (
    <>
      <div className="features22-layout349 thq-section-padding">
        <div className="features22-max-width thq-section-max-width">
          <div className="features22-container">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="features22-text01 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="features22-container1 thq-grid-auto-300">
            <div className="features22-card thq-flex-column thq-card">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features22-image thq-img-round thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="features22-text03 thq-body-small">
                {props.feature1Description}
              </span>
            </div>
            <div className="features22-card1 thq-flex-column thq-card">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features22-image1 thq-img-round thq-img-ratio-1-1"
              />
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="features22-text05 thq-body-small">
                {props.feature2Description}
              </span>
            </div>
            <div className="features22-card2 thq-flex-column thq-card">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features22-image2 thq-img-round thq-img-ratio-1-1"
              />
              <h1 className="thq-heading-2">{props.feature3Title}</h1>
              <span className="features22-text07 thq-body-small">
                {props.feature3Description}
              </span>
            </div>
            <div className="features22-card3 thq-flex-column thq-card">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="features22-image3 thq-img-round thq-img-ratio-1-1"
              />
              <h1 className="thq-heading-2">{props.feature4Title}</h1>
              <span className="features22-text09 thq-body-small">
                {props.feature4Description}
              </span>
            </div>
            <div className="features22-card4 thq-flex-column thq-card">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="features22-image4 thq-img-round thq-img-ratio-1-1"
              />
              <h1 className="thq-heading-2">{props.feature5Title}</h1>
              <span className="features22-text11 thq-body-small">
                {props.feature5Description}
              </span>
            </div>
            <div className="features22-card5 thq-flex-column thq-card">
              <img
                alt={props.feature6ImageAlt}
                src={props.feature6ImageSrc}
                className="features22-image5 thq-img-round thq-img-ratio-1-1"
              />
              <h1 className="thq-heading-2">{props.feature6Title}</h1>
              <span className="features22-text13 thq-body-small">
                {props.feature6Description}
              </span>
            </div>
            <div className="features22-card6 thq-flex-column thq-card">
              <img
                alt={props.feature7ImageAlt}
                src={props.feature7ImageSrc}
                className="features22-image6 thq-img-round thq-img-ratio-1-1"
              />
              <h1 className="thq-heading-2">{props.feature7Title}</h1>
              <span className="features22-text15 thq-body-small">
                {props.feature7Description}
              </span>
            </div>
            <div className="features22-card7 thq-flex-column thq-card">
              <img
                alt={props.feature8ImageAlt}
                src={props.feature8ImageSrc}
                className="features22-image7 thq-img-round thq-img-ratio-1-1"
              />
              <h1 className="thq-heading-2">{props.feature8Title}</h1>
              <span className="features22-text17 thq-body-small">
                {props.feature8Description}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features22-layout349 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features22-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features22-container {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .features22-text01 {
            text-align: center;
          }
          .features22-container1 {
            width: 100%;
          }
          .features22-card {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features22-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text03 {
            text-align: center;
          }
          .features22-card1 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features22-image1 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text05 {
            text-align: center;
          }
          .features22-card2 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features22-image2 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text07 {
            text-align: center;
          }
          .features22-card3 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features22-image3 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text09 {
            text-align: center;
          }
          .features22-card4 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features22-image4 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text11 {
            text-align: center;
          }
          .features22-card5 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features22-image5 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text13 {
            text-align: center;
          }
          .features22-card6 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features22-image6 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text15 {
            text-align: center;
          }
          .features22-card7 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features22-image7 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features22-text17 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .features22-max-width {
              flex-direction: column;
            }
            .features22-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .features22-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .features22-card {
              width: 100%;
            }
            .features22-card1 {
              width: 100%;
            }
            .features22-card2 {
              width: 100%;
            }
            .features22-card3 {
              width: 100%;
            }
            .features22-card4 {
              width: 100%;
            }
            .features22-card5 {
              width: 100%;
            }
            .features22-card6 {
              width: 100%;
            }
            .features22-card7 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features22.defaultProps = {
  feature2Title: 'Company Registration',
  feature3ImageAlt: 'Criminal Law Image',
  feature2ImageAlt: 'Company Registration Image',
  feature1ImageAlt: 'Immigration Visas Image',
  feature8Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature7Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4ImageAlt: 'image',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature6ImageAlt: 'image',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4Title: 'Feature #4',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1619108977254-314da85774bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: 'Defense and representation in criminal law cases.',
  feature7ImageAlt: 'image',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1592333235505-c7aadeda2abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1525075390898-b0d062e04661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature6Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  heading1: 'Our Services',
  feature7Title: 'Feature #7',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1680458841425-9d0487ea0b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Expert assistance in obtaining various types of immigration visas.',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1574276323455-8333699f7358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1660598353451-9c5a0a0ff901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature8ImageAlt: 'image',
  feature2Description:
    'Guidance and support for registering your company legally.',
  feature1Title: 'Immigration Visas',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1594850015290-2cd2d512a508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature8Title: 'Feature #8',
  feature5Title: 'Feature #5',
  feature6Title: 'Feature #6',
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1519276841933-2496a0cb2533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODgyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature5ImageAlt: 'image',
  feature3Title: 'Criminal Law',
}

Features22.propTypes = {
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature8Description: PropTypes.string,
  feature4Description: PropTypes.string,
  feature7Description: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  content1: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature5Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature6Description: PropTypes.string,
  heading1: PropTypes.string,
  feature7Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature8ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature8Title: PropTypes.string,
  feature5Title: PropTypes.string,
  feature6Title: PropTypes.string,
  feature7ImageSrc: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features22
