import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Card1 from '../components/card1'
import Footer1 from '../components/footer1'

const BoardOfInvestment = (props) => {
  return (
    <>
      <div className="board-of-investment-container">
        <Head>
          <title>
            Board-of-Investment - Danneskiold & Associates | Law Firm
          </title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Board-of-Investment - Danneskiold &amp; Associates | Law Firm "
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/6e310911-4daf-49cb-aeb2-76841f7d3639?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="board-of-investment-hero">
          <div className="board-of-investment-container01">
            <h1 className="board-of-investment-text">
              <span>
                Thailand Board of
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
              The Board of Investment (BOI) was founded in 1966 under the
              authority of the Prime Minister of Thailand with the primary
              objective of attracting foreign investments. The BOI provides a
              wide range of incentives, including tax exemptions and other
              benefits, to eligible businesses.
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
            Benefits
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="board-of-investment-text06">
            The Board of Investment (BOI) carefully assesses incentives on a
            case-by-case basis, considering factors like capital investment,
            industry sector, workforce scale, and other pertinent criteria.
            Benefits include tax exemptions, tariff exemptions, complete foreign
            ownership privileges, and safeguarding of intellectual property.
          </span>
        </div>
        <section id="arrow" className="board-of-investment-section">
          <main className="board-of-investment-cards">
            <Card1
              header="No Tax"
              description="Exempt from paying corporate income tax for up to thirteen years, or a 50% reduction when investing in certain industries."
              rootClassName="card1-root-class-name"
            ></Card1>
            <Card1
              icon="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              header="No Tariffs"
              description="The BOI will waive import tariffs for machines and other raw materials, if necessary for business operation and relocation."
              rootClassName="card1-root-class-name1"
            ></Card1>
            <Card1
              icon="0 0 1024 1024"
              header="Ownership"
              description="100% foreign ownership is permitted, and foreign investors and their next of kin may receive permission to work and reside in Thailand."
              rootClassName="card1-root-class-name2"
            ></Card1>
            <Card1
              icon="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              header="Own Property"
              description="In some cases, companies registered with the BOI are permitted to own land"
              rootClassName="card1-root-class-name3"
            ></Card1>
          </main>
        </section>
        <div className="board-of-investment-layout349 thq-section-padding">
          <div className="board-of-investment-max-width thq-section-max-width">
            <div className="board-of-investment-container02">
              <h2 className="board-of-investment-text07 thq-heading-2">
                Qualifications
              </h2>
              <span className="board-of-investment-text08 thq-body-small">
                There a few qualifcations that one must consider before
                registering under the BOI. 
              </span>
            </div>
            <div className="board-of-investment-container03 thq-grid-3">
              <div className="board-of-investment-container04 thq-card">
                <h2 className="board-of-investment-text09 thq-heading-2">
                  Category 1 (FBA)
                </h2>
                <span className="board-of-investment-text10 thq-body-small">
                  If a business is granted approval by the Board of Investment
                  (BOI) to register under category one of the Foreign Business
                  Act, then foreign investors are restricted from owning more
                  than 50% of the shares.
                </span>
              </div>
              <div className="board-of-investment-container05 thq-card">
                <h2 className="board-of-investment-text11 thq-heading-2">
                  Category 2 and 3
                </h2>
                <span className="board-of-investment-text12 thq-body-small">
                  <span>
                    If the business is registered under category 2 or 3 of the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/foreign-business-license">
                    <a className="board-of-investment-link">
                      Foreign Business Act (FBA)
                    </a>
                  </Link>
                  <span>
                    , foreign investors are allowed to own 100% of the shares,
                    as long as the company complies with all relevant legal
                    provisions.
                  </span>
                </span>
              </div>
              <div className="board-of-investment-container06 thq-card">
                <h2 className="board-of-investment-text15 thq-heading-2">
                  Investment Promotion
                </h2>
                <span className="board-of-investment-text16 thq-body-small">
                  The minimum required value-added for a project is 20% of
                  revenues, with the exception of projects in agriculture,
                  electronic products and parts, and coil centers, which must
                  have a minimum value-added of 10% of revenues.
                </span>
              </div>
              <div className="board-of-investment-container07 thq-card">
                <h2 className="board-of-investment-text17 thq-heading-2">
                  Minimal Capital
                </h2>
                <span className="board-of-investment-text18 thq-body-small">
                  The minimum capital requirement for each investment is one
                  million baht, not including the expenses related to land and
                  working capital.
                </span>
              </div>
              <div className="board-of-investment-container08 thq-card">
                <h2 className="board-of-investment-text19 thq-heading-2">
                  Projects over 10M Baht
                </h2>
                <span className="board-of-investment-text20 thq-body-small">
                  Projects with an investment capital of 10 million baht or more
                  (excluding the cost of land and working capital) are required
                  to obtain either ISO 9000 or ISO 14000 certification.
                </span>
              </div>
              <div className="board-of-investment-container09 thq-card">
                <h2 className="board-of-investment-text21 thq-heading-2">
                  Debt to Equity Ratio
                </h2>
                <span className="board-of-investment-text22 thq-body-small">
                  For newly established projects, the debt-to-equity ratio
                  should not surpass a ratio of 3 to 1.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="board-of-investment-container10 thq-section-padding">
          <div className="board-of-investment-max-width1 thq-section-max-width">
            <div className="board-of-investment-container11">
              <h2 className="board-of-investment-text23 thq-heading-2">
                Registration Process
              </h2>
            </div>
            <div className="board-of-investment-timeline-container">
              <div className="board-of-investment-step1">
                <div className="board-of-investment-container12">
                  <div className="board-of-investment-container13"></div>
                  <div className="board-of-investment-progress0"></div>
                </div>
                <div className="board-of-investment-container14">
                  <h3 className="board-of-investment-text24 thq-heading-3">
                    Step 1
                  </h3>
                  <span className="board-of-investment-text25 thq-body-small">
                    <span>
                      The application for the BOI can be submitted online at
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://boi.go.th"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="board-of-investment-link1"
                    >
                      boi.go.th
                    </a>
                    <span>. There is no cost to file an application.</span>
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step2">
                <div className="board-of-investment-container15">
                  <div className="board-of-investment-container16"></div>
                  <div className="board-of-investment-progress01"></div>
                </div>
                <div className="board-of-investment-container17">
                  <h3 className="board-of-investment-text28 thq-heading-3">
                    Step 2
                  </h3>
                  <span className="board-of-investment-text29 thq-body-small">
                    Within ten days of submission, the BOI will contact the
                    company representative to schedule a presentation. 
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step3">
                <div className="board-of-investment-container18">
                  <div className="board-of-investment-container19"></div>
                  <div className="board-of-investment-progress02"></div>
                </div>
                <div className="board-of-investment-container20">
                  <h3 className="board-of-investment-text30 thq-heading-3">
                    Step 3
                  </h3>
                  <span className="board-of-investment-text31 thq-body-small">
                    BOI officials will review the company presentation, the
                    company data, and consider the merits of the project.
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step4">
                <div className="board-of-investment-container21">
                  <div className="board-of-investment-container22"></div>
                  <div className="board-of-investment-progress03"></div>
                </div>
                <div className="board-of-investment-container23">
                  <h3 className="board-of-investment-text32 thq-heading-3">
                    Step 4
                  </h3>
                  <span className="board-of-investment-text33 thq-body-small">
                    If your application is accepted, you will be given one month
                    to confirm your intent. 
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step5">
                <div className="board-of-investment-container24">
                  <div className="board-of-investment-container25"></div>
                  <div className="board-of-investment-progress04"></div>
                </div>
                <div className="board-of-investment-container26">
                  <h3 className="board-of-investment-text34 thq-heading-3">
                    Step 5
                  </h3>
                  <span className="board-of-investment-text35 thq-body-small">
                    Once accepted, the BOI will ask you to register a Thai
                    company within six months. 
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step6">
                <div className="board-of-investment-container27">
                  <div className="board-of-investment-container28"></div>
                  <div className="board-of-investment-progress05"></div>
                </div>
                <div className="board-of-investment-container29">
                  <h3 className="board-of-investment-text36 thq-heading-3">
                    Step 6
                  </h3>
                  <span className="board-of-investment-text37 thq-body-small">
                    After registering your company, and presenting incorporation
                    documents, the BOI will issue an official certificate. 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="board-of-investment-container30">
          <span className="board-of-investment-text38">
            If your company is registered with the BOI under categories 2 or 3,
            then you will also need a foreign business certificate. The
            application fee for a foreign business certificate is 2000 baht, and
            20,000 upon issuance.
          </span>
          <Link href="/contact">
            <a className="board-of-investment-link2">Ask us anything</a>
          </Link>
        </div>
        <Footer1 rootClassName="footer1-root-class-name4"></Footer1>
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
            margin-top: var(--dl-space-space-fourunits);
            min-height: 80vh;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container01 {
            width: 50%;
            display: flex;
            flex-direction: column;
          }
          .board-of-investment-text {
            width: 75%;
            font-size: 2.5rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text02 {
            background-color: rgb(255, 255, 0);
          }
          .board-of-investment-text04 {
            width: 65%;
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
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text06 {
            color: var(--dl-color-gray-black);
            width: 50%;
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-section {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 90%;
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
          .board-of-investment-layout349 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 10px;
            flex-direction: row;
            justify-content: center;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .board-of-investment-max-width {
            gap: var(--dl-space-space-threeunits);
            width: auto;
            display: flex;
            max-width: 90%;
            align-items: center;
            flex-direction: column;
          }
          .board-of-investment-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .board-of-investment-text07 {
            font-size: 2.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text08 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container03 {
            width: 100%;
          }
          .board-of-investment-container04 {
            flex: 1;
            height: 75vh;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #000000;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text09 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text10 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container05 {
            flex: 1;
            height: 75vh;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #ffff00;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text11 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text12 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container06 {
            flex: 1;
            height: 75vh;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #000000;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text15 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text16 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container07 {
            flex: 1;
            height: 75vh;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #000000;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text17 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text18 {
            color: #000000;
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container08 {
            flex: 1;
            height: 75vh;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #ffff00;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text19 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text20 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container09 {
            flex: 1;
            height: 75vh;
            display: flex;
            align-self: flex-start;
            box-shadow: 2px 2px 4px 0px #000000;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text21 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-text22 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container10 {
            width: 80%;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
          }
          .board-of-investment-max-width1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-container11 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-text23 {
            width: 100%;
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .board-of-investment-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container12 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-container13 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .board-of-investment-progress0 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .board-of-investment-container14 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text24 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text25 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-link1 {
            text-decoration: underline;
          }
          .board-of-investment-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container15 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-container16 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .board-of-investment-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .board-of-investment-container17 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text28 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text29 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container18 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-container19 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .board-of-investment-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .board-of-investment-container20 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text30 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text31 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container21 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-container22 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .board-of-investment-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .board-of-investment-container23 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text32 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text33 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-step5 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container24 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-container25 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .board-of-investment-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .board-of-investment-container26 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text34 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text35 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-step6 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-container27 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-container28 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .board-of-investment-progress05 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .board-of-investment-container29 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text36 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text37 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container30 {
            flex: 0 0 auto;
            width: 50%;
            height: 50vh;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .board-of-investment-text38 {
            width: 40%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .board-of-investment-link2 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
            background-color: #ffff00;
          }
          @media (max-width: 1600px) {
            .board-of-investment-container {
              align-items: center;
              justify-content: center;
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
              color: var(--dl-color-gray-black);
              width: 50%;
              margin-top: var(--dl-space-space-twounits);
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
            .board-of-investment-text07 {
              font-size: 2.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .board-of-investment-container04 {
              width: 100%;
              background-color: transparent;
            }
            .board-of-investment-text09 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .board-of-investment-text10 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-container05 {
              background-color: transparent;
            }
            .board-of-investment-text11 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .board-of-investment-text12 {
              font-size: 1.5rem;
            }
            .board-of-investment-link {
              text-decoration: underline;
            }
            .board-of-investment-container06 {
              background-color: transparent;
            }
            .board-of-investment-text16 {
              font-size: 1.4rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-container07 {
              background-color: transparent;
            }
            .board-of-investment-text17 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .board-of-investment-text18 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-container08 {
              background-color: transparent;
            }
            .board-of-investment-text19 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .board-of-investment-text20 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-container09 {
              background-color: transparent;
            }
            .board-of-investment-text21 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .board-of-investment-text22 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-container30 {
              width: 50%;
              height: 60vh;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .board-of-investment-text38 {
              color: var(--dl-color-gray-black);
              width: 50%;
            }
            .board-of-investment-link2 {
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
            .board-of-investment-text {
              width: 85%;
            }
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
            .board-of-investment-container10 {
              width: 90%;
            }
            .board-of-investment-container30 {
              width: auto;
            }
            .board-of-investment-text38 {
              width: 50%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .board-of-investment-hero {
              margin-top: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .board-of-investment-container01 {
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
            .board-of-investment-banner {
              height: 50vh;
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
            .board-of-investment-layout349 {
              display: none;
            }
            .board-of-investment-max-width {
              flex-direction: column;
            }
            .board-of-investment-container02 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .board-of-investment-container04 {
              height: 100vh;
            }
            .board-of-investment-container05 {
              height: auto;
            }
            .board-of-investment-container06 {
              height: auto;
            }
            .board-of-investment-container10 {
              width: 100%;
            }
            .board-of-investment-max-width1 {
              gap: var(--dl-space-space-twounits);
            }
            .board-of-investment-text38 {
              width: 60%;
            }
          }
          @media (max-width: 767px) {
            .board-of-investment-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .board-of-investment-container01 {
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
            .board-of-investment-container02 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .board-of-investment-container04 {
              width: 100%;
            }
            .board-of-investment-container05 {
              width: 100%;
            }
            .board-of-investment-container06 {
              width: 100%;
            }
            .board-of-investment-container07 {
              width: 100%;
            }
            .board-of-investment-container08 {
              width: 100%;
            }
            .board-of-investment-container09 {
              width: 100%;
            }
            .board-of-investment-max-width1 {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .board-of-investment-container30 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .board-of-investment-text38 {
              color: var(--dl-color-gray-black);
              width: 60%;
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
            .board-of-investment-container01 {
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
            .board-of-investment-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .board-of-investment-container10 {
              width: 100%;
            }
            .board-of-investment-max-width1 {
              padding: var(--dl-space-space-unit);
            }
            .board-of-investment-container30 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .board-of-investment-text38 {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default BoardOfInvestment
