import React from 'react'

import PropTypes from 'prop-types'

const Features2 = (props) => {
  return (
    <>
      <div className="features2-layout302 thq-section-padding">
        <div className="features2-max-width thq-section-max-width">
          <div className="features2-section-title thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2">{props.sectionTitle}</h2>
            <p className="thq-body-large">{props.sectionDescription}</p>
          </div>
          <div className="features2-content">
            <div className="thq-grid-5">
              <div className="features2-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature1Title}</h3>
                  <span className="thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="features2-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature2Title}</h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
              <div className="features2-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature3Title}</h3>
                  <span className="thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
              <div className="features2-feature4 thq-flex-column">
                <img
                  alt={props.feature4ImageAlt}
                  src={props.feature4ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature4Title}</h3>
                  <span className="thq-body-small">
                    {props.feature4Description}
                  </span>
                </div>
              </div>
              <div className="features2-feature5 thq-flex-column">
                <img
                  alt={props.feature5ImageAlt}
                  src={props.feature5ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature5Title}</h3>
                  <span className="thq-body-small">
                    {props.feature5Description}
                  </span>
                </div>
              </div>
            </div>
            <div className="features2-actions">
              <button className="thq-button-filled features2-button">
                <span className="thq-body-small">{props.mainAction}</span>
              </button>
              <button className="thq-button-outline features2-button1">
                <span className="thq-body-small">{props.secondaryAction}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features2-layout302 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features2-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features2-section-title {
            align-items: flex-start;
          }
          .features2-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features2-feature1 {
            align-items: flex-start;
          }
          .features2-feature2 {
            align-items: flex-start;
          }
          .features2-feature3 {
            align-items: flex-start;
          }
          .features2-feature4 {
            align-items: flex-start;
          }
          .features2-feature5 {
            align-items: flex-start;
          }
          .features2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          @media (max-width: 479px) {
            .features2-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features2-actions {
              width: 100%;
              flex-direction: column;
            }
            .features2-button {
              width: 100%;
            }
            .features2-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features2.defaultProps = {
  mainAction: 'Main action',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  slogan: 'Slogan',
  feature1Title: 'Engaging Content for Various Topics',
  feature3ImageAlt: 'image',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  secondaryAction: 'Secondary action',
  feature3Title: 'Engaging Content for Various Topics',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature5ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  sectionDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature5Title: 'Engaging Content for Various Topics',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4Title: 'Engaging Content for Various Topics',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  sectionTitle: 'Discover the Key Features',
  feature2Title: 'Engaging Content for Various Topics',
  feature4ImageAlt: 'image',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  feature4ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1ImageAlt: 'image',
  feature2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2ImageAlt: 'image',
  feature5ImageAlt: 'image',
}

Features2.propTypes = {
  mainAction: PropTypes.string,
  feature4Description: PropTypes.string,
  slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature5Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature5Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
}

export default Features2
