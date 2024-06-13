import React from 'react'

import PropTypes from 'prop-types'

const Features32 = (props) => {
  return (
    <>
      <div className="features32-layout253 thq-section-padding">
        <div className="features32-max-width thq-section-max-width thq-flex-row">
          <div className="features32-section-title thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <div className="features32-content thq-flex-column">
              <h2 className="thq-heading-2">{props.sectionTitle}</h2>
              <p className="thq-body-large">{props.sectionDescription}</p>
            </div>
            <div className="thq-flex-row features32-actions">
              <button className="thq-button-filled features32-button">
                <span className="thq-body-small">{props.mainAction}</span>
              </button>
              <button className="thq-button-outline features32-button1">
                <span className="thq-body-small">{props.secondaryAction}</span>
              </button>
            </div>
          </div>
          <div className="features32-content1 thq-flex-column">
            <div className="thq-flex-row features32-list">
              <div className="features32-list-item thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features32-content2 thq-flex-column">
                  <h3 className="features32-title1 thq-heading-3">
                    {props.feature1Title}
                  </h3>
                  <span className="features32-description1 thq-body-small">
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
                <div className="features32-content3 thq-flex-column">
                  <h3 className="features32-title11 thq-heading-3">
                    {props.feature2Title}
                  </h3>
                  <span className="features32-description11 thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
            </div>
            <div className="features32-list1 thq-flex-row">
              <div className="thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-round thq-img-ratio-1-1"
                />
                <div className="features32-content4 thq-flex-column">
                  <h3 className="features32-title12 thq-heading-3">
                    {props.feature3Title}
                  </h3>
                  <span className="features32-description12 thq-body-small">
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
                <div className="features32-content5 thq-flex-column">
                  <h3 className="features32-title13 thq-heading-3">
                    {props.feature4Title}
                  </h3>
                  <span className="features32-description13 thq-body-small">
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
          .features32-layout253 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .features32-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
          }
          .features32-section-title {
            flex: 1;
            align-items: flex-start;
          }
          .features32-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .features32-content1 {
            flex: 1;
          }
          .features32-list-item {
            align-items: center;
          }
          .features32-content2 {
            align-self: stretch;
          }
          .features32-title1 {
            text-align: center;
          }
          .features32-description1 {
            text-align: center;
          }
          .features32-content3 {
            align-self: stretch;
          }
          .features32-title11 {
            text-align: center;
          }
          .features32-description11 {
            text-align: center;
          }
          .features32-list1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features32-content4 {
            align-self: stretch;
          }
          .features32-title12 {
            text-align: center;
          }
          .features32-description12 {
            text-align: center;
          }
          .features32-content5 {
            align-self: stretch;
          }
          .features32-title13 {
            text-align: center;
          }
          .features32-description13 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .features32-layout253 {
              flex-direction: column;
            }
            .features32-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .features32-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features32-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features32-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features32-actions {
              width: 100%;
            }
            .features32-button {
              width: 100%;
            }
            .features32-button1 {
              width: 100%;
            }
            .features32-list {
              flex-direction: column;
            }
            .features32-list1 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features32.defaultProps = {
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1642277967961-6c5f8c7d746f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODI0NjE4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1668433257798-4ec909f0fa2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODI0NjE4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: 'Main action',
  sectionTitle: 'Key Features',
  feature1Title: 'Immigration Visas Expertise',
  feature2ImageAlt: 'Company Registration Image',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1678681211549-34714ff68568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODI0NjE4Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Criminal Law Representation',
  feature2Title: 'Company Registration Services',
  feature2Description:
    'Assistance in company registration procedures ensuring compliance with all legal requirements',
  feature4ImageAlt: 'Tax Law Image',
  sectionDescription:
    'Discover the key features that set Danneskiold & Associates apart',
  feature3Description:
    'Experienced criminal law attorneys providing strong defense strategies for clients',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1699360492590-cd1f25823a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODI0NjE4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Specialized in handling various types of immigration visas with a high success rate',
  feature4Title: 'Tax Law Consultation',
  feature4Description:
    'Expert advice on tax law matters to help clients navigate complex tax regulations',
  secondaryAction: 'Secondary action',
  feature1ImageAlt: 'Immigration Visas Image',
  slogan: 'Slogan',
  feature3ImageAlt: 'Criminal Law Image',
}

Features32.propTypes = {
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature4Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  slogan: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
}

export default Features32
