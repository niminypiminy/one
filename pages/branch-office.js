import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const BranchOffice = (props) => {
  return (
    <>
      <div className="branch-office-container">
        <Head>
          <title>Branch-Office - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Branch-Office - Danneskiold &amp; Associates"
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
        <div className="branch-office-container01">
          <div className="branch-office-container02">
            <div className="branch-office-container03">
              <h1 className="branch-office-text">
                <span>
                  Registering a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="branch-office-text02">Branch Office</span>
                <span> in Thailand</span>
              </h1>
              <span className="branch-office-text04">
                Under Thai law, a branch office is not a registered juristic
                entity, but rather an extension of a foreign entity (i.e, an
                extension of the HQ office), and therefore is predominately
                regulated by the Foreign Business Act. 
              </span>
            </div>
          </div>
          <div className="branch-office-container04">
            <img
              alt="image"
              src="/branch%20office-600w.jpg"
              loading="eager"
              className="branch-office-image"
            />
          </div>
        </div>
        <div className="branch-office-container05">
          <div className="branch-office-banner">
            <h1 className="branch-office-text05">
              Benefits
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="branch-office-text06">
              <span className="branch-office-text07">
                Firms that seek to retain control of operations and ownership,
                may choose to establish a branch office.
              </span>
              <br></br>
            </span>
          </div>
          <section id="arrow" className="branch-office-section">
            <main className="branch-office-cards">
              <section className="branch-office-card">
                <div className="branch-office-icon"></div>
                <main className="branch-office-content">
                  <h1 className="branch-office-header">100% ownership</h1>
                  <p className="branch-office-description">
                    The HQ office can own 100% of the shares in a branch office.
                  </p>
                </main>
              </section>
              <section className="branch-office-card1">
                <div className="branch-office-icon1"></div>
                <main className="branch-office-content1">
                  <h1 className="branch-office-header1">Generate Income</h1>
                  <p className="branch-office-description1">
                    Unlike a representative office, the branch office is
                    permitted to sell products and services, and engage in
                    commercial activity.
                  </p>
                </main>
              </section>
            </main>
          </section>
          <div className="branch-office-container06">
            <span className="branch-office-text09">
              The law requires that all branch offices engaged in non-negligible
              commercial activity, first apply for a Foreign Business License. 
            </span>
          </div>
          <section className="branch-office-roadmap">
            <div className="branch-office-heading">
              <h2 className="branch-office-header2">
                How to register a branch office
              </h2>
            </div>
            <div className="branch-office-list">
              <div className="branch-office-container07">
                <div className="branch-office-step">
                  <div className="branch-office-heading1">
                    <span className="branch-office-caption">Step 1</span>
                    <p className="branch-office-header3">
                      <span>
                        All foreign juristic companies must apply for a 
                      </span>
                      <Link href="/foreign-business-license">
                        <a className="branch-office-link">
                          Foreign Business License
                        </a>
                      </Link>
                      <span> </span>
                      <span>
                        at the ministry of commerce, or, if registered under a
                        treaty, then a Foreign Business Certificate.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="branch-office-step1">
                  <div className="branch-office-heading2">
                    <span className="branch-office-caption1">Step 2</span>
                    <p className="branch-office-header4">
                      Submit an application, along with supporting documents, to
                      the commercial registration office. The commercial
                      registration office will ask to see the Foreign Business
                      License, proof of business address, a map of its location,
                      details of the managing director, copy of your passport,
                      and other pertinent information.
                    </p>
                  </div>
                </div>
                <div className="branch-office-step2">
                  <div className="branch-office-heading3">
                    <span className="branch-office-caption2">Step 3</span>
                    <p className="branch-office-header5">
                      Juristic persons not registered in Thailand must remit
                      their paid-in capital at either the date of permission, or
                      the date of business operation. The Foreign Business Act
                      mandates that 25% of the paid-in capital be remitted
                      within the first three months, an additional 25% must be
                      remitted within the first year, and the remaining 50% be
                      remitted within years 2 and 3.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="branch-office-container08">
            <svg viewBox="0 0 1024 1024" className="branch-office-icon2">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 298h84v256h-84v-256zM470 640h84v86h-84v-86z"></path>
            </svg>
            <span className="branch-office-text13">
              The law makes no distinction between the branch and its HQ office,
              so the branch office liabilities are not limited to the Thai
              market. All liability concerns should be fully considered before
              opening a branch office.
            </span>
          </div>
          <div className="branch-office-container09">
            <h1 className="branch-office-text14">Government Fees</h1>
            <div className="branch-office-container10">
              <div className="branch-office-container11">
                <span className="branch-office-text15">Type</span>
              </div>
              <div className="branch-office-container12">
                <span className="branch-office-text16">Cost (baht)</span>
              </div>
              <div className="branch-office-container13">
                <span className="branch-office-text17">
                  FBL Application Fee
                </span>
              </div>
              <div className="branch-office-container14">
                <span className="branch-office-text18">2000</span>
              </div>
              <div className="branch-office-container15">
                <span className="branch-office-text19">FBL (Category 2)</span>
              </div>
              <div className="branch-office-container16">
                <span className="branch-office-text20">40,000-500,000</span>
              </div>
              <div className="branch-office-container17">
                <span className="branch-office-text21">FBL (Category 3)</span>
              </div>
              <div className="branch-office-container18">
                <span className="branch-office-text22">20,000-250,000</span>
              </div>
              <div className="branch-office-container19">
                <span className="branch-office-text23">Certification Fee</span>
              </div>
              <div className="branch-office-container20">
                <span className="branch-office-text24">50</span>
              </div>
            </div>
          </div>
          <div className="branch-office-container21">
            <svg viewBox="0 0 1024 1024" className="branch-office-icon4">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 298h84v256h-84v-256zM470 640h84v86h-84v-86z"></path>
            </svg>
            <span className="branch-office-text25">
              Once approved, the license fee is determined by the company&apos;s
              category of industry and its registered capital.
            </span>
          </div>
          <div className="branch-office-container22">
            <span className="branch-office-text26">
              <span>
                Establishing a branch is a long process, which can take months
                to finalize.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                However, in certain circumstances, the benefits may outweigh the
                costs, particularly when a company wants to retain 100% of the
                shares but cannot qualify under the Treaty of Amity or the Board
                of Investment.
              </span>
            </span>
            <Link href="/contact">
              <a className="branch-office-link1">Ask us anything</a>
            </Link>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name5"></Footer1>
      </div>
      <style jsx>
        {`
          .branch-office-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .branch-office-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .branch-office-container02 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .branch-office-container03 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .branch-office-text {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            max-width: auto;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .branch-office-text02 {
            background-color: rgb(255, 255, 0);
          }
          .branch-office-text04 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .branch-office-container04 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .branch-office-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: contain;
            transition: 0.3s;
            margin-right: 0px;
          }
          .branch-office-image:hover {
            transform: scale(1.2);
          }
          .branch-office-container05 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            flex-direction: column;
          }
          .branch-office-banner {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .branch-office-text05 {
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 2.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-text06 {
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
          .branch-office-section {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 75%;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .branch-office-cards {
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
          .branch-office-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #1b1b1b;
          }
          .branch-office-card:hover {
            transform: scale(1.2);
          }
          .branch-office-icon {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: #ffff00;
          }
          .branch-office-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .branch-office-header {
            color: rgb(255, 255, 255);
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 36px;
          }
          .branch-office-description {
            color: rgb(194, 198, 204);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 28px;
          }
          .branch-office-card1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #1b1b1b;
          }
          .branch-office-card1:hover {
            transform: scale(1.2);
          }
          .branch-office-icon1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: #ffff00;
          }
          .branch-office-content1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .branch-office-header1 {
            color: rgb(255, 255, 255);
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 36px;
          }
          .branch-office-description1 {
            color: rgb(194, 198, 204);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 28px;
          }
          .branch-office-container06 {
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
          .branch-office-text09 {
            width: 80%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-roadmap {
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
          .branch-office-heading {
            gap: var(--dl-space-space-twounits);
            width: 75%;
            display: flex;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .branch-office-header2 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 2rem;
            max-width: auto;
            box-shadow: rgb(0, 0, 0) 5px 5px 10px 0px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 108px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #1b1b1b;
          }
          .branch-office-list {
            gap: 106px;
            width: 80%;
            height: auto;
            display: flex;
            border-color: rgba(255, 255, 255, 0.3);
            flex-direction: column;
            border-left-width: 1px;
          }
          .branch-office-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .branch-office-step {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
          }
          .branch-office-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .branch-office-caption {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .branch-office-header3 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .branch-office-link {
            text-decoration: underline;
          }
          .branch-office-step1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .branch-office-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .branch-office-caption1 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .branch-office-header4 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .branch-office-step2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .branch-office-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .branch-office-caption2 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .branch-office-header5 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .branch-office-container08 {
            flex: 0 0 auto;
            width: 50%;
            height: 75vh;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .branch-office-icon2 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .branch-office-text13 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container09 {
            flex: 0 0 auto;
            width: 50%;
            height: 75vh;
            display: flex;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #000000;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .branch-office-text14 {
            color: var(--dl-color-gray-black);
            width: 80%;
            font-size: 2.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .branch-office-container10 {
            width: 80%;
            height: 70%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 1fr;
          }
          .branch-office-container11 {
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
          .branch-office-text15 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .branch-office-container12 {
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
          .branch-office-text16 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .branch-office-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text17 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text18 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text19 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text20 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text21 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text22 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text23 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .branch-office-text24 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-container21 {
            flex: 0 0 auto;
            width: 50%;
            height: 75vh;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .branch-office-icon4 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-top: var(--dl-space-space-unit);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .branch-office-text25 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .branch-office-container22 {
            flex: 0 0 auto;
            width: 50%;
            height: 75vh;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .branch-office-text26 {
            width: 60%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .branch-office-link1 {
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
          @media (max-width: 1600px) {
            .branch-office-text {
              color: var(--dl-color-gray-black);
            }
            .branch-office-text04 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .branch-office-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
            .branch-office-container05 {
              align-items: center;
              justify-content: center;
            }
            .branch-office-banner {
              margin-top: var(--dl-space-space-sixunits);
              padding-top: 0px;
            }
            .branch-office-text05 {
              color: var(--dl-color-gray-black);
              width: auto;
              font-size: 2.5rem;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .branch-office-text06 {
              color: var(--dl-color-gray-black);
              width: 50%;
              font-size: 1.5rem;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .branch-office-text07 {
              width: 30%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .branch-office-section {
              width: 90%;
              height: auto;
              margin-top: var(--dl-space-space-sixunits);
            }
            .branch-office-cards {
              height: auto;
              max-width: 100%;
            }
            .branch-office-icon {
              background-color: #ffff00;
            }
            .branch-office-description {
              color: rgb(194, 198, 204);
              font-size: 1.5rem;
              line-height: 28px;
            }
            .branch-office-icon1 {
              background-color: #ffff00;
            }
            .branch-office-description1 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .branch-office-container06 {
              width: 50%;
              height: 60vh;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .branch-office-text09 {
              color: var(--dl-color-gray-black);
              width: 80%;
              font-size: 1.5rem;
              font-style: normal;
              text-align: center;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .branch-office-roadmap {
              height: auto;
            }
            .branch-office-header2 {
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .branch-office-list {
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .branch-office-container07 {
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .branch-office-step {
              width: 50%;
              margin-left: 0px;
            }
            .branch-office-caption {
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 300;
            }
            .branch-office-header3 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
            }
            .branch-office-step1 {
              width: 50%;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .branch-office-caption1 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .branch-office-header4 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
            }
            .branch-office-step2 {
              width: 50%;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .branch-office-heading3 {
              max-width: auto;
            }
            .branch-office-caption2 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .branch-office-header5 {
              font-size: 1.5rem;
            }
            .branch-office-container08 {
              width: 50%;
              height: 75vh;
              align-self: center;
              flex-direction: column;
            }
            .branch-office-icon2 {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .branch-office-text13 {
              color: var(--dl-color-gray-white);
            }
            .branch-office-container09 {
              width: 50%;
              height: 75vh;
              align-self: center;
              margin-top: var(--dl-space-space-sixunits);
              border-radius: var(--dl-radius-radius-radius8);
              margin-bottom: var(--dl-space-space-sixunits);
            }
            .branch-office-text14 {
              color: var(--dl-color-gray-black);
            }
            .branch-office-container21 {
              width: 50%;
              height: 75vh;
              align-self: center;
              margin-top: var(--dl-space-space-sixunits);
              margin-bottom: var(--dl-space-space-sixunits);
              flex-direction: column;
            }
            .branch-office-icon4 {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              margin-top: var(--dl-space-space-unit);
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .branch-office-text25 {
              color: var(--dl-color-gray-white);
            }
            .branch-office-container22 {
              width: 50%;
              height: 75vh;
              margin-top: var(--dl-space-space-sixunits);
              border-radius: var(--dl-radius-radius-radius8);
              margin-bottom: var(--dl-space-space-sixunits);
            }
            .branch-office-text26 {
              color: var(--dl-color-gray-black);
              width: 80%;
              font-size: 1.5rem;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .branch-office-link1 {
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
            .branch-office-container04 {
              width: 40%;
            }
            .branch-office-image {
              width: 90%;
              margin-right: 0px;
            }
            .branch-office-text06 {
              width: 50%;
            }
            .branch-office-section {
              width: 75%;
              flex-direction: row;
            }
            .branch-office-cards {
              width: 100%;
              flex-direction: column;
            }
            .branch-office-card {
              width: 100%;
            }
            .branch-office-card1 {
              width: 100%;
            }
            .branch-office-container06 {
              width: auto;
            }
            .branch-office-text09 {
              width: 50%;
              text-align: center;
            }
            .branch-office-roadmap {
              height: auto;
            }
            .branch-office-header2 {
              width: 75%;
            }
            .branch-office-step {
              width: 75%;
            }
            .branch-office-step1 {
              width: 75%;
            }
            .branch-office-step2 {
              width: 75%;
            }
            .branch-office-container08 {
              width: 75%;
            }
            .branch-office-container09 {
              width: 75%;
            }
            .branch-office-container10 {
              width: 80%;
            }
            .branch-office-container21 {
              width: 75%;
            }
            .branch-office-container22 {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
            }
            .branch-office-text26 {
              width: 50%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .branch-office-container01 {
              height: 75vh;
            }
            .branch-office-container02 {
              width: 80%;
              height: 80%;
            }
            .branch-office-text {
              text-align: left;
            }
            .branch-office-text04 {
              text-align: left;
            }
            .branch-office-container04 {
              display: none;
            }
            .branch-office-image {
              width: 100%;
              display: none;
            }
            .branch-office-section {
              gap: var(--dl-space-space-threeunits);
              height: auto;
              padding-top: var(--dl-space-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .branch-office-cards {
              gap: var(--dl-space-space-oneandhalfunits);
              height: auto;
              flex-direction: column;
            }
            .branch-office-text09 {
              width: 60%;
            }
            .branch-office-roadmap {
              height: auto;
            }
            .branch-office-heading {
              width: 100%;
            }
            .branch-office-header2 {
              width: 80%;
              text-align: center;
            }
            .branch-office-list {
              width: 100%;
            }
            .branch-office-heading1 {
              width: 100%;
            }
            .branch-office-heading2 {
              max-width: auto;
            }
            .branch-office-container08 {
              width: 85%;
            }
            .branch-office-text13 {
              width: 70%;
              text-align: center;
            }
            .branch-office-container09 {
              width: 85%;
            }
            .branch-office-container10 {
              width: 90%;
            }
            .branch-office-container21 {
              width: 85%;
            }
            .branch-office-text25 {
              width: 70%;
              text-align: center;
            }
            .branch-office-container22 {
              width: 85%;
            }
            .branch-office-text26 {
              width: 60%;
            }
          }
          @media (max-width: 767px) {
            .branch-office-container02 {
              width: 100%;
            }
            .branch-office-container03 {
              align-self: center;
            }
            .branch-office-text {
              align-self: center;
            }
            .branch-office-text04 {
              align-self: center;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .branch-office-image {
              width: 100%;
            }
            .branch-office-banner {
              width: 75%;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              padding-right: 0px;
            }
            .branch-office-text05 {
              width: 100%;
            }
            .branch-office-text06 {
              width: 100%;
              text-align: left;
            }
            .branch-office-section {
              width: 80%;
              margin-top: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .branch-office-cards {
              margin-top: var(--dl-space-space-unit);
            }
            .branch-office-container06 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .branch-office-text09 {
              color: var(--dl-color-gray-black);
              width: 60%;
            }
            .branch-office-roadmap {
              height: auto;
              margin-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .branch-office-heading {
              gap: var(--dl-space-space-unit);
            }
            .branch-office-header2 {
              width: 80%;
              font-size: 36px;
              box-shadow: rgb(0, 0, 0) 5px 5px 10px 0px;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
              line-height: 43px;
            }
            .branch-office-list {
              gap: var(--dl-space-space-threeunits);
              width: 85%;
            }
            .branch-office-container07 {
              height: auto;
            }
            .branch-office-step {
              width: 100%;
            }
            .branch-office-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .branch-office-header3 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .branch-office-step1 {
              width: 100%;
              margin-top: var(--dl-space-space-sixunits);
            }
            .branch-office-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .branch-office-header4 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .branch-office-step2 {
              width: 100%;
              margin-top: var(--dl-space-space-sixunits);
            }
            .branch-office-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .branch-office-header5 {
              font-size: 1.5rem;
              line-height: 21px;
            }
            .branch-office-text13 {
              width: 80%;
            }
            .branch-office-container09 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .branch-office-container10 {
              width: 90%;
            }
            .branch-office-text25 {
              width: 80%;
            }
            .branch-office-container22 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .branch-office-text26 {
              color: var(--dl-color-gray-black);
              width: 60%;
            }
            .branch-office-link1 {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 479px) {
            .branch-office-container02 {
              height: 100%;
            }
            .branch-office-container03 {
              width: 100%;
            }
            .branch-office-text {
              width: 90%;
              max-width: auto;
              text-align: left;
            }
            .branch-office-text04 {
              width: 90%;
              align-self: center;
            }
            .branch-office-banner {
              width: 90%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .branch-office-text05 {
              width: 100%;
              text-align: left;
            }
            .branch-office-text06 {
              width: 100%;
            }
            .branch-office-section {
              width: 100%;
            }
            .branch-office-container06 {
              border-radius: var(--dl-radius-radius-radius4);
            }
            .branch-office-text09 {
              width: 90%;
            }
            .branch-office-roadmap {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .branch-office-header2 {
              width: 100%;
              text-align: center;
            }
            .branch-office-container07 {
              flex-direction: column;
            }
            .branch-office-step {
              width: 100%;
            }
            .branch-office-header3 {
              width: 80%;
            }
            .branch-office-step1 {
              width: 100%;
              margin-top: var(--dl-space-space-sixunits);
            }
            .branch-office-header4 {
              width: 80%;
            }
            .branch-office-step2 {
              width: 100%;
              margin-top: var(--dl-space-space-sixunits);
            }
            .branch-office-header5 {
              width: 80%;
            }
            .branch-office-container08 {
              width: 100%;
            }
            .branch-office-container09 {
              width: 100%;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .branch-office-container10 {
              width: 90%;
            }
            .branch-office-container21 {
              width: 100%;
            }
            .branch-office-container22 {
              width: 100%;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .branch-office-text26 {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default BranchOffice
