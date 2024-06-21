import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const PublicLaw = (props) => {
  return (
    <>
      <div className="public-law-container">
        <Head>
          <title>Public Law</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Public Law" />
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
              alt="thai people walking on a street"
              src="/public%20law-500w.jpg"
              loading="eager"
              className="public-law-image"
            />
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name13"></Footer1>
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
            background-color: var(--dl-color-theme-neutral-light);
          }
          .public-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
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
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            border-color: var(--dl-color-theme-color5);
            background-color: var(--dl-color-theme-color5);
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
            margin-left: var(--dl-space-space-twounits);
          }
          @media (max-width: 1600px) {
            .public-law-container1 {
              height: 100vh;
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
            .public-law-text1 {
              width: 100%;
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
            .public-law-text1 {
              align-self: center;
            }
            .public-law-image {
              width: 80%;
              display: none;
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
              padding-left: 0px;
              padding-right: 0px;
            }
            .public-law-text7 {
              align-self: flex-start;
            }
            .public-law-image {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default PublicLaw
