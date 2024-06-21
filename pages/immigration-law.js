import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const ImmigrationLaw = (props) => {
  return (
    <>
      <div className="immigration-law-container">
        <Head>
          <title>Immigration</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Immigration" />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/8e5f1e02-471e-46a9-8f50-e3f10d72f098?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="immigration-law-container1">
          <div className="immigration-law-container2">
            <div className="immigration-law-container3">
              <h1 className="immigration-law-text">Immigration Law</h1>
              <span className="immigration-law-text1">
                If you are facing challenges such as being blacklisted,
                deported, seeking asylum, overstaying your visa in Thailand, or
                require assistance with visa applications, our team of
                experienced immigration attorneys is here to provide expert
                guidance. With strong connections at the Bureau of Immigration,
                we can effectively advocate on your behalf and assist in
                negotiating favorable resolutions to your immigration issues.
              </span>
              <Link href="/contact">
                <a className="immigration-law-link">
                  <h1 className="immigration-law-text2">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="immigration-law-container4">
            <img
              alt="immigration officer"
              src="/immigration-600w.jpeg"
              className="immigration-law-image"
            />
          </div>
        </div>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .immigration-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .immigration-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .immigration-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .immigration-law-container3 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .immigration-law-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: 450px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .immigration-law-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .immigration-law-link {
            display: contents;
          }
          .immigration-law-text2 {
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
          .immigration-law-text2:hover {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            border-color: var(--dl-color-theme-color5);
            background-color: var(--dl-color-theme-color5);
          }
          .immigration-law-container4 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .immigration-law-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .immigration-law-image:hover {
            transform: scale(1.2);
          }
          @media (max-width: 1600px) {
            .immigration-law-text {
              max-width: auto;
            }
            .immigration-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
          }
          @media (max-width: 1200px) {
            .immigration-law-container4 {
              width: 40%;
            }
            .immigration-law-image {
              width: 90%;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .immigration-law-container2 {
              width: 80%;
            }
            .immigration-law-text1 {
              text-align: left;
            }
            .immigration-law-container4 {
              display: none;
            }
            .immigration-law-image {
              width: 100%;
              display: none;
            }
          }
          @media (max-width: 767px) {
            .immigration-law-container2 {
              width: 100%;
            }
            .immigration-law-container3 {
              align-self: center;
            }
            .immigration-law-text {
              align-self: flex-start;
            }
            .immigration-law-text2 {
              align-self: flex-start;
            }
            .immigration-law-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .immigration-law-container2 {
              height: 100%;
            }
            .immigration-law-container3 {
              width: 80%;
              height: auto;
            }
            .immigration-law-text {
              color: var(--dl-color-gray-black);
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .immigration-law-text1 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .immigration-law-text2 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default ImmigrationLaw
