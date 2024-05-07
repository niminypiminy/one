import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ContentList54 = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  return (
    <>
      <div className="content-list54-container thq-section-padding">
        <div className="content-list54-max-width thq-section-max-width thq-flex-column">
          <div className="content-list54-container1 thq-section-max-width thq-flex-row">
            <button
              onClick={() => {
                setIsTermsVisible(true)
                setIsRefundVisible(false)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              {props.button}
            </button>
            {!isTermsVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsRefundVisible(false)
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
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(true)
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
                  setIsPrivacyVisible(true)
                  setIsTermsVisible(false)
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
                  setIsRefundVisible(true)
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-outline"
              >
                {props.button2}
              </button>
            )}
            {isRefundVisible && (
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
            )}
          </div>
          <div className="content-list54-container2 thq-flex-column">
            {isTermsVisible && (
              <div className="content-list54-container3">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h2 className="content-list54-heading7 thq-heading-2">
                      {props.heading7}
                    </h2>
                    <p className="thq-body-small">{props.content7}</p>
                    <ul className="content-list54-ul1 thq-flex-column">
                      <li className="list-item">
                        <h3 className="thq-heading-3">{props.heading8}</h3>
                        <p className="thq-body-small">{props.content2}</p>
                      </li>
                      <li className="list-item">
                        <h3 className="thq-heading-3">{props.heading9}</h3>
                        <p className="thq-body-small">{props.content9}</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isPrivacyVisible && (
              <div className="content-list54-container4">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h1 className="content-list54-heading1 thq-heading-2">
                      {props.heading1}
                    </h1>
                    <span className="thq-body-small">{props.content1}</span>
                    <ul className="content-list54-ul3 thq-flex-column">
                      <li className="thq-flex-column list-item">
                        <h1 className="thq-heading-3">{props.heading2}</h1>
                        <span className="thq-body-small">{props.content2}</span>
                      </li>
                      <li className="thq-flex-column list-item">
                        <h1 className="thq-heading-3">{props.heading3}</h1>
                        <span className="thq-body-small">{props.content3}</span>
                      </li>
                      <li className="thq-flex-column list-item">
                        <h1 className="thq-heading-3">{props.heading4}</h1>
                        <span className="thq-body-small">{props.content4}</span>
                      </li>
                      <li className="thq-flex-column list-item">
                        <h1 className="thq-heading-3">{props.heading5}</h1>
                        <span className="thq-body-small">{props.content5}</span>
                      </li>
                      <li className="thq-flex-column list-item">
                        <h1 className="thq-heading-3">{props.heading6}</h1>
                        <span className="thq-body-small">{props.content6}</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
            {isRefundVisible && (
              <div className="content-list54-container5">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h1 className="content-list54-heading10 thq-heading-2">
                      {props.heading10}
                    </h1>
                    <span className="thq-body-small">{props.content10}</span>
                    <ul className="content-list54-ul5 thq-flex-column">
                      <li className="list-item">
                        <h1 className="thq-heading-3">{props.heading11}</h1>
                        <span className="thq-body-small">
                          {props.content11}
                        </span>
                      </li>
                      <li className="list-item">
                        <h1 className="thq-heading-3">{props.heading12}</h1>
                        <span className="thq-body-small">
                          {props.content12}
                        </span>
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
          .content-list54-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list54-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list54-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .content-list54-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-list54-container3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list54-heading7 {
            text-align: center;
          }
          .content-list54-ul1 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list54-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list54-heading1 {
            text-align: center;
          }
          .content-list54-ul3 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list54-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list54-heading10 {
            text-align: center;
          }
          .content-list54-ul5 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          @media (max-width: 767px) {
            .content-list54-ul1 {
              padding-left: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list54-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .content-list54-ul1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList54.defaultProps = {
  content6:
    'Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non quibusdam soluta aut maiores eaque et rerum error nam incidunt saepe aut nihil voluptatem. 33 nulla quaerat est doloremque voluptatem ut libero magnam id placeat aliquid. Ea minus totam est inventore minus sed temporibus aperiam At ratione maiores eum libero consequatur aut laborum exercitationem.',
  button2: 'Refund Policy',
  content1:
    'Danneskiold & Associates is a boutique law firm specializing in immigration visas, company registration, criminal law, and tax law. We provide personalized legal assistance directly by experienced attorneys who are dedicated to achieving the best outcomes for our clients.',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  heading4: 'Get in Touch',
  heading7: 'Terms of service',
  heading11: 'General',
  content4:
    'Contact Danneskiold & Associates today to discuss your legal needs. Whether you require assistance with immigration visas, company registration, criminal law, or tax law, our team is here to help. Schedule a consultation with one of our experienced attorneys to get started on resolving your legal issues.',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content9:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading6: 'Cookies',
  button1: 'Privacy statement',
  heading10: 'Refund Policy',
  content3:
    'Danneskiold & Associates is recognized as one of the top law firms in Southeast Asia. Our commitment to excellence, personalized approach, and track record of success set us apart from the rest. When you choose us, you can trust that your legal matters are in good hands.',
  button: 'Terms of service',
  heading9: 'Products and Services',
  content5:
    'Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis tempora et ullam quis qui fugiat necessitatibus qui quia dolorem 33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio 33 magni ratione ut odit rerum est nihil error et minus dolor quo harum fugiat. Eos quam assumenda id fugit optio aut magni sunt!  Ut iure aliquam vel velit modi sit voluptatibus atque ut corporis sint sit omnis enim a pariatur officiis aut nulla voluptate. In facere incidunt aut sapiente maxime qui quibusdam facilis non officia consectetur sit laboriosam libero aut cupiditate possimus ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed omnis maiores ut aliquid culpa vel nesciunt saepe.  Aut placeat aspernatur aut alias nihil vel neque recusandae et corrupti accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad sunt minus rem earum delectus hic officia iste qui sunt quos non officiis illo vel doloribus perspiciatis. Ab soluta eius sed quidem dolores rem necessitatibus minus 33 minus commodi. Nam repudiandae libero non laboriosam voluptate et saepe fuga vel repudiandae pariatur aut assumenda illo.',
  heading13: 'Refunds',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  content2:
    "Our firm specializes in various practice areas including immigration visas, company registration, criminal law, and tax law. We have a team of skilled attorneys with expertise in each of these fields to provide comprehensive legal services tailored to meet our clients' needs.",
  heading12: 'Damages and issues',
  heading5: 'Campaign tracking',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading1: 'About Danneskiold & Associates',
  heading3: 'Why Choose Us?',
  heading8: 'General Terms and Conditions',
  content7:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  heading2: 'Our Practice Areas',
}

ContentList54.propTypes = {
  content6: PropTypes.string,
  button2: PropTypes.string,
  content1: PropTypes.string,
  content11: PropTypes.string,
  heading4: PropTypes.string,
  heading7: PropTypes.string,
  heading11: PropTypes.string,
  content4: PropTypes.string,
  content12: PropTypes.string,
  content9: PropTypes.string,
  heading6: PropTypes.string,
  button1: PropTypes.string,
  heading10: PropTypes.string,
  content3: PropTypes.string,
  button: PropTypes.string,
  heading9: PropTypes.string,
  content5: PropTypes.string,
  heading13: PropTypes.string,
  content10: PropTypes.string,
  content2: PropTypes.string,
  heading12: PropTypes.string,
  heading5: PropTypes.string,
  content13: PropTypes.string,
  heading1: PropTypes.string,
  heading3: PropTypes.string,
  heading8: PropTypes.string,
  content7: PropTypes.string,
  heading2: PropTypes.string,
}

export default ContentList54
