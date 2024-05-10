import React from 'react'

import PropTypes from 'prop-types'

const Features23 = (props) => {
  return (
    <>
      <div className="features23-layout349 thq-section-padding">
        <div className="features23-max-width thq-section-max-width">
          <div className="features23-container">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="features23-text01 thq-body-small">
              {props.content1}
            </span>
            <button className="thq-button-filled features23-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
          <div className="thq-grid-3">
            <div className="features23-container2 thq-card">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features23-image thq-img-round"
              />
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="features23-text03 thq-body-small">
                {props.feature1Description}
              </span>
            </div>
            <div className="features23-container3 thq-card">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features23-image1 thq-img-round"
              />
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="features23-text05 thq-body-small">
                {props.feature2Description}
              </span>
            </div>
            <div className="features23-container4 thq-card">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features23-image2 thq-img-round"
              />
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="features23-text07 thq-body-small">
                {props.feature3Description}
              </span>
            </div>
            <div className="features23-container5 thq-card">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="features23-image3 thq-img-round"
              />
              <h2 className="thq-heading-2">{props.feature4Title}</h2>
              <span className="features23-text09 thq-body-small">
                {props.feature4Description}
              </span>
            </div>
            <div className="features23-container6 thq-card">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="features23-image4 thq-img-round"
              />
              <h2 className="thq-heading-2">{props.feature5Title}</h2>
              <span className="features23-text11 thq-body-small">
                {props.feature5Description}
              </span>
            </div>
            <div className="features23-container7 thq-card">
              <img
                alt={props.feature6ImageAlt}
                src={props.feature6ImageSrc}
                className="features23-image5 thq-img-round"
              />
              <h2 className="thq-heading-2">{props.feature6Title}</h2>
              <span className="features23-text13 thq-body-small">
                {props.feature6Description}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features23-layout349 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .features23-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features23-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .features23-text01 {
            text-align: center;
          }
          .features23-container2 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text03 {
            text-align: left;
          }
          .features23-container3 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text05 {
            text-align: left;
          }
          .features23-container4 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text07 {
            text-align: left;
          }
          .features23-container5 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text09 {
            text-align: left;
          }
          .features23-container6 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .features23-image4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text11 {
            text-align: left;
          }
          .features23-container7 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent2);
          }
          .features23-image5 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .features23-text13 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .features23-max-width {
              flex-direction: column;
            }
            .features23-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .features23-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .features23-container2 {
              width: 100%;
            }
            .features23-container3 {
              width: 100%;
            }
            .features23-container4 {
              width: 100%;
            }
            .features23-container5 {
              width: 100%;
            }
            .features23-container6 {
              width: 100%;
            }
            .features23-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .features23-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features23-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features23.defaultProps = {
  feature3ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action1: 'Main action',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4ImageAlt: 'image',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  heading1: 'Discover',
  feature4Title: 'Feature 4',
  feature3Title: 'Feature 3',
  feature6Title: 'Feature 6',
  feature2Title: 'Feature 2',
  feature5ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature2ImageAlt: 'image',
  feature1Title: 'Feature 1',
  feature1ImageAlt: 'image',
  feature6ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature6ImageAlt: 'Feature 1',
  feature1ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature3ImageAlt: 'image',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature2ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature6Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature5ImageAlt: 'image',
  feature5Title: 'Feature 5',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
}

Features23.propTypes = {
  feature3ImageSrc: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  heading1: PropTypes.string,
  feature4Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature6Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature5Description: PropTypes.string,
  feature6Description: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature5Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
}

export default Features23
