import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const LimitedCompanyLtd = (props) => {
  return (
    <>
      <div className="limited-company-ltd-container">
        <Head>
          <title>Limited-Company-Ltd - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Limited-Company-Ltd - Danneskiold &amp; Associates"
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
        <div className="limited-company-ltd-container01">
          <div className="limited-company-ltd-container02">
            <div className="limited-company-ltd-container03">
              <h1 className="limited-company-ltd-text">
                <span>
                  How to register a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="limited-company-ltd-text02">
                  Limited Company
                </span>
                <span> (Ltd.)</span>
              </h1>
              <span className="limited-company-ltd-text04">
                A Thai limited company is relatively easy to establish. There
                are a number of benefits such as limited liability, fewer
                application requirements, and lower incorporation costs;
                however, there are also a few drawbacks such as limitations on
                foreign ownership and the need for a minimum of two
                shareholders.
              </span>
            </div>
          </div>
          <div className="limited-company-ltd-container04">
            <img
              alt="image"
              src="/limited%20company-600w.jpg"
              loading="eager"
              className="limited-company-ltd-image"
            />
          </div>
        </div>
        <div className="limited-company-ltd-container05">
          <h1 className="limited-company-ltd-text05">Benefits</h1>
        </div>
        <div className="limited-company-ltd-container06">
          <div className="limited-company-ltd-feature-card">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="limited-company-ltd-icon"
            >
              <path d="M391.429 742.286l350.857-350.857c14.286-14.286 14.286-37.143 0-51.429l-58.286-58.286c-14.286-14.286-37.143-14.286-51.429 0l-266.857 266.857-120.571-120.571c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l204.571 204.571c14.286 14.286 37.143 14.286 51.429 0zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <h2 className="limited-company-ltd-text06">
              <span>Easy to Register | Low Cost</span>
              <br></br>
            </h2>
          </div>
          <div className="limited-company-ltd-feature-card1">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="limited-company-ltd-icon02"
            >
              <path d="M391.429 742.286l350.857-350.857c14.286-14.286 14.286-37.143 0-51.429l-58.286-58.286c-14.286-14.286-37.143-14.286-51.429 0l-266.857 266.857-120.571-120.571c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l204.571 204.571c14.286 14.286 37.143 14.286 51.429 0zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <h2 className="limited-company-ltd-text09">Limited Liability</h2>
          </div>
        </div>
        <div className="limited-company-ltd-features">
          <h1 className="limited-company-ltd-text10">
            Limited Company (Qualifications)
          </h1>
          <div className="limited-company-ltd-container07">
            <div className="limited-company-ltd-feature-card2">
              <svg
                viewBox="0 0 1024 1024"
                className="limited-company-ltd-icon04"
              >
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="limited-company-ltd-container08">
                <h2 className="limited-company-ltd-text11">
                  A Thai-owned limited company, restricts foreign ownership to
                  49% of the shares.
                </h2>
              </div>
            </div>
            <div className="limited-company-ltd-feature-card3">
              <svg
                viewBox="0 0 1024 1024"
                className="limited-company-ltd-icon06"
              >
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="limited-company-ltd-container09">
                <h2 className="limited-company-ltd-text12">
                  <span>
                    If foreign ownership exceeds 49% of the shares, the company
                    must apply for a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/foreign-business-license">
                    <a className="limited-company-ltd-link">
                      Foreign Business License
                    </a>
                  </Link>
                  <span>, or a Foreign Business Certificate.</span>
                </h2>
              </div>
            </div>
            <div className="limited-company-ltd-feature-card4">
              <svg
                viewBox="0 0 1024 1024"
                className="limited-company-ltd-icon08"
              >
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="limited-company-ltd-container10">
                <h2 className="limited-company-ltd-text15">
                  There must be no less than two shareholders. 
                </h2>
              </div>
            </div>
            <div className="limited-company-ltd-feature-card5">
              <svg
                viewBox="0 0 1024 1024"
                className="limited-company-ltd-icon10"
              >
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="limited-company-ltd-container11">
                <h2 className="limited-company-ltd-text16">
                  If the number of shareholders is reduced to one, a court may
                  require the company to dissolve.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="limited-company-ltd-container12">
          <Link href="/contact">
            <a className="limited-company-ltd-link1">
              <h1 className="limited-company-ltd-text17">
                Get a free consultation
              </h1>
            </a>
          </Link>
        </div>
        <div className="limited-company-ltd-steps">
          <h1 className="limited-company-ltd-text18">
            <span>
              How to Register a Thai
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="limited-company-ltd-text20">Limited Company</span>
          </h1>
          <div className="limited-company-ltd-container13">
            <div className="limited-company-ltd-step">
              <div className="limited-company-ltd-container14">
                <div className="limited-company-ltd-line"></div>
                <div className="limited-company-ltd-container15">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="limited-company-ltd-icon12"
                  >
                    <path d="M470 854l170-172h256v172h-426zM264 768l370-370-52-52-368 370v52h50zM786 248q26 26 26 60t-26 60l-486 486h-172v-174q480-478 486-484 26-26 60-26t60 26z"></path>
                  </svg>
                </div>
                <div className="limited-company-ltd-line1"></div>
              </div>
              <div className="limited-company-ltd-container16">
                <h1 className="limited-company-ltd-text21">
                  Reserve the Company Name
                </h1>
                <span className="limited-company-ltd-text22">
                  The company name must be in Thai and English. It can be
                  registered online at https://reserve.dbd.go.th The reservation
                  is valid for thirty days.
                </span>
              </div>
            </div>
            <div className="limited-company-ltd-step1">
              <div className="limited-company-ltd-container17">
                <div className="limited-company-ltd-line2"></div>
                <div className="limited-company-ltd-container18">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="limited-company-ltd-icon14"
                  >
                    <path d="M928 128h-288c0-70.692-57.306-128-128-128-70.692 0-128 57.308-128 128h-288c-17.672 0-32 14.328-32 32v832c0 17.674 14.328 32 32 32h832c17.674 0 32-14.326 32-32v-832c0-17.672-14.326-32-32-32zM512 64c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64s28.654-64 64-64zM896 960h-768v-768h128v96c0 17.672 14.328 32 32 32h448c17.674 0 32-14.328 32-32v-96h128v768z"></path>
                    <path d="M448 858.51l-205.254-237.254 58.508-58.51 146.746 114.744 274.742-242.744 58.514 58.508z"></path>
                  </svg>
                </div>
                <div className="limited-company-ltd-line3"></div>
              </div>
              <div className="limited-company-ltd-container19">
                <h1 className="limited-company-ltd-text23">
                  Register the Memorandum of Association
                </h1>
                <span className="limited-company-ltd-text24">
                  The MOA includes objectives, shareholder information, company
                  director information, promoter information, registered
                  capital, etc
                </span>
              </div>
            </div>
            <div className="limited-company-ltd-step2">
              <div className="limited-company-ltd-container20">
                <div className="limited-company-ltd-line4"></div>
                <div className="limited-company-ltd-container21">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="limited-company-ltd-icon17"
                  >
                    <path d="M726 384v-86h-428v86h428zM726 554v-84h-428v84h428zM598 726v-86h-300v86h300zM512 128q-18 0-30 12t-12 30 12 31 30 13 30-13 12-31-12-30-30-12zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h178q14-38 46-62t74-24 74 24 46 62h178z"></path>
                  </svg>
                </div>
                <div className="limited-company-ltd-line5"></div>
              </div>
              <div className="limited-company-ltd-container22">
                <h1 className="limited-company-ltd-text25">
                  Statutory Meeting
                </h1>
                <span className="limited-company-ltd-text26">
                  <span>
                    At least 50% of the shareholders are required to meet and
                    vote on company regulations, and appoint company directors. 
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="limited-company-ltd-step3">
              <div className="limited-company-ltd-container23">
                <div className="limited-company-ltd-line6"></div>
                <div className="limited-company-ltd-container24">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="limited-company-ltd-icon19"
                  >
                    <path d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"></path>
                  </svg>
                </div>
                <div className="limited-company-ltd-line7"></div>
              </div>
              <div className="limited-company-ltd-container25">
                <h1 className="limited-company-ltd-text29">
                  Register the Company
                </h1>
                <span className="limited-company-ltd-text30">
                  <span>
                    Directors submit articles of incorporation at the DBD or
                    online, and proof of paid-up capital (at least 25%) within
                    three months of the statutory meeting.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="limited-company-ltd-banner">
          <h1 className="limited-company-ltd-text33">Government Fees</h1>
          <div className="limited-company-ltd-container26">
            <div className="limited-company-ltd-container27">
              <span className="limited-company-ltd-text34">Type</span>
            </div>
            <div className="limited-company-ltd-container28">
              <span className="limited-company-ltd-text35">Cost (baht)</span>
            </div>
            <div className="limited-company-ltd-container29">
              <span className="limited-company-ltd-text36">
                Registration Fee 
              </span>
            </div>
            <div className="limited-company-ltd-container30">
              <span className="limited-company-ltd-text37">5000 </span>
            </div>
            <div className="limited-company-ltd-container31">
              <span className="limited-company-ltd-text38">
                Registration of MOA
              </span>
            </div>
            <div className="limited-company-ltd-container32">
              <span className="limited-company-ltd-text39">500</span>
            </div>
            <div className="limited-company-ltd-container33">
              <span className="limited-company-ltd-text40">
                Certified Documents (optional)
              </span>
            </div>
            <div className="limited-company-ltd-container34">
              <span className="limited-company-ltd-text41">50 (per page)</span>
            </div>
            <div className="limited-company-ltd-container35">
              <span className="limited-company-ltd-text42">Certificate </span>
            </div>
            <div className="limited-company-ltd-container36">
              <span className="limited-company-ltd-text43">40 </span>
            </div>
          </div>
        </div>
        <section className="limited-company-ltd-faq">
          <div id="faqs" className="limited-company-ltd-content">
            <div className="limited-company-ltd-heading">
              <h2 className="limited-company-ltd-header">
                Frequently asked questions
              </h2>
            </div>
            <div className="limited-company-ltd-accordion">
              <div
                data-role="accordion-container"
                className="accordion limited-company-ltd-element"
              >
                <div className="limited-company-ltd-content1">
                  <span className="limited-company-ltd-header1">
                    Can I protect my investment through preference shares.
                  </span>
                  <span
                    data-role="accordion-content"
                    className="limited-company-ltd-description"
                  >
                    <span>
                      To some extent, yes. You can review the benefits and
                      limitations of preferred shares
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/preferred-shares">
                      <a className="limited-company-ltd-link2">here</a>
                    </Link>
                    <span>.</span>
                  </span>
                </div>
                <div className="limited-company-ltd-icon-container">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="limited-company-ltd-icon21"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="limited-company-ltd-icon23"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="limited-company-ltd-element1 accordion"
              >
                <div className="limited-company-ltd-content2">
                  <span className="limited-company-ltd-header2">
                    Do I need to register an office before I register my
                    company.
                  </span>
                  <span
                    data-role="accordion-content"
                    className="limited-company-ltd-description1"
                  >
                    Yes, you will need to either buy or lease office space.
                  </span>
                </div>
                <div className="limited-company-ltd-icon-container1">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="limited-company-ltd-icon25"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="limited-company-ltd-icon27"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="limited-company-ltd-element2 accordion"
              >
                <div className="limited-company-ltd-content3">
                  <span className="limited-company-ltd-header3">
                    Can I register a business using a virtual address or shared
                    office, as offered by CEO Suites, REGUS, and other real
                    estate providers.
                  </span>
                  <span
                    data-role="accordion-content"
                    className="limited-company-ltd-description2"
                  >
                    Yes. However, certain businesses may need additional
                    permits, and those permits come with their own requirements.
                    For example, you cannot acquire a work permit using a
                    virtual office.
                  </span>
                </div>
                <div className="limited-company-ltd-icon-container2">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="limited-company-ltd-icon29"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="limited-company-ltd-icon31"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="limited-company-ltd-element3 accordion"
              >
                <div className="limited-company-ltd-content4">
                  <span className="limited-company-ltd-header4">
                    Can I register the business using your office?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="limited-company-ltd-description3"
                  >
                    <span>
                      Yes. You can temporarily register your business using our
                      office. However, we can only lease virtual office space.
                      Keep in mind that if your business needs additional
                      licenses, then depending on the agency, the virtual office
                      may not be sufficient. You can review our virtual office
                      fees
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/virtual-office">
                      <a className="limited-company-ltd-link3">here</a>
                    </Link>
                    <span>.</span>
                  </span>
                </div>
                <div className="limited-company-ltd-icon-container3">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="limited-company-ltd-icon33"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="limited-company-ltd-icon35"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="limited-company-ltd-element4 accordion"
              >
                <div className="limited-company-ltd-content5">
                  <span className="limited-company-ltd-header5">
                    How much do you charge to register a company?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="limited-company-ltd-description4"
                  >
                    It depends on the complexity of the business. Please contact
                    us, let us know a bit more about your objectives, and
                    we&apos;ll reply with a quote.
                  </span>
                </div>
                <div className="limited-company-ltd-icon-container4">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="limited-company-ltd-icon37"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="limited-company-ltd-icon39"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link href="/contact">
          <a className="limited-company-ltd-link4">Ask us anything.</a>
        </Link>
        <Footer1 rootClassName="footer1-root-class-name9"></Footer1>
      </div>
      <style jsx>
        {`
          .limited-company-ltd-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .limited-company-ltd-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .limited-company-ltd-container02 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .limited-company-ltd-container03 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .limited-company-ltd-text {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            max-width: auto;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .limited-company-ltd-text02 {
            background-color: rgb(255, 255, 0);
          }
          .limited-company-ltd-text04 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 1.15em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .limited-company-ltd-container04 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .limited-company-ltd-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .limited-company-ltd-image:hover {
            transform: scale(1.2);
          }
          .limited-company-ltd-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .limited-company-ltd-text05 {
            font-size: 2.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .limited-company-ltd-container06 {
            width: 100%;
            height: 75vh;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .limited-company-ltd-feature-card {
            width: 33%;
            height: 50%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            border-color: #112821;
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .limited-company-ltd-feature-card:hover {
            transform: scale(1.2);
          }
          .limited-company-ltd-icon {
            fill: #ffff00;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .limited-company-ltd-text06 {
            color: rgb(255, 255, 255);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-feature-card1 {
            width: 33%;
            height: 50%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .limited-company-ltd-feature-card1:hover {
            transform: scale(1.2);
          }
          .limited-company-ltd-icon02 {
            fill: #ffff00;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .limited-company-ltd-text09 {
            color: rgb(255, 255, 255);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-features {
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .limited-company-ltd-text10 {
            color: var(--dl-color-gray-black);
            width: 80%;
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .limited-company-ltd-container07 {
            width: 50%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .limited-company-ltd-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .limited-company-ltd-icon04 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-container08 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .limited-company-ltd-text11 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .limited-company-ltd-icon06 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .limited-company-ltd-text12 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-link {
            text-decoration: underline;
          }
          .limited-company-ltd-feature-card4 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .limited-company-ltd-icon08 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .limited-company-ltd-text15 {
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .limited-company-ltd-feature-card5 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .limited-company-ltd-icon10 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .limited-company-ltd-text16 {
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .limited-company-ltd-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 30vh;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .limited-company-ltd-link1 {
            display: contents;
          }
          .limited-company-ltd-text17 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .limited-company-ltd-text17:hover {
            color: var(--dl-color-gray-white);
            background-color: #1b1b1b;
          }
          .limited-company-ltd-steps {
            width: 80%;
            display: flex;
            max-width: auto;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .limited-company-ltd-text18 {
            color: var(--dl-color-gray-black);
            width: 50%;
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .limited-company-ltd-text20 {
            background-color: rgb(255, 255, 0);
          }
          .limited-company-ltd-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
          }
          .limited-company-ltd-step {
            width: 33%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .limited-company-ltd-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .limited-company-ltd-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container15 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .limited-company-ltd-icon12 {
            width: 24px;
            height: 24px;
          }
          .limited-company-ltd-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container16 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text21 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text22 {
            color: var(--dl-color-gray-500);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .limited-company-ltd-step1 {
            width: 33%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .limited-company-ltd-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .limited-company-ltd-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container18 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .limited-company-ltd-icon14 {
            width: 24px;
            height: 24px;
          }
          .limited-company-ltd-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container19 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text23 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text24 {
            color: var(--dl-color-gray-500);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .limited-company-ltd-step2 {
            width: 33%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .limited-company-ltd-container20 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .limited-company-ltd-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container21 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .limited-company-ltd-icon17 {
            width: 24px;
            height: 24px;
          }
          .limited-company-ltd-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container22 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text25 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text26 {
            color: var(--dl-color-gray-500);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .limited-company-ltd-step3 {
            width: 33%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .limited-company-ltd-container23 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .limited-company-ltd-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container24 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .limited-company-ltd-icon19 {
            width: 24px;
            height: 24px;
          }
          .limited-company-ltd-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .limited-company-ltd-container25 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text29 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .limited-company-ltd-text30 {
            color: var(--dl-color-gray-500);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .limited-company-ltd-banner {
            width: 100%;
            height: 75vh;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: 48px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .limited-company-ltd-text33 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .limited-company-ltd-container26 {
            width: 50%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 1fr;
          }
          .limited-company-ltd-container27 {
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
          .limited-company-ltd-text34 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .limited-company-ltd-container28 {
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
          .limited-company-ltd-text35 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 400;
          }
          .limited-company-ltd-container29 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text36 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-container30 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text37 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-container31 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text38 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-container32 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text39 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-container33 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text40 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-container34 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text41 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-container35 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text42 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-container36 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .limited-company-ltd-text43 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-faq {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: var(--dl-color-gray-white);
          }
          .limited-company-ltd-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .limited-company-ltd-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .limited-company-ltd-header {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            padding: var(--dl-space-space-halfunit);
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 300;
            line-height: 60px;
            background-color: #1b1b1b;
          }
          .limited-company-ltd-accordion {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .limited-company-ltd-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .limited-company-ltd-header1 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-description {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            max-width: 800px;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .limited-company-ltd-link2 {
            text-decoration: underline;
          }
          .limited-company-ltd-icon-container {
            padding-top: var(--dl-space-space-halfunit);
          }
          .limited-company-ltd-icon21 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .limited-company-ltd-icon23 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .limited-company-ltd-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .limited-company-ltd-header2 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-description1 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            max-width: 800px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .limited-company-ltd-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .limited-company-ltd-icon25 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .limited-company-ltd-icon27 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .limited-company-ltd-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .limited-company-ltd-header3 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-description2 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            max-width: 800px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .limited-company-ltd-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .limited-company-ltd-icon29 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .limited-company-ltd-icon31 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .limited-company-ltd-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .limited-company-ltd-header4 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-description3 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            max-width: 800px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .limited-company-ltd-link3 {
            text-decoration: underline;
          }
          .limited-company-ltd-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .limited-company-ltd-icon33 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .limited-company-ltd-icon35 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .limited-company-ltd-element4 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .limited-company-ltd-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .limited-company-ltd-header5 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
          }
          .limited-company-ltd-description4 {
            color: rgb(0, 0, 0);
            font-size: 1.5rem;
            max-width: 800px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .limited-company-ltd-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .limited-company-ltd-icon37 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .limited-company-ltd-icon39 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .limited-company-ltd-link4 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
            background-color: #ffff00;
          }
          @media (max-width: 1600px) {
            .limited-company-ltd-text {
              color: var(--dl-color-gray-black);
            }
            .limited-company-ltd-image {
              box-shadow: 5px 5px 10px 0px #000000;
              margin-right: 0px;
            }
            .limited-company-ltd-feature-card {
              border-color: var(--dl-color-gray-black);
            }
            .limited-company-ltd-features {
              margin-top: var(--dl-space-space-sixunits);
              margin-bottom: var(--dl-space-space-sixunits);
            }
            .limited-company-ltd-text10 {
              font-style: normal;
              font-weight: 400;
            }
            .limited-company-ltd-container07 {
              margin-top: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text11 {
              font-style: normal;
              font-weight: 200;
            }
            .limited-company-ltd-text15 {
              font-family: Josefin Sans;
            }
            .limited-company-ltd-text16 {
              font-family: Josefin Sans;
            }
            .limited-company-ltd-container12 {
              height: 30vh;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .limited-company-ltd-text17 {
              padding: var(--dl-space-space-oneandhalfunits);
              font-style: normal;
              font-weight: 200;
            }
            .limited-company-ltd-text18 {
              color: var(--dl-color-gray-black);
            }
            .limited-company-ltd-text22 {
              color: var(--dl-color-gray-500);
              font-size: 1.5rem;
            }
            .limited-company-ltd-text24 {
              color: var(--dl-color-gray-500);
              font-size: 1.5rem;
            }
            .limited-company-ltd-text26 {
              color: var(--dl-color-gray-500);
              font-size: 1.5rem;
            }
            .limited-company-ltd-text30 {
              color: var(--dl-color-gray-500);
              font-size: 1.5rem;
            }
            .limited-company-ltd-text33 {
              color: var(--dl-color-gray-black);
            }
            .limited-company-ltd-header3 {
              color: rgb(0, 0, 0);
            }
            .limited-company-ltd-description2 {
              color: rgb(0, 0, 0);
            }
            .limited-company-ltd-description4 {
              color: rgb(0, 0, 0);
            }
            .limited-company-ltd-link4 {
              color: var(--dl-color-gray-black);
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 1200px) {
            .limited-company-ltd-container04 {
              width: 40%;
            }
            .limited-company-ltd-image {
              width: 90%;
              margin-right: 0px;
            }
            .limited-company-ltd-features {
              flex-direction: column;
            }
            .limited-company-ltd-container07 {
              width: 60%;
            }
            .limited-company-ltd-steps {
              width: 90%;
              margin-top: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text18 {
              width: 75%;
            }
            .limited-company-ltd-container13 {
              flex-direction: row;
            }
            .limited-company-ltd-container26 {
              width: 80%;
            }
            .limited-company-ltd-description1 {
              color: rgb(0, 0, 0);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 27px;
            }
          }
          @media (max-width: 991px) {
            .limited-company-ltd-container01 {
              height: 75vh;
            }
            .limited-company-ltd-container02 {
              width: 80%;
              height: 80%;
            }
            .limited-company-ltd-text {
              text-align: center;
            }
            .limited-company-ltd-text04 {
              text-align: left;
            }
            .limited-company-ltd-container04 {
              display: none;
            }
            .limited-company-ltd-image {
              width: 100%;
              display: none;
            }
            .limited-company-ltd-feature-card {
              width: 40%;
            }
            .limited-company-ltd-feature-card1 {
              width: 40%;
            }
            .limited-company-ltd-features {
              height: auto;
            }
            .limited-company-ltd-container07 {
              width: 70%;
            }
            .limited-company-ltd-steps {
              width: 90%;
            }
            .limited-company-ltd-text18 {
              width: 80%;
              text-align: center;
            }
            .limited-company-ltd-container13 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .limited-company-ltd-step {
              width: 50%;
            }
            .limited-company-ltd-step1 {
              width: 50%;
            }
            .limited-company-ltd-step2 {
              width: 50%;
            }
            .limited-company-ltd-text26 {
              font-size: 1.2rem;
            }
            .limited-company-ltd-step3 {
              width: 50%;
            }
            .limited-company-ltd-text30 {
              font-size: 1.2rem;
            }
            .limited-company-ltd-container26 {
              width: 90%;
            }
            .limited-company-ltd-element {
              border-top-width: 1px;
            }
            .limited-company-ltd-content1 {
              gap: var(--dl-space-space-halfunit);
            }
            .limited-company-ltd-header1 {
              font-size: 16px;
            }
            .limited-company-ltd-description {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-content2 {
              gap: var(--dl-space-space-halfunit);
            }
            .limited-company-ltd-header2 {
              font-size: 16px;
            }
            .limited-company-ltd-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-content3 {
              gap: var(--dl-space-space-halfunit);
            }
            .limited-company-ltd-header3 {
              font-size: 16px;
            }
            .limited-company-ltd-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-content4 {
              gap: var(--dl-space-space-halfunit);
            }
            .limited-company-ltd-header4 {
              font-size: 16px;
            }
            .limited-company-ltd-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-content5 {
              gap: var(--dl-space-space-halfunit);
            }
            .limited-company-ltd-header5 {
              font-size: 16px;
            }
            .limited-company-ltd-description4 {
              font-size: 14px;
              line-height: 21px;
            }
          }
          @media (max-width: 767px) {
            .limited-company-ltd-container02 {
              width: 100%;
            }
            .limited-company-ltd-container03 {
              align-self: center;
            }
            .limited-company-ltd-text {
              align-self: center;
            }
            .limited-company-ltd-text04 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .limited-company-ltd-image {
              width: 100%;
            }
            .limited-company-ltd-container05 {
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .limited-company-ltd-text05 {
              width: auto;
            }
            .limited-company-ltd-feature-card {
              width: 50%;
            }
            .limited-company-ltd-feature-card1 {
              width: 50%;
            }
            .limited-company-ltd-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-container07 {
              width: 80%;
              grid-template-columns: 1fr;
            }
            .limited-company-ltd-feature-card2 {
              flex-direction: row;
            }
            .limited-company-ltd-container08 {
              flex-direction: column;
            }
            .limited-company-ltd-feature-card3 {
              flex-direction: row;
            }
            .limited-company-ltd-container09 {
              flex-direction: column;
            }
            .limited-company-ltd-feature-card4 {
              flex-direction: row;
            }
            .limited-company-ltd-container10 {
              flex-direction: column;
            }
            .limited-company-ltd-feature-card5 {
              flex-direction: row;
            }
            .limited-company-ltd-container11 {
              flex-direction: column;
            }
            .limited-company-ltd-steps {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text18 {
              width: 100%;
            }
            .limited-company-ltd-container13 {
              align-items: flex-start;
              padding-left: 0px;
              flex-direction: column;
            }
            .limited-company-ltd-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .limited-company-ltd-container14 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .limited-company-ltd-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .limited-company-ltd-container16 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .limited-company-ltd-text21 {
              margin-top: var(--dl-space-space-twounits);
              text-align: left;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .limited-company-ltd-text22 {
              text-align: left;
            }
            .limited-company-ltd-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .limited-company-ltd-container17 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .limited-company-ltd-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .limited-company-ltd-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .limited-company-ltd-container19 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .limited-company-ltd-text23 {
              margin-top: var(--dl-space-space-twounits);
              text-align: left;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .limited-company-ltd-text24 {
              text-align: left;
            }
            .limited-company-ltd-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .limited-company-ltd-container20 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .limited-company-ltd-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .limited-company-ltd-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .limited-company-ltd-container22 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .limited-company-ltd-text25 {
              margin-top: var(--dl-space-space-twounits);
              text-align: left;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .limited-company-ltd-text26 {
              text-align: left;
            }
            .limited-company-ltd-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .limited-company-ltd-container23 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .limited-company-ltd-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .limited-company-ltd-line7 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .limited-company-ltd-container25 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .limited-company-ltd-text29 {
              margin-top: var(--dl-space-space-twounits);
              text-align: left;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .limited-company-ltd-text30 {
              text-align: left;
            }
            .limited-company-ltd-banner {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text33 {
              width: 100%;
            }
            .limited-company-ltd-container26 {
              width: 100%;
            }
            .limited-company-ltd-faq {
              width: 90%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .limited-company-ltd-content {
              gap: var(--dl-space-space-threeunits);
            }
            .limited-company-ltd-heading {
              gap: var(--dl-space-space-unit);
            }
            .limited-company-ltd-header {
              padding: var(--dl-space-space-unit);
              font-size: 2.5rem;
              line-height: 31px;
            }
            .limited-company-ltd-element1 {
              align-items: flex-start;
            }
            .limited-company-ltd-element2 {
              align-items: flex-start;
            }
            .limited-company-ltd-element3 {
              align-items: flex-start;
            }
            .limited-company-ltd-element4 {
              align-items: flex-start;
            }
          }
          @media (max-width: 479px) {
            .limited-company-ltd-container02 {
              height: 100%;
            }
            .limited-company-ltd-container03 {
              width: 100%;
            }
            .limited-company-ltd-text {
              width: 90%;
              max-width: auto;
              text-align: center;
            }
            .limited-company-ltd-text04 {
              width: 90%;
              align-self: center;
            }
            .limited-company-ltd-container05 {
              height: auto;
              margin-bottom: var(--dl-space-space-unit);
            }
            .limited-company-ltd-text05 {
              text-align: center;
            }
            .limited-company-ltd-container06 {
              height: 75vh;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .limited-company-ltd-feature-card {
              width: 100%;
              height: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text06 {
              color: var(--dl-color-gray-white);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .limited-company-ltd-feature-card1 {
              width: 100%;
              height: 100%;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .limited-company-ltd-features {
              margin-top: var(--dl-space-space-sixunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-container07 {
              width: 90%;
            }
            .limited-company-ltd-container08 {
              flex-direction: column;
            }
            .limited-company-ltd-container09 {
              flex-direction: column;
            }
            .limited-company-ltd-container10 {
              flex-direction: column;
            }
            .limited-company-ltd-container11 {
              flex-direction: column;
            }
            .limited-company-ltd-steps {
              width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-container13 {
              padding-left: 0px;
            }
            .limited-company-ltd-container14 {
              width: auto;
            }
            .limited-company-ltd-container16 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text21 {
              text-align: left;
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-container19 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text23 {
              text-align: left;
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text24 {
              color: var(--dl-color-gray-500);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .limited-company-ltd-container22 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text25 {
              text-align: left;
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-container25 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text29 {
              text-align: left;
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text30 {
              color: var(--dl-color-gray-500);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .limited-company-ltd-banner {
              width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .limited-company-ltd-text33 {
              width: 100%;
              text-align: center;
            }
            .limited-company-ltd-container26 {
              width: 100%;
            }
            .limited-company-ltd-header {
              padding: var(--dl-space-space-unit);
              font-size: 2.5rem;
            }
            .limited-company-ltd-header1 {
              font-size: 16px;
            }
            .limited-company-ltd-description {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-header2 {
              font-size: 16px;
            }
            .limited-company-ltd-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-header3 {
              font-size: 16px;
            }
            .limited-company-ltd-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-header4 {
              font-size: 16px;
            }
            .limited-company-ltd-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .limited-company-ltd-header5 {
              font-size: 16px;
            }
            .limited-company-ltd-description4 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default LimitedCompanyLtd
