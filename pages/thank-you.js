import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const ThankYou = (props) => {
  return (
    <>
      <div className="thank-you-container">
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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/6e310911-4daf-49cb-aeb2-76841f7d3639?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="thank-you-container1">
          <img
            alt="image"
            src="/designer%20(1)2-1500w.jpeg"
            className="thank-you-image"
          />
          <h1 className="thank-you-text">
            Thank you for contacting our law firm. We will endeavor to respond
            to your enquiry as soon as humanly possible. Usually, within the
            hour, unless we&apos;re in court or with a client.
          </h1>
        </div>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .thank-you-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .thank-you-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .thank-you-image {
            width: 30%;
            height: 59%;
            object-fit: cover;
          }
          .thank-you-text {
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
            .thank-you-image {
              width: 35%;
            }
            .thank-you-text {
              width: 35%;
            }
          }
          @media (max-width: 1200px) {
            .thank-you-image {
              width: 70%;
            }
            .thank-you-text {
              width: 60%;
            }
          }
          @media (max-width: 991px) {
            .thank-you-image {
              width: 60%;
            }
            .thank-you-text {
              width: 60%;
            }
          }
          @media (max-width: 767px) {
            .thank-you-image {
              width: 80%;
            }
            .thank-you-text {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .thank-you-image {
              width: 100%;
            }
            .thank-you-text {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ThankYou
