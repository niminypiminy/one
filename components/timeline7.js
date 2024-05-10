import React from 'react'

import PropTypes from 'prop-types'

const Timeline7 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline7-max-width thq-section-max-width">
          <div className="timeline7-container01">
            <h2 className="timeline7-text thq-heading-2">{props.title1}</h2>
            <span className="timeline7-text01 thq-body-small">
              {props.content1}
            </span>
            <div className="timeline7-container02">
              <button type="button" className="thq-button-filled">
                {props.action1}
              </button>
              <button type="button" className="thq-button-outline">
                {props.action2}
              </button>
            </div>
          </div>
          <div className="timeline7-timeline-container">
            <div className="timeline7-step1">
              <div className="timeline7-container03">
                <div className="timeline7-container04"></div>
                <div className="timeline7-progress0"></div>
              </div>
              <div className="timeline7-container05">
                <h3 className="thq-heading-3">{props.date1}</h3>
                <h3 className="timeline7-text03 thq-heading-3">
                  {props.card1Heading}
                </h3>
                <span className="thq-body-small">{props.card1Content}</span>
                <div className="timeline7-container06">
                  <button type="button" className="thq-button-filled">
                    {props.card1Action1}
                  </button>
                  <button type="button" className="thq-button-outline">
                    {props.card1Action2}
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline7-step2">
              <div className="timeline7-container07">
                <div className="timeline7-container08"></div>
                <div className="timeline7-progress01"></div>
              </div>
              <div className="timeline7-container09">
                <h3 className="thq-heading-3">{props.date2}</h3>
                <h3 className="timeline7-text06 thq-heading-3">
                  {props.card2Heading}
                </h3>
                <span className="thq-body-small">{props.card2Content}</span>
                <div className="timeline7-container10">
                  <button type="button" className="thq-button-filled">
                    {props.card2Action1}
                  </button>
                  <button type="button" className="thq-button-outline">
                    {props.card2Action2}
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline7-step3">
              <div className="timeline7-container11">
                <div className="timeline7-container12"></div>
                <div className="timeline7-progress02"></div>
              </div>
              <div className="timeline7-container13">
                <h3 className="thq-heading-3">{props.date3}</h3>
                <h3 className="timeline7-text09 thq-heading-3">
                  {props.card3Heading}
                </h3>
                <span className="thq-body-small">{props.card3Content}</span>
                <div className="timeline7-container14">
                  <button type="button" className="thq-button-filled">
                    {props.card3Action1}
                  </button>
                  <button type="button" className="thq-button-outline">
                    {props.card3Action2}
                  </button>
                </div>
              </div>
            </div>
            <div className="timeline7-step4">
              <div className="timeline7-container15">
                <div className="timeline7-container16"></div>
                <div className="timeline7-progress03"></div>
              </div>
              <div className="timeline7-container17">
                <h3 className="thq-heading-3">{props.date4}</h3>
                <h3 className="timeline7-text12 thq-heading-3">
                  {props.card4Heading}
                </h3>
                <span className="thq-body-small">{props.card4Content}</span>
                <div className="timeline7-container18">
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
      <style jsx>
        {`
          .timeline7-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-container01 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-text {
            text-align: center;
          }
          .timeline7-text01 {
            text-align: left;
          }
          .timeline7-container02 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline7-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline7-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container03 {
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
          .timeline7-container04 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress0 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container05 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text03 {
            text-align: left;
          }
          .timeline7-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container07 {
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
          .timeline7-container08 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container09 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text06 {
            text-align: left;
          }
          .timeline7-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container11 {
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
          .timeline7-container12 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container13 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text09 {
            text-align: left;
          }
          .timeline7-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .timeline7-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline7-container15 {
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
          .timeline7-container16 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline7-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline7-container17 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline7-text12 {
            text-align: left;
          }
          .timeline7-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .timeline7-max-width {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .timeline7-max-width {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .timeline7-text01 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline7-text03 {
              text-align: left;
            }
            .timeline7-text06 {
              text-align: left;
            }
            .timeline7-text09 {
              text-align: left;
            }
            .timeline7-text12 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline7-max-width {
              padding: var(--dl-space-space-unit);
            }
            .timeline7-container06 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline7-container10 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline7-container14 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline7-container18 {
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

Timeline7.defaultProps = {
  date1: '23/04/2023',
  date3: '23/04/2023',
  card2Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  card3Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  action1: 'Primary action',
  card4Action1: 'Primary action',
  card1Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  card1Action1: 'Primary action',
  card2Action1: 'Primary action',
  card3Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  card3Action2: 'Seconday action',
  card1Action2: 'Seconday action',
  card3Action1: 'Primary action',
  title1: 'Long heading going here',
  card4Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  card4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  card4Action2: 'Seconday action',
  card2Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  date2: '23/04/2023',
  card1Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  date4: '23/04/2023',
  action2: 'Seconday action',
  card2Action2: 'Seconday action',
}

Timeline7.propTypes = {
  date1: PropTypes.string,
  date3: PropTypes.string,
  card2Content: PropTypes.string,
  card3Content: PropTypes.string,
  action1: PropTypes.string,
  card4Action1: PropTypes.string,
  card1Heading: PropTypes.string,
  content1: PropTypes.string,
  card1Action1: PropTypes.string,
  card2Action1: PropTypes.string,
  card3Heading: PropTypes.string,
  card3Action2: PropTypes.string,
  card1Action2: PropTypes.string,
  card3Action1: PropTypes.string,
  title1: PropTypes.string,
  card4Heading: PropTypes.string,
  card4Content: PropTypes.string,
  card4Action2: PropTypes.string,
  card2Heading: PropTypes.string,
  date2: PropTypes.string,
  card1Content: PropTypes.string,
  date4: PropTypes.string,
  action2: PropTypes.string,
  card2Action2: PropTypes.string,
}

export default Timeline7
