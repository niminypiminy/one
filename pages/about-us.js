import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-us - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="About-us - Danneskiold &amp; Associates | Law Firm "
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/8e5f1e02-471e-46a9-8f50-e3f10d72f098?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name17"></Navbar>
        <div className="about-us-header78">
          <div className="about-us-column thq-section-max-width thq-section-padding">
            <div className="about-us-content">
              <h1 className="about-us-text thq-heading-1">About us</h1>
              <p className="about-us-text1 thq-body-large">
                <span>
                  At Danneskiold &amp; Associates LP, we focus on providing
                  practical, effective, and affordable legal solutions. Our team
                  of experienced attorneys have a proven track record of
                  success, and we&apos;re proud of our reputation for being
                  fierce advocates who fight tirelessly to protect our
                  clients&apos; rights and interests. Unlike many law firms, we
                  focus on tangible results, not empty promises.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  We respond promptly to all
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/contact">
                  <a className="about-us-link">inquiries</a>
                </Link>
                <span>
                  , usually within the hour, unless we&apos;re in court.
                </span>
              </p>
            </div>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name26"></Footer1>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .about-us-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-us-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-us-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-us-text {
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .about-us-text1 {
            width: auto;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .about-us-link {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .about-us-column {
              width: 75%;
            }
          }
          @media (max-width: 991px) {
            .about-us-column {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .about-us-header78 {
              width: 100%;
              padding: var(--dl-space-space-threeunits);
            }
            .about-us-column {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .about-us-header78 {
              margin-right: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-column {
              width: 100%;
              max-width: auto;
              margin-top: var(--dl-space-space-unit);
            }
            .about-us-content {
              width: auto;
            }
            .about-us-text1 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
