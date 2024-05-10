import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Component6 = (props) => {
  const [showarticleVisible, setShowarticleVisible] = useState(false)
  return (
    <>
      <div className="component6-container">
        <div className="component6-container1">
          {showarticleVisible && (
            <button type="button" className="button">
              {props.button}
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowarticleVisible(false)}
            className="button"
          >
            {props.button1}
          </button>
          {!showarticleVisible && (
            <button type="button" className="button">
              {props.button2}
            </button>
          )}
          <button type="button" className="button">
            {props.button3}
          </button>
        </div>
        {!showarticleVisible && (
          <div className="open1">
            <span className="component6-text">
              <span>Individuals encountering situations that involve </span>
              <Link href="/domestic-abuse">
                <a className="component6-link">domestic abuse</a>
              </Link>
              <span>
                , assault,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/fraud">
                <a className="component6-link1">fraud</a>
              </Link>
              <span>
                , and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/trespass-to-the-person">
                <a className="component6-link2">trespass to the person</a>
              </Link>
              <span>
                {' '}
                often choose to pursue both criminal and civil charges. While
                individuals can always file a civil case, in many jurisdictions,
                individuals are prohibited from intiating a criminal proceeding.
                In the U.K. and the United States, for example, one must: 
              </span>
            </span>
            <ul className="component6-ul list">
              <li className="list-item">
                <span className="component6-text05">{props.text3}</span>
              </li>
              <li className="list-item">
                <span className="component6-text06">{props.text4}</span>
              </li>
              <li className="list-item">
                <span className="component6-text07">{props.text5}</span>
              </li>
            </ul>
            <span className="component6-text08">
              <span>
                In Thailand, however, individual persons have
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>two available options</span>
              <span>:</span>
            </span>
            <ul className="component6-ul1 list">
              <li className="component6-li03 list-item">
                <span className="component6-text12">{props.text6}</span>
              </li>
              <li className="component6-li04 list-item">
                <span className="component6-text13">{props.text7}</span>
              </li>
            </ul>
            <span className="component6-text14">
              <span>
                Under Section 28 of the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="component6-text16">Criminal Procedure Code</span>
              <span>
                , individual persons are granted the right, subsequent to a
                preliminary investigation into the merits, to file criminal
                charges akin to public prosecutors. Such cases are commonly
                referred to as
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="component6-text18">
                Private Criminal Proceedings
              </span>
              <span>
                , distinct from
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="component6-text20">
                Public criminal proceeding
              </span>
              <span className="component6-text21">s</span>
              <span>
                 which are initiated by prosecutors on behalf of the state.
              </span>
            </span>
            <span className="component6-text23">{props.text}</span>
            <ul className="component6-ul2 list">
              <li className="list-item">
                <span className="component6-text24">{props.text8}</span>
              </li>
              <li className="list-item">
                <span className="component6-text25">{props.text9}</span>
              </li>
              <li className="list-item">
                <span className="component6-text26">{props.text10}</span>
              </li>
              <li className="list-item">
                <span className="component6-text27">{props.text11}</span>
              </li>
              <li className="list-item">
                <span className="component6-text28">{props.text12}</span>
              </li>
              <li className="list-item">
                <span className="component6-text29">{props.text13}</span>
              </li>
            </ul>
            <span className="component6-text30">{props.text1}</span>
            <ul className="component6-ul3 list">
              <li className="list-item">
                <span className="component6-text31">{props.text14}</span>
              </li>
              <li className="list-item">
                <span className="component6-text32">{props.text15}</span>
              </li>
              <li className="list-item">
                <span className="component6-text33">{props.text16}</span>
              </li>
            </ul>
            <span className="component6-text34">{props.text2}</span>
            <span className="component6-text35">
              <span className="component6-text36">Important note:</span>
              <span>
                {' '}
                If the police refer charges to the prosecutor, and the
                prosecutor declines to file charges or slow-walks your case,
                individuals still retain the right to pursue legal action
                through a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="component6-text38">
                private criminal proceeding
              </span>
              <span>.</span>
            </span>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .component6-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .component6-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .component6-text {
            width: 75%;
            font-size: 2rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-link {
            text-decoration: underline;
          }
          .component6-link1 {
            text-decoration: underline;
          }
          .component6-link2 {
            text-decoration: underline;
          }
          .component6-ul {
            width: 60%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            list-style-type: disc;
          }
          .component6-text05 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text06 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text07 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text08 {
            width: 75%;
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-ul1 {
            width: 60%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            list-style-type: disc;
          }
          .component6-li03 {
            font-size: 16px;
            font-family: 'Lora';
            list-style-type: disc;
          }
          .component6-text12 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-li04 {
            font-size: 16px;
            font-family: 'Lora';
          }
          .component6-text13 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text14 {
            width: 75%;
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text16 {
            font-style: italic;
            font-weight: 200;
          }
          .component6-text18 {
            font-style: italic;
            font-weight: 300;
          }
          .component6-text20 {
            font-style: normal;
            font-weight: 300;
          }
          .component6-text21 {
            font-style: italic;
            font-weight: 200;
          }
          .component6-text23 {
            width: 75%;
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .component6-ul2 {
            width: 65%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            list-style-type: disc;
          }
          .component6-text24 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text25 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text26 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text27 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text28 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text29 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text30 {
            width: 75%;
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .component6-ul3 {
            width: 65%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            list-style-type: disc;
          }
          .component6-text31 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text32 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text33 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text34 {
            width: 75%;
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text35 {
            width: 75%;
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .component6-text36 {
            font-style: italic;
            font-weight: 200;
          }
          .component6-text38 {
            font-style: italic;
            font-weight: 300;
          }
          @media (max-width: 1600px) {
            .component6-text18 {
              font-style: italic;
              font-weight: 300;
            }
            .component6-text20 {
              font-style: italic;
              font-weight: 300;
            }
            .component6-text21 {
              font-style: italic;
              font-weight: 300;
            }
          }
          @media (max-width: 767px) {
            .component6-text {
              width: 90%;
            }
            .component6-ul {
              width: 80%;
            }
            .component6-text08 {
              width: 90%;
            }
            .component6-ul1 {
              width: 80%;
            }
            .component6-text14 {
              width: 90%;
            }
            .component6-text23 {
              width: 90%;
            }
            .component6-ul2 {
              width: 80%;
            }
            .component6-text30 {
              width: 90%;
            }
            .component6-ul3 {
              width: 80%;
            }
            .component6-text34 {
              width: 90%;
            }
            .component6-text35 {
              width: 90%;
            }
          }
          @media (max-width: 479px) {
            .component6-text {
              width: 90%;
            }
            .component6-ul {
              width: 80%;
            }
            .component6-ul1 {
              width: 80%;
            }
            .component6-text14 {
              width: 90%;
            }
            .component6-ul2 {
              width: 80%;
            }
            .component6-ul3 {
              width: 80%;
            }
            .component6-text34 {
              width: 90%;
            }
            .component6-text35 {
              width: 90%;
            }
          }
        `}
      </style>
    </>
  )
}

Component6.defaultProps = {
  text4:
    'The police will conduct an investigation and refer the case to the Crown Prosecution Service (in the U.K.) or the local prosecutor (in the U.S.A.).',
  button3: 'Button',
  text9:
    'The court will undertake an initial evaluation to review the merits of the case.',
  text10:
    'If the case is deemed to have legal merit, the court will authorize the continuation of the legal proceedings.',
  text2:
    " The police are subject to budget constraints; thus, if an investigation is deemed lengthy, costly, and the crime is not considered severe (non-violent), they may not refer the case to the prosecutor or conduct a thorough investigation. In such cases, it's more likely than not that they will allocate minimal resources. ",
  text8:
    'Ask a lawyer to submit a criminal complaint to the appropriate court.',
  text: 'Process for Self-Initiated Filing:',
  text16: 'Wait for the prosecutor to file criminal charges.',
  text11:
    'In instances where the injured party is a minor or otherwise incapacitated, a guardian or parent often assumes the right to initiate legal action on their behalf.',
  text3: 'Lodge a formal complaint with the police.',
  text5:
    'Subsequently, the prosecutor in both jurisdictions will determine whether to file criminal charges based on the specific merits of the case. ',
  button2: 'Button',
  text15: 'Allow the police time to conduct an investigation.',
  text1: 'Process for Filing with the Police:',
  text13:
    'Complaints against individuals for defamation, fraud, misappropriation, mischief, and other compoundable offenses must be lodged within three months from the date the offense and the offender were known to the claimant.',
  text7:
    'Alternatively, individuals can instigate criminal proceedings themselves, often with the aid of legal representation.',
  text12:
    'In cases involving a deceased or incapacitated victim, a family member may commence the criminal proceeding by petitioning the court.',
  button1: 'Button',
  text14: 'Lodge a formal complaint at the local police station in Thailand.',
  text6:
    'Lodge a complaint with the police, who will conduct an investigation and subsequently refer the case to the state prosecutor.',
  button: 'Button',
}

Component6.propTypes = {
  text4: PropTypes.string,
  button3: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  text16: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  button2: PropTypes.string,
  text15: PropTypes.string,
  text1: PropTypes.string,
  text13: PropTypes.string,
  text7: PropTypes.string,
  text12: PropTypes.string,
  button1: PropTypes.string,
  text14: PropTypes.string,
  text6: PropTypes.string,
  button: PropTypes.string,
}

export default Component6
