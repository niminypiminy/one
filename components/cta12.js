import React from 'react'

import PropTypes from 'prop-types'

const CTA12 = (props) => {
  return (
    <>
      <div className="cta12-container thq-section-padding">
        <div className="cta12-max-width thq-section-max-width">
          <div className="cta12-container1 thq-flex-row">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <div className="cta12-content">
              <p className="thq-body-large">{props.content1}</p>
              <div className="cta12-actions">
                <button type="button" className="thq-button-filled">
                  {props.action1}
                </button>
                <button type="button" className="thq-button-outline">
                  {props.action2}
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          alt={props.backgroundImageAlt}
          src={props.backgroundImageSrc}
          className="cta12-background-image thq-img-ratio-16-9"
        />
      </div>
      <style jsx>
        {`
          .cta12-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta12-max-width {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cta12-container1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cta12-content {
            gap: 24px;
            width: 616px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cta12-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta12-background-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .cta12-container1 {
              gap: var(--dl-space-space-threeunits);
            }
            .cta12-content {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .cta12-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

CTA12.defaultProps = {
  heading1: 'Medium length heading goes here',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  action1: 'Action1',
  action2: 'Action2',
  backgroundImageAlt: 'image',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1614088439978-9be39d87d81a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExN3x8YWJzdHJhY3R8ZW58MHx8fHwxNzEzODg0NTEyfDA&ixlib=rb-4.0.3&w=1500',
}

CTA12.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
}

export default CTA12
