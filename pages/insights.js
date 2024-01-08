import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const Insights = (props) => {
  return (
    <>
      <div className="insights-container">
        <Head>
          <title>Publications</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta property="og:title" content="Publications" />
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
        <div className="insights-container1">
          <span className="insights-text">
            In this section we will place our newsletter.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .insights-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .insights-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .insights-text {
            width: 50%;
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .insights-text {
              width: 60%;
            }
          }
          @media (max-width: 1200px) {
            .insights-text {
              width: 75%;
            }
          }
          @media (max-width: 991px) {
            .insights-text {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .insights-text {
              width: 85%;
            }
          }
          @media (max-width: 479px) {
            .insights-text {
              width: 90%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Insights
