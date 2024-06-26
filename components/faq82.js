import React, { useState } from 'react'

import PropTypes from 'prop-types'

const FAQ82 = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3isVisible, setFaq3isVisible] = useState(false)
  return (
    <>
      <div className="faq82-faq8 thq-section-padding">
        <div className="faq82-max-width thq-section-max-width">
          <div className="faq82-container thq-flex-column">
            <div className="thq-flex-column">
              <h2 className="faq82-text thq-heading-2">{props.heading1}</h2>
            </div>
            <div className="thq-flex-column">
              <p className="faq82-text1 thq-body-large">{props.content1}</p>
              <div className="faq82-list thq-flex-column">
                <div className="faq82-faq1 thq-flex-row">
                  <div
                    onClick={() => setFaq1Visible(!faq1Visible)}
                    className="faq82-trigger thq-section-max-width"
                  >
                    <p className="faq82-faq1-question thq-body-large">
                      {props.faq1Question4}
                    </p>
                    <div className="faq82-icons-container">
                      {!faq1Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon">
                            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                      {faq1Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon02">
                            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {faq1Visible && (
                    <div className="faq82-container04">
                      <span className="thq-body-small">
                        Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                        sunt aut deleniti illum non repudiandae voluptatem. Aut
                        praesentium doloribus qui distinctio neque ut unde
                        temporibus. Cum exercitationem eveniet in omnis animi in
                        corporis nulla. Sed tempora excepturi et voluptatem modi
                        et exercitationem voluptate cum illum quisquam 33 quia
                        blanditiis eos minus consequatur.Ut neque quam qui
                        dignissimos voluptates ut voluptate totam aut
                        consequuntur quod. Ut voluptas incidunt ut fuga nostrum
                        ut quaerat enim eum earum tenetur? Est esse harum et
                        Quis officiis et enim amet.Et minima tempore et neque
                        voluptatem eos amet officiis et temporibus Quis. Et
                        suscipit esse id nemo sunt At nihil earum et consequatur
                        fuga aut sapiente voluptate est cupiditate esse non
                        dolor cumque. Ut obcaecati recusandae et beatae quae qui
                        doloremque eligendi sit eaque labore.
                      </span>
                    </div>
                  )}
                </div>
                <div className="faq82-faq2">
                  <div
                    onClick={() => setFaq2Visible(!faq2Visible)}
                    className="faq82-trigger1 thq-section-max-width"
                  >
                    <p className="faq82-faq2-question thq-body-large">
                      {props.faq2Question1}
                    </p>
                    <div className="faq82-icons-container1">
                      {!faq2Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon04">
                            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                      {faq2Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon06">
                            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {faq2Visible && (
                    <div className="faq82-container07">
                      <span className="thq-body-small">
                        Et minima tempore et neque voluptatem eos amet officiis
                        et temporibus Quis. Et suscipit esse id nemo sunt At
                        nihil earum et consequatur fuga aut sapiente voluptate
                        est cupiditate esse non dolor cumque. Ut obcaecati
                        recusandae et beatae quae qui doloremque eligendi sit
                        eaque labore.
                      </span>
                    </div>
                  )}
                </div>
                <div className="faq82-faq3">
                  <div
                    onClick={() => setFaq3isVisible(!faq3isVisible)}
                    className="faq82-trigger2 thq-section-max-width"
                  >
                    <p className="faq82-faq2-question1 thq-body-large">
                      {props.faq3Question}
                    </p>
                    <div className="faq82-icons-container2">
                      {!faq3isVisible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon08">
                            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                      {faq3isVisible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon10">
                            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {faq3isVisible && (
                    <div className="faq82-container10">
                      <span className="thq-body-small">
                        A quia temporibus aut ullam assumenda vel eius sapiente
                        ut eligendi molestias. Ex ipsum incidunt ut excepturi
                        eaque sed nulla quia qui exercitationem alias aut
                        consequuntur nihil et animi voluptas.
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <button className="faq82-button thq-button-outline">
                <span className="thq-body-small">{props.action}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq82-faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq82-max-width {
            align-self: stretch;
          }
          .faq82-container {
            align-self: stretch;
            align-items: center;
          }
          .faq82-text {
            text-align: center;
          }
          .faq82-text1 {
            text-align: center;
          }
          .faq82-list {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq82-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq82-trigger {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq82-icons-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icon {
            width: 24px;
            height: 24px;
          }
          .faq82-icon02 {
            width: 24px;
            height: 24px;
          }
          .faq82-container04 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq82-trigger1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq82-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icon04 {
            width: 24px;
            height: 24px;
          }
          .faq82-icon06 {
            width: 24px;
            height: 24px;
          }
          .faq82-container07 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq82-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-faq2-question1 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq82-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icon08 {
            width: 24px;
            height: 24px;
          }
          .faq82-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq82-container10 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-button {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

FAQ82.defaultProps = {
  action: 'Contact',
  heading1: 'FAQs',
  faq1Question4: 'Frequently Asked Questions',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq3Question: 'Frequently Asked Questions',
  faq2Question1: 'Frequently Asked Questions',
}

FAQ82.propTypes = {
  action: PropTypes.string,
  heading1: PropTypes.string,
  faq1Question4: PropTypes.string,
  content1: PropTypes.string,
  faq3Question: PropTypes.string,
  faq2Question1: PropTypes.string,
}

export default FAQ82
