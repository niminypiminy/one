import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const CriminalLaw = (props) => {
  return (
    <>
      <div className="criminal-law-container">
        <Head>
          <title>Eireahmon Ruaidhri | Criminal Law</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Eireahmon Ruaidhri | Criminal Law"
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
        <div className="criminal-law-container1">
          <div className="criminal-law-container2">
            <div className="criminal-law-container3">
              <h1 className="criminal-law-text">Criminal Law</h1>
              <span className="criminal-law-text1">
                <span>
                  If you&apos;ve been arrested, or think you might be detained,
                  then
                </span>
                <span>
                   let us know. Our trial attorneys have experience defending
                  clients, and perhaps more importantly we have experience
                  winning cases. We will guide you through the process, look
                  after your well being, and ensure that your rights are
                  defended each step of the way. 
                </span>
              </span>
              <Link href="/contact">
                <a className="criminal-law-link">
                  <h1 className="criminal-law-text4">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="criminal-law-container4">
            <img
              alt="image"
              src="/criminal%20law-600w.jpg"
              className="criminal-law-image"
            />
          </div>
        </div>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .criminal-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .criminal-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .criminal-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .criminal-law-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .criminal-law-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .criminal-law-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .criminal-law-link {
            display: contents;
          }
          .criminal-law-text4 {
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
          .criminal-law-text4:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .criminal-law-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .criminal-law-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .criminal-law-image:hover {
            transform: scale(1.2);
          }
          @media (max-width: 1600px) {
            .criminal-law-text1 {
              font-size: 1.5rem;
              line-height: 1.15em;
            }
            .criminal-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
          }
          @media (max-width: 1200px) {
            .criminal-law-container4 {
              width: 40%;
            }
            .criminal-law-image {
              width: 90%;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .criminal-law-container2 {
              width: 80%;
            }
            .criminal-law-text {
              text-align: center;
            }
            .criminal-law-text1 {
              text-align: left;
            }
            .criminal-law-container4 {
              display: none;
            }
            .criminal-law-image {
              width: 100%;
              display: none;
            }
          }
          @media (max-width: 767px) {
            .criminal-law-container2 {
              width: 100%;
            }
            .criminal-law-container3 {
              align-self: center;
            }
            .criminal-law-text {
              align-self: center;
            }
            .criminal-law-text1 {
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .criminal-law-text4 {
              align-self: center;
            }
            .criminal-law-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .criminal-law-container2 {
              height: 100%;
            }
            .criminal-law-container3 {
              width: 80%;
            }
            .criminal-law-text {
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .criminal-law-text1 {
              width: 100%;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .criminal-law-text4 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default CriminalLaw
