import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const PropertyLaw = (props) => {
  return (
    <>
      <div className="property-law-container">
        <Head>
          <title>Property-Law - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:title"
            content="Property-Law - Danneskiold &amp; Associates"
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
        <Navbar Hamburger_src="/hamburger.svg"></Navbar>
        <div className="property-law-container1">
          <div className="property-law-container2">
            <div className="property-law-container3">
              <h1 className="property-law-text">Property Law</h1>
              <span className="property-law-text1">
                Many home buyers seek legal counsel before purchasing or renting
                their property. We can review and draft contracts, help you
                negotiate a fair market price, resolve conflicts, and ensure the
                legality of the transaction.
              </span>
              <Link href="/contact">
                <a className="property-law-link">
                  <h1 className="property-law-text2">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="property-law-container4">
            <img
              alt="image"
              src="/propertybeach-min-600w.jpg"
              className="property-law-image"
            />
          </div>
        </div>
        <footer className="property-law-footer">
          <span className="property-law-text3">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .property-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .property-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .property-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .property-law-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .property-law-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .property-law-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .property-law-link {
            display: contents;
          }
          .property-law-text2 {
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
          .property-law-text2:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .property-law-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .property-law-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .property-law-image:hover {
            transform: scale(1.2);
          }
          .property-law-footer {
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
          .property-law-text3 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .property-law-text1 {
              font-size: 1.5rem;
              line-height: 1.15em;
            }
            .property-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
          }
          @media (max-width: 1200px) {
            .property-law-container4 {
              width: 40%;
            }
            .property-law-image {
              width: 90%;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .property-law-container2 {
              width: 80%;
            }
            .property-law-text {
              text-align: center;
            }
            .property-law-text1 {
              text-align: left;
            }
            .property-law-container4 {
              display: none;
            }
            .property-law-image {
              width: 100%;
              display: none;
            }
          }
          @media (max-width: 767px) {
            .property-law-container2 {
              width: 100%;
            }
            .property-law-container3 {
              align-self: center;
            }
            .property-law-text {
              align-self: center;
            }
            .property-law-text1 {
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .property-law-text2 {
              align-self: center;
            }
            .property-law-image {
              width: 100%;
            }
            .property-law-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .property-law-text3 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .property-law-container2 {
              height: 100%;
            }
            .property-law-container3 {
              width: 80%;
            }
            .property-law-text {
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .property-law-text1 {
              width: 100%;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .property-law-text2 {
              align-self: flex-start;
            }
            .property-law-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .property-law-text3 {
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

export default PropertyLaw
