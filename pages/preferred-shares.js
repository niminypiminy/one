import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const PreferredShares = (props) => {
  return (
    <>
      <div className="preferred-shares-container">
        <Head>
          <title>Preferred-shares - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Preferred-shares - Danneskiold &amp; Associates | Law Firm "
          />
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
        <div className="preferred-shares-container1">
          <div className="preferred-shares-container2">
            <div className="preferred-shares-container3">
              <div className="preferred-shares-container4">
                <h1 className="preferred-shares-text">Preference Shares</h1>
                <span className="preferred-shares-text1">
                  <span>
                    Preference shares agreements in Thailand must comply with
                    all regulations regarding foreign ownership restrictions. If
                    Thai shareholders do not provide any contribution and the
                    court determines that the foreign shareholder has
                    contributed 50% or more of the registered capital, the
                    contract will not be enforced. While preference shares
                    agreements can be utilized for specific purposes, such as
                    prioritizing dividend claims over ordinary shareholders,
                    they cannot be used to bypass ownership regulations or
                    substitute the need for a Foreign Business License or
                    Foreign Business Certificate. For additional guidance on
                    this issue, please click
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/foreign-business-license">
                    <a className="preferred-shares-link">here</a>
                  </Link>
                  <span>.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .preferred-shares-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .preferred-shares-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .preferred-shares-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .preferred-shares-container3 {
            flex: 0 0 auto;
            width: 70%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .preferred-shares-container4 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .preferred-shares-text {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .preferred-shares-text1 {
            width: 85%;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .preferred-shares-link {
            text-decoration: underline;
          }
          @media (max-width: 1600px) {
            .preferred-shares-container2 {
              height: 100vh;
            }
            .preferred-shares-text {
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .preferred-shares-text1 {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .preferred-shares-container4 {
              width: 95%;
            }
            .preferred-shares-text1 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .preferred-shares-container3 {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .preferred-shares-container3 {
              width: 100%;
            }
            .preferred-shares-container4 {
              width: 90%;
              align-self: center;
            }
            .preferred-shares-text {
              align-self: center;
            }
            .preferred-shares-text1 {
              width: 100%;
              align-self: center;
              padding-left: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .preferred-shares-container4 {
              width: 80%;
              height: 100%;
            }
            .preferred-shares-text {
              width: 100%;
            }
            .preferred-shares-text1 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default PreferredShares
