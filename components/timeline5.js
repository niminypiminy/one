import React from 'react'

import PropTypes from 'prop-types'

const Timeline5 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline5-max-width thq-section-max-width">
          <div className="timeline5-container01">
            <h2 className="timeline5-text thq-heading-2">{props.title1}</h2>
            <span className="timeline5-text01 thq-body-small">
              {props.content1}
            </span>
            <div className="timeline5-container02">
              <button type="button" className="thq-button-filled">
                {props.action1}
              </button>
              <button type="button" className="thq-button-outline">
                {props.action2}
              </button>
            </div>
          </div>
          <div className="timeline5-timeline-container">
            <div className="timeline5-step1">
              <div className="timeline5-container03">
                <div className="timeline5-container04"></div>
                <div className="timeline5-progress0"></div>
              </div>
              <div className="timeline5-container05">
                <div className="timeline5-container06 thq-card">
                  <h3 className="thq-heading-3">{props.date1}</h3>
                  <h3 className="timeline5-text03 thq-heading-3">
                    {props.card1Heading}
                  </h3>
                  <span className="thq-body-small">{props.card1Content}</span>
                  <div className="timeline5-container07">
                    <button type="button" className="thq-button-filled">
                      {props.card1Action1}
                    </button>
                    <button type="button" className="thq-button-outline">
                      {props.card1Action2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline5-step2">
              <div className="timeline5-container08">
                <div className="timeline5-container09"></div>
                <div className="timeline5-progress01"></div>
              </div>
              <div className="timeline5-container10">
                <div className="timeline5-container11 thq-card">
                  <h3 className="thq-heading-3">{props.date2}</h3>
                  <h3 className="timeline5-text06 thq-heading-3">
                    {props.card2Heading}
                  </h3>
                  <span className="thq-body-small">{props.card2Content}</span>
                  <div className="timeline5-container12">
                    <button type="button" className="thq-button-filled">
                      {props.card2Action1}
                    </button>
                    <button type="button" className="thq-button-outline">
                      {props.card2Action2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline5-step3">
              <div className="timeline5-container13">
                <div className="timeline5-container14"></div>
                <div className="timeline5-progress02"></div>
              </div>
              <div className="timeline5-container15">
                <div className="timeline5-container16 thq-card">
                  <h3 className="thq-heading-3">{props.date3}</h3>
                  <h3 className="timeline5-text09 thq-heading-3">
                    {props.card3Heading}
                  </h3>
                  <span className="thq-body-small">{props.card3Content}</span>
                  <div className="timeline5-container17">
                    <button type="button" className="thq-button-filled">
                      {props.card3Action1}
                    </button>
                    <button type="button" className="thq-button-outline">
                      {props.card3Action2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline5-step4">
              <div className="timeline5-container18">
                <div className="timeline5-container19"></div>
                <div className="timeline5-progress03"></div>
              </div>
              <div className="timeline5-container20">
                <div className="timeline5-container21 thq-card">
                  <h3 className="thq-heading-3">{props.date4}</h3>
                  <h3 className="timeline5-text12 thq-heading-3">
                    {props.card4Heading}
                  </h3>
                  <span className="thq-body-small">{props.card4Content}</span>
                  <div className="timeline5-container22">
                    <button type="button" className="thq-button-filled">
                      {props.card4Action1}
                    </button>
                    <button type="button" className="thq-button-outline">
                      {props.card4Action2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline5-max-width {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline5-container01 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline5-text {
            text-align: center;
          }
          .timeline5-text01 {
            text-align: left;
          }
          .timeline5-container02 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline5-timeline-container {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline5-step1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .timeline5-container03 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline5-container04 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline5-progress0 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline5-container05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline5-container06 {
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline5-text03 {
            text-align: left;
          }
          .timeline5-container07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline5-step2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .timeline5-container08 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline5-container09 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline5-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline5-container10 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline5-container11 {
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline5-text06 {
            text-align: left;
          }
          .timeline5-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline5-step3 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .timeline5-container13 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline5-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline5-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline5-container15 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline5-container16 {
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline5-text09 {
            text-align: left;
          }
          .timeline5-container17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline5-step4 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .timeline5-container18 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline5-container19 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline5-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline5-container20 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline5-container21 {
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .timeline5-text12 {
            text-align: left;
          }
          .timeline5-container22 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .timeline5-max-width {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .timeline5-max-width {
              flex-direction: column;
            }
            .timeline5-text01 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline5-text03 {
              text-align: left;
            }
            .timeline5-text06 {
              text-align: left;
            }
            .timeline5-text09 {
              text-align: left;
            }
            .timeline5-text12 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline5-container02 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline5-container07 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline5-container12 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline5-container17 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline5-container22 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline5.defaultProps = {
  action1: 'Primary action',
  date1: '23/04/2023',
  card2Action2: 'Seconday action',
  card2Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  card1Action1: 'Primary action',
  card1Action2: 'Seconday action',
  card4Action1: 'Primary action',
  card3Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  date3: '23/04/2023',
  card4Action2: 'Seconday action',
  date2: '23/04/2023',
  card4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  card3Action2: 'Seconday action',
  action2: 'Seconday action',
  card3Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  card3Action1: 'Primary action',
  date4: '23/04/2023',
  card1Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  card1Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  title1: 'Long heading going here',
  card2Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  card2Action1: 'Primary action',
  card4Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

Timeline5.propTypes = {
  action1: PropTypes.string,
  date1: PropTypes.string,
  card2Action2: PropTypes.string,
  card2Heading: PropTypes.string,
  card1Action1: PropTypes.string,
  card1Action2: PropTypes.string,
  card4Action1: PropTypes.string,
  card3Heading: PropTypes.string,
  date3: PropTypes.string,
  card4Action2: PropTypes.string,
  date2: PropTypes.string,
  card4Content: PropTypes.string,
  card3Action2: PropTypes.string,
  action2: PropTypes.string,
  card3Content: PropTypes.string,
  card3Action1: PropTypes.string,
  date4: PropTypes.string,
  card1Heading: PropTypes.string,
  card1Content: PropTypes.string,
  content1: PropTypes.string,
  title1: PropTypes.string,
  card2Content: PropTypes.string,
  card2Action1: PropTypes.string,
  card4Heading: PropTypes.string,
}

export default Timeline5
