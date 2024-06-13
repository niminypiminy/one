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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/5631a551-dd96-44ef-935a-e149f868456e?org_if_sml=1&amp;force_format=original"
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
              <span className="contract-law-text08"> </span>
              <span>them.</span>
            </h2>
            <p className="contract-law-text10 thq-body-large">
              While many lawyers are willing to draft contracts for clients, not
              all are equipped to effectively enforce the terms of the
              agreement. Businesses engaged in the exchange of goods and
              services require legal representation that is committed to
              upholding and enforcing contractual obligations.
            </p>
          </div>
        </div>
        <div className="contract-law-container5">
          <div className="contract-law-column thq-section-padding">
            <div className="contract-law-content">
              <h1 className="contract-law-heading1 thq-heading-1">
                Be wary of business service firms marketing themselves as law
                firms. 
              </h1>
              <p className="contract-law-content1 thq-body-large">
                Business service firms may offer you contract drafting
                assistance, company formation services, and other legal
                services, but they are not doing the work themselves. They
                subcontract legal tasks to established law firms such as ours. A
                significant red flag indicating that a firm is not a bona fide
                law firm is if they promote themselves as being registered under
                the BOI. It is important to note that law firms cannot
                registered under the BOI; rather; these entities tend to levy
                excessive fees on their clients, acting as a middleman between
                yourself and the law firm.
              </p>
              <div className="contract-law-actions"></div>
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
            background-color: var(--dl-color-theme-accent1);
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
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
            background-color: var(--dl-color-theme-primary2);
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
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-primary2);
          }
          .contract-law-text08 {
            color: var(--dl-color-theme-neutral-light);
          }
          .contract-law-text10 {
            width: 50%;
            z-index: 2;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .contract-law-container5 {
            width: 50%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
          }
          .contract-law-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            height: 100%;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
            background-color: #521e01;
          }
          .contract-law-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contract-law-heading1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .contract-law-content1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .contract-law-actions {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
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
            .contract-law-container5 {
              width: 75%;
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
            .contract-law-content {
              gap: var(--dl-space-space-oneandhalfunits);
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
            .contract-law-container5 {
              width: 90%;
            }
            .contract-law-heading1 {
              text-align: center;
            }
            .contract-law-content1 {
              text-align: center;
            }
            .contract-law-actions {
              width: 100%;
              justify-content: center;
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
            .contract-law-heading1 {
              text-align: center;
            }
            .contract-law-content1 {
              text-align: center;
            }
            .contract-law-actions {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContractLaw
