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
              <p className="about-us-text01 thq-body-large">
                <span>
                  At Danneskiold &amp; Associates LP, we&apos;re dedicated to
                  delivering practical, effective, and affordable legal
                  solutions tailored to our clients&apos; needs. Unlike many
                  firms in Thailand&apos;s legal market, we pride ourselves on
                  our direct client relationships and commitment to integrity.
                </span>
                <br></br>
                <br></br>
                <span>
                  While some firms act as intermediaries, outsourcing cases to
                  lawyers at inflated costs, we operate differently. We believe
                  in transparency and value, offering a flat-rate fee structure
                  that applies equally to all clients, whether domestic or
                  foreign. Additionally, your case is always handled in-house,
                  ensuring personalized attention and expertise every step of
                  the way.
                </span>
                <br></br>
                <br></br>
                <span>
                  Unlike business service firms, who focus on conversion rate
                  optimization, we&apos;re an actual law firm focused on winning
                  cases. We handle a diverse range of legal matters,
                  encompassing both individual and corporate needs. And you can
                  be confident in knowing that we offer tangible results, not
                  empty promises, Our firm only takes on cases where we can
                  deliver genuine value.
                </span>
                <br></br>
                <br></br>
                <span>
                  For additional information, please contact us. Our team will
                  endeavor to respond as soon as humanly possible. Generally,
                  within the hour unless we&apos;re in court. 
                </span>
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
          <div className="about-us-content1">
            <div className="about-us-row">
              <img
                alt="Law firm building in Southeast Asia"
                src="/images%20(1)-1500w.jpg"
                className="about-us-placeholder-image thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/download-1500w.jpg"
                className="about-us-placeholder-image01 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/images%20(2)-1500w.jpg"
                className="about-us-placeholder-image02 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/thomas-jefferson-hulton-archive-1500w.jpg"
                className="about-us-placeholder-image03 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/71fatprz66l._ac_uf894%2C1000_ql80_-1500w.jpg"
                className="about-us-placeholder-image04 thq-img-ratio-1-1"
              />
            </div>
            <div className="about-us-row1">
              <img
                alt="Hero Image"
                src="/albert_venn_dicey_in_academic_robes-1500w.jpg"
                className="about-us-placeholder-image05 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/images%20(1)1-1500w.jpg"
                className="about-us-placeholder-image06 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/images%20(2)1-1500w.jpg"
                className="about-us-placeholder-image07 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/images-1500w.jpg"
                className="about-us-placeholder-image08 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/images1-1500w.jpg"
                className="about-us-placeholder-image09 thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="/istockphoto-1250276068-612x612-1500w.jpg"
                className="about-us-placeholder-image10 thq-img-ratio-1-1"
              />
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
            font-size: 2.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .about-us-text01 {
            width: auto;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .about-us-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .about-us-row {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .about-us-placeholder-image {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image01 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image02 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image03 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image04 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-row1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .about-us-placeholder-image05 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image06 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image07 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image08 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image09 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-us-placeholder-image10 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
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
            .about-us-content1 {
              width: 100%;
            }
            .about-us-row {
              width: 100%;
              flex-direction: column;
            }
            .about-us-placeholder-image {
              width: 100%;
            }
            .about-us-placeholder-image01 {
              width: 100%;
            }
            .about-us-placeholder-image02 {
              width: 100%;
            }
            .about-us-placeholder-image03 {
              width: 100%;
            }
            .about-us-placeholder-image04 {
              width: 100%;
            }
            .about-us-row1 {
              width: 100%;
              display: none;
              flex-direction: column;
            }
            .about-us-placeholder-image05 {
              width: 100%;
            }
            .about-us-placeholder-image06 {
              width: 100%;
            }
            .about-us-placeholder-image07 {
              width: 100%;
            }
            .about-us-placeholder-image08 {
              width: 100%;
            }
            .about-us-placeholder-image09 {
              width: 100%;
            }
            .about-us-placeholder-image10 {
              width: 100%;
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
