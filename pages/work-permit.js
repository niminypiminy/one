import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const WorkPermit = (props) => {
  return (
    <>
      <div className="work-permit-container">
        <Head>
          <title>Work-Permit - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Work-Permit - Danneskiold &amp; Associates"
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
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="work-permit-container01">
          <div className="work-permit-container02">
            <img
              alt="image"
              src="/work%20permit-600w.jpg"
              loading="eager"
              className="work-permit-image"
            />
          </div>
          <div className="work-permit-container03">
            <div className="work-permit-container04">
              <h1 className="work-permit-text">Work Permit</h1>
              <span className="work-permit-text01">
                <span>
                  A work permit can be ascertained in Bangkok at the Office of
                  Foreign Workers Administration, Department of Employment,
                  Ministry of Labor, or if one is outside of Bangkok, at the
                  Provincial Employment Office in the province that the
                  enterprise is located. 
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="work-permit-container05">
          <div className="work-permit-header">
            <div className="work-permit-heading">
              <h2 className="work-permit-text04">
                <span>Who needs a work permit</span>
                <span>?</span>
              </h2>
              <span className="work-permit-text07">
                Every foreigner who is employed in the Kingdom of Thailand must
                acquire a work permit from the ministry of labor, and companies
                that employ foreigners must meet certain capital and ratio
                requirements, and offer a minimum salary dependant upon the
                foreigners nationality. 
              </span>
            </div>
          </div>
        </div>
        <div className="work-permit-stats">
          <div className="work-permit-stat">
            <span className="work-permit-caption">4:1 Ratio</span>
            <span className="work-permit-description">
              Companies are required to employ four Thai&apos;s for every
              foreigner. Without meeting this requirement, the application for a
              work permit will be rejected.
            </span>
          </div>
          <div className="work-permit-stat1">
            <span className="work-permit-caption1">
              2-3M Registered Capital
            </span>
            <span className="work-permit-description1">
              The Ministry of Labor will require proof of registered capital not
              less than 2M for a Thai owned company, and 3M for a foreign
              majority-owned company.
            </span>
          </div>
          <div className="work-permit-stat2">
            <span className="work-permit-caption2">Non-Immigrant-B </span>
            <span className="work-permit-description2">
              The foreigner will need to acquire a Non-Immigrant-B visa from an
              embassy abroad, then enter Thailand on the Non-Immigrant-B Visa
              before applying.
            </span>
          </div>
        </div>
        <div className="work-permit-container06">
          <h1 className="work-permit-text08">Prohibited Work</h1>
          <span className="work-permit-text09">
            No foreigner shall be employed in any of the following:
          </span>
          <ul className="work-permit-ul list">
            <li className="list-item">
              <span className="work-permit-text10">Manual labor</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text11">
                Work in agriculture, animal husbandry, forestry or fishery,
                except for specialized work in each particular branch or farm
                supervision
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text12">
                Brickwork, carpentry or other construction works
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text13">Wood carving</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text14">
                Driving mechanically propelled carried or driving
                non-mechanically-propelled vehicle, excluding international
                aircraft piloting
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text15">Shop attendance</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text16">Auction</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text17">
                Controlling, auditing or providing accounting services, except
                for internal auditing on occasions
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text18">
                Cutting or polishing of gemstones or diamonds
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text19">
                Hair-cutting, hairdressing or beauty salon
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text20">Hand weaving</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text21">
                Weaving of mate or making products from reeds, rattan, hemp,
                straw or bamboo pellicle
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text22">
                Mulberry paper making by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text23">Lacquer ware making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text24">
                Thai musical instrument making
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text25">Niello ware making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text26">
                Products from gold, silver or copper alloy making
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text27">Bronze ware making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text28">Thai dolls making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text29">
                Mattress or quilt blanket making
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text30">Alms bowls casting</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text31">
                Making products from silk by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text32">Buddha statue making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text33">Knife making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text34">
                Umbrella making with paper or cloth
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text35">Shoe making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text36">Hat making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text37">
                Brokerage or agency excluding brokerage or agency in
                international trade business
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text38">
                Engineering work in civil engineering branch concerning
                designing and calculation, organization, research, planning,
                testing, construction supervision or advising excluding
                specialized work
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text39">
                Architectural work concerning designing, drawing of plan,
                estimating, construction directing or advising
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text40">Costume making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text41">
                Sculpting or making pottery
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text42">
                Cigarette making by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text43">
                Guide or conducting sightseeing tours
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text44">Street vending</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text45">
                Thai alphabet typography by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text46">
                Drawing and twisting silk-thread by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text47">
                Office or secretarial work
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text48">
                Legal or lawsuit services
              </span>
            </li>
          </ul>
        </div>
        <div className="work-permit-banner">
          <h1 className="work-permit-text49">
            Minimum Income for Foreigners in Thailand
          </h1>
          <div className="work-permit-container07">
            <div className="work-permit-container08">
              <span className="work-permit-text50">Country of Nationality</span>
            </div>
            <div className="work-permit-container09">
              <span className="work-permit-text51">Salary</span>
            </div>
            <div className="work-permit-container10">
              <span className="work-permit-text52">
                Western European Countries (except Russia), Australia, Canada,
                Japan, and the United States of America
              </span>
            </div>
            <div className="work-permit-container11">
              <span className="work-permit-text53">50,000/month</span>
            </div>
            <div className="work-permit-container12">
              <span className="work-permit-text54">
                Hong Kong, South Korea, Singapore and Taiwan
              </span>
            </div>
            <div className="work-permit-container13">
              <span className="work-permit-text55">45,000/month</span>
            </div>
            <div className="work-permit-container14">
              <span className="work-permit-text56">
                Asian Countries (except Japan, Hong Kong, South Korea,
                Singapore, Taiwan, Cambodia, Laos, Myanmar, and Vietnam), South
                America, Eastern European Countries, Central American Countries,
                Mexico, Russia and South Africa
              </span>
            </div>
            <div className="work-permit-container15">
              <span className="work-permit-text57">35,000/month</span>
            </div>
            <div className="work-permit-container16">
              <span className="work-permit-text58">
                African Countries (except South Africa), Cambodia, Myanmar, Laos
                and Vietnam
              </span>
            </div>
            <div className="work-permit-container17">
              <span className="work-permit-text59">25,000/month</span>
            </div>
          </div>
        </div>
        <div className="work-permit-features">
          <h1 className="work-permit-text60"> (Qualifications)</h1>
          <div className="work-permit-container18">
            <div className="work-permit-feature-card">
              <svg viewBox="0 0 1024 1024" className="work-permit-icon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="work-permit-container19">
                <h2 className="work-permit-text61">
                  Having knowledge and ability to work as requested for a Work
                  Permit.
                </h2>
              </div>
            </div>
            <div className="work-permit-feature-card1">
              <svg viewBox="0 0 1024 1024" className="work-permit-icon2">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="work-permit-container20">
                <h2 className="work-permit-text62">
                  Not be insane or mental disorder, a person who is sick with
                  leprosy. Tuberculosis, Elephantiasis, Drug Addiction,
                  Alcoholism and third stage of Syphilis.
                </h2>
              </div>
            </div>
            <div className="work-permit-feature-card2">
              <svg viewBox="0 0 1024 1024" className="work-permit-icon4">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="work-permit-container21">
                <h2 className="work-permit-text63">
                  Never having been imprisoned for an offense under the
                  Immigration Law or the Working of Foreign Law at least one
                  year prior to the date of application for permit.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Link href="/contact">
          <a className="work-permit-link">Ask us anything.</a>
        </Link>
        <Footer1 rootClassName="footer1-root-class-name18"></Footer1>
      </div>
      <style jsx>
        {`
          .work-permit-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .work-permit-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .work-permit-container02 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .work-permit-image {
            width: 80%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #000000;
            object-fit: cover;
            transition: 0.3s;
            margin-right: 0px;
          }
          .work-permit-image:hover {
            transform: scale(1.2);
          }
          .work-permit-container03 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .work-permit-container04 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .work-permit-text {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .work-permit-text01 {
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 1.15em;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .work-permit-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .work-permit-header {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-text04 {
            width: 100%;
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 56px;
          }
          .work-permit-text07 {
            width: 100%;
            font-size: 1.5rem;
            max-width: 600px;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .work-permit-stats {
            width: 100%;
            height: 50vh;
            display: flex;
            z-index: 10;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
          }
          .work-permit-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 30vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .work-permit-stat:hover {
            transform: scale(1.2);
          }
          .work-permit-caption {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 56px;
          }
          .work-permit-description {
            width: 100%;
            font-size: 1.5rem;
            max-width: 350px;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .work-permit-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 30vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .work-permit-stat1:hover {
            transform: scale(1.2);
          }
          .work-permit-caption1 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 56px;
          }
          .work-permit-description1 {
            width: 100%;
            font-size: 1.5rem;
            max-width: 350px;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .work-permit-stat2 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 30vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .work-permit-stat2:hover {
            transform: scale(1.2);
          }
          .work-permit-caption2 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 56px;
          }
          .work-permit-description2 {
            width: 100%;
            font-size: 1.5rem;
            max-width: 350px;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .work-permit-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .work-permit-text08 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-unit);
            font-size: 2rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
            background-color: var(--dl-color-gray-black);
          }
          .work-permit-text09 {
            width: 50%;
            font-size: 1.5rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-ul {
            width: 50%;
            margin-top: var(--dl-space-space-threeunits);
            list-style-type: decimal;
          }
          .work-permit-text10 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text11 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text12 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text13 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text14 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text15 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text16 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text17 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text18 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text19 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text20 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text21 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text22 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text23 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text24 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text25 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text26 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text27 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text28 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text29 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text30 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text31 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text32 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text33 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text34 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text35 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text36 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text37 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text38 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text39 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text40 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text41 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text42 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text43 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text44 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text45 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text46 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text47 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text48 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-banner {
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .work-permit-text49 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .work-permit-container07 {
            width: 80%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 2fr 1fr;
          }
          .work-permit-container08 {
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
          .work-permit-text50 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .work-permit-container09 {
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
          .work-permit-text51 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .work-permit-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text52 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text53 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text54 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text55 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text56 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text57 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text58 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text59 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-features {
            width: 100%;
            height: 75vh;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .work-permit-text60 {
            color: var(--dl-color-gray-black);
            width: 80%;
            font-size: 2.5rem;
            font-style: normal;
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .work-permit-container18 {
            width: 75%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .work-permit-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .work-permit-icon {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .work-permit-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-text61 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
          }
          .work-permit-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .work-permit-icon2 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .work-permit-container20 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-text62 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
          }
          .work-permit-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .work-permit-icon4 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .work-permit-container21 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-text63 {
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .work-permit-link {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: Josefin Sans;
            font-weight: 200;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
            background-color: #ffff00;
          }
          @media (max-width: 1600px) {
            .work-permit-container01 {
              height: 100vh;
            }
            .work-permit-image {
              margin-right: 0px;
            }
            .work-permit-text {
              color: var(--dl-color-gray-black);
            }
            .work-permit-text01 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .work-permit-text04 {
              font-size: 2.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 56px;
            }
            .work-permit-caption2 {
              line-height: 56px;
            }
            .work-permit-description2 {
              font-size: 1.5rem;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 27px;
            }
            .work-permit-text08 {
              font-size: 2.5rem;
            }
            .work-permit-banner {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .work-permit-text49 {
              color: var(--dl-color-gray-black);
              font-size: 2.5rem;
            }
            .work-permit-features {
              height: auto;
            }
            .work-permit-text60 {
              color: var(--dl-color-gray-black);
              font-size: 2.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .work-permit-text61 {
              font-size: 1.5rem;
            }
            .work-permit-text62 {
              font-size: 1.5rem;
            }
            .work-permit-text63 {
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .work-permit-link {
              color: var(--dl-color-gray-black);
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 1200px) {
            .work-permit-container01 {
              height: 75vh;
            }
            .work-permit-container02 {
              width: 40%;
              display: none;
            }
            .work-permit-image {
              width: 90%;
              margin-right: 0px;
            }
            .work-permit-container03 {
              width: 75%;
            }
            .work-permit-container07 {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .work-permit-container01 {
              height: 75vh;
            }
            .work-permit-container02 {
              display: none;
            }
            .work-permit-image {
              width: 100%;
              display: none;
            }
            .work-permit-container03 {
              width: 80%;
              height: 80%;
            }
            .work-permit-text {
              text-align: center;
            }
            .work-permit-text01 {
              text-align: left;
            }
            .work-permit-stats {
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .work-permit-stat {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
              border-right-width: 0px;
            }
            .work-permit-caption {
              text-align: center;
              line-height: 32px;
            }
            .work-permit-stat1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .work-permit-caption1 {
              text-align: center;
              line-height: 32px;
            }
            .work-permit-stat2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .work-permit-caption2 {
              text-align: center;
              line-height: 32px;
            }
            .work-permit-banner {
              height: 75vh;
              min-height: auto;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0px;
              padding-right: 0px;
            }
            .work-permit-container07 {
              width: 90%;
            }
            .work-permit-container18 {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .work-permit-container01 {
              height: 75vh;
            }
            .work-permit-image {
              width: 100%;
            }
            .work-permit-container03 {
              width: 100%;
              height: auto;
            }
            .work-permit-container04 {
              height: 100%;
              align-self: center;
            }
            .work-permit-text {
              text-align: left;
            }
            .work-permit-text01 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
            }
            .work-permit-header {
              gap: var(--dl-space-space-unit);
            }
            .work-permit-text04 {
              font-size: 32px;
              line-height: 44px;
            }
            .work-permit-text07 {
              font-size: 16px;
              line-height: 24px;
            }
            .work-permit-caption {
              font-size: 32px;
            }
            .work-permit-description {
              font-size: 16px;
              line-height: 24px;
            }
            .work-permit-caption1 {
              font-size: 32px;
            }
            .work-permit-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .work-permit-caption2 {
              font-size: 32px;
            }
            .work-permit-description2 {
              font-size: 16px;
              line-height: 24px;
            }
            .work-permit-banner {
              width: 100%;
              height: 75vh;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .work-permit-text49 {
              width: 100%;
              text-align: center;
              text-decoration: none;
            }
            .work-permit-container07 {
              width: 100%;
            }
            .work-permit-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .work-permit-text60 {
              width: 75%;
              text-align: left;
            }
            .work-permit-container18 {
              width: 75%;
              grid-template-columns: 1fr;
            }
            .work-permit-feature-card {
              flex-direction: row;
            }
            .work-permit-container19 {
              flex-direction: column;
            }
            .work-permit-feature-card1 {
              flex-direction: row;
            }
            .work-permit-container20 {
              flex-direction: column;
            }
            .work-permit-feature-card2 {
              flex-direction: row;
            }
            .work-permit-container21 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .work-permit-container03 {
              width: 90%;
              height: auto;
            }
            .work-permit-container04 {
              width: 100%;
              height: auto;
            }
            .work-permit-text {
              width: 95%;
              max-width: auto;
              text-align: left;
            }
            .work-permit-text01 {
              width: 100%;
              font-size: 1.5rem;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              text-align: left;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 1.15em;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
            }
            .work-permit-banner {
              width: 100%;
              height: 75vh;
              padding-top: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .work-permit-text49 {
              width: 100%;
              font-style: normal;
              text-align: center;
              font-family: Josefin Sans;
              font-weight: 200;
              margin-bottom: 0px;
            }
            .work-permit-container07 {
              width: 90%;
              height: 90%;
              margin-top: var(--dl-space-space-threeunits);
            }
            .work-permit-features {
              width: 90%;
              align-self: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .work-permit-text60 {
              width: 100%;
              text-align: left;
            }
            .work-permit-container18 {
              width: 100%;
            }
            .work-permit-container19 {
              flex-direction: column;
            }
            .work-permit-container20 {
              flex-direction: column;
            }
            .work-permit-container21 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default WorkPermit
