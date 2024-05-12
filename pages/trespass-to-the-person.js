import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const TrespassToThePerson = (props) => {
  return (
    <>
      <div className="trespass-to-the-person-container">
        <Head>
          <title>
            Trespass-to-the-Person - Danneskiold & Associates | Law Firm
          </title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Trespass-to-the-Person - Danneskiold &amp; Associates | Law Firm "
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
        <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      </div>
      <style jsx>
        {`
          .trespass-to-the-person-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TrespassToThePerson
