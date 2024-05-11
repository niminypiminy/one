import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const CompanyRegistration = (props) => {
  return (
    <>
      <div className="company-registration-container">
        <Head>
          <title>Company-Registration - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Company-Registration - Danneskiold &amp; Associates"
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
        <div className="company-registration-container01">
          <div className="company-registration-container02">
            <div className="company-registration-container03">
              <h1 className="company-registration-text">
                Company Registration
              </h1>
              <span className="company-registration-text01">
                Prior to initiating the company registration process, it is
                essential to carefully evaluate the liability associated with
                each legal structure, as well as the distribution of shares.
                Furthermore, thorough consideration should be given to
                government fees, capitalization prerequisites, necessary
                licenses, potential government incentives, regulatory
                frameworks, and other pertinent details.
              </span>
            </div>
          </div>
          <div className="company-registration-container04">
            <img
              alt="image"
              src="/companyregistration-600w.jpg"
              className="company-registration-image"
            />
          </div>
        </div>
        <div className="company-registration-container05">
          <span className="company-registration-text02">Legal Entities</span>
          <Link href="/limited-partnership-lp">
            <a className="company-registration-link">
              Limited Partnership (LP)
            </a>
          </Link>
          <Link href="/limited-company-ltd">
            <a className="company-registration-link01">Limited Company (Ltd)</a>
          </Link>
          <Link href="/representative-office">
            <a className="company-registration-link02">Representative Office</a>
          </Link>
          <Link href="/board-of-investment">
            <a className="company-registration-link03">Board of Investment</a>
          </Link>
          <Link href="/branch-office">
            <a className="company-registration-link04">Branch Office</a>
          </Link>
        </div>
        <div className="company-registration-container06">
          <div className="company-registration-container07">
            <div className="company-registration-container08">
              <span className="company-registration-text03">Type</span>
            </div>
            <div className="company-registration-container09">
              <span className="company-registration-text04">
                Limited Liability
              </span>
            </div>
            <div className="company-registration-container10">
              <span className="company-registration-text05">
                Corporate tax 
              </span>
            </div>
            <div className="company-registration-container11">
              <span className="company-registration-text06">FBL Required</span>
            </div>
            <div className="company-registration-container12">
              <span className="company-registration-text07">
                Capitalization
              </span>
            </div>
            <div className="company-registration-container13">
              <span className="company-registration-text08">LP</span>
            </div>
            <div className="company-registration-container14">
              <span className="company-registration-text09">Yes</span>
            </div>
            <div className="company-registration-container15">
              <span className="company-registration-text10">20%</span>
            </div>
            <div className="company-registration-container16">
              <span className="company-registration-text11">
                <span>Yes. (if Foreign Owned)</span>
                <br></br>
                <span>No. (if Thai Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container17">
              <span className="company-registration-text16">
                <span>2M-3M (Foreign Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container18">
              <span className="company-registration-text19">Ltd.</span>
            </div>
            <div className="company-registration-container19">
              <span className="company-registration-text20">Yes</span>
            </div>
            <div className="company-registration-container20">
              <span className="company-registration-text21">20%</span>
            </div>
            <div className="company-registration-container21">
              <span className="company-registration-text22">
                <span>Yes (if Foreign Owned)</span>
                <br></br>
                <span>No (if Thai Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container22">
              <span className="company-registration-text27">
                <span>
                  2M-3M (Foreign Owned).
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container23">
              <span className="company-registration-text30">Rep Office</span>
            </div>
            <div className="company-registration-container24">
              <span className="company-registration-text31">No</span>
            </div>
            <div className="company-registration-container25">
              <span className="company-registration-text32">0%</span>
            </div>
            <div className="company-registration-container26">
              <span className="company-registration-text33">No</span>
            </div>
            <div className="company-registration-container27">
              <span className="company-registration-text34">2M</span>
            </div>
            <div className="company-registration-container28">
              <span className="company-registration-text35">BOI</span>
            </div>
            <div className="company-registration-container29">
              <span className="company-registration-text36">Yes</span>
            </div>
            <div className="company-registration-container30">
              <span className="company-registration-text37">0%</span>
            </div>
            <div className="company-registration-container31">
              <span className="company-registration-text38">No</span>
            </div>
            <div className="company-registration-container32">
              <span className="company-registration-text39">Minimum of 1M</span>
            </div>
            <div className="company-registration-container33">
              <span className="company-registration-text40">Branch Office</span>
            </div>
            <div className="company-registration-container34">
              <span className="company-registration-text41">No</span>
            </div>
            <div className="company-registration-container35">
              <span className="company-registration-text42">20%</span>
            </div>
            <div className="company-registration-container36">
              <span className="company-registration-text43">Yes</span>
            </div>
            <div className="company-registration-container37">
              <span className="company-registration-text44">2M-3M</span>
            </div>
          </div>
        </div>
        <div className="company-registration-container38">
          <div className="company-registration-container39">
            <span className="company-registration-text45">
              Foreign juristic persons are governed by the regulations set forth
              in the Foreign Business Act. As a result, most companies with
              majority foreign ownership will be required to obtain a Foreign
              Business License (FBL). However, certain treaties and the Board of
              Investment allow foreign juristic persons to conduct business in
              Thailand with a Foreign Business Certificate, which is a more
              cost-effective and streamlined alternative to the FBL.
            </span>
          </div>
          <div className="company-registration-container40">
            <span className="company-registration-text46">
              <span>FBL &amp; Foreign Business Certificate</span>
              <br></br>
            </span>
            <Link href="/japan-thailand-economic-partnership-agreement">
              <a className="company-registration-link05">
                <span>Japan-Thailand Economic Partnership Agreement</span>
                <br></br>
              </a>
            </Link>
            <Link href="/thai-australia-free-trade-agreement">
              <a className="company-registration-link06">
                <span>Thai-Australia Free Trade Agreement</span>
                <br></br>
              </a>
            </Link>
            <Link href="/foreign-business-license">
              <a className="company-registration-link07">
                Foreign Business License
              </a>
            </Link>
            <Link href="/treaty-of-amity">
              <a className="company-registration-link08">
                <span>Treaty of Amity</span>
                <br></br>
              </a>
            </Link>
          </div>
        </div>
        <Link href="/contact">
          <a className="company-registration-link09">Ask us anything.</a>
        </Link>
        <Footer1 rootClassName="footer1-root-class-name6"></Footer1>
      </div>
      <style jsx>
        {`
          .company-registration-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .company-registration-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            justify-content: center;
          }
          .company-registration-container02 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .company-registration-container03 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .company-registration-text {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            max-width: 450px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .company-registration-text01 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 300;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .company-registration-container04 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .company-registration-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .company-registration-image:hover {
            transform: scale(1.2);
          }
          .company-registration-container05 {
            flex: 0 0 auto;
            width: 40%;
            height: 50vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .company-registration-text02 {
            color: var(--dl-color-gray-white);
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-link {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link01 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link02 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link03 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link04 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            justify-content: center;
          }
          .company-registration-container07 {
            width: 80%;
            height: 90%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }
          .company-registration-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
            background-color: #ffff00;
          }
          .company-registration-text03 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .company-registration-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
            background-color: #ffff00;
          }
          .company-registration-text04 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .company-registration-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
            background-color: #ffff00;
          }
          .company-registration-text05 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .company-registration-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
            background-color: #ffff00;
          }
          .company-registration-text06 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .company-registration-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
            background-color: #ffff00;
          }
          .company-registration-text07 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .company-registration-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text08 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text09 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text10 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text11 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .company-registration-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text16 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text19 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text20 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text21 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text22 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .company-registration-container22 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text27 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .company-registration-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text30 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container24 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text31 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container25 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text32 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container26 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text33 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container27 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text34 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container28 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text35 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container29 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text36 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container30 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text37 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container31 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text38 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container32 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text39 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container33 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text40 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container34 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text41 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container35 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text42 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container36 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text43 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container37 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text44 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container38 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .company-registration-container39 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .company-registration-text45 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .company-registration-container40 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .company-registration-text46 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-link05 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link06 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link07 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link08 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link09 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
            background-color: rgb(255, 255, 0);
          }
          @media (max-width: 1600px) {
            .company-registration-container01 {
              height: 75vh;
            }
            .company-registration-text {
              font-size: 2rem;
              max-width: auto;
            }
            .company-registration-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
            .company-registration-text45 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .company-registration-link09 {
              color: var(--dl-color-gray-black);
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 1200px) {
            .company-registration-container01 {
              height: 75vh;
            }
            .company-registration-container04 {
              width: 40%;
            }
            .company-registration-image {
              width: 90%;
              margin-right: 0px;
            }
            .company-registration-container05 {
              width: 60%;
            }
            .company-registration-container07 {
              width: 90%;
            }
            .company-registration-text45 {
              width: 90%;
            }
            .company-registration-container40 {
              height: 40vh;
            }
            .company-registration-text46 {
              text-align: center;
            }
            .company-registration-link05 {
              text-align: center;
            }
            .company-registration-link06 {
              text-align: center;
            }
            .company-registration-link07 {
              text-align: center;
            }
            .company-registration-link08 {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .company-registration-container01 {
              height: 75vh;
            }
            .company-registration-container02 {
              width: 80%;
            }
            .company-registration-text {
              text-align: center;
            }
            .company-registration-text01 {
              text-align: left;
            }
            .company-registration-container04 {
              display: none;
            }
            .company-registration-image {
              width: 100%;
              display: none;
            }
            .company-registration-container05 {
              width: 80%;
            }
            .company-registration-container38 {
              height: auto;
              flex-direction: column;
            }
            .company-registration-container39 {
              width: 70%;
            }
            .company-registration-text45 {
              margin-top: var(--dl-space-space-unit);
            }
            .company-registration-container40 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .company-registration-text46 {
              width: 50%;
              text-align: center;
            }
            .company-registration-link05 {
              text-align: center;
            }
            .company-registration-link06 {
              text-align: center;
            }
            .company-registration-link07 {
              text-align: center;
            }
            .company-registration-link08 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .company-registration-container02 {
              width: 100%;
            }
            .company-registration-container03 {
              align-self: center;
            }
            .company-registration-text {
              align-self: center;
            }
            .company-registration-text01 {
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .company-registration-image {
              width: 100%;
            }
            .company-registration-container05 {
              height: auto;
              padding: var(--dl-space-space-twounits);
            }
            .company-registration-text04 {
              text-align: center;
            }
            .company-registration-text05 {
              text-align: center;
            }
            .company-registration-text06 {
              text-align: center;
            }
            .company-registration-container38 {
              height: auto;
            }
            .company-registration-container39 {
              width: 80%;
            }
            .company-registration-container40 {
              width: 100%;
              height: auto;
              padding: var(--dl-space-space-threeunits);
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .company-registration-text46 {
              width: 80%;
            }
            .company-registration-link05 {
              text-align: center;
            }
            .company-registration-link06 {
              text-align: center;
            }
            .company-registration-link07 {
              text-align: center;
            }
            .company-registration-link08 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .company-registration-container01 {
              height: 75vh;
            }
            .company-registration-container02 {
              height: auto;
            }
            .company-registration-container03 {
              width: 80%;
              height: auto;
            }
            .company-registration-text {
              color: var(--dl-color-gray-black);
              width: 100%;
              max-width: auto;
              text-align: left;
            }
            .company-registration-text01 {
              width: 100%;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .company-registration-container05 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              margin-top: var(--dl-space-space-halfunit);
            }
            .company-registration-text02 {
              text-align: center;
            }
            .company-registration-link {
              text-align: center;
            }
            .company-registration-link01 {
              text-align: center;
            }
            .company-registration-link02 {
              text-align: center;
            }
            .company-registration-link03 {
              text-align: center;
            }
            .company-registration-link04 {
              text-align: center;
            }
            .company-registration-container06 {
              width: 100%;
              height: auto;
              display: none;
            }
            .company-registration-container07 {
              width: 100%;
              height: auto;
            }
            .company-registration-container16 {
              height: 100%;
            }
            .company-registration-text45 {
              width: 100%;
            }
            .company-registration-container40 {
              width: 100%;
              height: 40vh;
              padding: var(--dl-space-space-twounits);
            }
            .company-registration-text46 {
              text-align: center;
            }
            .company-registration-link05 {
              width: 100%;
              text-align: center;
            }
            .company-registration-link06 {
              text-align: center;
            }
            .company-registration-link07 {
              text-align: center;
            }
            .company-registration-link08 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default CompanyRegistration
