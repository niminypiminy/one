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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/7ad1e33a-106f-474c-89cf-8ba0be7d0400?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="home-header23 thq-section-padding">
          <div className="home-max-width thq-section-max-width">
            <div className="home-content">
              <h1 className="home-text thq-heading-1">
                <span>
                  Reliable Counsel, Resolute Advocacy, Unyielding
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text02">Integrity</span>
                <span>.</span>
              </h1>
              <p className="home-text04 thq-body-large">
                <span>
                  We are a boutique law firm. If you need legal assistance,
                  please contact us
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/contact">
                  <a className="home-link">here</a>
                </Link>
                <span>. To learn more about our practice areas, click </span>
                <a href="#ourpracticeareas" className="home-link01">
                  here
                </a>
                <span>.</span>
              </p>
              <div className="home-actions">
                <div className="home-container1">
                  <Link href="/about-us">
                    <a className="home-link02 thq-button-filled">
                      <span className="home-text08 thq-body-small">
                        About us
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="home-container2">
                  <Link href="/contact">
                    <a className="home-link03 thq-button-outline">
                      <span className="home-text09 thq-body-small">
                        Contact Us
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header76">
          <div className="home-max-width1 thq-section-max-width">
            <div className="home-column thq-section-padding">
              <h1 className="home-text10 thq-heading-1">
                <span>
                  Legal advice you can
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text12">trust.</span>
              </h1>
              <p className="home-text13 thq-body-large">
                We don&apos;t outsource cases. Each case is handled in-house,
                directly by an attorney, ensuring the highest level of care and
                attention to detail.
              </p>
            </div>
            <div className="home-content1">
              <div className="home-column1">
                <img
                  alt="Photo of Philosopher John Locke"
                  src="/images-700w.jpg"
                  className="home-placeholder-image thq-img-ratio-1-1"
                />
                <img
                  alt="Law Library"
                  src="/homepage1-700w.jpeg"
                  className="home-placeholder-image1 thq-img-ratio-1-1"
                />
                <img
                  alt="Lawyers Negotiating"
                  src="/lawyersnegotiating-700w.jpeg"
                  className="home-placeholder-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="home-column2">
                <img
                  alt="Lawyers"
                  src="https://images.unsplash.com/photo-1696677528468-7b5af2d5363b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                  className="home-placeholder-image3 thq-img-ratio-1-1"
                />
                <img
                  alt="Drafting a contract"
                  src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                  className="home-placeholder-image4 thq-img-ratio-1-1"
                />
                <img
                  alt="Woman Having Coffee in Office"
                  src="/womancoffeeoffice-400h.jpeg"
                  className="home-placeholder-image5 thq-img-ratio-1-1"
                />
                <img
                  alt="Judges Gavel"
                  src="https://images.unsplash.com/photo-1555374018-13a8994ab246?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODIzODc2N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                  className="home-placeholder-image6 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-container3">
          <div className="home-container4">
            <Link href="/company-registration">
              <a className="home-link04">
                <h1 className="home-text14">
                  <span className="home-text15">Company Registration</span>
                  <br></br>
                </h1>
              </a>
            </Link>
            <Link href="/obtain-a-visa">
              <a className="home-link05">
                <h1 className="home-text17">Obtain a Visa</h1>
              </a>
            </Link>
          </div>
        </div>
        <section className="home-practices">
          <h2 id="ourpracticeareas" className="home-text18">
            <span className="home-text19">Our practice areas</span>
            <span className="home-text20">.</span>
            <br></br>
          </h2>
          <div className="home-container5">
            <div className="home-container6">
              <div className="home-content2">
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
          <h1 className="home-text22">
            <span className="home-text23">
              We
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text24">fight</span>
            <span className="home-text25">
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
            <h2 className="home-text26">
              Consistently rated as one of the best law firms in Southeast Asia
            </h2>
          </div>
        </section>
        <section className="home-banner1">
          <div className="home-container7">
            <div className="home-header">
              <h2 className="home-title">Need a free consultation?</h2>
            </div>
            <Link href="/contact">
              <a className="home-link12">
                <h1 className="home-text27">Let&apos;s Talk</h1>
              </a>
            </Link>
          </div>
        </section>
        <section className="home-newsletter">
          <div className="home-header1">
            <h2 className="home-text28">Subscribe to our newsletter</h2>
            <p className="home-text29">
              Get legal insights and market updates.
            </p>
          </div>
          <form
            enctype="application/x-www-form-urlencoded"
            action="https://submit-form.com/xJUhskwkA"
            name="newsletterform"
            method="POST"
            className="home-form"
          >
            <div className="home-email">
              <input
                type="email"
                placeholder="Email"
                id="emailnewsletter"
                name="emailnewsletter"
                required="true"
                className="home-textinput input"
              />
              <div
                id="submitform"
                name="submitform"
                type="submit"
                className="home-submit"
              >
                <img alt="image" src="/frame.svg" className="home-image" />
              </div>
            </div>
          </form>
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
            background-color: var(--dl-color-theme-neutral-light);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-header23 {
            height: 75vh;
            justify-content: center;
          }
          .home-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 1000px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text {
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text02 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text04 {
            width: 75%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .home-link {
            text-decoration: underline;
          }
          .home-link01 {
            text-decoration: underline;
          }
          .home-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
          }
          .home-container1 {
            display: flex;
            align-items: flex-start;
          }
          .home-link02 {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            transition: 0.3s;
            text-decoration: none;
            background-color: var(--dl-color-theme-color1);
          }
          .home-link02:hover {
            fill: var(--dl-color-theme-color1);
            color: var(--dl-color-theme-color1);
            opacity: 1;
            background-color: var(--dl-color-theme-color2);
          }
          .home-text08 {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .home-container2 {
            display: flex;
            align-items: flex-start;
          }
          .home-link03 {
            fill: var(--dl-color-theme-color1);
            color: var(--dl-color-theme-color1);
            transition: 0.3s;
            font-family: 'Josefin Sans';
            border-color: var(--dl-color-theme-color1);
            text-decoration: none;
          }
          .home-link03:hover {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            border-color: var(--dl-color-theme-color1);
            background-color: var(--dl-color-theme-color1);
          }
          .home-text09 {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .home-header76 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .home-max-width1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            width: 532px;
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .home-text12 {
            color: var(--dl-color-theme-color4);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .home-text13 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .home-content1 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            height: 900px;
            display: flex;
            position: relative;
            align-items: center;
          }
          .home-column1 {
            gap: 16px;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-placeholder-image {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-placeholder-image1 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-placeholder-image2 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-column2 {
            gap: 16px;
            width: 50%;
            height: auto;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-placeholder-image3 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-placeholder-image4 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-placeholder-image5 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-placeholder-image6 {
            width: 100%;
            height: 400px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-color1);
          }
          .home-link04 {
            display: contents;
          }
          .home-text14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 2rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: none;
          }
          .home-text14:hover {
            border-color: var(--dl-color-theme-color4);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-link05 {
            display: contents;
          }
          .home-text17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 2rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: none;
          }
          .home-text17:hover {
            border-color: var(--dl-color-theme-color4);
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
          .home-text18 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .home-content2 {
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
          .home-text22 {
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .home-text23 {
            color: var(--dl-color-gray-black);
          }
          .home-text24 {
            color: var(--dl-color-theme-color4);
            background-color: var(--dl-color-theme-color5);
          }
          .home-text25 {
            color: var(--dl-color-gray-black);
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
          .home-text26 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
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
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-buttonradius);
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
          .home-title {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 2.5rem;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 46px;
          }
          .home-link12 {
            display: contents;
          }
          .home-text27 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #1b1b1b;
          }
          .home-text27:hover {
            fill: var(--dl-color-theme-color1);
            color: var(--dl-color-theme-color1);
            border: none;
            background-color: var(--dl-color-theme-color4);
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
          .home-text28 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 2.5rem;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .home-text29 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 30px;
          }
          .home-form {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
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
            background-color: var(--dl-color-theme-color3);
          }
          .home-image {
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
            .home-text10 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 400;
            }
            .home-text12 {
              color: var(--dl-color-theme-color4);
              background-color: var(--dl-color-theme-neutral-dark);
            }
            .home-container3 {
              align-items: center;
              border-color: var(--dl-color-gray-white);
              justify-content: center;
            }
            .home-container4 {
              border-radius: var(--dl-radius-radius-cardradius);
            }
            .home-text14 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              text-decoration: none;
            }
            .home-text17 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              text-decoration: none;
            }
            .home-text18 {
              color: var(--dl-color-gray-black);
            }
            .home-text22 {
              font-size: 2.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .home-text23 {
              color: var(--dl-color-gray-black);
            }
            .home-text24 {
              color: var(--dl-color-theme-color4);
              background-color: var(--dl-color-theme-color5);
            }
            .home-text25 {
              color: var(--dl-color-gray-black);
            }
            .home-container7 {
              width: 80%;
            }
            .home-title {
              color: rgb(247, 247, 247);
            }
            .home-text27 {
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
            .home-container4 {
              width: 75%;
            }
            .home-text26 {
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
            .home-text27 {
              background-color: #1b1b1b;
            }
            .home-newsletter {
              max-width: auto;
            }
            .home-text29 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              line-height: 30px;
            }
          }
          @media (max-width: 991px) {
            .home-header76 {
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .home-max-width1 {
              flex-direction: column;
            }
            .home-column {
              width: 100%;
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-text10 {
              width: 50%;
              align-self: center;
              text-align: left;
            }
            .home-text13 {
              width: 60%;
              align-self: center;
              text-align: left;
            }
            .home-content1 {
              width: auto;
              height: auto;
              flex-direction: column;
            }
            .home-column1 {
              width: auto;
              margin-top: 0px;
              margin-left: -200px;
              flex-direction: row;
            }
            .home-placeholder-image {
              width: 400px;
            }
            .home-placeholder-image1 {
              width: 400px;
            }
            .home-placeholder-image2 {
              width: 400px;
            }
            .home-column2 {
              width: auto;
              flex-direction: row;
            }
            .home-placeholder-image3 {
              width: 400px;
            }
            .home-placeholder-image4 {
              width: 400px;
            }
            .home-placeholder-image5 {
              width: 400px;
            }
            .home-placeholder-image6 {
              width: 400px;
            }
            .home-container3 {
              width: 100%;
            }
            .home-text17 {
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
            .home-text26 {
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text27 {
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
            .home-text29 {
              font-size: 1.5rem;
              line-height: 24px;
            }
          }
          @media (max-width: 767px) {
            .home-header23 {
              height: 75vh;
            }
            .home-text {
              font-size: 2rem;
            }
            .home-column {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text10 {
              align-self: center;
              text-align: center;
            }
            .home-text13 {
              width: 75%;
              text-align: center;
            }
            .home-column1 {
              width: 100%;
              margin-left: 0px;
              flex-direction: column;
            }
            .home-placeholder-image {
              width: 100%;
              height: 500px;
            }
            .home-placeholder-image1 {
              width: 100%;
              height: 500px;
            }
            .home-placeholder-image2 {
              width: 100%;
              height: 500px;
            }
            .home-column2 {
              display: none;
            }
            .home-container3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container4 {
              width: 75%;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-text14 {
              color: var(--dl-color-gray-white);
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .home-text15 {
              color: var(--dl-color-gray-white);
            }
            .home-text17 {
              font-size: 2rem;
            }
            .home-practices {
              margin-top: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text19 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text20 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-content2 {
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
            .home-text26 {
              color: var(--dl-color-gray-black);
              font-size: 2rem;
              line-height: 41px;
            }
            .home-banner1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-header23 {
              height: auto;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text {
              font-size: 2rem;
            }
            .home-actions {
              width: 50%;
              flex-direction: column;
            }
            .home-container1 {
              width: 100%;
            }
            .home-link02 {
              width: 100%;
              align-self: center;
            }
            .home-container2 {
              width: 100%;
            }
            .home-link03 {
              width: 100%;
              align-self: center;
            }
            .home-column {
              margin-top: var(--dl-space-space-fiveunits);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text10 {
              width: auto;
              align-self: center;
              text-align: center;
            }
            .home-text13 {
              width: 80%;
              text-align: center;
            }
            .home-container4 {
              width: 100%;
              height: 100%;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-text17 {
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
            .home-text26 {
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
              height: 50vh;
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .home-title {
              font-size: 2.5rem;
              line-height: 41px;
            }
            .home-newsletter {
              height: 50vh;
              align-items: center;
              justify-content: center;
            }
            .home-text28 {
              color: var(--dl-color-gray-black);
            }
            .home-text29 {
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
