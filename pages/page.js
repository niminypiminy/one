import React from 'react'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:title"
            content="Page - Danneskiold &amp; Associates"
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/b54c7d9e-85ad-41bf-8d00-bf6410be3d15?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="page-container1">
          <img
            alt="image"
            src="/photo-1505664194779-8beaceb93744-modified-1500h.jpg"
            className="page-image"
          />
          <h1 className="page-text">Oops. Something went wrong!</h1>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-image {
            width: 25%;
            object-fit: contain;
          }
          .page-text {
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1200px) {
            .page-image {
              width: 35%;
            }
          }
          @media (max-width: 991px) {
            .page-image {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .page-container1 {
              width: 100%;
            }
            .page-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .page-image {
              width: 100%;
            }
            .page-text {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
