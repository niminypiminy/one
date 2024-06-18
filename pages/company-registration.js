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
        <div className="company-registration-hero">
          <div className="company-registration-container01">
            <h1 className="company-registration-text">Company Registration</h1>
            <span className="company-registration-text01">
              Prior to initiating the company registration process, it is
              essential to carefully evaluate the liability associated with each
              legal structure, as well as the distribution of shares.
              Furthermore, thorough consideration should be given to government
              fees, capitalization prerequisites, necessary licenses, potential
              government incentives, regulatory frameworks, and other pertinent
              details.
            </span>
          </div>
          <img
            alt="Incorporating a company"
            src="/companyregistration-1500h.jpeg"
            loading="eager"
            className="company-registration-image"
          />
        </div>
        <div className="company-registration-container02">
          <div className="company-registration-container03">
            <span className="company-registration-text02">
              Types of Business Entitites
            </span>
          </div>
          <div className="company-registration-container04">
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
        </div>
        <div className="company-registration-container05 thq-section-padding">
          <div className="company-registration-max-width thq-section-max-width">
            <div className="company-registration-container06">
              <h2 className="company-registration-title thq-heading-2">
                At a glance
              </h2>
              <h3 className="company-registration-text03 thq-heading-3">
                A Comparative Analysis of Legal Entities
              </h3>
            </div>
          </div>
        </div>
        <div className="company-registration-container07">
          <div className="company-registration-container08">
            <div className="company-registration-container09">
              <span className="company-registration-text04">Type</span>
            </div>
            <div className="company-registration-container10">
              <span className="company-registration-text05">
                Limited Liability
              </span>
            </div>
            <div className="company-registration-container11">
              <span className="company-registration-text06">
                Corporate tax 
              </span>
            </div>
            <div className="company-registration-container12">
              <span className="company-registration-text07">FBL Required</span>
            </div>
            <div className="company-registration-container13">
              <span className="company-registration-text08">
                Capitalization
              </span>
            </div>
            <div className="company-registration-container14">
              <span className="company-registration-text09">LP</span>
            </div>
            <div className="company-registration-container15">
              <span className="company-registration-text10">Yes</span>
            </div>
            <div className="company-registration-container16">
              <span className="company-registration-text11">20%</span>
            </div>
            <div className="company-registration-container17">
              <span className="company-registration-text12">
                <span>Yes. (if Foreign Owned)</span>
                <br></br>
                <span>No. (if Thai Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container18">
              <span className="company-registration-text17">
                <span>2M-3M (Foreign Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container19">
              <span className="company-registration-text20">Ltd.</span>
            </div>
            <div className="company-registration-container20">
              <span className="company-registration-text21">Yes</span>
            </div>
            <div className="company-registration-container21">
              <span className="company-registration-text22">20%</span>
            </div>
            <div className="company-registration-container22">
              <span className="company-registration-text23">
                <span>Yes (if Foreign Owned)</span>
                <br></br>
                <span>No (if Thai Owned)</span>
                <br></br>
              </span>
            </div>
            <div className="company-registration-container23">
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
            <div className="company-registration-container24">
              <span className="company-registration-text31">Rep Office</span>
            </div>
            <div className="company-registration-container25">
              <span className="company-registration-text32">No</span>
            </div>
            <div className="company-registration-container26">
              <span className="company-registration-text33">0%</span>
            </div>
            <div className="company-registration-container27">
              <span className="company-registration-text34">No</span>
            </div>
            <div className="company-registration-container28">
              <span className="company-registration-text35">2M</span>
            </div>
            <div className="company-registration-container29">
              <span className="company-registration-text36">BOI</span>
            </div>
            <div className="company-registration-container30">
              <span className="company-registration-text37">Yes</span>
            </div>
            <div className="company-registration-container31">
              <span className="company-registration-text38">0%</span>
            </div>
            <div className="company-registration-container32">
              <span className="company-registration-text39">No</span>
            </div>
            <div className="company-registration-container33">
              <span className="company-registration-text40">Minimum of 1M</span>
            </div>
            <div className="company-registration-container34">
              <span className="company-registration-text41">Branch Office</span>
            </div>
            <div className="company-registration-container35">
              <span className="company-registration-text42">No</span>
            </div>
            <div className="company-registration-container36">
              <span className="company-registration-text43">20%</span>
            </div>
            <div className="company-registration-container37">
              <span className="company-registration-text44">Yes</span>
            </div>
            <div className="company-registration-container38">
              <span className="company-registration-text45">2M-3M</span>
            </div>
          </div>
        </div>
        <div className="company-registration-container39">
          <div className="company-registration-container40">
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
          <div className="company-registration-container41">
            <span className="company-registration-text47">
              <span>FBL &amp; Foreign Business Certificate</span>
              <br></br>
            </span>
            <Link href="/japan-thailand-economic-partnership-agreement">
              <a className="company-registration-link5">
                <span>Japan-Thailand Economic Partnership Agreement</span>
                <br></br>
              </a>
            </Link>
            <Link href="/thai-australia-free-trade-agreement">
              <a className="company-registration-link6">
                <span>Thai-Australia Free Trade Agreement</span>
                <br></br>
              </a>
            </Link>
            <Link href="/foreign-business-license">
              <a className="company-registration-link7">
                Foreign Business License
              </a>
            </Link>
            <Link href="/treaty-of-amity">
              <a className="company-registration-link8">
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
            background-color: var(--dl-color-theme-neutral-light);
          }
          .company-registration-container:hover {
            width: 100%;
          }
          .company-registration-hero {
            width: 100%;
            display: flex;
            max-width: 100%;
            margin-top: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .company-registration-container01 {
            width: 50%;
            display: flex;
            flex-direction: column;
          }
          .company-registration-text {
            width: 100%;
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .company-registration-text01 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .company-registration-image {
            width: 30%;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
          }
          .company-registration-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            opacity: 0.9;
            margin-top: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .company-registration-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .company-registration-text02 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .company-registration-container04 {
            flex: 0 0 auto;
            width: 75%;
            height: 75%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
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
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title1:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
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
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title11:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
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
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title12:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
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
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title13:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
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
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .company-registration-title14:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
          }
          .company-registration-container05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
          }
          .company-registration-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .company-registration-container06 {
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
          .company-registration-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .company-registration-container08 {
            width: 75%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .company-registration-text04 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .company-registration-text05 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .company-registration-text06 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .company-registration-text07 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
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
            background-color: var(--dl-color-theme-accent1);
          }
          .company-registration-text08 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
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
          .company-registration-text12 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
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
          .company-registration-text17 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
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
          .company-registration-text23 {
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
          .company-registration-text28 {
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
          .company-registration-container39 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .company-registration-container40 {
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
          .company-registration-container41 {
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
          .company-registration-link5 {
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
          .company-registration-link5:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
          }
          .company-registration-link6 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link6:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
          }
          .company-registration-link7 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link7:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
          }
          .company-registration-link8 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .company-registration-link8:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
          }
          @media (max-width: 1600px) {
            .company-registration-text {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .company-registration-image {
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .company-registration-container08 {
              height: 100%;
            }
            .company-registration-container41 {
              height: 60%;
              border-radius: var(--dl-radius-radius-cardradius);
            }
            .company-registration-text47 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link5 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link6 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link7 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
            .company-registration-link8 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 1200px) {
            .company-registration-container02 {
              width: 100%;
            }
            .company-registration-container04 {
              width: 100%;
            }
            .company-registration-container07 {
              height: 75vh;
            }
            .company-registration-container08 {
              width: 90%;
              height: 100%;
            }
            .company-registration-text46 {
              width: 90%;
            }
            .company-registration-container41 {
              width: 50%;
              height: 80%;
            }
            .company-registration-text47 {
              text-align: center;
            }
            .company-registration-link5 {
              text-align: center;
            }
            .company-registration-link6 {
              text-align: center;
            }
            .company-registration-link7 {
              text-align: center;
            }
            .company-registration-link8 {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .company-registration-hero {
              margin-top: var(--dl-space-space-sixunits);
              flex-direction: column;
            }
            .company-registration-container01 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .company-registration-text {
              max-width: auto;
              min-width: 100%;
            }
            .company-registration-text01 {
              width: 100%;
            }
            .company-registration-image {
              width: 80%;
            }
            .company-registration-container02 {
              height: auto;
              flex-direction: column;
            }
            .company-registration-text02 {
              margin-top: var(--dl-space-space-twounits);
            }
            .company-registration-container04 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
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
            .company-registration-title14 {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .company-registration-container07 {
              height: auto;
            }
            .company-registration-container08 {
              height: auto;
            }
            .company-registration-container39 {
              height: auto;
              flex-direction: column;
            }
            .company-registration-container40 {
              width: 70%;
            }
            .company-registration-text46 {
              margin-top: var(--dl-space-space-unit);
            }
            .company-registration-container41 {
              width: 80%;
              height: 60vh;
              margin-top: var(--dl-space-space-fourunits);
            }
            .company-registration-text47 {
              width: 50%;
              text-align: center;
            }
            .company-registration-link5 {
              text-align: center;
            }
            .company-registration-link6 {
              text-align: center;
            }
            .company-registration-link7 {
              text-align: center;
            }
            .company-registration-link8 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .company-registration-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .company-registration-container01 {
              width: 80%;
              margin-top: var(--dl-space-space-threeunits);
            }
            .company-registration-text {
              width: 75%;
              max-width: auto;
            }
            .company-registration-text01 {
              width: 75%;
              align-self: flex-start;
              padding-left: 0px;
              padding-right: 0px;
            }
            .company-registration-image {
              width: 80%;
            }
            .company-registration-container02 {
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
            .company-registration-container08 {
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
            .company-registration-container39 {
              height: auto;
            }
            .company-registration-container40 {
              width: 80%;
            }
            .company-registration-container41 {
              width: 100%;
              height: 75vh;
              padding: var(--dl-space-space-threeunits);
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .company-registration-text47 {
              width: 80%;
            }
            .company-registration-link5 {
              text-align: center;
            }
            .company-registration-link6 {
              text-align: center;
            }
            .company-registration-link7 {
              text-align: center;
            }
            .company-registration-link8 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .company-registration-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .company-registration-container01 {
              width: 90%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .company-registration-text {
              max-width: auto;
            }
            .company-registration-text01 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .company-registration-image {
              width: 100%;
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
            .company-registration-container06 {
              display: none;
            }
            .company-registration-container07 {
              width: 100%;
              height: auto;
              display: none;
            }
            .company-registration-container08 {
              width: 100%;
              height: auto;
            }
            .company-registration-container17 {
              height: 100%;
            }
            .company-registration-text46 {
              width: 100%;
            }
            .company-registration-container41 {
              width: 100%;
              height: 75vh;
              padding: var(--dl-space-space-twounits);
            }
            .company-registration-text47 {
              text-align: center;
            }
            .company-registration-link5 {
              width: 100%;
              text-align: center;
            }
            .company-registration-link6 {
              text-align: center;
            }
            .company-registration-link7 {
              text-align: center;
            }
            .company-registration-link8 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default CompanyRegistration
