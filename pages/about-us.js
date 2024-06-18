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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/5631a551-dd96-44ef-935a-e149f868456e?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name17"></Navbar>
        <div className="about-us-header78">
          <div className="about-us-column thq-section-max-width thq-section-padding">
            <div className="about-us-content">
              <h1 className="about-us-text thq-heading-1">About us</h1>
              <p className="about-us-text1 thq-body-large">
                At Danneskiold &amp; Associates LP, we are dedicated to
                delivering practical, effective, and affordable legal solutions
                tailored to our clients needs. Unlike business service firms
                that act as intermediaries between lawyers and clients and focus
                on conversion rate optimization, we are a law firm dedicated to
                winning cases. We handle a diverse range of legal matters,
                catering to both individual and corporate needs, and we deliver
                tangible results, not empty promises. We take on cases only when
                we can provide genuine value. Additionally, your case is always
                handled in-house, ensuring personalized attention and expertise
                every step of the way. For more information, please contact us.
                Our team strives to respond as promptly as possible, typically
                within the hour unless we are in court.
              </p>
            </div>
            <div className="about-us-actions">
              <Link href="/contact">
                <a className="about-us-link thq-button-outline">
                  <span className="thq-body-small">Contact Us</span>
                </a>
              </Link>
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
          .about-us-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .about-us-link {
            padding: var(--dl-space-space-oneandhalfunits);
            margin-top: var(--dl-space-space-unit);
            text-decoration: none;
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
              padding: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .about-us-header78 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-actions {
              width: 100%;
              flex-direction: column;
            }
            .about-us-link {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
