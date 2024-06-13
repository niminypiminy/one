import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const Thanks = (props) => {
  return (
    <>
      <div className="thanks-container">
        <Head>
          <title>Thank you</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Thank you" />
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
        <div className="thanks-container1">
          <img
            alt="image"
            src="/designer%20(1)2-1500w.jpeg"
            className="thanks-image"
          />
          <h1 className="thanks-text">
            Thank you for contacting our law firm. We will endeavor to respond
            to your enquiry as soon as humanly possible. Usually, within the
            hour, unless we&apos;re in court or with a client.
          </h1>
        </div>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .thanks-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .thanks-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .thanks-image {
            width: 30%;
            height: 59%;
            object-fit: cover;
          }
          .thanks-text {
            color: var(--dl-color-gray-black);
            width: 30%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          @media (max-width: 1600px) {
            .thanks-image {
              width: 35%;
            }
            .thanks-text {
              width: 35%;
            }
          }
          @media (max-width: 1200px) {
            .thanks-image {
              width: 70%;
            }
            .thanks-text {
              width: 60%;
            }
          }
          @media (max-width: 991px) {
            .thanks-image {
              width: 60%;
            }
            .thanks-text {
              width: 60%;
            }
          }
          @media (max-width: 767px) {
            .thanks-image {
              width: 80%;
            }
            .thanks-text {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .thanks-image {
              width: 100%;
            }
            .thanks-text {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Thanks
