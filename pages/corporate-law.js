import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const CorporateLaw = (props) => {
  return (
    <>
      <div className="corporate-law-container">
        <Head>
          <title>Corporate Law</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Corporate Law" />
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
        <div className="corporate-law-container1">
          <div className="corporate-law-container2">
            <img
              alt="bangkok city skyline"
              src="/corporate%20law-600w.jpg"
              className="corporate-law-image"
            />
          </div>
          <div className="corporate-law-container3">
            <div className="corporate-law-container4">
              <h1 className="corporate-law-text">Corporate law</h1>
              <span className="corporate-law-text1">
                <span>
                  Incorporating a company is a multifaceted procedure that plays
                  a crucial role in establishing the legal framework governing
                  the entity and its shareholders. In Thailand, companies can
                  benefit from substantial tax incentives by engaging with the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/board-of-investment">
                  <a className="corporate-law-link">Board of Investment</a>
                </Link>
                <span>
                  , securing majority ownership rights through the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/foreign-business-license">
                  <a className="corporate-law-link1">F</a>
                </Link>
                <Link href="/foreign-business-license">
                  <a className="corporate-law-link2">oreign business license</a>
                </Link>
                <span>
                  , or by registering their company under a treaty such as the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/treaty-of-amity">
                  <a className="corporate-law-link3">Treaty of Amity</a>
                </Link>
                <span>
                  {' '}
                  or agreements like
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/thai-australia-free-trade-agreement">
                  <a className="corporate-law-link4">TAFTA</a>
                </Link>
                <span>
                  {' '}
                  and the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/japan-thailand-economic-partnership-agreement">
                  <a className="corporate-law-link5">
                    Japan-Thailand Economic Partnership Agreement
                  </a>
                </Link>
                <span>.</span>
              </span>
              <Link href="/contact">
                <a className="corporate-law-link6">
                  <h1 className="corporate-law-text8">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .corporate-law-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .corporate-law-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .corporate-law-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .corporate-law-image {
            width: 80%;
            height: auto;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
          }
          .corporate-law-container3 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .corporate-law-container4 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .corporate-law-text {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .corporate-law-text1 {
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
          .corporate-law-link {
            text-decoration: underline;
          }
          .corporate-law-link1 {
            text-decoration: underline;
          }
          .corporate-law-link2 {
            text-decoration: underline;
          }
          .corporate-law-link3 {
            text-decoration: underline;
          }
          .corporate-law-link4 {
            text-decoration: underline;
          }
          .corporate-law-link5 {
            text-decoration: underline;
          }
          .corporate-law-link6 {
            display: contents;
          }
          .corporate-law-text8 {
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
          .corporate-law-text8:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-theme-primary2);
          }
          @media (max-width: 1600px) {
            .corporate-law-container1 {
              height: 100vh;
            }
            .corporate-law-image {
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .corporate-law-text {
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .corporate-law-text1 {
              width: 100%;
            }
            .corporate-law-link1 {
              text-decoration: underline;
            }
            .corporate-law-link2 {
              text-decoration: underline;
            }
          }
          @media (max-width: 1200px) {
            .corporate-law-container2 {
              width: 40%;
            }
            .corporate-law-image {
              width: 80%;
            }
            .corporate-law-container4 {
              width: 95%;
            }
            .corporate-law-text1 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .corporate-law-container2 {
              display: none;
            }
            .corporate-law-image {
              order: 2;
            }
            .corporate-law-container3 {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .corporate-law-image {
              width: 100%;
            }
            .corporate-law-container3 {
              width: 100%;
            }
            .corporate-law-container4 {
              width: 90%;
              align-self: center;
            }
            .corporate-law-text {
              align-self: center;
              text-align: left;
            }
            .corporate-law-text1 {
              width: 100%;
              align-self: center;
              padding-left: var(--dl-space-space-halfunit);
            }
            .corporate-law-text8 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .corporate-law-image {
              width: 100%;
            }
            .corporate-law-container4 {
              width: 80%;
              height: 100%;
            }
            .corporate-law-text {
              width: 100%;
              text-align: left;
            }
            .corporate-law-text1 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .corporate-law-text8 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default CorporateLaw
