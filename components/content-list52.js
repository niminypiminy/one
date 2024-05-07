import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ContentList52 = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <>
      <div className="content-list52-container thq-section-padding">
        <div className="content-list52-max-width thq-section-max-width thq-flex-column">
          <div className="content-list52-container1 thq-section-max-width thq-flex-row">
            {isTermsVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(false)
                  setIsTermsVisible(true)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-filled"
              >
                {props.button}
              </button>
            )}
            {!isTermsVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(false)
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(true)
                }}
                className="thq-button-outline"
              >
                {props.button}
              </button>
            )}
            {!isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(true)
                  setIsTermsVisible(false)
                  setIsRefundVisible(false)
                }}
                className="thq-button-outline"
              >
                {props.button1}
              </button>
            )}
            {isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(true)
                  setIsRefundVisible(false)
                }}
                className="thq-button-filled"
              >
                {props.button1}
              </button>
            )}
            {!isRefundVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(false)
                  setIsRefundVisible(true)
                }}
                className="thq-button-outline"
              >
                Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
                tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
                ab facilis galisum ea consequatur consequuntur. Ab voluptas
                voluptatem eum consequatur aspernatur non laboriosam atque est
                labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
                veritatis maiores At praesentium aliquid. Sed dolores architecto
                non doloribus quia eos consectetur commodi non tenetur vitae est
                neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
                ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
                tempora in officiis sunt eum voluptatem tenetur sit iste
                reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem
                ut esse sunt ad saepe maiores vel perferendis veritatis. Ex
                magni fugiat ut reprehenderit laudantium sit galisum ipsam eos
                tempora doloribus sed accusantium nobis eum praesentium quod.
              </button>
            )}
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsPrivacyVisible(false)
                setIsRefundVisible(true)
              }}
              className="thq-button-filled"
            >
              {props.button2}
            </button>
          </div>
          <div className="content-list52-container2 thq-flex-column">
            {isTermsVisible && (
              <div className="content-list52-container3">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item"></li>
                </ul>
              </div>
            )}
            {isPrivacyVisible && (
              <div className="content-list52-container4">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    {!isRefundVisible && (
                      <span className="thq-body-small">{props.content1}</span>
                    )}
                  </li>
                </ul>
              </div>
            )}
            {isRefundVisible && (
              <div className="content-list52-container5">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h1 className="content-list52-heading10 thq-heading-2">
                      {props.heading10}
                    </h1>
                    {!isRefundVisible && (
                      <span className="thq-body-small">{props.content10}</span>
                    )}
                    <ul className="content-list52-ul2 thq-flex-column">
                      <li className="list-item">
                        <h1 className="thq-heading-3">{props.heading11}</h1>
                        {!isRefundVisible && (
                          <span className="thq-body-small">
                            {props.content11}
                          </span>
                        )}
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">{props.heading12}</h1>
                        {!isRefundVisible && (
                          <span className="thq-body-small">
                            {props.content12}
                          </span>
                        )}
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">{props.heading13}</h1>
                        <span className="thq-body-small">
                          {props.content13}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list52-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .content-list52-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list52-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .content-list52-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-list52-container3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list52-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list52-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list52-heading10 {
            text-align: center;
          }
          .content-list52-ul2 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          @media (max-width: 479px) {
            .content-list52-container1 {
              align-items: stretch;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

ContentList52.defaultProps = {
  button2: 'Contact us',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  content1:
    'Danneskiold & Associates is a boutique law firm specializing in immigration visas, company registration, criminal law, and more. With a focus on trustworthiness and personalized service, we handle cases directly with our experienced attorneys.',
  heading10: 'Refund Policy',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading12: 'Damages and issues',
  heading13: 'Refunds',
  button1: 'Costs',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading11: 'General',
  button: 'Read Article',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
}

ContentList52.propTypes = {
  button2: PropTypes.string,
  content11: PropTypes.string,
  content1: PropTypes.string,
  heading10: PropTypes.string,
  content13: PropTypes.string,
  heading12: PropTypes.string,
  heading13: PropTypes.string,
  button1: PropTypes.string,
  content12: PropTypes.string,
  heading11: PropTypes.string,
  button: PropTypes.string,
  content10: PropTypes.string,
}

export default ContentList52
