import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const ObtainAVisa = (props) => {
  return (
    <>
      <div className="obtain-a-visa-container">
        <Head>
          <title>Obtain-a-Visa - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Obtain-a-Visa - Danneskiold &amp; Associates"
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
        <div className="obtain-a-visa-container1">
          <h1 className="obtain-a-visa-text">Coming soon.</h1>
        </div>
      </div>
      <style jsx>
        {`
          .obtain-a-visa-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .obtain-a-visa-text {
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
        `}
      </style>
    </>
  )
}

export default ObtainAVisa
