import React from 'react'

import PropTypes from 'prop-types'

const Features1 = (props) => {
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <span className="thq-body-small">{props.slogan}</span>
              <h2 className="thq-heading-2 features1-text1">
                {props.sectionTitle}
              </h2>
            </div>
            <span className="thq-body-small">{props.sectionDescription}</span>
          </div>
          <div className="features1-content">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content1 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature1Title}</h3>
                  <span className="thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature2Title}</h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature3Title}</h3>
                  <span className="thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features1-actions">
            <button className="thq-button-filled features1-button">
              <span className="thq-body-small">{props.mainAction}</span>
            </button>
            <button className="thq-button-outline features1-button1">
              <span className="thq-body-small">{props.secondaryAction}</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-column {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-content {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-row {
            align-items: flex-start;
          }
          .features1-feature1 {
            flex: 1;
          }
          .features1-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature2 {
            flex: 1;
          }
          .features1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature3 {
            flex: 1;
          }
          .features1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .features1-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features1-feature1-image {
              height: 260px;
            }
            .features1-feature2-image {
              height: 260px;
            }
            .features1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-column {
              width: 100%;
            }
            .features1-text1 {
              text-align: center;
            }
            .features1-row {
              flex-direction: column;
            }
            .features1-feature1-image {
              width: 100%;
            }
            .features1-feature2 {
              width: auto;
            }
            .features1-feature2-image {
              width: 100%;
            }
            .features1-feature3 {
              width: auto;
            }
            .features1-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features1-actions {
              width: 100%;
              flex-direction: column;
            }
            .features1-button {
              width: 100%;
            }
            .features1-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  secondaryAction: 'Learn More',
  feature1Description:
    'Expert assistance with immigration visa applications and processes.',
  feature2Description:
    'Guidance and support for registering your company legally and efficiently.',
  feature1ImageAlt: 'Immigration Visas Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODYzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Defense and representation in criminal law cases with a focus on protecting your rights.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1673837552412-d83ac2f7f2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODYzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: 'Contact Us for a Free Consultation',
  feature2Title: 'Company Registration',
  sectionDescription: 'Explore the legal services we offer to meet your needs.',
  feature3Title: 'Criminal Law',
  feature3ImageAlt: 'Criminal Law Image',
  slogan: 'Your Legal Needs, Our Expertise',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc1ODYzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Immigration Visas',
  sectionTitle: 'Our Services',
  feature2ImageAlt: 'Company Registration Image',
}

Features1.propTypes = {
  secondaryAction: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  feature2Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  slogan: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
}

export default Features1
