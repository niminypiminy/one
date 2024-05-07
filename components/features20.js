import React from 'react'

import PropTypes from 'prop-types'

const Features20 = (props) => {
  return (
    <>
      <div className="features20-layout349 thq-section-padding">
        <div className="features20-max-width thq-section-max-width">
          <div className="features20-content">
            <div className="features20-section-title">
              <span className="thq-body-small">{props.feature1Slogan}</span>
              <div className="features20-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <p className="thq-body-large">{props.feature1Description}</p>
              </div>
              <div className="features20-actions">
                <button className="features20-button thq-button-filled">
                  <span className="thq-body-small">
                    {props.feature1Action1}
                  </span>
                </button>
                <button className="features20-button1 thq-button-outline">
                  <span className="thq-body-small">
                    {props.feature1Action2}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="features20-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features20-placeholder-image thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features20-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features20-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features20-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features20-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features20-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features20-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .features20-button {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #ffff00;
          }
          .features20-button1 {
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .features20-image-container {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .features20-placeholder-image {
            border-radius: var(--dl-radius-radius-radius4);
          }
          @media (max-width: 991px) {
            .features20-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 479px) {
            .features20-actions {
              width: 100%;
              flex-direction: column;
            }
            .features20-button {
              width: 100%;
            }
            .features20-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features20.defaultProps = {
  feature1Action2: 'Secondary action',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  feature1Title: 'Learn more about Criminal Proceedings in Thailand',
  feature1Slogan: 'Criminal Law',
  feature1Description:
    'In most countries, individual persons are not permitted to file criminal charges; those charges often must be brought by a state prosecutor. However, in Thailand an individual retains the right to commence criminal proceedings. Learn more about your rights in Thailand, and how Thailand is different than most common law countries.',
  feature1Action1: 'Read Article',
  feature1ImageAlt: 'Image',
  text: 'Link',
  linkText: 'https://example.com',
}

Features20.propTypes = {
  feature1Action2: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Action1: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
}

export default Features20
