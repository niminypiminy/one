import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const PublicLaw = (props) => {
  return (
    <>
      <div className="public-law-container">
        <Head>
          <title>Public Law</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta property="og:title" content="Public Law" />
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
        <div className="public-law-container1">
          <div className="public-law-container2">
            <div className="public-law-container3">
              <h1 className="public-law-text">Public Law</h1>
              <span className="public-law-text1">
                <span>
                  The Thai Constitution is over 93 pages long, has 279 sections,
                  and individual rights have a number of qualifications that
                  include broad terms like
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>good morals, public order</span>
                <span>
                   and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>national interest</span>
                <span>
                  . This is a complex area of law, so if you feel you have been
                  detained unjustly or that your rights have been violated by
                  the state, then let us know immediately.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <Link href="/contact">
                <a className="public-law-link">
                  <h1 className="public-law-text7">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="public-law-container4">
            <img
              alt="image"
              src="/public%20law-500w.jpg"
              loading="eager"
              className="public-law-image"
            />
          </div>
        </div>
        <footer className="public-law-footer">
          <span className="public-law-text8">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .public-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .public-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .public-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .public-law-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .public-law-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: 450px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .public-law-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .public-law-link {
            display: contents;
          }
          .public-law-text7 {
            color: #000000;
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
          .public-law-text7:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .public-law-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .public-law-image {
            width: 80%;
            height: auto;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .public-law-image:hover {
            transform: scale(1.2);
          }
          .public-law-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #ffffff;
          }
          .public-law-text8 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .public-law-container1 {
              height: 100vh;
            }
            .public-law-text {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .public-law-image {
              height: auto;
              box-shadow: 5px 5px 10px 0px #000000;
            }
          }
          @media (max-width: 1200px) {
            .public-law-container4 {
              width: 40%;
            }
            .public-law-image {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .public-law-container2 {
              width: 80%;
            }
            .public-law-text {
              text-align: center;
            }
            .public-law-text1 {
              width: 100%;
              text-align: left;
            }
            .public-law-container4 {
              display: none;
            }
            .public-law-image {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .public-law-container2 {
              width: 100%;
            }
            .public-law-container3 {
              align-self: center;
            }
            .public-law-text {
              align-self: center;
            }
            .public-law-text1 {
              align-self: center;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .public-law-text7 {
              align-self: center;
            }
            .public-law-image {
              width: 80%;
              display: none;
            }
            .public-law-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .public-law-text8 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .public-law-container3 {
              width: 80%;
              height: 100%;
            }
            .public-law-text {
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .public-law-text1 {
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .public-law-text7 {
              align-self: flex-start;
            }
            .public-law-image {
              display: none;
            }
            .public-law-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .public-law-text8 {
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

export default PublicLaw
