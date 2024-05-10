import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ContentList58 = (props) => {
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  return (
    <>
      <div className="content-list58-container thq-section-padding">
        <div className="content-list58-max-width thq-section-max-width thq-flex-column">
          <div className="content-list58-container1 thq-section-max-width thq-flex-row">
            {isTermsVisible && (
              <button
                onClick={() => {
                  setIsTermsVisible(true)
                  setIsPrivacyVisible(false)
                  setIsRefundVisible(false)
                }}
                className="thq-button-filled"
              >
                {props.button}
              </button>
            )}
            {!isTermsVisible && (
              <button
                onClick={() => {
                  setIsTermsVisible(true)
                  setIsRefundVisible(false)
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
                  setIsTermsVisible(false)
                  setIsPrivacyVisible(true)
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
                  setIsTermsVisible(false)
                  setIsRefundVisible(true)
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
                  setIsPrivacyVisible(false)
                  setIsTermsVisible(false)
                  setIsRefundVisible(true)
                }}
                className="thq-button-filled"
              >
                {props.button2}
              </button>
            )}
          </div>
          <div className="content-list58-container2 thq-flex-column">
            {isTermsVisible && (
              <div className="content-list58-container3">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <div id="category1" className="content-list58-row">
                      <span className="content-list58-text">{props.text1}</span>
                      <div className="content-list58-list">
                        <div className="content-list58-item service">
                          <div className="content-list58-details">
                            <span className="content-list58-text1">
                              {props.text2}
                            </span>
                          </div>
                        </div>
                        <div className="content-list58-item1 service">
                          <div className="content-list58-details1">
                            <span className="content-list58-text2">
                              {props.text3}
                            </span>
                          </div>
                        </div>
                        <div className="content-list58-item2 service">
                          <div className="content-list58-details2">
                            <span className="content-list58-text3">
                              {props.text4}
                            </span>
                          </div>
                        </div>
                        <div className="content-list58-item3 service">
                          <div className="content-list58-details3">
                            <span className="content-list58-text4">
                              {props.text5}
                            </span>
                          </div>
                        </div>
                        <div className="content-list58-item4 service">
                          <div className="content-list58-details4">
                            <span className="content-list58-text5">
                              {props.text6}
                            </span>
                          </div>
                        </div>
                        <div className="content-list58-item5 service">
                          <div className="content-list58-details5">
                            <span className="content-list58-text6">
                              {props.text7}
                            </span>
                          </div>
                        </div>
                        <div className="content-list58-item6 service">
                          <div className="content-list58-details6">
                            <span className="content-list58-text7">
                              {props.text8}
                            </span>
                          </div>
                        </div>
                        <div className="content-list58-item7 service">
                          <div className="content-list58-details7">
                            <span className="content-list58-text8">
                              {props.text9}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {isPrivacyVisible && (
              <div className="content-list58-container4">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h1 className="content-list58-heading1 thq-heading-2">
                      {props.heading1}
                    </h1>
                    <span className="thq-body-small">{props.content1}</span>
                    <ul className="content-list58-ul2 thq-flex-column">
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
              <div className="content-list58-container5">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <h1 className="content-list58-heading10 thq-heading-2">
                      {props.heading10}
                    </h1>
                    <span className="thq-body-small">{props.content10}</span>
                    <ul className="content-list58-ul4 thq-flex-column">
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
          .content-list58-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list58-max-width {
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .content-list58-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .content-list58-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-list58-container3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list58-row {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .content-list58-text {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .content-list58-list {
            width: 60%;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .content-list58-item {
            width: 100%;
            position: relative;
          }
          .content-list58-details {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text1 {
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-item1 {
            width: 100%;
            position: relative;
          }
          .content-list58-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text2 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-item2 {
            width: 100%;
            position: relative;
          }
          .content-list58-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text3 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-item3 {
            width: 100%;
            position: relative;
          }
          .content-list58-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text4 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-item4 {
            width: 100%;
            position: relative;
          }
          .content-list58-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text5 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-item5 {
            width: 100%;
            position: relative;
          }
          .content-list58-details5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text6 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-item6 {
            width: 100%;
            position: relative;
          }
          .content-list58-details6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text7 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-item7 {
            width: 100%;
            position: relative;
          }
          .content-list58-details7 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .content-list58-text8 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 36px;
          }
          .content-list58-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list58-heading1 {
            text-align: center;
          }
          .content-list58-ul2 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list58-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list58-heading10 {
            text-align: center;
          }
          .content-list58-ul4 {
            padding-left: var(--dl-space-space-fiveunits);
          }
          @media (max-width: 991px) {
            .content-list58-row {
              flex-direction: column;
            }
            .content-list58-text {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 15px;
              margin-bottom: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .content-list58-list {
              width: 80%;
              margin-left: var(--dl-space-space-fourunits);
            }
            .content-list58-item {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text1 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .content-list58-item1 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details1 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text2 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .content-list58-item2 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details2 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text3 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .content-list58-item3 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details3 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text4 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .content-list58-item4 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details4 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text5 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .content-list58-item5 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details5 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text6 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .content-list58-item6 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details6 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text7 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .content-list58-item7 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .content-list58-details7 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .content-list58-text8 {
              font-size: 1.5rem;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .content-list58-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .content-list58-list {
              margin-left: var(--dl-space-space-fourunits);
              margin-right: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList58.defaultProps = {
  text3: 'Livestock farming.',
  text9: 'Trading in land.',
  text4:
    'Fishery, only in respect of the catchment of aquatic animals in Thai waters and specific economic zones of Thailand. ',
  heading2: 'Types of data we collect',
  content6:
    'Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non quibusdam soluta aut maiores eaque et rerum error nam incidunt saepe aut nihil voluptatem. 33 nulla quaerat est doloremque voluptatem ut libero magnam id placeat aliquid. Ea minus totam est inventore minus sed temporibus aperiam At ratione maiores eum libero consequatur aut laborum exercitationem.',
  heading5: 'Campaign tracking',
  heading13: 'Refunds',
  heading4: 'Sharing your data with 3rd parties',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading7: 'Terms of service',
  content4:
    'Lorem ipsum dolor sit amet. Id galisum officiis rem quod internos qui provident quaerat hic minus eveniet est officiis galisum sit rerum dignissimos. Sit voluptatem alias et veniam rerum ea quod ipsam ut quam neque est nihil repellat est aspernatur voluptatem est voluptas ratione?  Ea vero tempore At soluta temporibus 33 galisum excepturi quo modi distinctio. Qui dolor soluta sit ipsam vitae et suscipit molestiae est consequatur galisum aut sapiente voluptatem sed quas eaque et minima minus?  Rem soluta consequatur et velit cupiditate sed eligendi laudantium rem pariatur galisum sit mollitia debitis eum delectus ipsum aut consequatur mollitia. Qui voluptatibus molestias ut totam Quis ea unde dolorem sit animi eveniet et galisum explicabo. Est culpa error ut voluptatibus voluptatem qui dignissimos dolorem quo laborum distinctio qui omnis perspiciatis ab facilis temporibus qui perspiciatis consectetur. Ab praesentium fugiat eos veritatis quam ex modi autem et sapiente dolorem?',
  text7:
    'Extraction of Thai medicinal herbs, and making or casting Buddha Images and monk alms-bowls. / Marketing',
  content5:
    'Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis tempora et ullam quis qui fugiat necessitatibus qui quia dolorem 33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio 33 magni ratione ut odit rerum est nihil error et minus dolor quo harum fugiat. Eos quam assumenda id fugit optio aut magni sunt!  Ut iure aliquam vel velit modi sit voluptatibus atque ut corporis sint sit omnis enim a pariatur officiis aut nulla voluptate. In facere incidunt aut sapiente maxime qui quibusdam facilis non officia consectetur sit laboriosam libero aut cupiditate possimus ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed omnis maiores ut aliquid culpa vel nesciunt saepe.  Aut placeat aspernatur aut alias nihil vel neque recusandae et corrupti accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad sunt minus rem earum delectus hic officia iste qui sunt quos non officiis illo vel doloribus perspiciatis. Ab soluta eius sed quidem dolores rem necessitatibus minus 33 minus commodi. Nam repudiandae libero non laboriosam voluptate et saepe fuga vel repudiandae pariatur aut assumenda illo.',
  text5:
    'Trading and sale of antique objects of Thailand or objects of historical value of Thailand.',
  text6: 'Rice farming, plantation, or crop growing.',
  heading11: 'General',
  text1: 'Category 1',
  heading12: 'Damages and issues',
  button2: 'Refund Policy',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading1: 'Privacy statement',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  button: 'Terms of service',
  text: 'The press, radio broadcasting station, or radio and television station business.',
  content3:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content2:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  button1: 'Privacy statement',
  content9:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content1:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  text2:
    'The press, radio broadcasting station, or radio and television station business.',
  heading9: 'Products and Services',
  heading6: 'Cookies',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  heading10: 'Refund Policy',
  heading3: 'How we use your data',
  text8: 'Forestry and timber processing from a natural forest.',
  heading8: 'General Terms and Conditions',
  content7:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
}

ContentList58.propTypes = {
  text3: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  heading2: PropTypes.string,
  content6: PropTypes.string,
  heading5: PropTypes.string,
  heading13: PropTypes.string,
  heading4: PropTypes.string,
  content12: PropTypes.string,
  heading7: PropTypes.string,
  content4: PropTypes.string,
  text7: PropTypes.string,
  content5: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  heading11: PropTypes.string,
  text1: PropTypes.string,
  heading12: PropTypes.string,
  button2: PropTypes.string,
  content13: PropTypes.string,
  heading1: PropTypes.string,
  content11: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  content3: PropTypes.string,
  content2: PropTypes.string,
  button1: PropTypes.string,
  content9: PropTypes.string,
  content1: PropTypes.string,
  text2: PropTypes.string,
  heading9: PropTypes.string,
  heading6: PropTypes.string,
  content10: PropTypes.string,
  heading10: PropTypes.string,
  heading3: PropTypes.string,
  text8: PropTypes.string,
  heading8: PropTypes.string,
  content7: PropTypes.string,
}

export default ContentList58
