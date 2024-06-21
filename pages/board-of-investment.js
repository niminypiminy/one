import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/8e5f1e02-471e-46a9-8f50-e3f10d72f098?org_if_sml=1&amp;force_format=original"
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
              <span className="board-of-investment-text02">
                Investment (BOI).
              </span>
            </h1>
            <span className="board-of-investment-text03">
              The Board of Investment (BOI) was founded in 1966 under the
              authority of the Prime Minister of Thailand with the primary
              objective of attracting foreign investments. The BOI provides a
              wide range of incentives, including tax exemptions and other
              benefits, to eligible businesses.
            </span>
          </div>
          <img
            alt="A group of people at a board meeting"
            src="/board%20of%20investment-1500h.jpg"
            loading="eager"
            className="board-of-investment-image"
          />
        </div>
        <div className="board-of-investment-banner">
          <h1 className="board-of-investment-text04">
            Benefits
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="board-of-investment-text05">
            The Board of Investment (BOI) carefully assesses incentives on a
            case-by-case basis, considering factors like capital investment,
            industry sector, workforce scale, and other pertinent criteria.
            Benefits include tax exemptions, tariff exemptions, complete foreign
            ownership privileges, and safeguarding of intellectual property.
          </span>
        </div>
        <section id="arrow" className="board-of-investment-section">
          <main className="board-of-investment-cards">
            <section className="board-of-investment-card">
              <div className="board-of-investment-icon"></div>
              <main className="board-of-investment-content">
                <h1 className="board-of-investment-header">No Tax</h1>
                <p className="board-of-investment-description">
                  Exempt from paying corporate income tax for up to thirteen
                  years, or a 50% reduction when investing in certain
                  industries.
                </p>
              </main>
            </section>
            <section className="board-of-investment-card1">
              <div className="board-of-investment-icon1"></div>
              <main className="board-of-investment-content01">
                <h1 className="board-of-investment-header1">No Tariffs</h1>
                <p className="board-of-investment-description1">
                  The BOI will waive import tariffs for machines and other raw
                  materials, if necessary for business operation and relocation.
                </p>
              </main>
            </section>
            <section className="board-of-investment-card2">
              <div className="board-of-investment-icon2"></div>
              <main className="board-of-investment-content02">
                <h1 className="board-of-investment-header2">Ownership</h1>
                <p className="board-of-investment-description2">
                  100% foreign ownership is permitted, and foreign investors and
                  their next of kin may receive permission to work and reside in
                  Thailand.
                </p>
              </main>
            </section>
            <section className="board-of-investment-card3">
              <div className="board-of-investment-icon3"></div>
              <main className="board-of-investment-content03">
                <h1 className="board-of-investment-header3">Own Property</h1>
                <p className="board-of-investment-description3">
                  In some cases, companies registered with the BOI are permitted
                  to own land
                </p>
              </main>
            </section>
          </main>
        </section>
        <div className="board-of-investment-layout349 thq-section-padding">
          <div className="board-of-investment-max-width thq-section-max-width">
            <div className="board-of-investment-container02">
              <h2 className="board-of-investment-text06 thq-heading-2">
                Qualifications
              </h2>
              <span className="board-of-investment-text07 thq-body-small">
                There are a few qualifcations that one should consider before
                registering with the BOI. 
              </span>
            </div>
          </div>
        </div>
        <div className="board-of-investment-layout226 thq-section-padding">
          <div className="board-of-investment-max-width1 thq-section-max-width thq-grid-auto-300">
            <div className="thq-flex-column">
              <div className="thq-flex-column board-of-investment-content04">
                <h3 className="board-of-investment-title1 thq-heading-3">
                  Category 1 (FBA) 
                </h3>
                <span className="board-of-investment-description1 thq-body-small">
                  If a business is granted approval by the Board of Investment
                  (BOI) to register under category one of the Foreign Business
                  Act, then foreign investors are restricted from owning more
                  than 50% of the shares.
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <div className="thq-flex-column board-of-investment-content05">
                <strong className="board-of-investment-title2 thq-heading-3">
                  Category 2 and 3
                </strong>
                <span className="board-of-investment-description2 thq-body-small">
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
            </div>
            <div className="thq-flex-column">
              <div className="thq-flex-column board-of-investment-content06">
                <strong className="board-of-investment-title3 thq-heading-3">
                  Investment Promotion
                </strong>
                <span className="board-of-investment-description3 thq-body-small">
                  The minimum required value-added for a project is 20% of
                  revenues, with the exception of projects in agriculture,
                  electronic products and parts, and coil centers, which must
                  have a minimum value-added of 10% of revenues.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="board-of-investment-layout2261 thq-section-padding">
          <div className="board-of-investment-max-width2 thq-section-max-width thq-grid-auto-300">
            <div className="thq-flex-column">
              <div className="thq-flex-column board-of-investment-content07">
                <h3 className="board-of-investment-title11 thq-heading-3">
                  Minimal Capital
                </h3>
                <span className="board-of-investment-description11 thq-body-small">
                  The minimum capital requirement for each investment is one
                  million baht, not including the expenses related to land and
                  working capital.
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <div className="thq-flex-column board-of-investment-content08">
                <strong className="board-of-investment-title21 thq-heading-3">
                  Projects over 10M Baht
                </strong>
                <span className="board-of-investment-description21 thq-body-small">
                  Projects with an investment capital of 10 million baht or more
                  (excluding the cost of land and working capital) are required
                  to obtain either ISO 9000 or ISO 14000 certification.
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <div className="thq-flex-column board-of-investment-content09">
                <strong className="board-of-investment-title31 thq-heading-3">
                  Debt to Equity Ratio
                </strong>
                <span className="board-of-investment-description31 thq-body-small">
                  For newly established projects, the debt-to-equity ratio
                  should not surpass a ratio of 3 to 1.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="board-of-investment-container03 thq-section-padding">
          <div className="board-of-investment-max-width3 thq-section-max-width">
            <div className="board-of-investment-container04">
              <h2 className="board-of-investment-text10 thq-heading-2">
                Registration Process
              </h2>
            </div>
            <div className="board-of-investment-timeline-container">
              <div className="board-of-investment-step1">
                <div className="board-of-investment-container05">
                  <div className="board-of-investment-container06"></div>
                  <div className="board-of-investment-progress0"></div>
                </div>
                <div className="board-of-investment-container07">
                  <h3 className="board-of-investment-text11 thq-heading-3">
                    Step 1
                  </h3>
                  <span className="board-of-investment-text12 thq-body-small">
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
                <div className="board-of-investment-container08">
                  <div className="board-of-investment-container09"></div>
                  <div className="board-of-investment-progress01"></div>
                </div>
                <div className="board-of-investment-container10">
                  <h3 className="board-of-investment-text15 thq-heading-3">
                    Step 2
                  </h3>
                  <span className="board-of-investment-text16 thq-body-small">
                    Within ten days of submission, the BOI will contact the
                    company representative to schedule a presentation. 
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step3">
                <div className="board-of-investment-container11">
                  <div className="board-of-investment-container12"></div>
                  <div className="board-of-investment-progress02"></div>
                </div>
                <div className="board-of-investment-container13">
                  <h3 className="board-of-investment-text17 thq-heading-3">
                    Step 3
                  </h3>
                  <span className="board-of-investment-text18 thq-body-small">
                    BOI officials will review the company presentation, the
                    company data, and consider the merits of the project.
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step4">
                <div className="board-of-investment-container14">
                  <div className="board-of-investment-container15"></div>
                  <div className="board-of-investment-progress03"></div>
                </div>
                <div className="board-of-investment-container16">
                  <h3 className="board-of-investment-text19 thq-heading-3">
                    Step 4
                  </h3>
                  <span className="board-of-investment-text20 thq-body-small">
                    If your application is accepted, you will be given one month
                    to confirm your intent. 
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step5">
                <div className="board-of-investment-container17">
                  <div className="board-of-investment-container18"></div>
                  <div className="board-of-investment-progress04"></div>
                </div>
                <div className="board-of-investment-container19">
                  <h3 className="board-of-investment-text21 thq-heading-3">
                    Step 5
                  </h3>
                  <span className="board-of-investment-text22 thq-body-small">
                    Once accepted, the BOI will ask you to register a Thai
                    company within six months. 
                  </span>
                </div>
              </div>
              <div className="board-of-investment-step6">
                <div className="board-of-investment-container20">
                  <div className="board-of-investment-container21"></div>
                  <div className="board-of-investment-progress05"></div>
                </div>
                <div className="board-of-investment-container22">
                  <h3 className="board-of-investment-text23 thq-heading-3">
                    Step 6
                  </h3>
                  <span className="board-of-investment-text24 thq-body-small">
                    After registering your company, and presenting incorporation
                    documents, the BOI will issue an official certificate. 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="board-of-investment-container23">
          <span className="board-of-investment-text25">
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
            background-color: var(--dl-color-theme-neutral-light);
          }
          .board-of-investment-hero {
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
          .board-of-investment-container01 {
            width: 50%;
            display: flex;
            flex-direction: column;
          }
          .board-of-investment-text {
            width: 100%;
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text02 {
            color: var(--dl-color-theme-neutral-dark);
            background-color: var(--dl-color-theme-color3);
          }
          .board-of-investment-text03 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .board-of-investment-image {
            width: 30%;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
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
          .board-of-investment-text04 {
            fill: #1b1b1b;
            color: #1b1b1b;
            width: auto;
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text05 {
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
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            min-height: auto;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-cards {
            gap: var(--dl-space-space-threeunits);
            width: 90%;
            height: 75vh;
            display: flex;
            max-width: auto;
            margin-top: var(--dl-space-space-fourunits);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 90%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-theme-color1);
          }
          .board-of-investment-icon {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-color4);
          }
          .board-of-investment-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .board-of-investment-header {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 36px;
          }
          .board-of-investment-description {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 28px;
          }
          .board-of-investment-card1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 90%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-theme-color1);
          }
          .board-of-investment-icon1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-color4);
          }
          .board-of-investment-content01 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .board-of-investment-header1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 36px;
          }
          .board-of-investment-description1 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 28px;
          }
          .board-of-investment-card2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 90%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-theme-color1);
          }
          .board-of-investment-icon2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-color4);
          }
          .board-of-investment-content02 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .board-of-investment-header2 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 36px;
          }
          .board-of-investment-description2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 28px;
          }
          .board-of-investment-card3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 90%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-theme-color1);
          }
          .board-of-investment-icon3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-color4);
          }
          .board-of-investment-content03 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .board-of-investment-header3 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 36px;
          }
          .board-of-investment-description3 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 28px;
          }
          .board-of-investment-layout349 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
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
            width: 75%;
            display: flex;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .board-of-investment-text06 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text07 {
            width: auto;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-layout226 {
            width: 75%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-max-width1 {
            align-self: flex-start;
          }
          .board-of-investment-title1 {
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-description1 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-title2 {
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-description2 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-link {
            text-decoration: underline;
          }
          .board-of-investment-title3 {
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-description3 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-layout2261 {
            width: 75%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
          }
          .board-of-investment-max-width2 {
            align-self: flex-start;
          }
          .board-of-investment-title11 {
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-description11 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-title21 {
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-description21 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-title31 {
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-description31 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container03 {
            width: 80%;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
          }
          .board-of-investment-max-width3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-container04 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .board-of-investment-text10 {
            width: 100%;
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
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
          .board-of-investment-container05 {
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
          .board-of-investment-container06 {
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
          .board-of-investment-container07 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text11 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text12 {
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
          .board-of-investment-container08 {
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
          .board-of-investment-container09 {
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
          .board-of-investment-container10 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text15 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text16 {
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
          .board-of-investment-container11 {
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
          .board-of-investment-container12 {
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
          .board-of-investment-container13 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text17 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text18 {
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
          .board-of-investment-container14 {
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
          .board-of-investment-container15 {
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
          .board-of-investment-container16 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text19 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text20 {
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
          .board-of-investment-container17 {
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
          .board-of-investment-container18 {
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
          .board-of-investment-container19 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text21 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text22 {
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
          .board-of-investment-container20 {
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
          .board-of-investment-container21 {
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
          .board-of-investment-container22 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .board-of-investment-text23 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .board-of-investment-text24 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .board-of-investment-container23 {
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
          .board-of-investment-text25 {
            width: 40%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .board-of-investment-link2 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-color4);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: 'Josefin Sans';
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
            background-color: var(--dl-color-theme-color5);
          }
          @media (max-width: 1600px) {
            .board-of-investment-container {
              align-items: center;
              justify-content: center;
            }
            .board-of-investment-text {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .board-of-investment-image {
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .board-of-investment-banner {
              margin-top: var(--dl-space-space-fourunits);
              padding-top: 0px;
            }
            .board-of-investment-text04 {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
            }
            .board-of-investment-text05 {
              color: var(--dl-color-gray-black);
              width: 50%;
              margin-top: var(--dl-space-space-twounits);
            }
            .board-of-investment-section {
              align-items: center;
              justify-content: center;
            }
            .board-of-investment-header {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
            }
            .board-of-investment-description {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-header1 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
            }
            .board-of-investment-description1 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-header2 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
            }
            .board-of-investment-description2 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-header3 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
            }
            .board-of-investment-description3 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .board-of-investment-container23 {
              width: 50%;
              height: 60vh;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .board-of-investment-text25 {
              color: var(--dl-color-gray-black);
              width: 50%;
            }
            .board-of-investment-link2 {
              align-self: center;
              margin-top: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 1200px) {
            .board-of-investment-banner {
              margin-top: 0px;
            }
            .board-of-investment-text05 {
              width: 50%;
            }
            .board-of-investment-section {
              width: 75%;
              flex-direction: row;
            }
            .board-of-investment-cards {
              height: auto;
              flex-direction: column;
            }
            .board-of-investment-container03 {
              width: 90%;
            }
            .board-of-investment-container23 {
              width: auto;
            }
            .board-of-investment-text25 {
              width: 50%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .board-of-investment-hero {
              margin-top: var(--dl-space-space-sixunits);
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
            }
            .board-of-investment-text03 {
              width: 100%;
            }
            .board-of-investment-image {
              width: 80%;
            }
            .board-of-investment-banner {
              height: 50vh;
            }
            .board-of-investment-text05 {
              width: 80%;
            }
            .board-of-investment-section {
              gap: var(--dl-space-space-threeunits);
              width: 80%;
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
            .board-of-investment-layout226 {
              width: 80%;
            }
            .board-of-investment-content04 {
              align-items: center;
            }
            .board-of-investment-content05 {
              align-items: center;
            }
            .board-of-investment-content06 {
              align-items: center;
            }
            .board-of-investment-layout2261 {
              width: 80%;
            }
            .board-of-investment-content07 {
              align-items: center;
            }
            .board-of-investment-content08 {
              align-items: center;
            }
            .board-of-investment-content09 {
              align-items: center;
            }
            .board-of-investment-container03 {
              width: 100%;
            }
            .board-of-investment-max-width3 {
              gap: var(--dl-space-space-twounits);
            }
            .board-of-investment-text25 {
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
            }
            .board-of-investment-text03 {
              width: 75%;
              align-self: flex-start;
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
            .board-of-investment-text04 {
              align-self: flex-start;
            }
            .board-of-investment-text05 {
              width: 100%;
              text-align: left;
            }
            .board-of-investment-container02 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .board-of-investment-max-width3 {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .board-of-investment-container23 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .board-of-investment-text25 {
              color: var(--dl-color-gray-black);
              width: 60%;
            }
          }
          @media (max-width: 479px) {
            .board-of-investment-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .board-of-investment-container01 {
              width: 90%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .board-of-investment-text {
              max-width: auto;
            }
            .board-of-investment-text03 {
              width: 100%;
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
            .board-of-investment-text04 {
              align-self: flex-start;
              text-align: left;
            }
            .board-of-investment-text05 {
              text-align: left;
            }
            .board-of-investment-section {
              width: 90%;
            }
            .board-of-investment-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .board-of-investment-layout226 {
              width: 90%;
            }
            .board-of-investment-layout2261 {
              width: 90%;
            }
            .board-of-investment-container03 {
              width: 100%;
            }
            .board-of-investment-max-width3 {
              padding: var(--dl-space-space-unit);
            }
            .board-of-investment-container23 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .board-of-investment-text25 {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default BoardOfInvestment
