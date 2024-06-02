import React from 'react'
import Head from 'next/head'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Page1 - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Page1 - Danneskiold &amp; Associates | Law Firm "
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
        <div className="page1-container1">
          <img
            alt="image"
            src="/photo-1505664194779-8beaceb93744-modified-1500h.jpg"
            className="page1-image"
          />
          <h1 className="page1-text">Oops. Something went wrong!</h1>
        </div>
      </div>
      <style jsx>
        {`
          .page1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page1-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page1-image {
            width: 25%;
            object-fit: contain;
          }
          .page1-text {
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1200px) {
            .page1-image {
              width: 35%;
            }
          }
          @media (max-width: 991px) {
            .page1-image {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .page1-container1 {
              width: 100%;
            }
            .page1-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .page1-image {
              width: 100%;
            }
            .page1-text {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page1
