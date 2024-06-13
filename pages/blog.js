import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Publications</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Publications" />
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
        <div className="blog-container1 thq-section-padding">
          <div className="blog-max-width thq-section-max-width">
            <div className="blog-container2">
              <h2 className="blog-title thq-heading-2">Our Latest Posts</h2>
            </div>
          </div>
        </div>
        <div className="blog-drug-possession-thailand thq-section-padding">
          <div className="blog-max-width1 thq-section-max-width">
            <div className="blog-content">
              <div className="blog-section-title">
                <span className="blog-text thq-body-small">Criminal Law</span>
                <div className="blog-content01">
                  <h2 className="blog-text01 thq-heading-2">
                    Learn more about Drug Possession in Thailand 
                  </h2>
                  <span className="blog-text02">09/06/2024</span>
                  <p className="blog-text03 thq-body-large">
                    In 2021, Thailand implemented new legislation that brought
                    about significant revisions to the nation&apos;s drug laws.
                    Under the updated laws, individuals found in possession of
                    drugs for personal use now have the option to undergo
                    medical treatment instead of facing imprisonment.
                  </p>
                </div>
                <div className="blog-actions">
                  <Link href="/drug-possession">
                    <a className="blog-link">
                      <h1 className="blog-text04">Learn More</h1>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-image-container">
              <img
                alt="Image"
                src="/designer4-1400w.jpeg"
                className="blog-placeholder-image thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <div className="blog-online-fraud thq-section-padding">
          <div className="blog-max-width2 thq-section-max-width">
            <div className="blog-image-container1">
              <img
                alt="Image"
                src="/designer3-1400w.jpeg"
                className="blog-placeholder-image1 thq-img-ratio-16-9"
              />
            </div>
            <div className="blog-content02">
              <div className="blog-section-title1">
                <span className="blog-text05 thq-body-small">Criminal Law</span>
                <div className="blog-content03">
                  <h2 className="blog-text06 thq-heading-2">
                    Online Fraud in Thailand
                  </h2>
                  <span className="blog-text07">06/06/2024</span>
                  <p className="blog-text08 thq-body-large">
                    In Thailand, instances of online fraud concerning both
                    products and services are unfortunately prevalent. Some
                    online stores engage in deceitful practices, accepting
                    payments without delivering the promised goods or services.
                    To address this issue, Thailand has enacted a comprehensive
                    criminal code targeting online fraudsters.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="blog-actions1">
                  <Link href="/online-fraud">
                    <a className="blog-link1">
                      <h1 className="blog-text09">Read More</h1>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-domestic-abuse thq-section-padding">
          <div className="blog-max-width3 thq-section-max-width">
            <div className="blog-content04">
              <div className="blog-section-title2">
                <span className="blog-text10 thq-body-small">Criminal Law</span>
                <div className="blog-content05">
                  <h2 className="blog-text11 thq-heading-2">
                    Domestic Abuse Thailand
                  </h2>
                  <span className="blog-text12">29/05/2024</span>
                  <p className="blog-text13 thq-body-large">
                    Domestic violence is considered both a criminal and civil
                    offense in Thailand, primarily regulated by the Domestic
                    Violence Victims Protection Act of 2007. If you are a victim
                    of domestic violence or facing charges related to it, our
                    firm may be able to provide assistance.
                  </p>
                </div>
                <div className="blog-actions2">
                  <Link href="/domestic-abuse">
                    <a className="blog-link2">
                      <h1 className="blog-text14">Learn More</h1>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-image-container2">
              <img
                alt="Image"
                src="/designer2-1400w.jpeg"
                className="blog-placeholder-image2 thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <div className="blog-defamation-thailand thq-section-padding">
          <div className="blog-max-width4 thq-section-max-width">
            <div className="blog-image-container3">
              <img
                alt="Image"
                src="/designer%20(6)-1400w.jpeg"
                className="blog-placeholder-image3 thq-img-ratio-16-9"
              />
            </div>
            <div className="blog-content06">
              <div className="blog-section-title3">
                <span className="blog-text15 thq-body-small">Criminal Law</span>
                <div className="blog-content07">
                  <h2 className="blog-text16 thq-heading-2">
                    Defamation in Thailand 
                  </h2>
                  <span className="blog-text17">15/05/2024</span>
                  <p className="blog-text18 thq-body-large">
                    Defamation in Thailand is considered both a civil and
                    criminal offense. In this article, we explore the necessary
                    criteria for filing a claim, steps to take if you have been
                    defamed, and the differences between defamation laws in
                    Thailand and those in common law jurisdictions.
                  </p>
                </div>
                <div className="blog-actions3">
                  <Link href="/defamation">
                    <a className="blog-link3">
                      <h1 className="blog-text19">Read More</h1>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-criminal-porceedings thq-section-padding">
          <div className="blog-max-width5 thq-section-max-width">
            <div className="blog-content08">
              <div className="blog-section-title4">
                <span className="blog-text20 thq-body-small">Criminal Law</span>
                <div className="blog-content09">
                  <h2 className="blog-text21 thq-heading-2">
                    Learn more about Criminal Proceedings in Thailand
                  </h2>
                  <span className="blog-text22">08/05/2024</span>
                  <p className="blog-text23 thq-body-large">
                    <span>
                      In most jurisdictions, criminal charges are typically
                      brought by state prosecutors rather than individual
                      persons. However, in Thailand, individuals have the right
                      to initiate what is referred to as a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/criminal-proceedings">
                      <a className="blog-link4">private criminal proceeding</a>
                    </Link>
                    <span>
                      . Read further to understand your legal rights in
                      Thailand, and particulary this unique aspect of its legal
                      system.
                    </span>
                  </p>
                </div>
                <div className="blog-actions4">
                  <Link href="/criminal-proceedings">
                    <a className="blog-link5">
                      <h1 className="blog-text26">Learn More</h1>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-image-container4">
              <img
                alt="Image"
                src="/designer1-1400w.jpeg"
                className="blog-placeholder-image4 thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name2"></Footer1>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-title {
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-drug-possession-thailand {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .blog-max-width1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .blog-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-content01 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text01 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-text02 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 200;
          }
          .blog-text03 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .blog-link {
            display: contents;
          }
          .blog-text04 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .blog-text04:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .blog-image-container {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .blog-placeholder-image {
            border-radius: var(--dl-radius-radius-radius4);
          }
          .blog-online-fraud {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .blog-max-width2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .blog-image-container1 {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .blog-placeholder-image1 {
            border-radius: var(--dl-radius-radius-radius4);
          }
          .blog-content02 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-section-title1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text05 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-content03 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text06 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-text07 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-text08 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-actions1 {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .blog-link1 {
            display: contents;
          }
          .blog-text09 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .blog-text09:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .blog-domestic-abuse {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .blog-max-width3 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .blog-content04 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-section-title2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text10 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-content05 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text11 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-text12 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-text13 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-actions2 {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .blog-link2 {
            display: contents;
          }
          .blog-text14 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .blog-text14:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .blog-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .blog-placeholder-image2 {
            border-radius: var(--dl-radius-radius-radius4);
          }
          .blog-defamation-thailand {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .blog-max-width4 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .blog-image-container3 {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .blog-placeholder-image3 {
            border-radius: var(--dl-radius-radius-radius4);
          }
          .blog-content06 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-section-title3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text15 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-content07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text16 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-text17 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-text18 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-actions3 {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .blog-link3 {
            display: contents;
          }
          .blog-text19 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .blog-text19:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .blog-criminal-porceedings {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .blog-max-width5 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .blog-content08 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-section-title4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text20 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-content09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text21 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-text22 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-text23 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-link4 {
            text-decoration: underline;
          }
          .blog-actions4 {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .blog-link5 {
            display: contents;
          }
          .blog-text26 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .blog-text26:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .blog-image-container4 {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .blog-placeholder-image4 {
            border-radius: var(--dl-radius-radius-radius4);
          }
          @media (max-width: 991px) {
            .blog-drug-possession-thailand {
              flex-direction: column;
            }
            .blog-max-width1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
            .blog-text01 {
              font-style: normal;
              font-weight: 400;
            }
            .blog-placeholder-image {
              display: none;
            }
            .blog-max-width2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
            .blog-placeholder-image1 {
              display: none;
            }
            .blog-text06 {
              font-style: normal;
              font-weight: 400;
            }
            .blog-domestic-abuse {
              flex-direction: column;
            }
            .blog-max-width3 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
            .blog-text11 {
              font-style: normal;
              font-weight: 400;
            }
            .blog-placeholder-image2 {
              display: none;
            }
            .blog-max-width4 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
            .blog-placeholder-image3 {
              display: none;
            }
            .blog-text16 {
              font-style: normal;
              font-weight: 400;
            }
            .blog-max-width5 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
            .blog-text21 {
              font-style: normal;
              font-weight: 400;
            }
            .blog-placeholder-image4 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .blog-text04 {
              align-self: flex-start;
            }
            .blog-text09 {
              align-self: flex-start;
            }
            .blog-text14 {
              align-self: flex-start;
            }
            .blog-text19 {
              align-self: flex-start;
            }
            .blog-text26 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .blog-actions {
              width: 100%;
              flex-direction: column;
            }
            .blog-text04 {
              align-self: flex-start;
            }
            .blog-actions1 {
              width: 100%;
              flex-direction: column;
            }
            .blog-text09 {
              align-self: flex-start;
            }
            .blog-actions2 {
              width: 100%;
              flex-direction: column;
            }
            .blog-text14 {
              align-self: flex-start;
            }
            .blog-actions3 {
              width: 100%;
              flex-direction: column;
            }
            .blog-text19 {
              align-self: flex-start;
            }
            .blog-actions4 {
              width: 100%;
              flex-direction: column;
            }
            .blog-text26 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
