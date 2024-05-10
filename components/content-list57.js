import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ContentList57 = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <>
      <div className="content-list57-container thq-section-padding">
        <div className="content-list57-max-width thq-section-max-width thq-flex-column">
          <div className="content-list57-container1 thq-section-max-width thq-flex-row">
            {isTermsVisible && (
              <button
                onClick={() => {
                  setIsPrivacyVisible(false)
                  setIsRefundVisible(false)
                  setIsTermsVisible(true)
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
                  setIsTermsVisible(true)
                  setIsPrivacyVisible(false)
                }}
                className="thq-button-outline"
              >
                {props.button}
              </button>
            )}
            {!isPrivacyVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(false)
                  setIsPrivacyVisible(true)
                  setIsTermsVisible(false)
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
                  setIsRefundVisible(false)
                  setIsTermsVisible(false)
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
                  setIsRefundVisible(true)
                  setIsTermsVisible(false)
                }}
                className="thq-button-outline"
              >
                {props.button2}
              </button>
            )}
            {isRefundVisible && (
              <button
                onClick={() => {
                  setIsRefundVisible(true)
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(false)
                }}
                className="thq-button-filled"
              >
                {props.button2}
              </button>
            )}
          </div>
          <div className="content-list57-container2 thq-flex-column">
            {isTermsVisible && (
              <div className="content-list57-container3">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h2 className="content-list57-heading7 thq-heading-2">
                      {props.heading7}
                    </h2>
                    <p className="thq-body-small">{props.content7}</p>
                    <ul className="content-list57-ul1 thq-flex-column">
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
              <div className="content-list57-container4">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h1 className="content-list57-heading1 thq-heading-2">
                      {props.heading1}
                    </h1>
                    <span className="thq-body-small">{props.content1}</span>
                    <ul className="content-list57-ul3 thq-flex-column">
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
              <div className="content-list57-container5">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h1 className="content-list57-heading10 thq-heading-2">
                      {props.heading10}
                    </h1>
                    <span className="thq-body-small">{props.content10}</span>
                    <ul className="content-list57-ul5 thq-flex-column">
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
          .content-list57-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list57-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list57-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .content-list57-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-list57-container3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list57-heading7 {
            text-align: center;
          }
          .content-list57-ul1 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list57-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list57-heading1 {
            text-align: center;
          }
          .content-list57-ul3 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list57-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list57-heading10 {
            text-align: center;
          }
          .content-list57-ul5 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          @media (max-width: 767px) {
            .content-list57-ul1 {
              padding-left: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list57-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .content-list57-ul1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList57.defaultProps = {
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading6: 'Cookies',
  heading9: 'Products and Services',
  heading12: 'Damages and issues',
  content9:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content6:
    'Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non quibusdam soluta aut maiores eaque et rerum error nam incidunt saepe aut nihil voluptatem. 33 nulla quaerat est doloremque voluptatem ut libero magnam id placeat aliquid. Ea minus totam est inventore minus sed temporibus aperiam At ratione maiores eum libero consequatur aut laborum exercitationem.',
  heading2: 'Types of data we collect',
  heading3: 'How we use your data',
  heading7: 'Terms of service',
  heading10: 'Refund Policy',
  content5:
    'Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis tempora et ullam quis qui fugiat necessitatibus qui quia dolorem 33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio 33 magni ratione ut odit rerum est nihil error et minus dolor quo harum fugiat. Eos quam assumenda id fugit optio aut magni sunt!  Ut iure aliquam vel velit modi sit voluptatibus atque ut corporis sint sit omnis enim a pariatur officiis aut nulla voluptate. In facere incidunt aut sapiente maxime qui quibusdam facilis non officia consectetur sit laboriosam libero aut cupiditate possimus ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed omnis maiores ut aliquid culpa vel nesciunt saepe.  Aut placeat aspernatur aut alias nihil vel neque recusandae et corrupti accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad sunt minus rem earum delectus hic officia iste qui sunt quos non officiis illo vel doloribus perspiciatis. Ab soluta eius sed quidem dolores rem necessitatibus minus 33 minus commodi. Nam repudiandae libero non laboriosam voluptate et saepe fuga vel repudiandae pariatur aut assumenda illo.',
  heading4: 'Sharing your data with 3rd parties',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  button: 'Terms of service',
  heading5: 'Campaign tracking',
  heading1: 'Privacy statement',
  content4:
    'Lorem ipsum dolor sit amet. Id galisum officiis rem quod internos qui provident quaerat hic minus eveniet est officiis galisum sit rerum dignissimos. Sit voluptatem alias et veniam rerum ea quod ipsam ut quam neque est nihil repellat est aspernatur voluptatem est voluptas ratione?  Ea vero tempore At soluta temporibus 33 galisum excepturi quo modi distinctio. Qui dolor soluta sit ipsam vitae et suscipit molestiae est consequatur galisum aut sapiente voluptatem sed quas eaque et minima minus?  Rem soluta consequatur et velit cupiditate sed eligendi laudantium rem pariatur galisum sit mollitia debitis eum delectus ipsum aut consequatur mollitia. Qui voluptatibus molestias ut totam Quis ea unde dolorem sit animi eveniet et galisum explicabo. Est culpa error ut voluptatibus voluptatem qui dignissimos dolorem quo laborum distinctio qui omnis perspiciatis ab facilis temporibus qui perspiciatis consectetur. Ab praesentium fugiat eos veritatis quam ex modi autem et sapiente dolorem?',
  heading13: 'Refunds',
  content2:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  heading8: 'General Terms and Conditions',
  content1:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  button2: 'Refund Policy',
  heading11: 'General',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content3:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content7:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  button1: 'Privacy statement',
}

ContentList57.propTypes = {
  content13: PropTypes.string,
  heading6: PropTypes.string,
  heading9: PropTypes.string,
  heading12: PropTypes.string,
  content9: PropTypes.string,
  content6: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  heading7: PropTypes.string,
  heading10: PropTypes.string,
  content5: PropTypes.string,
  heading4: PropTypes.string,
  content11: PropTypes.string,
  button: PropTypes.string,
  heading5: PropTypes.string,
  heading1: PropTypes.string,
  content4: PropTypes.string,
  heading13: PropTypes.string,
  content2: PropTypes.string,
  heading8: PropTypes.string,
  content1: PropTypes.string,
  content10: PropTypes.string,
  button2: PropTypes.string,
  heading11: PropTypes.string,
  content12: PropTypes.string,
  content3: PropTypes.string,
  content7: PropTypes.string,
  button1: PropTypes.string,
}

export default ContentList57
