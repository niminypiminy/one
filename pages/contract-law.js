import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const ContractLaw = (props) => {
  return (
    <>
      <div className="contract-law-container">
        <Head>
          <title>Contract-Law - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Contract-Law - Danneskiold &amp; Associates | Law Firm "
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/b54c7d9e-85ad-41bf-8d00-bf6410be3d15?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="contract-law-container1">
          <div className="contract-law-container2">
            <img
              alt="image"
              src="/designer-600w.jpeg"
              className="contract-law-image"
            />
          </div>
          <div className="contract-law-container3">
            <div className="contract-law-container4">
              <h1 className="contract-law-text">Contract Law</h1>
              <span className="contract-law-text01">
                Our firm has extensive experience in the drafting and
                enforcement of contracts across various business sectors,
                including but not limited to real estate acquisitions,
                intellectual property, labor and employment, settlements,
                service agreements, purchase agreements, and sale of goods
                agreements.
              </span>
              <Link href="/contact">
                <a className="contract-law-link">
                  <h1 className="contract-law-text02">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="contract-law-layout186 thq-section-padding">
          <div className="thq-section-max-width thq-flex-column">
            <h2 className="contract-law-text03 thq-heading-2">
              <span>
                We don&apos;t just write contracts.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>We </span>
              <span className="contract-law-text07">enforce</span>
              <span> them.</span>
            </h2>
            <p className="contract-law-text09 thq-body-large">
              While many lawyers are willing to draft contracts for clients, not
              all are equipped to effectively enforce the terms of the
              agreement. Businesses engaged in the exchange of goods and
              services require legal representation that is committed to
              upholding and enforcing contractual obligations.
            </p>
          </div>
        </div>
        <div className="contract-law-container5">
          <img
            alt="PlaceholderImage1314"
            src="/designer%20(1)-600w.jpeg"
            className="contract-law-image1"
          />
        </div>
        <div className="contract-law-container6 thq-section-padding">
          <div className="contract-law-max-width1 thq-section-max-width">
            <div className="contract-law-content">
              <h2 className="contract-law-heading1 thq-heading-2">
                Be wary of business service firms in Thailand, who market
                themselves as law firms. 
              </h2>
              <p className="contract-law-content1 thq-body-large">
                <span>
                  Business service firms typically concentrate on marketing and
                  advertising strategies to appeal to a broad clientele.
                  Although they may offer contract drafting assistance, they
                  frequently subcontract legal tasks to established law firms
                  such as ours. A significant red flag indicating that a firm is
                  not a bona fide law firm is if they promote themselves as
                  being
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contract-law-text11">
                  registered under the BOI.
                </span>
                <span>
                  {' '}
                  It is important to note that the BOI does not register law
                  firms; rather, it registers business service firms. Many of
                  these entities tend to levy excessive fees on their clients.
                  It is advisable to opt for local rates instead of paying
                  inflated rates.
                </span>
              </p>
            </div>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name19"></Footer1>
      </div>
      <style jsx>
        {`
          .contract-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contract-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contract-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contract-law-image {
            width: 80%;
            height: auto;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
          }
          .contract-law-image:hover {
            transform: scale(1.2);
          }
          .contract-law-container3 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contract-law-container4 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contract-law-text {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 2.5rem;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .contract-law-text01 {
            width: 85%;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contract-law-link {
            display: contents;
          }
          .contract-law-text02 {
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
          .contract-law-text02:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .contract-law-layout186 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .contract-law-text03 {
            z-index: 2;
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .contract-law-text07 {
            background-color: rgb(255, 255, 0);
          }
          .contract-law-text09 {
            width: 50%;
            z-index: 2;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .contract-law-container5 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
          }
          .contract-law-image1 {
            flex: 1;
            width: 40%;
            height: 100%;
          }
          .contract-law-container6 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .contract-law-max-width1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .contract-law-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contract-law-heading1 {
            width: 60%;
            font-size: 2rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .contract-law-content1 {
            width: 60%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .contract-law-text11 {
            font-style: italic;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .contract-law-container1 {
              height: 100vh;
            }
            .contract-law-image {
              width: 80%;
              height: auto;
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .contract-law-text {
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .contract-law-text01 {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .contract-law-container2 {
              width: 40%;
            }
            .contract-law-image {
              width: 80%;
            }
            .contract-law-container4 {
              width: 95%;
            }
            .contract-law-text01 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .contract-law-container2 {
              display: none;
            }
            .contract-law-image {
              order: 2;
              width: 100%;
            }
            .contract-law-container3 {
              width: 80%;
            }
            .contract-law-text01 {
              text-align: left;
            }
            .contract-law-container5 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contract-law-image {
              width: 100%;
            }
            .contract-law-container3 {
              width: 100%;
            }
            .contract-law-container4 {
              width: 90%;
              align-self: center;
            }
            .contract-law-text {
              align-self: center;
              text-align: left;
            }
            .contract-law-text01 {
              width: 100%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              padding-left: var(--dl-space-space-halfunit);
            }
            .contract-law-text02 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .contract-law-image {
              width: 100%;
            }
            .contract-law-container4 {
              width: 80%;
              height: 100%;
            }
            .contract-law-text {
              width: 100%;
              text-align: left;
            }
            .contract-law-text01 {
              width: 100%;
              font-size: 1.5rem;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .contract-law-text02 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContractLaw
