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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/b54c7d9e-85ad-41bf-8d00-bf6410be3d15?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="blog-container1 thq-section-padding">
          <div className="blog-max-width thq-section-max-width">
            <div className="blog-container2">
              <h2 className="blog-title thq-heading-2">
                Our Latest Blog Posts
              </h2>
            </div>
          </div>
        </div>
        <div className="blog-layout349 thq-section-padding">
          <div className="blog-max-width1 thq-section-max-width">
            <div className="blog-content">
              <div className="blog-section-title">
                <span className="blog-text thq-body-small">Criminal Law</span>
                <div className="blog-content1">
                  <h2 className="blog-text1 thq-heading-2">
                    Learn more about Criminal Proceedings in Thailand
                  </h2>
                  <span className="blog-text2">08/05/2024</span>
                  <p className="blog-text3 thq-body-large">
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
                    <Link href="/criminal-proceedings-in-thailand">
                      <a className="blog-link">private criminal proceeding</a>
                    </Link>
                    <span>
                      . Read further to understand your legal rights in
                      Thailand, and particulary this unique aspect of its legal
                      system.
                    </span>
                  </p>
                </div>
                <div className="blog-actions"></div>
                <Link href="/criminal-proceedings-in-thailand">
                  <a className="blog-link1">
                    <h1 className="blog-text6">Read Article</h1>
                  </a>
                </Link>
              </div>
            </div>
            <div className="blog-image-container">
              <img
                alt="Image"
                src="/26682751244_5c54498c3a_b-1400w.jpg"
                className="blog-placeholder-image thq-img-ratio-16-9"
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
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-layout349 {
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
            font-weight: 300;
          }
          .blog-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-text1 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-text2 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-text3 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-link {
            text-decoration: underline;
          }
          .blog-actions {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
          }
          .blog-link1 {
            display: contents;
          }
          .blog-text6 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: auto;
            padding: var(--dl-space-space-oneandhalfunits);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            background-color: #1b1b1b;
          }
          .blog-text6:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            background-color: #ffff00;
          }
          .blog-image-container {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .blog-placeholder-image {
            border-radius: var(--dl-radius-radius-radius4);
          }
          @media (max-width: 991px) {
            .blog-max-width1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 479px) {
            .blog-actions {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
