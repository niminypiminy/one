import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const PreferredShares = (props) => {
  return (
    <>
      <div className="preferred-shares-container">
        <Head>
          <title>Preferred-shares - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:title"
            content="Preferred-shares - Danneskiold &amp; Associates"
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
        <Navbar></Navbar>
        <div className="preferred-shares-container1">
          <div className="preferred-shares-container2">
            <div className="preferred-shares-container3">
              <div className="preferred-shares-container4">
                <h1 className="preferred-shares-text">Preference Shares</h1>
                <span className="preferred-shares-text1">
                  <span>
                    Preference shares agreements cannot be used to circumvent
                    the restrictions on foreign ownership in Thailand. If Thai
                    shareholders do not make any contribution, and the court
                    ascertains that the foreign shareholder contributed more
                    than or equal to 50% of the registered capital, then the
                    court will not enforce the contract. Preference shares
                    agreements can be used in certain cases, whereby a
                    shareholder wants to claim dividends before ordinary
                    shareholders, but it cannot be used to circumvent ownership
                    rights, or be used as an alternative to the 
                  </span>
                  <Link href="/foreign-business-license">
                    <a className="preferred-shares-link">
                      Foreign Business License
                    </a>
                  </Link>
                  <span>
                    {' '}
                    or Foreign Business Certificate. If you need further
                    consultation on this matter, please click
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/contact">
                    <a className="preferred-shares-link1">here</a>
                  </Link>
                  <span>.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer className="preferred-shares-footer">
          <span className="preferred-shares-text5">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
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
          .preferred-shares-link1 {
            text-decoration: underline;
          }
          .preferred-shares-footer {
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .preferred-shares-text5 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .preferred-shares-container2 {
              height: 100vh;
            }
            .preferred-shares-text {
              color: var(--dl-color-gray-black);
              width: 100%;
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .preferred-shares-text1 {
              width: 100%;
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
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
            .preferred-shares-text1 {
              text-align: left;
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
              text-align: left;
            }
            .preferred-shares-text1 {
              width: 100%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              padding-left: var(--dl-space-space-halfunit);
            }
            .preferred-shares-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .preferred-shares-text5 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .preferred-shares-container4 {
              width: 80%;
              height: 100%;
            }
            .preferred-shares-text {
              width: 100%;
              text-align: left;
            }
            .preferred-shares-text1 {
              width: 100%;
              font-size: 1.5rem;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .preferred-shares-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .preferred-shares-text5 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default PreferredShares
