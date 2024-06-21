import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const TortLaw = (props) => {
  return (
    <>
      <div className="tort-law-container">
        <Head>
          <title>Tort-Law - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Tort-Law - Danneskiold &amp; Associates | Law Firm "
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
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
        <div className="tort-law-container1">
          <div className="tort-law-container2">
            <img
              alt="plaintiff slipped on the floor"
              src="/tort%20law-800w.jpeg"
              className="tort-law-image"
            />
          </div>
          <div className="tort-law-container3">
            <div className="tort-law-container4">
              <h1 className="tort-law-text">Tort law</h1>
              <span className="tort-law-text1">
                If you have suffered an injury, financial loss or other harm as
                a result of actions that have either wilfully or negligently
                injured your body, health, liberty, property, and reputation
                then it&apos;s important to immediately file a claim. Courts in
                Thailand will award pecenuiary and non-pecuniary damages based
                on the gravity of the act. 
              </span>
              <Link href="/contact">
                <a className="tort-law-link">
                  <h1 className="tort-law-text2">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .tort-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .tort-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tort-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .tort-law-image {
            width: 80%;
            height: auto;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
          }
          .tort-law-image:hover {
            transform: scale(1.2);
          }
          .tort-law-container3 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .tort-law-container4 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .tort-law-text {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .tort-law-text1 {
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
          .tort-law-link {
            display: contents;
          }
          .tort-law-text2 {
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
          .tort-law-text2:hover {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            border-color: var(--dl-color-theme-color5);
            background-color: var(--dl-color-theme-color5);
          }
          @media (max-width: 1600px) {
            .tort-law-container1 {
              height: 100vh;
            }
            .tort-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .tort-law-text {
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .tort-law-text1 {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .tort-law-container1 {
              flex-direction: row;
            }
            .tort-law-container2 {
              width: 50%;
            }
            .tort-law-container4 {
              width: 95%;
            }
            .tort-law-text1 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .tort-law-container2 {
              display: none;
            }
            .tort-law-image {
              order: 2;
              width: 100%;
            }
            .tort-law-container3 {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .tort-law-image {
              width: 100%;
            }
            .tort-law-container3 {
              width: 100%;
            }
            .tort-law-container4 {
              width: 90%;
              align-self: center;
            }
            .tort-law-text {
              align-self: center;
            }
            .tort-law-text1 {
              width: 100%;
              align-self: center;
              padding-left: var(--dl-space-space-halfunit);
            }
            .tort-law-text2 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .tort-law-image {
              width: 100%;
            }
            .tort-law-container4 {
              width: 80%;
              height: 100%;
            }
            .tort-law-text {
              width: 100%;
            }
            .tort-law-text1 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .tort-law-text2 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default TortLaw
