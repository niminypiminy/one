import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const FAQ83 = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className="faq83-faq8 thq-section-padding">
        <div className="faq83-max-width thq-flex-column thq-section-max-width">
          <div className="faq83-section-title thq-flex-column">
            <div className="faq83-content">
              <h2 className="faq83-text thq-heading-2">{props.text}</h2>
              <p className="faq83-text01 thq-body-large">{props.text1}</p>
            </div>
          </div>
          <div className="faq83-list thq-flex-column">
            <div className="faq83-faq1 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setIsVisible(!isVisible)}
                className="faq83-trigger"
              >
                <p className="faq83-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq83-icons-container">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon02">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq83-container02">
                <span className="faq83-text02 thq-body-small">
                  <span>
                    We&apos;d have to view the merits of the case. Please
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/contact">
                    <a className="faq83-link">contact</a>
                  </Link>
                  <span> us for a brief consultation.</span>
                </span>
              </div>
            </div>
            <div className="faq83-faq2 thq-section-max-width thq-box-shadow">
              <div className="faq83-trigger1">
                <p className="faq83-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq83-icons-container1">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon04">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon06">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq83-container05">
                <span className="faq83-text05 thq-body-small">
                  {props.text2}
                </span>
              </div>
            </div>
            <div className="faq83-faq3 thq-section-max-width thq-box-shadow">
              <div className="faq83-trigger2">
                <p className="faq83-faq2-question1 thq-body-large">
                  {props.faq2Question1}
                </p>
                <div className="faq83-icons-container2">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon08">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon10">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq83-container08">
                <span className="faq83-text06 thq-body-small">
                  <span>
                    Yes. Please
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/contact">
                    <a className="faq83-link1">contact</a>
                  </Link>
                  <span>
                    {' '}
                    us first, provide additional details, and we&apos;ll arrange
                    a meeting with your family member. 
                  </span>
                </span>
              </div>
            </div>
            <div className="faq83-faq4 thq-section-max-width thq-box-shadow">
              <div className="faq83-trigger3">
                <p className="faq83-faq2-question2 thq-body-large">
                  {props.faq2Question2}
                </p>
                <div className="faq83-icons-container3">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon12">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon14">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq83-container11">
                <span className="faq83-text09 thq-body-small">
                  {props.text3}
                </span>
              </div>
            </div>
            <div className="faq83-faq41 thq-section-max-width thq-box-shadow">
              <div className="faq83-trigger4">
                <p className="faq83-faq2-question3 thq-body-large">
                  {props.faq2Question3}
                </p>
                <div className="faq83-icons-container4">
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon16">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq83-icon18">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq83-container14">
                <span className="faq83-text10 thq-body-small">
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
                    <a className="faq83-link2">fraud</a>
                  </Link>
                  <span>
                    , for example, file private criminal proceedings as opposed
                    to public criminal proceedings. You can read more about that
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/criminal-proceedings-in-thailand">
                    <a className="faq83-link3">here</a>
                  </Link>
                  <span>. </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq83-faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq83-max-width {
            align-self: stretch;
          }
          .faq83-section-title {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq83-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq83-text {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .faq83-text01 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .faq83-list {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq83-faq1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq83-trigger {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-faq1-question {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .faq83-icons-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-icon {
            width: 24px;
            height: 24px;
          }
          .faq83-icon02 {
            width: 24px;
            height: 24px;
          }
          .faq83-container02 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-text02 {
            display: none;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .faq83-link {
            text-decoration: underline;
          }
          .faq83-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq83-trigger1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-faq2-question {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .faq83-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-icon04 {
            width: 24px;
            height: 24px;
          }
          .faq83-icon06 {
            width: 24px;
            height: 24px;
          }
          .faq83-container05 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-text05 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .faq83-faq3 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq83-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-faq2-question1 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .faq83-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-icon08 {
            width: 24px;
            height: 24px;
          }
          .faq83-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq83-container08 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-text06 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .faq83-link1 {
            text-decoration: underline;
          }
          .faq83-faq4 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq83-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-faq2-question2 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .faq83-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-icon12 {
            width: 24px;
            height: 24px;
          }
          .faq83-icon14 {
            width: 24px;
            height: 24px;
          }
          .faq83-container11 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-text09 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .faq83-faq41 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq83-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-faq2-question3 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .faq83-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-icon16 {
            width: 24px;
            height: 24px;
          }
          .faq83-icon18 {
            width: 24px;
            height: 24px;
          }
          .faq83-container14 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq83-text10 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .faq83-link2 {
            text-decoration: underline;
          }
          .faq83-link3 {
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .faq83-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ83.defaultProps = {
  text: 'FAQs',
  text1: 'These are the most common questions we receive. ',
  faq1Question: 'I lost my case. Can you help me file an appeal?',
  faq2Question: "I don't trust my current attorney can you take over the case?",
  text2:
    "No. We don't take cases in the middle of a trial. If you lose the case, however, we might be able to help you on appeal.",
  faq2Question1:
    "My son or daughter was arrested in Thailand. They're in prison. Can you help?",
  faq2Question2: 'I overstayed my visa.',
  text3:
    'Overstaying your visa is a criminal offense. If you overstayed for a short time, then you can simply pay a fine at the border of entry. If you overstayed for a long period of time, and/or were arrested by immigration for overstaying, then you will need legal assistance. ',
  faq2Question3: "I want to press charges, but the police don't seem to care.",
}

FAQ83.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Question: PropTypes.string,
  text2: PropTypes.string,
  faq2Question1: PropTypes.string,
  faq2Question2: PropTypes.string,
  text3: PropTypes.string,
  faq2Question3: PropTypes.string,
}

export default FAQ83
