import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const CorporateLaw = (props) => {
  return (
    <>
      <div className="corporate-law-container">
        <Head>
          <title>Corporate Law</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta property="og:title" content="Corporate Law" />
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
        <div className="corporate-law-container1">
          <div className="corporate-law-container2">
            <img
              alt="image"
              src="/corporate%20law-600w.jpg"
              className="corporate-law-image"
            />
          </div>
          <div className="corporate-law-container3">
            <div className="corporate-law-container4">
              <h1 className="corporate-law-text">Corporate law</h1>
              <span className="corporate-law-text01">
                <span>
                  Incorporating a company is a complex process that will
                  determine the legal rights of the entity and its shareholders.
                  In Thailand, companies can obtain significant tax advantages
                  through the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/board-of-investment">
                  <a className="corporate-law-link">Board of Investment</a>
                </Link>
                <span>
                  , majority ownership rights through the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/foreign-business-license">
                  <a className="corporate-law-link1">
                    foreign business license
                  </a>
                </Link>
                <span>
                   or by registering their company under a treaty, such as the 
                </span>
                <Link href="/treaty-of-amity">
                  <a className="corporate-law-link2">Treaty of Amity</a>
                </Link>
                <span>
                  .
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/thai-australia-free-trade-agreement">
                  <a className="corporate-law-link3">TAFTA</a>
                </Link>
                <span>
                  , or the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/japan-thailand-economic-partnership-agreement">
                  <a className="corporate-law-link4">
                    Japan-Thailand Economic Partnership Agreement.
                  </a>
                </Link>
                <span> </span>
              </span>
              <Link href="/contact">
                <a className="corporate-law-link5">
                  <h1 className="corporate-law-text08">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <footer className="corporate-law-footer">
          <span className="corporate-law-text09">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .corporate-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .corporate-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .corporate-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .corporate-law-image {
            width: 80%;
            height: auto;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
          }
          .corporate-law-image:hover {
            transform: scale(1.2);
          }
          .corporate-law-container3 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .corporate-law-container4 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .corporate-law-text {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .corporate-law-text01 {
            width: 85%;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .corporate-law-link {
            text-decoration: underline;
          }
          .corporate-law-link1 {
            text-decoration: underline;
          }
          .corporate-law-link2 {
            text-decoration: underline;
          }
          .corporate-law-link3 {
            text-decoration: underline;
          }
          .corporate-law-link4 {
            text-decoration: underline;
          }
          .corporate-law-link5 {
            display: contents;
          }
          .corporate-law-text08 {
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
          .corporate-law-text08:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .corporate-law-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #ffffff;
          }
          .corporate-law-text09 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .corporate-law-container1 {
              height: 100vh;
            }
            .corporate-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .corporate-law-text {
              color: var(--dl-color-gray-black);
              width: 100%;
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .corporate-law-text01 {
              width: 100%;
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .corporate-law-link {
              text-decoration: underline;
            }
            .corporate-law-link2 {
              text-decoration: underline;
            }
          }
          @media (max-width: 1200px) {
            .corporate-law-container2 {
              width: 40%;
            }
            .corporate-law-image {
              width: 80%;
            }
            .corporate-law-container4 {
              width: 95%;
            }
            .corporate-law-text01 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .corporate-law-container2 {
              display: none;
            }
            .corporate-law-image {
              order: 2;
            }
            .corporate-law-container3 {
              width: 80%;
            }
            .corporate-law-text01 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .corporate-law-image {
              width: 100%;
            }
            .corporate-law-container3 {
              width: 100%;
            }
            .corporate-law-container4 {
              width: 90%;
              align-self: center;
            }
            .corporate-law-text {
              align-self: center;
              text-align: left;
            }
            .corporate-law-text01 {
              width: 100%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              padding-left: var(--dl-space-space-halfunit);
            }
            .corporate-law-link {
              text-decoration: underline;
            }
            .corporate-law-link2 {
              text-decoration: underline;
            }
            .corporate-law-text08 {
              align-self: flex-start;
            }
            .corporate-law-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .corporate-law-text09 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .corporate-law-image {
              width: 100%;
            }
            .corporate-law-container4 {
              width: 80%;
              height: 100%;
            }
            .corporate-law-text {
              width: 100%;
              text-align: left;
            }
            .corporate-law-text01 {
              width: 100%;
              font-size: 1.5rem;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .corporate-law-text08 {
              align-self: flex-start;
            }
            .corporate-law-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .corporate-law-text09 {
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

export default CorporateLaw
