import React, { useState } from 'react'

import PropTypes from 'prop-types'

const FAQ93 = (props) => {
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visibile, setFaq1Visibile] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  return (
    <>
      <div className="faq93-faq8 thq-section-padding">
        <div className="faq93-max-width thq-flex-column thq-section-max-width">
          <div className="faq93-section-title thq-flex-column">
            <div className="faq93-content">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="faq93-list thq-flex-column">
            <div className="faq93-faq1 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq1Visibile(!faq1Visibile)}
                className="faq93-trigger"
              >
                <p className="faq93-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq93-icons-container">
                  {!faq1Visibile && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visibile && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon02">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visibile && (
                <div className="faq93-container02">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="faq93-faq2 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq93-trigger1"
              >
                <p className="faq93-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq93-icons-container1">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon04">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon06">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq93-container05">
                  <span className="thq-body-small">
                    Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="faq93-faq3 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq93-trigger2"
              >
                <p className="faq93-faq2-question1 thq-body-large">
                  {props.faq3Question}
                </p>
                <div className="faq93-icons-container2">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon08">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon10">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq93-container08">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="faq93-faq4 thq-section-max-width thq-box-shadow">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq93-trigger3"
              >
                <p className="faq93-faq2-question2 thq-body-large">
                  {props.faq4Question}
                </p>
                <div className="faq93-icons-container3">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon12">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq93-icon14">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq93-container11">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq93-faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq93-max-width {
            align-self: stretch;
          }
          .faq93-section-title {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq93-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq93-list {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq93-faq1 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq93-trigger {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq93-icons-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-icon {
            width: 24px;
            height: 24px;
          }
          .faq93-icon02 {
            width: 24px;
            height: 24px;
          }
          .faq93-container02 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq93-trigger1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq93-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-icon04 {
            width: 24px;
            height: 24px;
          }
          .faq93-icon06 {
            width: 24px;
            height: 24px;
          }
          .faq93-container05 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-faq3 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq93-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-faq2-question1 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq93-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-icon08 {
            width: 24px;
            height: 24px;
          }
          .faq93-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq93-container08 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-faq4 {
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
          }
          .faq93-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-faq2-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq93-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq93-icon12 {
            width: 24px;
            height: 24px;
          }
          .faq93-icon14 {
            width: 24px;
            height: 24px;
          }
          .faq93-container11 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .faq93-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ93.defaultProps = {
  faq1Question: 'Frequently Asked Questions',
  faq4Question: 'Frequently Asked Questions',
  faq2Question: 'Frequently Asked Questions',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  heading1: 'FAQs',
  faq3Question: 'Frequently Asked Questions',
}

FAQ93.propTypes = {
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Question: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  faq3Question: PropTypes.string,
}

export default FAQ93
