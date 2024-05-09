import React from 'react'

import PropTypes from 'prop-types'

const CTA22 = (props) => {
  return (
    <>
      <div className="cta22-container thq-section-padding">
        <div className="cta22-max-width thq-section-max-width">
          <div className="cta22-row">
            <div className="cta22-content">
              <h2 className="cta22-heading1 thq-heading-2">{props.heading1}</h2>
              <p className="cta22-content1 thq-body-large">{props.content1}</p>
              <div className="cta22-container1">
                <div className="cta22-row1 thq-flex-column">
                  <div className="cta22-container2">
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
          </div>
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta22-image thq-img-ratio-16-9"
          />
        </div>
      </div>
      <style jsx>
        {`
          .cta22-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta22-max-width {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta22-row {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .cta22-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .cta22-heading1 {
            text-align: center;
          }
          .cta22-content1 {
            text-align: center;
          }
          .cta22-container1 {
            flex: 1;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta22-row1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .cta22-container2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            flex-direction: row;
            justify-content: center;
          }
          .cta22-image {
            height: 500px;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .cta22-container1 {
              width: auto;
              align-self: center;
              align-items: flex-start;
            }
            .cta22-row1 {
              width: 100%;
              position: relative;
              flex-direction: row;
              justify-content: flex-start;
            }
            .cta22-container2 {
              gap: var(--dl-space-space-unit);
              align-self: flex-end;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .cta22-container2 {
              gap: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .cta22-row1 {
              justify-content: center;
            }
            .cta22-container2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

CTA22.defaultProps = {
  image1Alt: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1599496507927-9056debd0f0a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTM4ODQ1MDJ8MA&ixlib=rb-4.0.3&w=1400',
  heading1: 'Call to action that excites the visitor to try your product',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  action2: 'Action2',
  action1: 'Action1',
}

CTA22.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA22
