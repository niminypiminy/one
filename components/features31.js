import React from 'react'

import PropTypes from 'prop-types'

const Features31 = (props) => {
  return (
    <>
      <div className="features31-layout253 thq-section-padding">
        <div className="features31-max-width thq-section-max-width thq-flex-row">
          <div className="features31-section-title thq-flex-column">
            <div className="features31-content thq-flex-column">
              <h2 className="thq-heading-2">{props.sectionTitle}</h2>
              <p className="thq-body-large">{props.sectionDescription}</p>
            </div>
            <div className="thq-flex-row features31-actions">
              <button className="thq-button-filled features31-button">
                <span className="thq-body-small">{props.mainAction}</span>
              </button>
              <button className="thq-button-outline features31-button1">
                <span className="thq-body-small">{props.secondaryAction}</span>
              </button>
            </div>
          </div>
          <div className="features31-content1 thq-flex-column">
            <div className="thq-flex-row features31-list">
              <div className="features31-list-item thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features31-content2 thq-flex-column">
                  <h3 className="features31-title1 thq-heading-3">
                    {props.feature1Title}
                  </h3>
                  <span className="features31-description1 thq-body-small">
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
                <div className="features31-content3 thq-flex-column">
                  <h3 className="features31-title11 thq-heading-3">
                    {props.feature2Title}
                  </h3>
                  <span className="features31-description11 thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
            </div>
            <div className="features31-list1 thq-flex-row">
              <div className="thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features31-content4 thq-flex-column">
                  <h3 className="features31-title12 thq-heading-3">
                    {props.feature3Title}
                  </h3>
                  <span className="features31-description12 thq-body-small">
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
                <div className="features31-content5 thq-flex-column">
                  <h3 className="features31-title13 thq-heading-3">
                    {props.feature4Title}
                  </h3>
                  <span className="features31-description13 thq-body-small">
                    {props.feature4Description}
                  </span>
                </div>
              </div>
            </div>
            <div className="features31-list2 thq-flex-row">
              <div className="thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features31-content6 thq-flex-column">
                  <h3 className="features31-title14 thq-heading-3">
                    {props.feature3Title}
                  </h3>
                  <span className="features31-description14 thq-body-small">
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
                <div className="features31-content7 thq-flex-column">
                  <h3 className="features31-title15 thq-heading-3">
                    {props.feature4Title}
                  </h3>
                  <span className="features31-description15 thq-body-small">
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
          .features31-layout253 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .features31-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
          }
          .features31-section-title {
            flex: 1;
            align-items: flex-start;
          }
          .features31-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .features31-content1 {
            flex: 1;
          }
          .features31-list-item {
            align-items: center;
          }
          .features31-content2 {
            align-self: stretch;
          }
          .features31-title1 {
            text-align: center;
          }
          .features31-description1 {
            text-align: center;
          }
          .features31-content3 {
            align-self: stretch;
          }
          .features31-title11 {
            text-align: center;
          }
          .features31-description11 {
            text-align: center;
          }
          .features31-list1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features31-content4 {
            align-self: stretch;
          }
          .features31-title12 {
            text-align: center;
          }
          .features31-description12 {
            text-align: center;
          }
          .features31-content5 {
            align-self: stretch;
          }
          .features31-title13 {
            text-align: center;
          }
          .features31-description13 {
            text-align: center;
          }
          .features31-list2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features31-content6 {
            align-self: stretch;
          }
          .features31-title14 {
            text-align: center;
          }
          .features31-description14 {
            text-align: center;
          }
          .features31-content7 {
            align-self: stretch;
          }
          .features31-title15 {
            text-align: center;
          }
          .features31-description15 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .features31-layout253 {
              flex-direction: column;
            }
            .features31-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .features31-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features31-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features31-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features31-actions {
              width: 100%;
            }
            .features31-button {
              width: 100%;
            }
            .features31-button1 {
              width: 100%;
            }
            .features31-list {
              flex-direction: column;
            }
            .features31-list1 {
              flex-direction: column;
            }
            .features31-list2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features31.defaultProps = {
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature2Title: 'Engaging Content for Various Topics',
  secondaryAction: 'Secondary action',
  sectionTitle: 'Discover the Key Features',
  feature3Title: 'Engaging Content for Various Topics',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature1Title: 'Engaging Content for Various Topics',
  sectionDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  mainAction: 'Main action',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'image',
  feature2ImageAlt: 'image',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4ImageAlt: 'image',
  feature3ImageAlt: 'image',
  feature4Title: 'Engaging Content for Various Topics',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1518930107639-f4538ad82a00?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  slogan: 'Slogan',
}

Features31.propTypes = {
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  mainAction: PropTypes.string,
  feature4Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features31
