import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Practice from '../components/practice'
import Footer1 from '../components/footer1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Danneskiold &amp; Associates" />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/7ad1e33a-106f-474c-89cf-8ba0be7d0400?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <header className="home-hero">
          <div className="home-container1">
            <h1 className="home-title">
              <span>A law firm,</span>
              <br></br>
            </h1>
            <h1 className="home-title1">
              <span>You can trust</span>
              <span>.</span>
              <br></br>
            </h1>
            <span className="home-description">
              <span>
                We are a boutique law firm. If you need legal assistance, please
                contact us
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/contact">
                <a className="home-link">here.</a>
              </Link>
              <span> To learn more about our practice areas, click </span>
              <a href="#ourpracticeareas" className="home-link01">
                here.
              </a>
            </span>
          </div>
          <img
            alt="image"
            src="/designer%20(2)-1500h.jpeg"
            className="home-image"
          />
        </header>
        <section id="missionhome" className="home-mission missionhome">
          <img
            alt="image"
            src="/designer%20(3)-1100h.jpeg"
            loading="eager"
            className="home-image1"
          />
          <div className="home-container2">
            <h2 className="home-text07">
              <span>
                We do not employ an army of paralegals or secretaries, or
                outsource cases to other law firms. Each
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                case is handled in-house, directly by an attorney, and with the
                utmost care.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <Link href="/contact">
              <a className="home-link02">
                <h1 className="home-text10">Contact</h1>
              </a>
            </Link>
          </div>
        </section>
        <div className="home-container3">
          <div className="home-container4">
            <Link href="/company-registration">
              <a className="home-link03">
                <h1 className="home-text11">
                  <span className="home-text12">Company Registration</span>
                  <br></br>
                </h1>
              </a>
            </Link>
            <Link href="/obtain-a-visa">
              <a className="home-link04">
                <h1 className="home-text14">Obtain a Visa</h1>
              </a>
            </Link>
          </div>
        </div>
        <section className="home-practices">
          <h2 id="ourpracticeareas" className="home-text15">
            <span className="home-text16">Our practice areas</span>
            <span className="home-text17">.</span>
            <br></br>
          </h2>
          <div className="home-container5">
            <div className="home-container6">
              <div className="home-content">
                <div className="home-grid">
                  <div className="home-practice-wrapper">
                    <Link href="/contract-law">
                      <a>
                        <Practice
                          title="Contract"
                          description="Drafting legal contracts, arbitration, enforcement of rights, dispute resolution"
                          className="home-component"
                        ></Practice>
                      </a>
                    </Link>
                  </div>
                  <div className="home-practice-wrapper1">
                    <Link href="/immigration-law">
                      <a>
                        <Practice
                          title="Immigration"
                          description="Acquisition of visas, asylum applications, blacklist removal, dispute resolution and litigation"
                          className="home-component1"
                        ></Practice>
                      </a>
                    </Link>
                  </div>
                  <div className="home-practice-wrapper2">
                    <Link href="/public-law">
                      <a>
                        <Practice
                          title="Public"
                          description="Constitutional and administrative law, adjudication, legal opinions  "
                          className="home-component2"
                        ></Practice>
                      </a>
                    </Link>
                  </div>
                  <div className="home-practice-wrapper3">
                    <Link href="/corporate-law">
                      <a>
                        <Practice
                          title="Corporate"
                          description="Company registration, regulatory compliance, and acquisition of permits."
                          className="home-component3"
                        ></Practice>
                      </a>
                    </Link>
                  </div>
                  <div className="home-practice-wrapper4">
                    <Link href="/criminal-law">
                      <a>
                        <Practice
                          title="Criminal"
                          description="Drugs, fraud, criminal damage, assault and battery, and other felony charges."
                          className="home-component4"
                        ></Practice>
                      </a>
                    </Link>
                  </div>
                  <div className="home-practice-wrapper5">
                    <Link href="/tort-law">
                      <a>
                        <Practice
                          title="Tort"
                          description="Civil litigation for injuries to property, health, liberty, privacy or reputation. "
                          className="home-component5"
                        ></Practice>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-banner">
          <h1 className="home-text19">
            <span>
              We
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text21">fight</span>
            <span>
              {' '}
              for our clients.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
        </div>
        <section className="home-improve">
          <div className="home-heading">
            <h2 className="home-text23">
              Consistently rated as one of the best law firms in Southeast Asia
            </h2>
          </div>
        </section>
        <section className="home-banner1">
          <div className="home-container7">
            <div className="home-header">
              <h2 className="home-title2">Need a free consultation?</h2>
            </div>
            <Link href="/contact">
              <a className="home-link11">
                <h1 className="home-text24">Let&apos;s Talk</h1>
              </a>
            </Link>
          </div>
        </section>
        <section className="home-newsletter">
          <div className="home-header1">
            <h2 className="home-text25">Subscribe to our newsletter</h2>
            <p className="home-text26">
              Get legal insights and market updates.
            </p>
          </div>
          <div className="home-content1">
            <div className="home-email">
              <input
                type="text"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-submit">
                <img alt="image" src="/frame.svg" className="home-image2" />
              </div>
            </div>
          </div>
        </section>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 5vw;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-hero {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 55%;
            height: 80%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-title {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 4rem;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .home-title1 {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 4rem;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 700;
          }
          .home-description {
            color: var(--dl-color-gray-black);
            width: 75%;
            font-size: 1.5rem;
            max-width: auto;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .home-link {
            text-decoration: underline;
          }
          .home-link01 {
            text-decoration: underline;
          }
          .home-image {
            flex: 1;
            width: 40%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-imageradius);
          }
          .home-mission {
            margin-top: var(--dl-space-space-sixunits);
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-sixunits);
          }
          .home-image1 {
            width: 20%;
            height: 50%;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: fill;
            transition: 0.3s;
          }
          .home-image1:hover {
            transform: scale(1.2);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 40%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text07 {
            color: var(--dl-color-gray-black);
            width: 80%;
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .home-link02 {
            display: contents;
          }
          .home-text10 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .home-text10:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: 75%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .home-link03 {
            display: contents;
          }
          .home-text11 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 2rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: none;
          }
          .home-text11:hover {
            border-color: #ffff00;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-link04 {
            display: contents;
          }
          .home-text14 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 2rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: none;
          }
          .home-text14:hover {
            border-color: #ffff00;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-practices {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: auto;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text15 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .home-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-grid {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-practice-wrapper {
            cursor: pointer;
            text-decoration: none;
          }
          .home-component {
            text-decoration: none;
          }
          .home-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-component1 {
            text-decoration: none;
          }
          .home-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-component2 {
            text-decoration: none;
          }
          .home-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-component3 {
            text-decoration: none;
          }
          .home-practice-wrapper4 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-component4 {
            text-decoration: none;
          }
          .home-practice-wrapper5 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-component5 {
            text-decoration: none;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text19 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .home-text21 {
            background-color: rgb(255, 255, 0);
          }
          .home-improve {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text23 {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 2.5rem;
          }
          .home-banner1 {
            gap: var(--dl-space-space-threeunits);
            width: 80%;
            display: flex;
            max-width: auto;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-container7 {
            gap: var(--dl-space-space-threeunits);
            width: 80%;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 110px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #1b1b1b;
          }
          .home-container7:hover {
            width: 100%;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title2 {
            color: rgb(247, 247, 247);
            width: 100%;
            font-size: 2.5rem;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 46px;
          }
          .home-link11 {
            display: contents;
          }
          .home-text24 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #1b1b1b;
          }
          .home-text24:hover {
            color: var(--dl-color-gray-black);
            border: none;
            background-color: #ffff00;
          }
          .home-newsletter {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-header1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text25 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 2.5rem;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .home-text26 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 30px;
          }
          .home-content1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-email {
            width: 400px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 60px;
            padding-right: 2px;
            flex-direction: row;
            padding-bottom: 2px;
            justify-content: center;
            background-color: #f3f3f3;
          }
          .home-textinput {
            flex: 1;
            color: #122821;
            outline: inherit;
            font-family: Josefin Sans;
            font-weight: 200;
            background-color: transparent;
          }
          .home-submit {
            width: 56px;
            cursor: pointer;
            height: 56px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .home-image2 {
            width: 18px;
            filter: brightness(0) saturate(100%) invert(88%) sepia(8%)
              saturate(484%) hue-rotate(62deg) brightness(111%) contrast(95%);
            transform: rotate(-45deg);
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .home-container {
              border-left-width: 0px;
            }
            .home-hero {
              align-items: center;
              padding-left: 00px;
              padding-right: 00px;
              justify-content: center;
              border-bottom-width: 1px;
            }
            .home-container1 {
              align-items: center;
              justify-content: center;
            }
            .home-title {
              color: var(--dl-color-gray-black);
            }
            .home-title1 {
              color: var(--dl-color-gray-black);
            }
            .home-description {
              color: var(--dl-color-gray-black);
            }
            .home-link {
              text-decoration: underline;
            }
            .home-link01 {
              text-decoration: underline;
            }
            .home-image1 {
              width: 30%;
              height: 70%;
            }
            .home-container2 {
              width: 40%;
              height: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-left: var(--dl-space-space-twounits);
              padding-top: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-text07 {
              color: var(--dl-color-gray-black);
              width: 80%;
            }
            .home-text10 {
              color: var(--dl-color-gray-black);
              padding: var(--dl-space-space-oneandhalfunits);
              font-size: 1.5rem;
              margin-top: var(--dl-space-space-twounits);
              border-radius: var(--dl-radius-radius-radius8);
              padding-bottom: 24px;
            }
            .home-container3 {
              align-items: center;
              border-color: var(--dl-color-gray-white);
              justify-content: center;
              background-color: var(--dl-color-gray-white);
            }
            .home-container4 {
              width: 50%;
              height: 100%;
              border-radius: var(--dl-radius-radius-round);
            }
            .home-text11 {
              color: var(--dl-color-gray-white);
            }
            .home-text14 {
              color: var(--dl-color-gray-white);
            }
            .home-text15 {
              color: var(--dl-color-gray-black);
            }
            .home-text19 {
              color: var(--dl-color-gray-black);
              font-size: 2.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .home-text21 {
              background-color: rgb(255, 255, 0);
            }
            .home-container7 {
              width: 80%;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-title2 {
              color: rgb(247, 247, 247);
            }
            .home-text24 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              text-decoration: none;
            }
            .home-newsletter {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-textinput {
              font-size: 1.2rem;
              font-family: Josefin Sans;
            }
          }
          @media (max-width: 1200px) {
            .home-container1 {
              width: 80%;
              margin-left: 0px;
            }
            .home-title {
              color: var(--dl-color-gray-black);
            }
            .home-title1 {
              color: var(--dl-color-gray-black);
            }
            .home-image {
              display: none;
            }
            .home-image1 {
              left: -65px;
              width: 40%;
              bottom: -355px;
            }
            .home-container2 {
              width: 40%;
            }
            .home-text07 {
              color: var(--dl-color-gray-black);
              width: 75%;
              max-width: auto;
            }
            .home-text10 {
              color: var(--dl-color-gray-black);
            }
            .home-container4 {
              width: 75%;
            }
            .home-text23 {
              color: var(--dl-color-gray-black);
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 51px;
            }
            .home-banner1 {
              max-width: auto;
            }
            .home-container7 {
              width: 100%;
            }
            .home-text24 {
              background-color: #1b1b1b;
            }
            .home-newsletter {
              max-width: auto;
            }
            .home-text26 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              line-height: 30px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              height: 100vh;
              max-width: auto;
              margin-top: var(--dl-space-space-sixunits);
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container1 {
              width: 80%;
              margin-left: 0px;
            }
            .home-title {
              color: var(--dl-color-gray-black);
              width: 85%;
            }
            .home-title1 {
              color: var(--dl-color-gray-black);
              width: 85%;
            }
            .home-description {
              color: var(--dl-color-gray-black);
              width: 85%;
            }
            .home-image1 {
              display: none;
            }
            .home-container2 {
              width: 80%;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text07 {
              color: var(--dl-color-gray-black);
              width: 80%;
              align-self: center;
            }
            .home-text10 {
              align-self: center;
            }
            .home-container3 {
              width: 100%;
            }
            .home-text14 {
              font-size: 2rem;
            }
            .home-practices {
              margin-top: var(--dl-space-space-fiveunits);
              margin-bottom: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .home-improve {
              gap: var(--dl-space-space-fiveunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text23 {
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text24 {
              background-color: #1b1b1b;
            }
            .home-newsletter {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text26 {
              font-size: 1.5rem;
              line-height: 24px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              width: 100%;
              height: 100vh;
              align-items: center;
              justify-content: center;
            }
            .home-container1 {
              width: 95%;
              margin-left: 0px0;
              margin-right: 0px0;
            }
            .home-title {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-title1 {
              width: 95%;
              margin-top: var(--dl-space-space-unit);
            }
            .home-description {
              width: 95%;
              margin-top: var(--dl-space-space-unit);
            }
            .home-container2 {
              width: 75%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-text07 {
              width: 80%;
            }
            .home-container4 {
              width: 100%;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-text11 {
              color: var(--dl-color-gray-white);
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .home-text12 {
              color: var(--dl-color-gray-white);
            }
            .home-text14 {
              font-size: 2rem;
            }
            .home-practices {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text16 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text17 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-content {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
            }
            .home-grid {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text23 {
              color: var(--dl-color-gray-black);
              font-size: 2rem;
              line-height: 41px;
            }
            .home-banner1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              height: 100vh;
            }
            .home-container1 {
              width: 100%;
              height: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-title1 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-container2 {
              width: 100%;
              margin-left: var(--dl-space-space-unit);
            }
            .home-text07 {
              width: 100%;
            }
            .home-container4 {
              width: 100%;
              height: 100%;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-text14 {
              font-size: 2rem;
            }
            .home-practices {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-banner {
              margin-top: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text23 {
              color: var(--dl-color-gray-black);
              font-size: 2rem;
            }
            .home-banner1 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container7 {
              gap: var(--dl-space-space-oneandhalfunits);
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title2 {
              font-size: 2.5rem;
              line-height: 41px;
            }
            .home-text25 {
              color: var(--dl-color-gray-black);
            }
            .home-text26 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
            }
            .home-email {
              width: 100%;
            }
            .home-textinput {
              color: var(--dl-color-gray-black);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
