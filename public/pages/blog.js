import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

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
              <h2 className="blog-title thq-heading-2">Latest Blog Posts</h2>
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
                    Exploring Criminal Proceedings in Thailand
                  </h2>
                  <p className="blog-text2 thq-body-large">
                    In most jurisdictions, criminal charges are typically
                    brought by state prosecutors rather than individual persons.
                    However, in Thailand, individuals have the right to initiate
                    criminal proceedings. Explore further to understand your
                    legal rights in Thailand and the unique aspects of its legal
                    system compared to common law countries.
                  </p>
                </div>
                <div className="blog-actions">
                  <Link href="/criminal-proceedings-in-thailand">
                    <a className="blog-link thq-button-filled">
                      <span className="blog-action1 thq-body-small">
                        Read Article
                      </span>
                    </a>
                  </Link>
                </div>
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
            font-weight: 600;
          }
          .blog-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
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
            font-weight: 400;
          }
          .blog-text2 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .blog-link {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .blog-link:hover {
            color: var(--dl-color-theme-neutral-dark);
            background-color: ffff00;
          }
          .blog-action1 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
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
            .blog-link {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
