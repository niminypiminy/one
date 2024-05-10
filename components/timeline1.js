import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Timeline1 = (props) => {
  const [step3, setStep3] = useState(false)
  const [step2, setStep2] = useState(false)
  const [container3, setContainer3] = useState(false)
  const [container1, setContainer1] = useState(false)
  const [step0, setStep0] = useState(true)
  const [container2, setContainer2] = useState(false)
  const [step1, setStep1] = useState(false)
  const [container0, setContainer0] = useState(true)
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline1-max-width thq-section-max-width">
          <div className="timeline1-timeline">
            <div className="timeline1-progress0"></div>
            <div
              onClick={() => {
                setContainer2(false)
                setStep1(false)
                setStep2(false)
                setContainer1(false)
                setStep3(false)
                setContainer3(false)
                setContainer0(true)
                setStep0(true)
              }}
              className="timeline1-step0"
            >
              <span className="thq-body-small">{props.date1}</span>
              <div className="timeline1-container01"></div>
            </div>
            {!step1 && <div className="timeline1-container02"></div>}
            {step1 && <div className="timeline1-container03"></div>}
            {step1 && (
              <div
                onClick={() => {
                  setContainer0(false)
                  setContainer2(false)
                  setContainer1(true)
                  setStep1(true)
                  setStep3(false)
                  setContainer3(false)
                  setStep2(false)
                }}
                className="timeline1-container04"
              >
                <span className="thq-body-small">{props.date2}</span>
                <div className="timeline1-container05"></div>
              </div>
            )}
            {!step1 && (
              <div
                onClick={() => {
                  setStep1(true)
                  setContainer1(true)
                  setStep3(false)
                  setContainer2(false)
                  setContainer0(false)
                  setStep0(true)
                  setContainer3(false)
                  setStep2(false)
                }}
                className="timeline1-container06"
              >
                {container0 && (
                  <span className="timeline1-text02 thq-body-small">
                    {props.date2}
                  </span>
                )}
                <div className="timeline1-container07"></div>
              </div>
            )}
            {!step2 && <div className="timeline1-container08"></div>}
            {step2 && <div className="timeline1-container09"></div>}
            {!step2 && (
              <div
                onClick={() => {
                  setContainer3(false)
                  setContainer1(false)
                  setContainer2(true)
                  setContainer0(false)
                  setStep0(true)
                  setStep1(true)
                  setStep2(true)
                  setStep3(false)
                }}
                className="timeline1-container10"
              >
                <span className="timeline1-text03 thq-body-small">
                  {props.date3}
                </span>
                <div className="timeline1-container11"></div>
              </div>
            )}
            {step2 && (
              <div
                onClick={() => {
                  setStep3(false)
                  setContainer1(false)
                  setContainer3(false)
                  setContainer2(true)
                  setContainer0(false)
                }}
                className="timeline1-container12"
              >
                <span className="thq-body-small">{props.date3}</span>
                <div className="timeline1-container13"></div>
              </div>
            )}
            {!step3 && <div className="timeline1-container14"></div>}
            {step3 && <div className="timeline1-container15"></div>}
            {!step3 && (
              <div
                onClick={() => {
                  setStep1(true)
                  setStep2(true)
                  setContainer1(false)
                  setContainer2(false)
                  setContainer0(false)
                  setStep3(true)
                  setStep0(true)
                  setContainer3(true)
                }}
                className="timeline1-container16"
              >
                <span className="timeline1-text05 thq-body-small">
                  {props.date4}
                </span>
                <div className="timeline1-container17"></div>
              </div>
            )}
            {step3 && (
              <div className="timeline1-container18">
                <span className="thq-body-small">{props.date4}</span>
                <div className="timeline1-container19"></div>
              </div>
            )}
            {!step3 && <div className="timeline1-container20"></div>}
            {step3 && <div className="timeline1-container21"></div>}
          </div>
          {container0 && (
            <div className="timeline1-container22">
              <div className="timeline1-content-container thq-flex-column">
                <h3 className="thq-heading-3">{props.date1}</h3>
                <h3 className="thq-heading-3">{props.card1Title}</h3>
                <span className="thq-body-small">{props.card1Content}</span>
                <div className="timeline1-container23">
                  <button type="button" className="thq-button-filled">
                    {props.card1Action1}
                  </button>
                  <button type="button" className="thq-button-outline">
                    {props.card1Action2}
                  </button>
                </div>
              </div>
              <img
                alt={props.card1ImageAlt}
                src={props.card1ImageSrc}
                className="timeline1-image thq-img-ratio-1-1"
              />
            </div>
          )}
          {container1 && (
            <div className="timeline1-container24">
              <div className="timeline1-content-container1 thq-flex-column">
                <h3 className="thq-heading-3">{props.date2}</h3>
                <h3 className="thq-heading-3">{props.card2Title}</h3>
                <span className="thq-body-small">{props.card2Content}</span>
                <div className="timeline1-container25">
                  <button type="button" className="thq-button-filled">
                    {props.card2Action1}
                  </button>
                  <button type="button" className="thq-button-outline">
                    {props.card2Action2}
                  </button>
                </div>
              </div>
              <img
                alt={props.card2ImageAlt}
                src={props.card2ImageSrc}
                className="timeline1-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container2 && (
            <div className="timeline1-container26">
              <div className="timeline1-content-container2 thq-flex-column">
                <h3 className="thq-heading-3">{props.date3}</h3>
                <h3 className="thq-heading-3">{props.card3Title}</h3>
                <span className="thq-body-small">{props.card3Content}</span>
                <div className="timeline1-container27">
                  <button type="button" className="thq-button-filled">
                    {props.card3Action1}
                  </button>
                  <button type="button" className="thq-button-outline">
                    {props.card3Action2}
                  </button>
                </div>
              </div>
              <img
                alt={props.card3ImageAlt}
                src={props.card3ImageSrc}
                className="timeline1-image2 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container3 && (
            <div className="timeline1-container28">
              <div className="timeline1-content-container3 thq-flex-column">
                <h3 className="thq-heading-3">Date</h3>
                <h3 className="thq-heading-3">{props.card4Title}</h3>
                <span className="thq-body-small">{props.card4Content}</span>
                <div className="timeline1-container29">
                  <button type="button" className="thq-button-filled">
                    {props.card4Action1}
                  </button>
                  <button type="button" className="thq-button-outline">
                    {props.card4Action2}
                  </button>
                </div>
              </div>
              <img
                alt={props.card4ImageAlt}
                src={props.card4ImageSrc}
                className="timeline1-image3 thq-img-ratio-1-1"
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .timeline1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-timeline {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .timeline1-progress0 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-step0 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-container01 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container02 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container03 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container04 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-container05 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container06 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text02 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container07 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container08 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container09 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container10 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text03 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container11 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container12 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-container13 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container14 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container15 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container16 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text05 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container17 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container18 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-container19 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container20 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container21 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container22 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container23 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container24 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container25 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image1 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container26 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container2 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container27 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image2 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container28 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container29 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image3 {
            flex: 1;
            max-width: auto;
          }
          @media (max-width: 991px) {
            .timeline1-container22 {
              flex-direction: column;
            }
            .timeline1-container24 {
              flex-direction: column;
            }
            .timeline1-container26 {
              flex-direction: column;
            }
            .timeline1-container28 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .timeline1-max-width {
              gap: 0;
            }
            .timeline1-container22 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container24 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container26 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container28 {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .timeline1-progress0 {
              display: none;
            }
            .timeline1-container20 {
              display: none;
            }
            .timeline1-container21 {
              display: none;
            }
            .timeline1-container22 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container23 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline1-container24 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container26 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container28 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline1.defaultProps = {
  card1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  card2Action1: 'Primary action',
  card1Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  card2Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  card3Title: 'Long heading for a title',
  card4Title: 'Long heading for a title',
  card3Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  card4ImageAlt: 'image',
  card2ImageAlt: 'image',
  card4Action1: 'Primary action',
  date1: '24/03/2023',
  card4Action2: 'Secondary action',
  date4: '02/01/2024',
  card1Action2: 'Secondary action',
  card3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTM4NjQwNTB8MA&ixlib=rb-4.0.3&w=200',
  date2: '12/05/2023',
  card2Action2: 'Secondary action',
  card1ImageAlt: 'image',
  card3ImageAlt: 'image',
  card1Title: 'Long heading for a title',
  date3: '17/08/2023',
  card1Action1: 'Primary action',
  card2Title: 'Long heading for a title',
  card4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  card3Action1: 'Primary action',
  card4ImageSrc:
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGFic3RyYWN0fGVufDB8fHx8MTcxMzg2NDA1MHww&ixlib=rb-4.0.3&w=200',
  card3Action2: 'Secondary action',
  card2ImageSrc:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTM4NjQwNTB8MA&ixlib=rb-4.0.3&w=200',
}

Timeline1.propTypes = {
  card1ImageSrc: PropTypes.string,
  card2Action1: PropTypes.string,
  card1Content: PropTypes.string,
  card2Content: PropTypes.string,
  card3Title: PropTypes.string,
  card4Title: PropTypes.string,
  card3Content: PropTypes.string,
  card4ImageAlt: PropTypes.string,
  card2ImageAlt: PropTypes.string,
  card4Action1: PropTypes.string,
  date1: PropTypes.string,
  card4Action2: PropTypes.string,
  date4: PropTypes.string,
  card1Action2: PropTypes.string,
  card3ImageSrc: PropTypes.string,
  date2: PropTypes.string,
  card2Action2: PropTypes.string,
  card1ImageAlt: PropTypes.string,
  card3ImageAlt: PropTypes.string,
  card1Title: PropTypes.string,
  date3: PropTypes.string,
  card1Action1: PropTypes.string,
  card2Title: PropTypes.string,
  card4Content: PropTypes.string,
  card3Action1: PropTypes.string,
  card4ImageSrc: PropTypes.string,
  card3Action2: PropTypes.string,
  card2ImageSrc: PropTypes.string,
}

export default Timeline1
