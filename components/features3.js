import React from 'react'

import PropTypes from 'prop-types'

const Features3 = (props) => {
  return (
    <>
      <div className="features3-layout253 thq-section-padding">
        <div className="features3-max-width thq-section-max-width thq-flex-row">
          <div className="features3-section-title thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <div className="features3-content thq-flex-column">
              <h2 className="thq-heading-2">{props.sectionTitle}</h2>
              <p className="thq-body-large">{props.sectionDescription}</p>
            </div>
            <div className="thq-flex-row features3-actions">
              <button className="thq-button-filled features3-button">
                <span className="thq-body-small">{props.mainAction}</span>
              </button>
              <button className="thq-button-outline features3-button1">
                <span className="thq-body-small">{props.secondaryAction}</span>
              </button>
            </div>
          </div>
          <div className="features3-content1 thq-flex-column">
            <div className="thq-flex-row features3-list">
              <div className="features3-list-item thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features3-content2 thq-flex-column">
                  <h3 className="features3-title1 thq-heading-3">
                    {props.feature1Title}
                  </h3>
                  <span className="features3-description1 thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features3-content3 thq-flex-column">
                  <h3 className="features3-title11 thq-heading-3">
                    {props.feature2Title}
                  </h3>
                  <span className="features3-description11 thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
            </div>
            <div className="features3-list1 thq-flex-row">
              <div className="thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features3-content4 thq-flex-column">
                  <h3 className="features3-title12 thq-heading-3">
                    {props.feature3Title}
                  </h3>
                  <span className="features3-description12 thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
              <div className="thq-flex-column">
                <img
                  alt={props.feature4ImageAlt}
                  src={props.feature4ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features3-content5 thq-flex-column">
                  <h3 className="features3-title13 thq-heading-3">
                    {props.feature4Title}
                  </h3>
                  <span className="features3-description13 thq-body-small">
                    {props.feature4Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features3-layout253 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .features3-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
          }
          .features3-section-title {
            flex: 1;
            align-items: flex-start;
          }
          .features3-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .features3-content1 {
            flex: 1;
          }
          .features3-list-item {
            align-items: center;
          }
          .features3-content2 {
            align-self: stretch;
          }
          .features3-title1 {
            text-align: center;
          }
          .features3-description1 {
            text-align: center;
          }
          .features3-content3 {
            align-self: stretch;
          }
          .features3-title11 {
            text-align: center;
          }
          .features3-description11 {
            text-align: center;
          }
          .features3-list1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features3-content4 {
            align-self: stretch;
          }
          .features3-title12 {
            text-align: center;
          }
          .features3-description12 {
            text-align: center;
          }
          .features3-content5 {
            align-self: stretch;
          }
          .features3-title13 {
            text-align: center;
          }
          .features3-description13 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .features3-layout253 {
              flex-direction: column;
            }
            .features3-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .features3-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features3-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features3-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features3-actions {
              width: 100%;
            }
            .features3-button {
              width: 100%;
            }
            .features3-button1 {
              width: 100%;
            }
            .features3-list {
              flex-direction: column;
            }
            .features3-list1 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features3.defaultProps = {
  mainAction: 'Main action',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1518930107639-f4538ad82a00?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4Title: 'Engaging Content for Various Topics',
  feature1ImageAlt: 'image',
  sectionDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature2Title: 'Engaging Content for Various Topics',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  secondaryAction: 'Secondary action',
  sectionTitle: 'Discover the Key Features',
  feature3ImageAlt: 'image',
  feature2ImageAlt: 'image',
  feature1Title: 'Engaging Content for Various Topics',
  slogan: 'Slogan',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature4ImageAlt: 'image',
  feature3Title: 'Engaging Content for Various Topics',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
}

Features3.propTypes = {
  mainAction: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature4Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  slogan: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features3
