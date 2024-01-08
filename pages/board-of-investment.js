import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Card1 from '../components/card1'
import FeatureCard41 from '../components/feature-card41'

const BoardOfInvestment = (props) => {
  return (
    <>
      <div className="board-of-investment-container">
        <Head>
          <title>Board-of-Investment - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:title"
            content="Board-of-Investment - Danneskiold &amp; Associates"
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
        <div className="board-of-investment-hero">
          <div className="board-of-investment-container1">
            <h1 className="board-of-investment-text">
              <span>
                How to register with the Thai Board of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="board-of-investment-text02">Investment</span>
              <span> (BOI). </span>
            </h1>
            <span className="board-of-investment-text04">
              The board of investment was established in 1966, under the office
              of the prime minister of Thailand for the purpose of attracting
              foreign investment. The BOI offers both tax and non-tax
              incentives.
            </span>
          </div>
          <img
            alt="image"
            src="/board%20of%20investment-1500h.jpg"
            loading="eager"
            className="board-of-investment-image"
          />
        </div>
        <div className="board-of-investment-banner">
          <h1 className="board-of-investment-text05">
            Benefits of Registering with the BOI
          </h1>
          <span className="board-of-investment-text06">
            <span className="board-of-investment-text07">
              The BOI determines incentives on a case-by-case basis, considering
              capitalization, industry of operation, number of employees, and
              other variables. Some of the benefits include, no tax, no tariffs,
              100% foreign ownership, and property rights.
            </span>
            <br></br>
          </span>
        </div>
        <section id="arrow" className="board-of-investment-section">
          <main className="board-of-investment-cards">
            <Card1
              Header="No Tax"
              Description="Exempt from paying corporate income tax for up to thirteen years, or a 50% reduction when investing in certain industries."
              rootClassName="card1-root-class-name"
            ></Card1>
            <Card1
              Icon="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              Header="No Tariffs"
              Description="The BOI will waive import tariffs for machines and other raw materials, if necessary for business operation and relocation."
              rootClassName="card1-root-class-name1"
            ></Card1>
            <Card1
              Icon="0 0 1024 1024"
              Header="Ownership"
              Description="100% foreign ownership is permitted, and foreign investors and their next of kin may receive permission to work and reside in Thailand."
              rootClassName="card1-root-class-name2"
            ></Card1>
            <Card1
              Icon="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              Header="Own Property"
              Description="In some cases, companies registered with the BOI are permitted to own land"
              rootClassName="card1-root-class-name3"
            ></Card1>
          </main>
        </section>
        <div className="board-of-investment-features">
          <h1 className="board-of-investment-text09">Qualifications</h1>
          <div className="board-of-investment-container2">
            <div className="board-of-investment-container3">
              <FeatureCard41
                title="Category 1 (FBA)"
                description="If the Business receives permission from the BOI to register under category one of the Foreign Business Act, i.e., in a protected industry, then foreigners cannot own more than 50% of the shares."
                rootClassName="rootClassName1"
              ></FeatureCard41>
              <FeatureCard41
                title="Category 2 and 3"
                description="If the business is registered under category 2 or 3 of the Foreign Business Act (FBA), then foreigners can own 100% of the shares provided the company doesn't violate provisions in other acts."
                rootClassName="rootClassName4"
              ></FeatureCard41>
              <FeatureCard41
                title="Investment Promotion"
                description="The value-added of the project must not be less than 20% of revenues, except for projects in agriculture, electronic products and parts, and coil centers, all of which must have a value-added of at least 10% of revenues."
                rootClassName="rootClassName3"
              ></FeatureCard41>
              <FeatureCard41
                title="Minimal Capital"
                description="The minimum capital requirement for each investment is one million baht excluding the cost of land and working capital."
                rootClassName="rootClassName2"
              ></FeatureCard41>
              <FeatureCard41
                title="Projects over 10M Baht"
                description="Projects with investment capital of 10 million baht or more (excluding cost of land and working capital) must obtain ISO 9000 or ISO 14000 certification. "
                rootClassName="rootClassName5"
              ></FeatureCard41>
              <FeatureCard41
                title="Debt to Equity Ratio"
                description="For newly established projects, the debt-to-equity ratio must not exceed 3 to 1."
                rootClassName="rootClassName6"
              ></FeatureCard41>
            </div>
          </div>
        </div>
        <section className="board-of-investment-roadmap">
          <div className="board-of-investment-heading">
            <h2 className="board-of-investment-header">
              How to register with the BOI
            </h2>
          </div>
          <div className="board-of-investment-list">
            <div className="board-of-investment-container4">
              <div className="board-of-investment-step">
                <div className="board-of-investment-heading1">
                  <span className="board-of-investment-caption">Step 1</span>
                  <p className="board-of-investment-header1">
                    <span>
                      The application for the BOI can be submitted online at
                    </span>
                    <a
                      href="https://boi.go.th"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="board-of-investment-link"
                    >
                      {' '}
                      boi.go.th
                    </a>
                    <span>. There is no cost to file an application.</span>
                  </p>
                </div>
              </div>
              <div className="board-of-investment-step1">
                <div className="board-of-investment-heading2">
                  <span className="board-of-investment-caption1">Step 2</span>
                  <p className="board-of-investment-header2">
                    Within ten days of submission, the BOI will contact the
                    company representative to schedule a presentation. 
                  </p>
                </div>
              </div>
              <div className="board-of-investment-step2">
                <div className="board-of-investment-heading3">
                  <span className="board-of-investment-caption2">Step 3</span>
                  <p className="board-of-investment-header3">
                    BOI officials will review the company presentation, the
                    company data, and consider the merits of the project.
                  </p>
                </div>
              </div>
              <div className="board-of-investment-step3">
                <div className="board-of-investment-heading4">
                  <span className="board-of-investment-caption3">Step 4</span>
                  <p className="board-of-investment-header4">
                    If your application is accepted, you will be given one month
                    to confirm your intent. 
                  </p>
                </div>
              </div>
              <div className="board-of-investment-step4">
                <div className="board-of-investment-heading5">
                  <span className="board-of-investment-caption4">
                    <span>Step 5</span>
                    <br></br>
                  </span>
                  <p className="board-of-investment-header5">
                    Once accepted, the BOI will ask you to register a Thai
                    company within six months. 
                  </p>
                </div>
              </div>
              <div className="board-of-investment-step5">
                <div className="board-of-investment-heading6">
                  <span className="board-of-investment-caption5">Step 6</span>
                  <p className="board-of-investment-header6">
                    <span className="board-of-investment-text14">
                      After registering your company, and presenting
                      incorporation documents, the BOI will issue an official
                      certificate. 
                    </span>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="board-of-investment-container5">
          <span className="board-of-investment-text17">
            If your company is registered with the BOI under categories 2 or 3,
            then you will also need a foreign business certificate. The
            application fee for a foreign business certificate is 2000 baht, and
            20,000 upon issuance.
          </span>
          <Link href="/contact">
            <a className="board-of-investment-link1">Ask us anything</a>
          </Link>
        </div>
        <footer className="board-of-investment-footer">
          <span className="board-of-investment-text18">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .board-of-investment-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            flex-direction: column;
          }
          .board-of-investment-hero {
            width: 100%;
            display: flex;
            max-width: 100%;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container1 {
            width: 50%;
            display: flex;
            flex-direction: column;
          }
          .board-of-investment-text {
            width: 100%;
            font-size: 2.5rem;
            max-width: 450px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .board-of-investment-text02 {
            background-color: rgb(255, 255, 0);
          }
          .board-of-investment-text04 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .board-of-investment-image {
            width: 30%;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
          }
          .board-of-investment-image:hover {
            transform: scale(1.2);
          }
          .board-of-investment-banner {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text05 {
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 2.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .board-of-investment-text06 {
            color: var(--dl-color-gray-black);
            width: 50%;
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .board-of-investment-section {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 75%;
            height: 60vh;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .board-of-investment-cards {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            max-width: 100%;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-features {
            width: 80%;
            height: auto;
            display: flex;
            max-width: auto;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text09 {
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 2.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Josefin Sans;
            font-weight: 200;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .board-of-investment-container2 {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
          }
          .board-of-investment-container3 {
            display: grid;
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr;
          }
          .board-of-investment-roadmap {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            max-width: auto;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-heading {
            gap: var(--dl-space-space-twounits);
            width: 75%;
            display: flex;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .board-of-investment-header {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 2.5rem;
            max-width: auto;
            min-width: 60%;
            box-shadow: rgb(0, 0, 0) 5px 5px 10px 0px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 108px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(27, 27, 27);
          }
          .board-of-investment-list {
            gap: 106px;
            width: 80%;
            height: auto;
            display: flex;
            border-color: rgba(255, 255, 255, 0.3);
            flex-direction: column;
            border-left-width: 1px;
          }
          .board-of-investment-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-step {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
          }
          .board-of-investment-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-caption {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .board-of-investment-header1 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .board-of-investment-link {
            text-decoration: underline;
          }
          .board-of-investment-step1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-caption1 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .board-of-investment-header2 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .board-of-investment-step2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-caption2 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .board-of-investment-header3 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .board-of-investment-step3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
          }
          .board-of-investment-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-caption3 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .board-of-investment-header4 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .board-of-investment-step4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-heading5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-caption4 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .board-of-investment-header5 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .board-of-investment-step5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-heading6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-caption5 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .board-of-investment-header6 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .board-of-investment-container5 {
            flex: 0 0 auto;
            width: 50%;
            height: 50vh;
            display: flex;
            align-self: center;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text17 {
            width: 40%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .board-of-investment-link1 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: Josefin Sans;
            font-weight: 200;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
            background-color: #ffff00;
          }
          .board-of-investment-footer {
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
          .board-of-investment-text18 {
            color: var(--dl-color-gray-black);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .board-of-investment-container {
              align-items: center;
              justify-content: center;
            }
            .board-of-investment-text {
              font-size: 2.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .board-of-investment-image {
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .board-of-investment-banner {
              margin-top: var(--dl-space-space-sixunits);
              padding-top: 0px;
            }
            .board-of-investment-text05 {
              color: var(--dl-color-gray-black);
              width: auto;
              margin-top: var(--dl-space-space-twounits);
            }
            .board-of-investment-text06 {
              width: 50%;
              font-size: 1.5rem;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-text07 {
              width: 30%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-section {
              width: 90%;
              height: auto;
              margin-top: var(--dl-space-space-sixunits);
            }
            .board-of-investment-cards {
              height: auto;
              max-width: 100%;
            }
            .board-of-investment-features {
              height: auto;
              position: relative;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .board-of-investment-text09 {
              width: auto;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              background-color: transparent;
            }
            .board-of-investment-container2 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .board-of-investment-roadmap {
              height: auto;
            }
            .board-of-investment-header {
              color: var(--dl-color-gray-white);
              box-shadow: 5px 5px 10px 0px #000000;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-list {
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .board-of-investment-container4 {
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .board-of-investment-step {
              width: 60%;
              margin-left: 0px;
            }
            .board-of-investment-caption {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
            }
            .board-of-investment-header1 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
            }
            .board-of-investment-step1 {
              width: 60%;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .board-of-investment-heading2 {
              max-width: auto;
            }
            .board-of-investment-caption1 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .board-of-investment-header2 {
              font-size: 1.5rem;
            }
            .board-of-investment-step2 {
              width: 60%;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .board-of-investment-caption2 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .board-of-investment-header3 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
            }
            .board-of-investment-step3 {
              width: 60%;
            }
            .board-of-investment-caption3 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
            }
            .board-of-investment-header4 {
              font-size: 1.5rem;
            }
            .board-of-investment-step4 {
              width: 60%;
              margin-left: 0px;
            }
            .board-of-investment-caption4 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
              letter-spacing: 1px;
              text-transform: uppercase;
            }
            .board-of-investment-header5 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
            }
            .board-of-investment-step5 {
              width: 60%;
              margin-left: 0px;
            }
            .board-of-investment-caption5 {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
            }
            .board-of-investment-header6 {
              color: var(--dl-color-gray-black);
            }
            .board-of-investment-container5 {
              width: 50%;
              height: 60vh;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .board-of-investment-text17 {
              color: var(--dl-color-gray-black);
              width: 50%;
              font-size: 1.5rem;
              font-style: normal;
              text-align: center;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-link1 {
              color: var(--dl-color-gray-black);
              width: auto;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-space-space-fourunits);
              font-family: Josefin Sans;
              font-weight: 200;
              text-decoration: underline none;
              background-color: rgb(255, 255, 0);
            }
          }
          @media (max-width: 1200px) {
            .board-of-investment-text06 {
              width: 50%;
            }
            .board-of-investment-section {
              width: 100%;
              flex-direction: row;
            }
            .board-of-investment-cards {
              flex-direction: column;
            }
            .board-of-investment-roadmap {
              height: auto;
            }
            .board-of-investment-step {
              width: 75%;
            }
            .board-of-investment-step1 {
              width: 75%;
            }
            .board-of-investment-step2 {
              width: 75%;
            }
            .board-of-investment-step3 {
              width: 75%;
            }
            .board-of-investment-step4 {
              width: 75%;
            }
            .board-of-investment-step5 {
              width: 75%;
            }
            .board-of-investment-container5 {
              width: auto;
            }
            .board-of-investment-text17 {
              width: 50%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .board-of-investment-hero {
              flex-direction: column;
            }
            .board-of-investment-container1 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .board-of-investment-text {
              max-width: auto;
              min-width: 100%;
              text-align: left;
            }
            .board-of-investment-text04 {
              width: 100%;
              text-align: left;
            }
            .board-of-investment-image {
              width: 80%;
            }
            .board-of-investment-section {
              gap: var(--dl-space-space-threeunits);
              height: auto;
              padding-top: 100px;
              flex-direction: column;
              padding-bottom: 100px;
            }
            .board-of-investment-cards {
              gap: var(--dl-space-space-oneandhalfunits);
              height: auto;
              flex-direction: column;
            }
            .board-of-investment-features {
              width: auto;
              height: auto;
              margin-top: var(--dl-space-space-threeunits);
              align-items: center;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .board-of-investment-text09 {
              align-self: center;
            }
            .board-of-investment-container2 {
              width: 100%;
              flex-direction: row;
            }
            .board-of-investment-container3 {
              width: 100%;
            }
            .board-of-investment-roadmap {
              height: auto;
            }
            .board-of-investment-heading {
              width: 100%;
            }
            .board-of-investment-header {
              width: 80%;
              text-align: center;
            }
            .board-of-investment-list {
              width: 90%;
            }
            .board-of-investment-container4 {
              width: 90%;
            }
            .board-of-investment-step {
              width: 80%;
            }
            .board-of-investment-step1 {
              width: 80%;
            }
            .board-of-investment-step2 {
              width: 80%;
            }
            .board-of-investment-heading3 {
              max-width: auto;
            }
            .board-of-investment-step3 {
              width: 80%;
            }
            .board-of-investment-step4 {
              width: 80%;
            }
            .board-of-investment-step5 {
              width: 80%;
            }
            .board-of-investment-text17 {
              width: 60%;
            }
          }
          @media (max-width: 767px) {
            .board-of-investment-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .board-of-investment-container1 {
              width: 80%;
              margin-top: var(--dl-space-space-threeunits);
            }
            .board-of-investment-text {
              width: 75%;
              max-width: auto;
              text-align: left;
            }
            .board-of-investment-text04 {
              width: 75%;
              align-self: flex-start;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .board-of-investment-image {
              width: 80%;
            }
            .board-of-investment-banner {
              width: 80%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .board-of-investment-text06 {
              width: 100%;
              text-align: left;
            }
            .board-of-investment-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .board-of-investment-text09 {
              text-align: center;
            }
            .board-of-investment-container2 {
              width: 100%;
              flex-direction: column;
            }
            .board-of-investment-container3 {
              width: 100%;
            }
            .board-of-investment-roadmap {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .board-of-investment-heading {
              gap: var(--dl-space-space-unit);
            }
            .board-of-investment-header {
              width: 80%;
              font-size: 36px;
              line-height: 43px;
            }
            .board-of-investment-list {
              gap: var(--dl-space-space-threeunits);
              width: 85%;
              padding-top: 0px;
              padding-left: 0px;
              padding-bottom: 0px;
            }
            .board-of-investment-container4 {
              width: 100%;
            }
            .board-of-investment-step {
              width: 100%;
            }
            .board-of-investment-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .board-of-investment-header1 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .board-of-investment-step1 {
              width: 100%;
            }
            .board-of-investment-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .board-of-investment-header2 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .board-of-investment-step2 {
              width: 100%;
            }
            .board-of-investment-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .board-of-investment-header3 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .board-of-investment-step3 {
              width: 100%;
            }
            .board-of-investment-heading4 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .board-of-investment-header4 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .board-of-investment-step4 {
              width: 100%;
            }
            .board-of-investment-heading5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .board-of-investment-header5 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .board-of-investment-step5 {
              width: 100%;
            }
            .board-of-investment-heading6 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .board-of-investment-header6 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 21px;
            }
            .board-of-investment-text14 {
              font-size: 14px;
              line-height: 21px;
            }
            .board-of-investment-container5 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .board-of-investment-text17 {
              color: var(--dl-color-gray-black);
              width: 60%;
            }
            .board-of-investment-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .board-of-investment-text18 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .board-of-investment-hero {
              max-width: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .board-of-investment-container1 {
              width: 90%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .board-of-investment-text {
              max-width: auto;
              text-align: left;
            }
            .board-of-investment-text04 {
              width: 100%;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .board-of-investment-image {
              width: 100%;
            }
            .board-of-investment-banner {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .board-of-investment-text05 {
              text-align: left;
            }
            .board-of-investment-text06 {
              text-align: left;
            }
            .board-of-investment-features {
              width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .board-of-investment-text09 {
              width: 100%;
            }
            .board-of-investment-container3 {
              grid-template-columns: 1fr;
            }
            .board-of-investment-roadmap {
              height: auto;
            }
            .board-of-investment-header {
              width: 100%;
            }
            .board-of-investment-list {
              width: 100%;
              padding-left: 0px;
            }
            .board-of-investment-container4 {
              flex-direction: column;
            }
            .board-of-investment-step {
              width: 100%;
            }
            .board-of-investment-header1 {
              width: 80%;
            }
            .board-of-investment-step1 {
              width: 100%;
              margin-top: var(--dl-space-space-unit);
            }
            .board-of-investment-header2 {
              width: 80%;
            }
            .board-of-investment-step2 {
              width: 100%;
              margin-top: var(--dl-space-space-unit);
            }
            .board-of-investment-header3 {
              width: 80%;
            }
            .board-of-investment-step3 {
              width: 100%;
            }
            .board-of-investment-header4 {
              width: 80%;
            }
            .board-of-investment-step4 {
              width: 100%;
              margin-top: var(--dl-space-space-unit);
            }
            .board-of-investment-header5 {
              color: rgb(17, 40, 33);
              width: 80%;
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 21px;
            }
            .board-of-investment-step5 {
              width: 100%;
              margin-top: var(--dl-space-space-unit);
            }
            .board-of-investment-header6 {
              width: 80%;
              font-size: 1.5rem;
              font-family: Josefin Sans;
            }
            .board-of-investment-text14 {
              width: 80%;
            }
            .board-of-investment-container5 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .board-of-investment-text17 {
              width: 80%;
            }
            .board-of-investment-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .board-of-investment-text18 {
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

export default BoardOfInvestment
