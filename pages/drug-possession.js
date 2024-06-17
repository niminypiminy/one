import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const DrugPossession = (props) => {
  return (
    <>
      <div className="drug-possession-container">
        <Head>
          <title>Drug-Possession - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Drug-Possession - Danneskiold &amp; Associates | Law Firm "
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/5631a551-dd96-44ef-935a-e149f868456e?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name15"></Navbar>
        <div className="drug-possession-blog-post-header3 thq-section-padding">
          <div className="drug-possession-max-width thq-section-max-width">
            <div className="drug-possession-breadcrumbs">
              <span className="drug-possession-category thq-body-small">
                Criminal Law
              </span>
            </div>
            <div className="drug-possession-content thq-flex-column">
              <h1 className="drug-possession-title thq-heading-1">
                Drug Possession
              </h1>
              <span className="drug-possession-read-time thq-body-small">
                5 min read
              </span>
              <div className="drug-possession-content1">
                <img
                  alt="PlaceholderImage3501"
                  src="/android-chrome-512x512-1400w.png"
                  className="drug-possession-author-image thq-img-round thq-img-ratio-1-1"
                />
                <div className="drug-possession-author">
                  <span className="drug-possession-text thq-body-small">
                    Written by
                  </span>
                  <span className="drug-possession-text01 thq-body-small">
                    Uilliam
                  </span>
                </div>
                <div className="drug-possession-time">
                  <span className="drug-possession-date thq-body-small">
                    09 June 2024
                  </span>
                </div>
                <div className="drug-possession-container1">
                  <Link href="/drug-possession">
                    <a className="drug-possession-link">
                      <img
                        alt="image"
                        src="/united-kingdom-200h.png"
                        className="drug-possession-image"
                      />
                    </a>
                  </Link>
                  <Link href="/drug-possession-thailand">
                    <a className="drug-possession-link1">
                      <img
                        alt="image"
                        src="/thailand-200h.png"
                        className="drug-possession-image1"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drug-possession-container2 open1">
          <span className="drug-possession-text02">
            <span>
              Thailand has enacted a new drug law, namely the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="drug-possession-text04">
              Narcotics Code of 2021
            </span>
            <span>
              , which brings together various laws related to drugs into one
              category. This new law, unlike the old one, introduces a new
              approach to drug possession, whereby offenders taking drugs for
              personal use are given mandatory medical treatment as opposed to
              jail time.
            </span>
            <br></br>
            <br></br>
            <span className="drug-possession-text08">Drug possession</span>
            <br></br>
          </span>
          <ul className="drug-possession-ul list">
            <li className="drug-possession-li list-item">
              <span className="drug-possession-text10">
                <span className="drug-possession-text11">Category 1:</span>
                <span className="drug-possession-text12">
                  {' '}
                  Serious drugs such as heroin, methamphetamine, ecstasy, and
                  ice.
                </span>
              </span>
            </li>
            <li className="drug-possession-li1 list-item">
              <span className="drug-possession-text13">
                <span className="drug-possession-text14">Category 2:</span>
                <span className="drug-possession-text15">
                  {' '}
                  General narcotics, such as morphine, cocaine, codeine, and
                  opium.
                </span>
              </span>
            </li>
            <li className="drug-possession-li2 list-item">
              <span className="drug-possession-text16">
                <span className="drug-possession-text17">Category 3</span>
                <span className="drug-possession-text18">
                  : Narcotics with characteristics of prescription drugs and
                  containing narcotics from Type 2.
                </span>
              </span>
            </li>
            <li className="drug-possession-li3 list-item">
              <span className="drug-possession-text19">
                <span className="drug-possession-text20">Category 4:</span>
                <span className="drug-possession-text21">
                  {' '}
                  Chemical substances used in the production of Type 1 or Type 2
                  narcotics, such as acetic anhydride and acetyl chloride.
                </span>
              </span>
            </li>
            <li className="drug-possession-li4 list-item">
              <span className="drug-possession-text22">
                <span className="drug-possession-text23">Category 5:</span>
                <span className="drug-possession-text24">
                  {' '}
                  Narcotics not classified under Type 1 to Type 4, such as
                  mushrooms and cannabis plants. Under the old law cannabis was
                  previously classified as a Type 5 narcotic, however this is no
                  longer the case unless the extracts containing THC exceed 0.2%
                </span>
              </span>
            </li>
          </ul>
          <span className="drug-possession-text25">
            Offenses Related to Drug Possession
          </span>
          <span className="drug-possession-text26">
            Under the new Narcotics Act, drug possession offenses are divided
            into &quot;possession for personal use,&quot; which is considered a
            general offense, and &quot;possession for trafficking,&quot;
            considered a severe offense. Possession of Type 1, Type 2, or Type 5
            narcotics in small quantities as specified by ministerial
            regulations, such as possessing heroin not exceeding 300 milligrams
            or methamphetamine not exceeding 5 pills, is presumed to be for
            personal use. However, even possessing small quantities of narcotics
            can lead to prosecution for trafficking if intent to distribute can
            be proven.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="drug-possession-text27">
            Penalties for Distribution
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <ul className="drug-possession-ul1 list">
            <li className="drug-possession-li5 list-item">
              <span className="drug-possession-text28">
                <span className="drug-possession-text29">
                  Type 1 Narcotics:
                </span>
                <span>
                  {' '}
                  Imprisonment for up to 15 years and a fine of up to 1,500,000
                  baht.
                </span>
              </span>
            </li>
            <li className="drug-possession-li6 list-item">
              <span className="drug-possession-text31">
                <span className="drug-possession-text32">
                  Type 2 and Type 4 Narcotics:
                </span>
                <span>
                  {' '}
                  Imprisonment for up to 10 years and a fine of up to 1,000,000
                  baht.
                </span>
              </span>
            </li>
            <li className="drug-possession-li7 list-item">
              <span className="drug-possession-text34">
                <span className="drug-possession-text35">
                  Type 5 Narcotics:
                </span>
                <span>
                  {' '}
                  Imprisonment for up to 5 years and a fine of up to 500,000
                  baht.
                </span>
              </span>
            </li>
          </ul>
          <span className="drug-possession-text37">
            <span>
              As the new Narcotics Act focuses on addressing drug addiction
              through rehabilitation rather than punitive measures, individuals
              found in possession for personal use may opt for treatment at
              designated drug rehabilitation centers to avoid prosecution. This
              approach aims to provide drug users with opportunities for
              rehabilitation and recovery instead of facing criminal charges.
              However, failure to seek treatment may lead to prosecution for
              possession for personal use. If you have further questions
              regarding drug possession offenses, feel free to contact us.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <br></br>
          </span>
        </div>
        <div className="drug-possession-container3">
          <Link href="/contact">
            <a className="drug-possession-link2">
              <h1 className="drug-possession-text42">Contact</h1>
            </a>
          </Link>
        </div>
        <Footer1 rootClassName="footer1-root-class-name24"></Footer1>
      </div>
      <style jsx>
        {`
          .drug-possession-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .drug-possession-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .drug-possession-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .drug-possession-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .drug-possession-category {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .drug-possession-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .drug-possession-title {
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .drug-possession-read-time {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .drug-possession-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .drug-possession-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-unit);
          }
          .drug-possession-author {
            gap: var(--dl-space-space-halfunit);
            display: flex;
          }
          .drug-possession-text {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-text01 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .drug-possession-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .drug-possession-date {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .drug-possession-link {
            display: contents;
          }
          .drug-possession-image {
            width: 32px;
            height: 32px;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .drug-possession-link1 {
            display: contents;
          }
          .drug-possession-image1 {
            width: 32px;
            height: 32px;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .drug-possession-container2 {
            width: 60%;
          }
          .drug-possession-text02 {
            width: 75%;
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-text04 {
            font-style: italic;
            font-weight: 300;
          }
          .drug-possession-text08 {
            font-style: normal;
            font-weight: 400;
          }
          .drug-possession-ul {
            width: 70%;
            list-style-type: disc;
          }
          .drug-possession-li {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
          }
          .drug-possession-text10 {
            font-size: 1.5rem;
            font-weight: 200;
          }
          .drug-possession-text11 {
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .drug-possession-text12 {
            font-style: normal;
          }
          .drug-possession-li1 {
            font-size: 1.5rem;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Josefin Sans';
            margin-bottom: var(--dl-space-space-unit);
          }
          .drug-possession-text13 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-text14 {
            font-weight: 300;
          }
          .drug-possession-text15 {
            font-style: normal;
            font-weight: 200;
          }
          .drug-possession-li2 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
          }
          .drug-possession-text16 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-text17 {
            font-weight: 300;
          }
          .drug-possession-text18 {
            font-style: normal;
            font-weight: 200;
          }
          .drug-possession-li3 {
            font-size: 1.5rem;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Josefin Sans';
            margin-bottom: var(--dl-space-space-unit);
          }
          .drug-possession-text19 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-text20 {
            font-weight: 300;
          }
          .drug-possession-text21 {
            font-style: normal;
            font-weight: 200;
          }
          .drug-possession-li4 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
          }
          .drug-possession-text22 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-text23 {
            font-weight: 300;
          }
          .drug-possession-text24 {
            font-style: normal;
            font-weight: 200;
          }
          .drug-possession-text25 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            font-family: 'Josefin Sans';
            font-weight: 400;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .drug-possession-text26 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-text27 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            font-family: 'Josefin Sans';
            font-weight: 400;
            margin-bottom: 0px;
          }
          .drug-possession-ul1 {
            width: 70%;
            list-style-type: disc;
          }
          .drug-possession-li5 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
          }
          .drug-possession-text28 {
            font-weight: 200;
          }
          .drug-possession-text29 {
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .drug-possession-li6 {
            font-size: 1.5rem;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Josefin Sans';
            margin-bottom: var(--dl-space-space-unit);
          }
          .drug-possession-text31 {
            font-weight: 200;
          }
          .drug-possession-text32 {
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .drug-possession-li7 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
          }
          .drug-possession-text34 {
            font-weight: 200;
          }
          .drug-possession-text35 {
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .drug-possession-text37 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .drug-possession-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .drug-possession-link2 {
            display: contents;
          }
          .drug-possession-text42 {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-halfunit);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .drug-possession-text42:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          @media (max-width: 1200px) {
            .drug-possession-container2 {
              width: 80%;
            }
            .drug-possession-text02 {
              width: 90%;
            }
            .drug-possession-ul {
              width: 90%;
            }
            .drug-possession-text25 {
              width: 90%;
            }
            .drug-possession-text26 {
              width: 90%;
            }
            .drug-possession-ul1 {
              width: 90%;
            }
            .drug-possession-text37 {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .drug-possession-text42 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .drug-possession-text42 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default DrugPossession
