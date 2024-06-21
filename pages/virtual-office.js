import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const VirtualOffice = (props) => {
  return (
    <>
      <div className="virtual-office-container">
        <Head>
          <title>Virtual-Office - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Virtual-Office - Danneskiold &amp; Associates | Law Firm "
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
        <div className="virtual-office-container1">
          <div className="virtual-office-container2">
            <img
              alt="image of a virtual office"
              src="/virtual%20office-600w.jpg"
              loading="eager"
              className="virtual-office-image"
            />
          </div>
          <div className="virtual-office-container3">
            <div className="virtual-office-container4">
              <h1 className="virtual-office-text">Virtual Office Space</h1>
              <span className="virtual-office-text1">
                Virtual offices are suitable for Thai-owned companies, and
                companies that don&apos;t require permits and licences from
                other agencies. Virtual offices may help remote team&apos;s
                lower costs. 
              </span>
            </div>
            <div className="virtual-office-container5">
              <div className="virtual-office-container6">
                <span className="virtual-office-text2">Monthly</span>
                <span className="virtual-office-text3">500 </span>
              </div>
              <div className="virtual-office-container7">
                <span className="virtual-office-text4">Annually</span>
                <span className="virtual-office-text5">5000 </span>
              </div>
            </div>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name17"></Footer1>
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
            background-color: var(--dl-color-theme-neutral-light);
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
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .virtual-office-text1 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 1.15em;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
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
            background-color: var(--dl-color-theme-color1);
          }
          .virtual-office-container6:hover {
            transform: scale(1.02);
          }
          .virtual-office-text2 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .virtual-office-text3 {
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
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-color1);
          }
          .virtual-office-container7:hover {
            transform: scale(1.02);
          }
          .virtual-office-text4 {
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .virtual-office-text5 {
            width: auto;
            margin: var(--dl-space-space-twounits);
            font-size: 2rem;
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
            .virtual-office-container6 {
              width: 100%;
              height: 100%;
            }
            .virtual-office-container7 {
              width: 100%;
              height: 100%;
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
            }
            .virtual-office-text1 {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
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
            .virtual-office-text5 {
              font-size: 2rem;
              font-family: Josefin Sans;
              font-weight: 200;
            }
          }
        `}
      </style>
    </>
  )
}

export default VirtualOffice
