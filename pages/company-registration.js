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
          <title>
            Company-Registration - Danneskiold & Associates | Law Firm
          </title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Company-Registration - Danneskiold &amp; Associates | Law Firm "
          />
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
        <div className="company-registration-container01">
          <div className="company-registration-container02">
            <img
              alt="image"
              src="/designer%20(7)-600w.jpeg"
              className="company-registration-image"
            />
          </div>
          <div className="company-registration-container03">
            <div className="company-registration-container04">
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
              <Link href="/contact">
                <a className="company-registration-link">
                  <h1 className="company-registration-text02">Contact</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="company-registration-container05">
          <div className="company-registration-feature1 thq-flex-column">
            <img
              alt="image"
              src="/limited%20partnership-200h.jpg"
              className="company-registration-image1 thq-team-image-round"
            />
            <div className="company-registration-content thq-flex-column">
              <Link href="/limited-partnership-lp">
                <a>
                  <h3 className="company-registration-title1 thq-heading-3">
                    Limited Partnership
                  </h3>
                </a>
              </Link>
            </div>
          </div>
          <div className="company-registration-feature2 thq-flex-column">
            <img
              alt="image"
              src="/branch%20office-200h.jpg"
              className="company-registration-image2 thq-team-image-round"
            />
            <div className="company-registration-content1 thq-flex-column">
              <Link href="/branch-office">
                <a>
                  <h3 className="company-registration-title11 thq-heading-3">
                    Branch Office
                  </h3>
                </a>
              </Link>
            </div>
          </div>
          <div className="company-registration-feature3 thq-flex-column">
            <img
              alt="image"
              src="/limited%20company-200h.jpg"
              className="company-registration-image3 thq-team-image-round"
            />
            <div className="company-registration-content2 thq-flex-column">
              <Link href="/limited-company-ltd">
                <a>
                  <h3 className="company-registration-title12 thq-heading-3">
                    Limited Company
                  </h3>
                </a>
              </Link>
            </div>
          </div>
          <div className="company-registration-feature4 thq-flex-column">
            <img
              alt="image"
              src="/board%20of%20investment-200h.jpg"
              className="company-registration-image4 thq-team-image-round"
            />
            <div className="company-registration-content3 thq-flex-column">
              <Link href="/board-of-investment">
                <a>
                  <h3 className="company-registration-title13 thq-heading-3">
                    Board of Investment
                  </h3>
                </a>
              </Link>
            </div>
          </div>
          <div className="company-registration-feature5 thq-flex-column">
            <img
              alt="image"
              src="/repoffice-200h.jpg"
              className="company-registration-image5 thq-team-image-round"
            />
            <div className="company-registration-content4 thq-flex-column">
              <Link href="/representative-office">
                <a>
                  <h3 className="company-registration-title14 thq-heading-3">
                    Rep Office
                  </h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="company-registration-container06 thq-section-padding">
          <div className="company-registration-max-width thq-section-max-width">
            <div className="company-registration-container07">
              <h2 className="company-registration-title thq-heading-2">
                At a glance
              </h2>
              <h3 className="company-registration-text03 thq-heading-3">
                A Comparative Analysis of Legal Entities
              </h3>
            </div>
          </div>
        </div>
        <div className="company-registration-container08">
          <div className="company-registration-container09">
            <div className="company-registration-container10">
              <span className="company-registration-text04">Type</span>
            </div>
            <div className="company-registration-container11">
              <span className="company-registration-text05">
                Limited Liability
              </span>
            </div>
            <div className="company-registration-container12">
              <span className="company-registration-text06">
                Corporate tax 
              </span>
            </div>
            <div className="company-registration-container13">
              <span className="company-registration-text07">FBL Required</span>
            </div>
            <div className="company-registration-container14">
              <span className="company-registration-text08">
                Capitalization
              </span>
            </div>
            <div className="company-registration-container15">
              <span className="company-registration-text09">LP</span>
            </div>
            <div className="company-registration-container16">
              <span className="company-registration-text10">Yes</span>
            </div>
            <div className="company-registration-container17">
              <span className="company-registration-text11">20%</span>
            </div>
            <div className="company-registration-container18">
              <span className="company-registration-text12">
                <span>Yes. (if Foreign Owned)</span>
                <br></br>
                <span>No. (if Thai Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container19">
              <span className="company-registration-text17">
                <span>2M-3M (Foreign Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container20">
              <span className="company-registration-text20">Ltd.</span>
            </div>
            <div className="company-registration-container21">
              <span className="company-registration-text21">Yes</span>
            </div>
            <div className="company-registration-container22">
              <span className="company-registration-text22">20%</span>
            </div>
            <div className="company-registration-container23">
              <span className="company-registration-text23">
                <span>Yes (if Foreign Owned)</span>
                <br></br>
                <span>No (if Thai Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container24">
              <span className="company-registration-text28">
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
            <div className="company-registration-container25">
              <span className="company-registration-text31">Rep Office</span>
            </div>
            <div className="company-registration-container26">
              <span className="company-registration-text32">No</span>
            </div>
            <div className="company-registration-container27">
              <span className="company-registration-text33">0%</span>
            </div>
            <div className="company-registration-container28">
              <span className="company-registration-text34">No</span>
            </div>
            <div className="company-registration-container29">
              <span className="company-registration-text35">2M</span>
            </div>
            <div className="company-registration-container30">
              <span className="company-registration-text36">BOI</span>
            </div>
            <div className="company-registration-container31">
              <span className="company-registration-text37">Yes</span>
            </div>
            <div className="company-registration-container32">
              <span className="company-registration-text38">0%</span>
            </div>
            <div className="company-registration-container33">
              <span className="company-registration-text39">No</span>
            </div>
            <div className="company-registration-container34">
              <span className="company-registration-text40">Minimum of 1M</span>
            </div>
            <div className="company-registration-container35">
              <span className="company-registration-text41">Branch Office</span>
            </div>
            <div className="company-registration-container36">
              <span className="company-registration-text42">No</span>
            </div>
            <div className="company-registration-container37">
              <span className="company-registration-text43">20%</span>
            </div>
            <div className="company-registration-container38">
              <span className="company-registration-text44">Yes</span>
            </div>
            <div className="company-registration-container39">
              <span className="company-registration-text45">2M-3M</span>
            </div>
          </div>
        </div>
        <div className="company-registration-container40">
          <div className="company-registration-container41">
            <span className="company-registration-text46">
              Foreign juristic persons are governed by the regulations set forth
              in the Foreign Business Act. As a result, most companies with
              majority foreign ownership will be required to obtain a Foreign
              Business License (FBL). However, certain treaties and the Board of
              Investment allow foreign juristic persons to conduct business in
              Thailand with a Foreign Business Certificate, which is a more
              cost-effective and streamlined alternative to the FBL.
            </span>
          </div>
          <div className="company-registration-container42">
            <span className="company-registration-text47">
              <span>FBL &amp; Foreign Business Certificate</span>
              <br></br>
            </span>
            <Link href="/japan-thailand-economic-partnership-agreement">
              <a className="company-registration-link06">
                <span>Japan-Thailand Economic Partnership Agreement</span>
                <br></br>
              </a>
            </Link>
            <Link href="/thai-australia-free-trade-agreement">
              <a className="company-registration-link07">
                <span>Thai-Australia Free Trade Agreement</span>
                <br></br>
              </a>
            </Link>
            <Link href="/foreign-business-license">
              <a className="company-registration-link08">
                Foreign Business License
              </a>
            </Link>
            <Link href="/treaty-of-amity">
              <a className="company-registration-link09">
                <span>Treaty of Amity</span>
                <br></br>
              </a>
            </Link>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name6"></Footer1>
      </div>
      <style jsx>
        {`
          .company-registration-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .company-registration-container:hover {
            width: 100%;
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
          .company-registration-image {
            width: 80%;
            height: auto;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
          }
          .company-registration-image:hover {
            transform: scale(1.2);
          }
          .company-registration-container03 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .company-registration-container04 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .company-registration-text {
            fill: #1b1b1b;
            color: #1b1b1b;
            width: 75%;
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .company-registration-text01 {
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
          .company-registration-link {
            display: contents;
          }
          .company-registration-text02 {
            color: var(--dl-color-gray-black);
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
          .company-registration-text02:hover {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            background-color: var(--dl-color-theme-primary2);
          }
          .company-registration-container05 {
            flex: 0 0 auto;
            width: 80%;
            height: 50vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .company-registration-feature1 {
            width: 20%;
            height: 50%;
            align-items: center;
            justify-content: center;
          }
          .company-registration-image1 {
            transition: 0.3s;
          }
          .company-registration-image1:hover {
            transform: scale(1.2);
          }
          .company-registration-content {
            align-items: flex-start;
          }
          .company-registration-title1 {
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title1:hover {
            fill: #521e01;
            color: #521e01;
          }
          .company-registration-feature2 {
            width: 20%;
            height: 50%;
            align-items: center;
            justify-content: center;
          }
          .company-registration-image2 {
            transition: 0.3s;
          }
          .company-registration-image2:hover {
            transform: scale(1.2);
          }
          .company-registration-content1 {
            align-items: flex-start;
          }
          .company-registration-title11 {
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title11:hover {
            fill: #521e01;
            color: #521e01;
          }
          .company-registration-feature3 {
            width: 20%;
            height: 50%;
            align-items: center;
            justify-content: center;
          }
          .company-registration-image3 {
            transition: 0.3s;
          }
          .company-registration-image3:hover {
            transform: scale(1.2);
          }
          .company-registration-content2 {
            align-items: flex-start;
          }
          .company-registration-title12 {
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title12:hover {
            fill: #521e01;
            color: #521e01;
          }
          .company-registration-feature4 {
            width: 20%;
            height: 50%;
            align-items: center;
            justify-content: center;
          }
          .company-registration-image4 {
            transition: 0.3s;
          }
          .company-registration-image4:hover {
            transform: scale(1.2);
          }
          .company-registration-content3 {
            align-items: flex-start;
          }
          .company-registration-title13 {
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title13:hover {
            fill: #521e01;
            color: #521e01;
          }
          .company-registration-feature5 {
            width: 20%;
            height: 50%;
            align-items: center;
            justify-content: center;
          }
          .company-registration-image5 {
            transition: 0.3s;
          }
          .company-registration-image5:hover {
            transform: scale(1.2);
          }
          .company-registration-content4 {
            align-items: flex-start;
          }
          .company-registration-title14 {
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title14:hover {
            fill: #521e01;
            color: #521e01;
          }
          .company-registration-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            padding: 0px;
            position: relative;
            align-items: center;
          }
          .company-registration-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .company-registration-container07 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .company-registration-title {
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .company-registration-text03 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .company-registration-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 50vh;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .company-registration-container09 {
            width: 75%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
            background-color: #1b1b1b;
          }
          .company-registration-text04 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
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
            background-color: #1b1b1b;
          }
          .company-registration-text05 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
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
            background-color: #1b1b1b;
          }
          .company-registration-text06 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
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
            background-color: #1b1b1b;
          }
          .company-registration-text07 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
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
            background-color: #1b1b1b;
          }
          .company-registration-text08 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
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
          .company-registration-text09 {
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
          .company-registration-text10 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
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
          .company-registration-text11 {
            font-size: 1.5rem;
            font-style: normal;
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
          .company-registration-text12 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
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
          .company-registration-text17 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
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
          .company-registration-text20 {
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
          .company-registration-text21 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
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
          .company-registration-text22 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
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
          .company-registration-text23 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
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
          .company-registration-text28 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
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
          .company-registration-text31 {
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
          .company-registration-text32 {
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
          .company-registration-text33 {
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
          .company-registration-text34 {
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
          .company-registration-text35 {
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
          .company-registration-text36 {
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
          .company-registration-text37 {
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
          .company-registration-text38 {
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
          .company-registration-text39 {
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
          .company-registration-text40 {
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
          .company-registration-text41 {
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
          .company-registration-text42 {
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
          .company-registration-text43 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container38 {
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
          .company-registration-container39 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .company-registration-text45 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-container40 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .company-registration-container41 {
            flex: 0 0 auto;
            width: 40%;
            height: 80%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .company-registration-text46 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .company-registration-container42 {
            flex: 0 0 auto;
            width: 40%;
            height: 60%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #521e01;
          }
          .company-registration-text47 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: auto;
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .company-registration-link06 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link06:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .company-registration-link07 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link07:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .company-registration-link08 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link08:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .company-registration-link09 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link09:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 1600px) {
            .company-registration-container {
              background-color: var(--dl-color-theme-accent1);
            }
            .company-registration-image {
              width: 80%;
              height: auto;
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .company-registration-text {
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .company-registration-text01 {
              width: 100%;
            }
            .company-registration-container08 {
              height: 50vh;
            }
            .company-registration-container09 {
              height: 100%;
            }
            .company-registration-container42 {
              height: 60%;
              border-radius: var(--dl-radius-radius-cardradius);
              background-color: #521e01;
            }
            .company-registration-text47 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link06 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link07 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link08 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link09 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 1200px) {
            .company-registration-container02 {
              width: 40%;
            }
            .company-registration-image {
              width: 80%;
            }
            .company-registration-container04 {
              width: 95%;
            }
            .company-registration-text01 {
              width: 100%;
            }
            .company-registration-container05 {
              width: 90%;
            }
            .company-registration-container08 {
              height: 75vh;
            }
            .company-registration-container09 {
              width: 90%;
              height: 100%;
            }
            .company-registration-text46 {
              width: 90%;
            }
            .company-registration-container42 {
              width: 50%;
              height: 80%;
            }
            .company-registration-text47 {
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
            .company-registration-link09 {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .company-registration-container01 {
              height: 75vh;
            }
            .company-registration-container02 {
              display: none;
            }
            .company-registration-image {
              order: 2;
              width: 100%;
            }
            .company-registration-container03 {
              width: 80%;
            }
            .company-registration-text01 {
              text-align: left;
            }
            .company-registration-container05 {
              height: 100vh;
              flex-direction: column;
            }
            .company-registration-title1 {
              text-align: center;
            }
            .company-registration-feature2 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .company-registration-title12 {
              text-align: center;
            }
            .company-registration-feature4 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .company-registration-title13 {
              text-align: center;
            }
            .company-registration-container08 {
              height: auto;
            }
            .company-registration-container09 {
              height: auto;
            }
            .company-registration-container40 {
              height: auto;
              flex-direction: column;
            }
            .company-registration-container41 {
              width: 70%;
            }
            .company-registration-text46 {
              margin-top: var(--dl-space-space-unit);
            }
            .company-registration-container42 {
              width: 80%;
              height: 60vh;
              margin-top: var(--dl-space-space-fourunits);
            }
            .company-registration-text47 {
              width: 50%;
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
            .company-registration-link09 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .company-registration-image {
              width: 100%;
            }
            .company-registration-container03 {
              width: 100%;
            }
            .company-registration-container04 {
              width: 90%;
              align-self: center;
            }
            .company-registration-text {
              align-self: center;
              text-align: left;
            }
            .company-registration-text01 {
              width: 100%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              padding-left: var(--dl-space-space-halfunit);
            }
            .company-registration-text02 {
              align-self: flex-start;
            }
            .company-registration-container05 {
              height: auto;
            }
            .company-registration-feature1 {
              width: 50%;
            }
            .company-registration-feature2 {
              width: 50%;
            }
            .company-registration-title11 {
              text-align: center;
            }
            .company-registration-feature3 {
              width: 50%;
            }
            .company-registration-feature4 {
              width: 50%;
            }
            .company-registration-feature5 {
              width: 50%;
            }
            .company-registration-container09 {
              width: 95%;
            }
            .company-registration-text05 {
              text-align: center;
            }
            .company-registration-text06 {
              text-align: center;
            }
            .company-registration-text07 {
              text-align: center;
            }
            .company-registration-container40 {
              height: auto;
            }
            .company-registration-container41 {
              width: 80%;
            }
            .company-registration-container42 {
              width: 100%;
              height: 75vh;
              padding: var(--dl-space-space-threeunits);
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .company-registration-text47 {
              width: 80%;
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
            .company-registration-link09 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .company-registration-image {
              width: 100%;
            }
            .company-registration-container04 {
              width: 80%;
              height: 100%;
            }
            .company-registration-text {
              width: 100%;
              text-align: left;
            }
            .company-registration-text01 {
              width: 100%;
              font-size: 1.5rem;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .company-registration-text02 {
              align-self: flex-start;
            }
            .company-registration-feature1 {
              width: 50%;
            }
            .company-registration-feature2 {
              width: 50%;
            }
            .company-registration-feature3 {
              width: 50%;
            }
            .company-registration-feature4 {
              width: 50%;
            }
            .company-registration-feature5 {
              width: 50%;
            }
            .company-registration-title14 {
              text-align: center;
            }
            .company-registration-container07 {
              display: none;
            }
            .company-registration-container08 {
              width: 100%;
              height: auto;
              display: none;
            }
            .company-registration-container09 {
              width: 100%;
              height: auto;
            }
            .company-registration-container18 {
              height: 100%;
            }
            .company-registration-container40 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .company-registration-text46 {
              width: 100%;
            }
            .company-registration-container42 {
              width: 100%;
              height: 75vh;
              padding: var(--dl-space-space-twounits);
            }
            .company-registration-text47 {
              text-align: center;
            }
            .company-registration-link06 {
              width: 100%;
              text-align: center;
            }
            .company-registration-link07 {
              text-align: center;
            }
            .company-registration-link08 {
              text-align: center;
            }
            .company-registration-link09 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default CompanyRegistration
