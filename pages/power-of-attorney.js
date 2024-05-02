import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const PowerOfAttorney = (props) => {
  return (
    <>
      <div className="power-of-attorney-container">
        <Head>
          <title>Power-of-Attorney - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Power-of-Attorney - Danneskiold &amp; Associates"
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
        <div className="power-of-attorney-container1">
          <div className="power-of-attorney-container2">
            <div className="power-of-attorney-container3">
              <h1 className="power-of-attorney-text">Power of Attorney</h1>
              <span className="power-of-attorney-text1">
                A power of attorney is a written agreement that permits an
                individual or agency to legally act on your behalf. In most
                cases where you are physically absent or incapacitated, the
                person you designate as your power of attorney can assist within
                the scope of the agreement.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/contact">
                <a className="power-of-attorney-link">
                  <h1 className="power-of-attorney-text2">Learn More</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="power-of-attorney-container4">
            <img
              alt="image"
              src="/power%20of%20attorney-600w.jpg"
              className="power-of-attorney-image"
            />
          </div>
        </div>
        <footer className="power-of-attorney-footer">
          <span className="power-of-attorney-text3">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .power-of-attorney-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .power-of-attorney-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .power-of-attorney-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .power-of-attorney-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .power-of-attorney-text {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            max-width: 450px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .power-of-attorney-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .power-of-attorney-link {
            display: contents;
          }
          .power-of-attorney-text2 {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-oneandhalfunits);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .power-of-attorney-text2:hover {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 200;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            background-color: var(--dl-color-gray-black);
          }
          .power-of-attorney-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .power-of-attorney-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .power-of-attorney-image:hover {
            transform: scale(1.2);
          }
          .power-of-attorney-footer {
            width: 100%;
            display: flex;
            max-width: auto;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .power-of-attorney-text3 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .power-of-attorney-text {
              font-size: 2rem;
              max-width: auto;
            }
            .power-of-attorney-text1 {
              line-height: 1.15em;
            }
            .power-of-attorney-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
            .power-of-attorney-footer {
              margin-top: var(--dl-space-space-threeunits);
            }
            .power-of-attorney-text3 {
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
          }
          @media (max-width: 1200px) {
            .power-of-attorney-container4 {
              width: 40%;
            }
            .power-of-attorney-image {
              width: 90%;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .power-of-attorney-container2 {
              width: 80%;
            }
            .power-of-attorney-text {
              text-align: center;
            }
            .power-of-attorney-text1 {
              text-align: left;
            }
            .power-of-attorney-container4 {
              display: none;
            }
            .power-of-attorney-image {
              width: 100%;
              display: none;
            }
          }
          @media (max-width: 767px) {
            .power-of-attorney-container2 {
              width: 100%;
            }
            .power-of-attorney-container3 {
              align-self: center;
            }
            .power-of-attorney-text {
              width: 100%;
              min-width: 100%;
              align-self: center;
              text-align: left;
            }
            .power-of-attorney-text1 {
              width: 100%;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .power-of-attorney-text2 {
              align-self: flex-start;
            }
            .power-of-attorney-image {
              width: 100%;
            }
            .power-of-attorney-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .power-of-attorney-text3 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .power-of-attorney-container2 {
              height: 100%;
            }
            .power-of-attorney-container3 {
              width: 80%;
            }
            .power-of-attorney-text {
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .power-of-attorney-text1 {
              width: 100%;
            }
            .power-of-attorney-text2 {
              align-self: flex-start;
            }
            .power-of-attorney-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .power-of-attorney-text3 {
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

export default PowerOfAttorney
