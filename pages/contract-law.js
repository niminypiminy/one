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
          <title>Contract-Law - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Contract-Law - Danneskiold &amp; Associates"
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
              src="/contractlaw-min-600w.jpg"
              className="contract-law-image"
            />
          </div>
          <div className="contract-law-container3">
            <div className="contract-law-container4">
              <h1 className="contract-law-text">Contract Law</h1>
              <span className="contract-law-text1">
                Our team can negotiate, review, draft, and enforce contracts for
                a wide range of business activities, such as real estate
                acquisitions, intellectual property, labor and employment,
                settlements, service agreements, purchase agreements, and sale
                of goods agreements.
              </span>
              <Link href="/contact">
                <a className="contract-law-link">
                  <h1 className="contract-law-text2">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer1></Footer1>
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
          .contract-law-text1 {
            width: 85%;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contract-law-link {
            display: contents;
          }
          .contract-law-text2 {
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
          .contract-law-text2:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
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
            .contract-law-text1 {
              width: 100%;
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
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
            .contract-law-text1 {
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
            .contract-law-text1 {
              text-align: left;
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
            .contract-law-text1 {
              width: 100%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              padding-left: var(--dl-space-space-halfunit);
            }
            .contract-law-text2 {
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
            .contract-law-text1 {
              width: 100%;
              font-size: 1.5rem;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .contract-law-text2 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContractLaw
