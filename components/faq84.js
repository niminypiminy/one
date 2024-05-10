import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const FAQ84 = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  return (
    <>
      <div className="faq84-faq8 thq-section-padding">
        <div className="faq84-max-width thq-section-max-width thq-flex-column">
          <div className="faq84-section-title thq-flex-column">
            <div className="faq84-content">
              <h2 className="faq84-text thq-heading-2">{props.text}</h2>
            </div>
          </div>
          <div className="faq84-list thq-flex-column">
            <div className="faq84-faq1 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq84-trigger"
              >
                <p className="faq84-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq84-icons-container">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon02">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              {faq1Visible && (
                <div className="faq84-container02">
                  <span className="faq84-text01 thq-body-small">
                    <span>
                      We&apos;d have to review the merits of the case. Please
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/contact">
                      <a className="faq84-link">contact</a>
                    </Link>
                    <span> us for a brief consultation.</span>
                  </span>
                </div>
              )}
            </div>
            <div className="faq84-faq2 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq84-trigger1"
              >
                <p className="faq84-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq84-icons-container1">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon04">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon06">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              {faq2Visible && (
                <div className="faq84-container05">
                  <span className="faq84-text04 thq-body-small">
                    {props.text2}
                  </span>
                </div>
              )}
            </div>
            <div className="faq84-faq3 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq84-trigger2"
              >
                <p className="faq84-faq2-question1 thq-body-large">
                  {props.faq2Question1}
                </p>
                <div className="faq84-icons-container2">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon08">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon10">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              {faq3Visible && (
                <div className="faq84-container08">
                  <span className="faq84-text05 thq-body-small">
                    <span>
                      Yes. Please
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/contact">
                      <a className="faq84-link1">contact</a>
                    </Link>
                    <span>
                      {' '}
                      us first, provide additional details, and we&apos;ll
                      arrange a meeting with your family member. 
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="faq84-faq4 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq84-trigger3"
              >
                <p className="faq84-faq2-question2 thq-body-large">
                  {props.faq2Question2}
                </p>
                <div className="faq84-icons-container3">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon12">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon14">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              {faq4Visible && (
                <div className="faq84-container11">
                  <span className="faq84-text08 thq-body-small">
                    {props.text3}
                  </span>
                </div>
              )}
            </div>
            <div className="faq84-faq5 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq84-trigger4"
              >
                <p className="faq84-faq2-question3 thq-body-large">
                  {props.faq2Question3}
                </p>
                <div className="faq84-icons-container4">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon16">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq84-icon18">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              {faq5Visible && (
                <div className="faq84-container14">
                  <span className="faq84-text09 thq-body-small">
                    <span>
                      They do care. However, the police are subject to budget
                      constraints, so they won&apos;t spend a lot of money
                      investigating non violent offenses. Many victims of
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/fraud">
                      <a className="faq84-link2">fraud</a>
                    </Link>
                    <span>
                      , for example, file private criminal proceedings as
                      opposed to public criminal proceedings. You can read more
                      about that
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/criminal-proceedings-in-thailand">
                      <a className="faq84-link3">here</a>
                    </Link>
                    <span>. </span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq84-faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq84-max-width {
            align-self: stretch;
          }
          .faq84-section-title {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq84-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq84-text {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .faq84-list {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq84-faq1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq84-trigger {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-faq1-question {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-icons-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-icon {
            width: 24px;
            height: 24px;
          }
          .faq84-icon02 {
            width: 24px;
            height: 24px;
          }
          .faq84-container02 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-text01 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-link {
            text-decoration: underline;
          }
          .faq84-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq84-trigger1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-faq2-question {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-icon04 {
            width: 24px;
            height: 24px;
          }
          .faq84-icon06 {
            width: 24px;
            height: 24px;
          }
          .faq84-container05 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-text04 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-faq3 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq84-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-faq2-question1 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-icon08 {
            width: 24px;
            height: 24px;
          }
          .faq84-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq84-container08 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-text05 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-link1 {
            text-decoration: underline;
          }
          .faq84-faq4 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq84-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-faq2-question2 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-icon12 {
            width: 24px;
            height: 24px;
          }
          .faq84-icon14 {
            width: 24px;
            height: 24px;
          }
          .faq84-container11 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-text08 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-faq5 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq84-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-faq2-question3 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-icon16 {
            width: 24px;
            height: 24px;
          }
          .faq84-icon18 {
            width: 24px;
            height: 24px;
          }
          .faq84-container14 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq84-text09 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .faq84-link2 {
            text-decoration: underline;
          }
          .faq84-link3 {
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .faq84-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ84.defaultProps = {
  faq2Question3: "I want to press charges, but the police don't seem to care.",
  text2:
    "No. We don't take cases in the middle of a trial. If you lose the case, however, we might be able to help you on appeal.",
  faq2Question: "I don't trust my current attorney can you take over the case?",
  text3:
    'Overstaying your visa is a criminal offense. If you overstayed for a short time, then you can simply pay a fine at the border of entry. If you overstayed for a long period of time, and/or were arrested by immigration for overstaying, then you will need legal assistance. ',
  text: 'FAQs',
  faq1Question: 'I lost my case. Can you help me file an appeal?',
  faq2Question2: 'I overstayed my visa.',
  faq2Question1:
    "My son or daughter was arrested in Thailand. They're in prison. Can you help?",
}

FAQ84.propTypes = {
  faq2Question3: PropTypes.string,
  text2: PropTypes.string,
  faq2Question: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Question2: PropTypes.string,
  faq2Question1: PropTypes.string,
}

export default FAQ84
