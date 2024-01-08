import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const TaxLaw = (props) => {
  return (
    <>
      <div className="tax-law-container">
        <Head>
          <title>Tax-Law - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:title"
            content="Tax-Law - Danneskiold &amp; Associates"
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/b54c7d9e-85ad-41bf-8d00-bf6410be3d15?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="tax-law-container1">
          <div className="tax-law-container2">
            <div className="tax-law-container3">
              <h1 className="tax-law-text">Tax Law</h1>
              <span className="tax-law-text1">
                We advise clients on the tax consequences of specific
                transactions, prepare and file tax reports, represent our
                clients during audits, collections and appeals, and if necessary
                litigate disputes over tax related matters. 
              </span>
              <Link href="/contact">
                <a className="tax-law-link">
                  <h1 className="tax-law-text2">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="tax-law-container4">
            <img
              alt="image"
              src="/taxlaw-min-600w.jpg"
              className="tax-law-image"
            />
          </div>
        </div>
        <footer className="tax-law-footer">
          <span className="tax-law-text3">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .tax-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tax-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tax-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .tax-law-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .tax-law-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .tax-law-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .tax-law-link {
            display: contents;
          }
          .tax-law-text2 {
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
          .tax-law-text2:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .tax-law-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .tax-law-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .tax-law-image:hover {
            transform: scale(1.2);
          }
          .tax-law-footer {
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .tax-law-text3 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .tax-law-text1 {
              font-size: 1.5rem;
              line-height: 1.15em;
            }
            .tax-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
          }
          @media (max-width: 1200px) {
            .tax-law-container4 {
              width: 40%;
            }
            .tax-law-image {
              width: 90%;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .tax-law-container2 {
              width: 80%;
            }
            .tax-law-text {
              text-align: center;
            }
            .tax-law-text1 {
              text-align: left;
            }
            .tax-law-container4 {
              display: none;
            }
            .tax-law-image {
              width: 100%;
              display: none;
            }
          }
          @media (max-width: 767px) {
            .tax-law-container2 {
              width: 100%;
            }
            .tax-law-container3 {
              align-self: center;
            }
            .tax-law-text1 {
              text-align: left;
            }
            .tax-law-image {
              width: 100%;
            }
            .tax-law-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .tax-law-text3 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .tax-law-container2 {
              height: 100%;
            }
            .tax-law-container3 {
              width: 80%;
            }
            .tax-law-text {
              width: 100%;
              max-width: 100%;
              text-align: left;
            }
            .tax-law-text1 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .tax-law-text2 {
              align-self: flex-start;
            }
            .tax-law-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .tax-law-text3 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default TaxLaw
