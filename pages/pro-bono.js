import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const ProBono = (props) => {
  return (
    <>
      <div className="pro-bono-container">
        <Head>
          <title>Pro-bono - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Pro-bono - Danneskiold &amp; Associates | Law Firm "
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/6e310911-4daf-49cb-aeb2-76841f7d3639?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="pro-bono-container1">
          <div className="pro-bono-container2">
            <div className="pro-bono-container3">
              <h1 className="pro-bono-text">Pro bono services</h1>
              <span className="pro-bono-text1">
                <span>
                  We occasionally provide pro bono services. If your rights have
                  been violated, and you cannot afford an attorney, then send us
                  a message and we&apos;ll see what we can do to help.
                </span>
                <br></br>
                <br></br>
              </span>
              <Link href="/contact">
                <a className="pro-bono-link">
                  <h1 className="pro-bono-text5">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="pro-bono-container4">
            <img
              alt="image"
              src="/pro%20bono-1200h.jpg"
              className="pro-bono-image"
            />
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name12"></Footer1>
      </div>
      <style jsx>
        {`
          .pro-bono-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            flex-direction: column;
            justify-content: flex-start;
          }
          .pro-bono-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .pro-bono-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }

          .pro-bono-container3 {
            flex: 0 0 auto;
            width: 70%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .pro-bono-text {
            width: 100%;
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .pro-bono-text1 {
            width: 100%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .pro-bono-link {
            display: contents;
          }
          .pro-bono-text5 {
            width: auto;
            padding: var(--dl-space-space-oneandhalfunits);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .pro-bono-text5:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .pro-bono-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .pro-bono-image {
            width: 80%;
            height: 80%;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
          }
          .pro-bono-image:hover {
            transform: scale(1.2);
          }
          @media (max-width: 1600px) {
            .pro-bono-container1 {
              height: 70vh;
              align-items: center;
              justify-content: center;
            }
            .pro-bono-container2 {
              width: 40%;
            }
            .pro-bono-container3 {
              width: 70%;
            }
            .pro-bono-container4 {
              width: 40%;
            }
          }
          @media (max-width: 1200px) {
            .pro-bono-container2 {
              width: 50%;
            }
            .pro-bono-container3 {
              width: 75%;
            }
            .pro-bono-container4 {
              width: 50%;
            }
          }
          @media (max-width: 991px) {
            .pro-bono-container2 {
              width: 70%;
            }
            .pro-bono-container4 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .pro-bono-container3 {
              width: 85%;
            }
          }
          @media (max-width: 479px) {
            .pro-bono-container2 {
              width: 85%;
            }
            .pro-bono-container3 {
              width: 85%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ProBono
