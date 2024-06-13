import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import FAQ84 from '../components/faq84'
import Footer1 from '../components/footer1'

const CriminalLaw = (props) => {
  return (
    <>
      <div className="criminal-law-container">
        <Head>
          <title>Eireahmon Ruaidhri | Criminal Law</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Eireahmon Ruaidhri | Criminal Law"
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
        <Navbar></Navbar>
        <div className="criminal-law-container1">
          <div className="criminal-law-container2">
            <div className="criminal-law-container3">
              <h1 className="criminal-law-text">Criminal Law</h1>
              <span className="criminal-law-text01">
                Our team of trial attorneys have a proven track record of
                success. We will provide you with expert guidance throughout the
                legal process, prioritize your well-being, and vigorously defend
                your rights at every stage.
              </span>
              <Link href="/contact">
                <a className="criminal-law-link">
                  <h1 className="criminal-law-text02">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="criminal-law-container4">
            <img
              alt="image"
              src="/criminal%20law-600w.jpg"
              className="criminal-law-image"
            />
          </div>
        </div>
        <div className="criminal-law-header9">
          <img
            alt="Hero Image"
            src="/oig2-1500h.jpg"
            className="criminal-law-placeholder-image thq-img-ratio-16-9"
          />
        </div>
        <div className="criminal-law-container5 thq-section-padding">
          <div className="criminal-law-max-width thq-section-max-width">
            <div className="criminal-law-container6 thq-flex-row">
              <h2 className="criminal-law-text03 thq-heading-2">
                File Criminal Charges
              </h2>
              <div className="criminal-law-content">
                <p className="criminal-law-text04 thq-body-large">
                  <span>
                    If you&apos;re interested in learning more about a private
                    criminal proceeding, then please click
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/criminal-proceedings">
                    <a className="criminal-law-link1">here</a>
                  </Link>
                  <span>
                    , or
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    contact us
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/contact">
                    <a className="criminal-law-link2">here</a>
                  </Link>
                  <span>. </span>
                  <br></br>
                </p>
                <div className="criminal-law-actions"></div>
              </div>
            </div>
          </div>
        </div>
        <FAQ84></FAQ84>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .criminal-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .criminal-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .criminal-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .criminal-law-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .criminal-law-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .criminal-law-text01 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .criminal-law-link {
            display: contents;
          }
          .criminal-law-text02 {
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
          .criminal-law-text02:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-theme-primary2);
          }
          .criminal-law-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .criminal-law-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            margin-right: 0px;
          }
          .criminal-law-header9 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .criminal-law-placeholder-image {
            height: 150vh;
            opacity: 0.9;
          }
          .criminal-law-container5 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .criminal-law-max-width {
            gap: 80px;
            width: 75%;
            height: auto;
            display: flex;
            z-index: 100;
            overflow: hidden;
            max-width: auto;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .criminal-law-container6 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .criminal-law-text03 {
            width: auto;
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            background-color: var(--dl-color-theme-accent2);
          }
          .criminal-law-content {
            gap: 24px;
            width: 616px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .criminal-law-text04 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .criminal-law-link1 {
            text-decoration: underline;
          }
          .criminal-law-link2 {
            text-decoration: underline;
          }
          .criminal-law-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 1600px) {
            .criminal-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
            .criminal-law-max-width {
              width: 80%;
            }
          }
          @media (max-width: 1200px) {
            .criminal-law-container4 {
              width: 40%;
            }
            .criminal-law-image {
              width: 90%;
              margin-right: 0px;
            }
            .criminal-law-placeholder-image {
              height: 100vh;
            }
            .criminal-law-container5 {
              height: auto;
            }
            .criminal-law-max-width {
              width: auto;
            }
          }
          @media (max-width: 991px) {
            .criminal-law-container1 {
              height: 75vh;
            }
            .criminal-law-container2 {
              width: 80%;
            }
            .criminal-law-text {
              text-align: center;
            }
            .criminal-law-container4 {
              display: none;
            }
            .criminal-law-image {
              width: 100%;
              display: none;
            }
            .criminal-law-placeholder-image {
              height: 75vh;
            }
          }
          @media (max-width: 767px) {
            .criminal-law-container1 {
              height: 75vh;
            }
            .criminal-law-container2 {
              width: 100%;
            }
            .criminal-law-container3 {
              align-self: center;
            }
            .criminal-law-text {
              align-self: flex-start;
              text-align: center;
            }
            .criminal-law-text01 {
              text-align: left;
            }
            .criminal-law-text02 {
              align-self: flex-start;
            }
            .criminal-law-image {
              width: 100%;
            }
            .criminal-law-placeholder-image {
              height: 75vh;
            }
            .criminal-law-container6 {
              gap: var(--dl-space-space-threeunits);
            }
            .criminal-law-content {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .criminal-law-container1 {
              height: 75vh;
            }
            .criminal-law-container2 {
              height: 100%;
            }
            .criminal-law-container3 {
              width: 80%;
            }
            .criminal-law-text {
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .criminal-law-text01 {
              width: 100%;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .criminal-law-text02 {
              align-self: flex-start;
            }
            .criminal-law-placeholder-image {
              width: 100%;
              height: 50vh;
            }
            .criminal-law-container5 {
              height: 40vh;
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .criminal-law-container6 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default CriminalLaw
