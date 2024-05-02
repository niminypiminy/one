import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const ImmigrationLaw = (props) => {
  return (
    <>
      <div className="immigration-law-container">
        <Head>
          <title>Immigration</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Immigration" />
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
        <div className="immigration-law-container1">
          <div className="immigration-law-container2">
            <div className="immigration-law-container3">
              <h1 className="immigration-law-text">Immigration Law</h1>
              <span className="immigration-law-text1">
                If you have been blacklisted, deported, are applying for aslyum,
                have overstayed your visa in Thailand, or simply need help
                acquiring a visa, then our immigration attorneys can help. We
                have extensive contacts at the bureau of immigration, and in
                most cases can help you negotiate a resolution.
              </span>
              <Link href="/contact">
                <a className="immigration-law-link">
                  <h1 className="immigration-law-text2">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="immigration-law-container4">
            <img
              alt="image"
              src="/immigration%20office-600w.jpg"
              className="immigration-law-image"
            />
          </div>
        </div>
        <footer className="immigration-law-footer">
          <span className="immigration-law-text3">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .immigration-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .immigration-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .immigration-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .immigration-law-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .immigration-law-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: 450px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .immigration-law-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .immigration-law-link {
            display: contents;
          }
          .immigration-law-text2 {
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
          .immigration-law-text2:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .immigration-law-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .immigration-law-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .immigration-law-image:hover {
            transform: scale(1.2);
          }
          .immigration-law-footer {
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
          .immigration-law-text3 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .immigration-law-text {
              font-size: 2rem;
              max-width: auto;
            }
            .immigration-law-text1 {
              line-height: 1.15em;
            }
            .immigration-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
          }
          @media (max-width: 1200px) {
            .immigration-law-container4 {
              width: 40%;
            }
            .immigration-law-image {
              width: 90%;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .immigration-law-container2 {
              width: 80%;
            }
            .immigration-law-text {
              text-align: center;
            }
            .immigration-law-text1 {
              text-align: left;
            }
            .immigration-law-container4 {
              display: none;
            }
            .immigration-law-image {
              width: 100%;
              display: none;
            }
            .immigration-law-footer {
              max-width: auto;
            }
          }
          @media (max-width: 767px) {
            .immigration-law-container2 {
              width: 100%;
            }
            .immigration-law-container3 {
              align-self: center;
            }
            .immigration-law-text {
              align-self: center;
            }
            .immigration-law-text1 {
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .immigration-law-text2 {
              align-self: center;
            }
            .immigration-law-image {
              width: 100%;
            }
            .immigration-law-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .immigration-law-text3 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .immigration-law-container2 {
              height: 100%;
            }
            .immigration-law-container3 {
              width: 80%;
              height: 100%;
            }
            .immigration-law-text {
              color: var(--dl-color-gray-black);
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .immigration-law-text1 {
              width: 100%;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .immigration-law-text2 {
              align-self: flex-start;
            }
            .immigration-law-footer {
              padding: var(--dl-space-space-unit);
              max-width: auto;
              flex-direction: column;
            }
            .immigration-law-text3 {
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

export default ImmigrationLaw
