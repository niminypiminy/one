import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const VirtualOffice = (props) => {
  return (
    <>
      <div className="virtual-office-container">
        <Head>
          <title>Virtual-Office - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:title"
            content="Virtual-Office - Danneskiold &amp; Associates"
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
        <div className="virtual-office-container1">
          <div className="virtual-office-container2">
            <img
              alt="image"
              src="/virtual%20office-600w.jpg"
              loading="eager"
              className="virtual-office-image"
            />
          </div>
          <div className="virtual-office-container3">
            <div className="virtual-office-container4">
              <h1 className="virtual-office-text">Virtual Office Space</h1>
              <span className="virtual-office-text01">
                <span className="virtual-office-text02">
                  Virtual offices are suitable for Thai-owned companies, and
                  companies that don&apos;t require permits and licences from
                  other agencies. Virtual offices may help remote team&apos;s
                  lower costs. We can also act as your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/power-of-attorney">
                  <a className="virtual-office-link">power of attorney</a>
                </Link>
                <span className="virtual-office-text03">.</span>
                <br className="virtual-office-text04"></br>
              </span>
            </div>
            <div className="virtual-office-container5">
              <div className="virtual-office-container6">
                <span className="virtual-office-text05">Monthly</span>
                <span className="virtual-office-text06">500 </span>
              </div>
              <div className="virtual-office-container7">
                <span className="virtual-office-text07">Annually</span>
                <span className="virtual-office-text08">5000 </span>
              </div>
            </div>
          </div>
        </div>
        <footer className="virtual-office-footer">
          <span className="virtual-office-text09">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .virtual-office-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .virtual-office-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .virtual-office-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .virtual-office-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .virtual-office-image:hover {
            transform: scale(1.2);
          }
          .virtual-office-container3 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .virtual-office-container4 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .virtual-office-text {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            max-width: auto;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .virtual-office-text01 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 1.15em;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .virtual-office-link {
            text-decoration: underline;
          }
          .virtual-office-container5 {
            flex: 0 0 auto;
            width: 80%;
            height: 25vh;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
          }
          .virtual-office-container6 {
            flex: 1;
            width: 50%;
            height: 100%;
            display: flex;
            max-width: auto;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .virtual-office-container6:hover {
            transform: scale(1.02);
          }
          .virtual-office-text05 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .virtual-office-text06 {
            color: var(--dl-color-gray-white);
            margin: var(--dl-space-space-twounits);
            font-size: 2rem;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .virtual-office-container7 {
            flex: 1;
            color: var(--dl-color-gray-white);
            width: 50%;
            height: 100%;
            display: flex;
            max-width: auto;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .virtual-office-container7:hover {
            transform: scale(1.02);
          }
          .virtual-office-text07 {
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .virtual-office-text08 {
            width: auto;
            margin: var(--dl-space-space-twounits);
            font-size: 2rem;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .virtual-office-footer {
            width: 100%;
            display: flex;
            max-width: auto;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .virtual-office-text09 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .virtual-office-image {
              margin-right: 0px;
            }
            .virtual-office-text {
              color: var(--dl-color-gray-black);
            }
            .virtual-office-text01 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .virtual-office-text02 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .virtual-office-link {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .virtual-office-text03 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .virtual-office-text04 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .virtual-office-text09 {
              color: rgb(17, 40, 33);
              font-size: 1.2rem;
              font-family: Josefin Sans;
            }
          }
          @media (max-width: 1200px) {
            .virtual-office-container2 {
              width: 40%;
              display: none;
            }
            .virtual-office-image {
              width: 90%;
              margin-right: 0px;
            }
            .virtual-office-container3 {
              width: 75%;
            }
          }
          @media (max-width: 991px) {
            .virtual-office-container1 {
              height: 75vh;
            }
            .virtual-office-container2 {
              display: none;
            }
            .virtual-office-image {
              width: 100%;
              display: none;
            }
            .virtual-office-container3 {
              width: 80%;
              height: 80%;
            }
            .virtual-office-text {
              text-align: center;
            }
            .virtual-office-text01 {
              text-align: left;
            }
            .virtual-office-text02 {
              text-align: left;
            }
            .virtual-office-link {
              text-align: left;
            }
            .virtual-office-text03 {
              text-align: left;
            }
            .virtual-office-text04 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .virtual-office-container1 {
              height: 75vh;
            }
            .virtual-office-image {
              width: 100%;
            }
            .virtual-office-container3 {
              width: 100%;
              height: auto;
            }
            .virtual-office-container4 {
              height: 100%;
              align-self: center;
            }
            .virtual-office-text {
              text-align: left;
            }
            .virtual-office-text01 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .virtual-office-text02 {
              align-self: center;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .virtual-office-link {
              align-self: center;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              text-decoration: underline;
            }
            .virtual-office-text03 {
              align-self: center;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .virtual-office-text04 {
              align-self: center;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .virtual-office-container6 {
              width: 100%;
              height: 100%;
            }
            .virtual-office-container7 {
              width: 100%;
              height: 100%;
            }
            .virtual-office-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .virtual-office-text09 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .virtual-office-container3 {
              width: 90%;
              height: auto;
            }
            .virtual-office-container4 {
              width: 100%;
              height: auto;
            }
            .virtual-office-text {
              width: 95%;
              max-width: auto;
              text-align: left;
            }
            .virtual-office-text01 {
              width: 100%;
              font-size: 1.5rem;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              text-align: left;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
            }
            .virtual-office-text02 {
              width: 90%;
              align-self: center;
            }
            .virtual-office-link {
              width: 90%;
              align-self: center;
            }
            .virtual-office-text03 {
              width: 90%;
              align-self: center;
            }
            .virtual-office-text04 {
              width: 90%;
              align-self: center;
            }
            .virtual-office-container5 {
              width: 100%;
              align-items: center;
              justify-content: center;
            }
            .virtual-office-container6 {
              width: 50%;
            }
            .virtual-office-container7 {
              width: 50%;
              height: 100%;
              align-self: flex-start;
            }
            .virtual-office-text08 {
              font-size: 2rem;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .virtual-office-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .virtual-office-text09 {
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

export default VirtualOffice
