import React from 'react'

import PropTypes from 'prop-types'

const CTA11 = (props) => {
  return (
    <>
      <div className="cta11-container thq-section-padding">
        <div className="cta11-max-width thq-section-max-width">
          <div className="cta11-content">
            <h2 className="cta11-heading1 thq-heading-2">{props.heading1}</h2>
            <p className="cta11-content1 thq-body-large">{props.content1}</p>
            <div className="cta11-actions">
              <button className="thq-button-filled cta11-button">
                <span className="cta11-action1 thq-body-small">
                  {props.action1}
                </span>
              </button>
              <button className="thq-button-outline cta11-button1">
                <span className="cta11-action2 thq-body-small">
                  {props.action2}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta11-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .cta11-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .cta11-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .cta11-heading1 {
            text-align: center;
          }
          .cta11-content1 {
            text-align: center;
          }
          .cta11-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta11-action1 {
            text-align: center;
          }
          .cta11-action2 {
            text-align: center;
          }
          @media (max-width: 479px) {
            .cta11-actions {
              width: 100%;
              flex-direction: column;
            }
            .cta11-button {
              width: 100%;
            }
            .cta11-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CTA11.defaultProps = {
  action2: 'Secondary action',
  action1: 'Main action',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  heading1: 'Call to action that excites the visitor to try your product',
}

CTA11.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default CTA11
