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
          <title>Work-Permit - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Work-Permit - Danneskiold &amp; Associates | Law Firm "
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e7f4ee4-0cee-4fac-a5b5-9bf26476dc3e/5631a551-dd96-44ef-935a-e149f868456e?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="work-permit-container01">
          <div className="work-permit-container02">
            <img
              alt="Women Holding a work permit"
              src="/workpermit-1500w.jpeg"
              loading="eager"
              className="work-permit-image"
            />
          </div>
          <div className="work-permit-container03">
            <div className="work-permit-container04">
              <h1 className="work-permit-text">
                <span>
                  Work
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="work-permit-text02">Permit</span>
              </h1>
              <span className="work-permit-text03">
                <span>
                  Every foreigner who is employed in the Kingdom of Thailand
                  must acquire a work permit from the ministry of labor, and
                  companies that employ foreigners must meet certain capital and
                  ratio requirements, and offer a minimum salary dependant upon
                  the foreigners nationality. 
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="work-permit-container05">
          <div className="work-permit-header">
            <div className="work-permit-heading">
              <h2 className="work-permit-text06">
                Where do I get my work permit?
              </h2>
              <span className="work-permit-text07">
                A work permit can be ascertained in Bangkok at the Office of
                Foreign Workers Administration, Department of Employment,
                Ministry of Labor, or if one is outside of Bangkok, at the
                Provincial Employment Office in the province that the enterprise
                is located. 
              </span>
            </div>
          </div>
        </div>
        <div className="work-permit-container06">
          <h1 className="work-permit-text08">
            <span>
              For
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="work-permit-text10">Companies</span>
          </h1>
        </div>
        <h1 className="work-permit-text11">
          Companies need to meet certain requirements before they can hire
          foreigners.
        </h1>
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
        <div className="work-permit-container07">
          <h1 className="work-permit-text12">Prohibited Work</h1>
          <span className="work-permit-text13">
            No foreigner shall be employed in any of the following:
          </span>
          <ul className="work-permit-ul list">
            <li className="list-item">
              <span className="work-permit-text14">Manual labor</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text15">
                Work in agriculture, animal husbandry, forestry or fishery,
                except for specialized work in each particular branch or farm
                supervision
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text16">
                Brickwork, carpentry or other construction works
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text17">Wood carving</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text18">
                Driving mechanically propelled carried or driving
                non-mechanically-propelled vehicle, excluding international
                aircraft piloting
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text19">Shop attendance</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text20">Auction</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text21">
                Controlling, auditing or providing accounting services, except
                for internal auditing on occasions
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text22">
                Cutting or polishing of gemstones or diamonds
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text23">
                Hair-cutting, hairdressing or beauty salon
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text24">Hand weaving</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text25">
                Weaving of mate or making products from reeds, rattan, hemp,
                straw or bamboo pellicle
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text26">
                Mulberry paper making by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text27">Lacquer ware making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text28">
                Thai musical instrument making
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text29">Niello ware making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text30">
                Products from gold, silver or copper alloy making
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text31">Bronze ware making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text32">Thai dolls making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text33">
                Mattress or quilt blanket making
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text34">Alms bowls casting</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text35">
                Making products from silk by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text36">Buddha statue making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text37">Knife making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text38">
                Umbrella making with paper or cloth
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text39">Shoe making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text40">Hat making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text41">
                Brokerage or agency excluding brokerage or agency in
                international trade business
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text42">
                Engineering work in civil engineering branch concerning
                designing and calculation, organization, research, planning,
                testing, construction supervision or advising excluding
                specialized work
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text43">
                Architectural work concerning designing, drawing of plan,
                estimating, construction directing or advising
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text44">Costume making</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text45">
                Sculpting or making pottery
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text46">
                Cigarette making by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text47">
                Guide or conducting sightseeing tours
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text48">Street vending</span>
            </li>
            <li className="list-item">
              <span className="work-permit-text49">
                Thai alphabet typography by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text50">
                Drawing and twisting silk-thread by hand
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text51">
                Office or secretarial work
              </span>
            </li>
            <li className="list-item">
              <span className="work-permit-text52">
                Legal or lawsuit services
              </span>
            </li>
          </ul>
        </div>
        <div className="work-permit-banner">
          <h1 className="work-permit-text53">
            Minimum Income for Foreigners in Thailand
          </h1>
          <div className="work-permit-container08">
            <div className="work-permit-container09">
              <span className="work-permit-text54">Country of Nationality</span>
            </div>
            <div className="work-permit-container10">
              <span className="work-permit-text55">Salary</span>
            </div>
            <div className="work-permit-container11">
              <span className="work-permit-text56">
                Western European Countries (except Russia), Australia, Canada,
                Japan, and the United States of America
              </span>
            </div>
            <div className="work-permit-container12">
              <span className="work-permit-text57">50,000/month</span>
            </div>
            <div className="work-permit-container13">
              <span className="work-permit-text58">
                Hong Kong, South Korea, Singapore and Taiwan
              </span>
            </div>
            <div className="work-permit-container14">
              <span className="work-permit-text59">45,000/month</span>
            </div>
            <div className="work-permit-container15">
              <span className="work-permit-text60">
                Asian Countries (except Japan, Hong Kong, South Korea,
                Singapore, Taiwan, Cambodia, Laos, Myanmar, and Vietnam), South
                America, Eastern European Countries, Central American Countries,
                Mexico, Russia and South Africa
              </span>
            </div>
            <div className="work-permit-container16">
              <span className="work-permit-text61">35,000/month</span>
            </div>
            <div className="work-permit-container17">
              <span className="work-permit-text62">
                African Countries (except South Africa), Cambodia, Myanmar, Laos
                and Vietnam
              </span>
            </div>
            <div className="work-permit-container18">
              <span className="work-permit-text63">25,000/month</span>
            </div>
          </div>
        </div>
        <div className="work-permit-features">
          <h1 className="work-permit-text64">Individual Qualifications</h1>
          <div className="work-permit-container19">
            <div className="work-permit-feature-card">
              <svg viewBox="0 0 1024 1024" className="work-permit-icon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="work-permit-container20">
                <h2 className="work-permit-text65">
                  Having knowledge and ability to work as requested for a Work
                  Permit.
                </h2>
              </div>
            </div>
            <div className="work-permit-feature-card1">
              <svg viewBox="0 0 1024 1024" className="work-permit-icon2">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="work-permit-container21">
                <h2 className="work-permit-text66">
                  Not be insane or have a mental disorder, or be a person who is
                  sick with leprosy. Tuberculosis, Elephantiasis, Drug
                  Addiction, Alcoholism or third stage of Syphilis.
                </h2>
              </div>
            </div>
            <div className="work-permit-feature-card2">
              <svg viewBox="0 0 1024 1024" className="work-permit-icon4">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="work-permit-container22">
                <h2 className="work-permit-text67">
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
            background-color: var(--dl-color-theme-neutral-light);
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
            margin-right: 0px;
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
            font-size: 2rem;
            max-width: auto;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .work-permit-text02 {
            color: var(--dl-color-theme-neutral-dark);
            background-color: var(--dl-color-theme-color2);
          }
          .work-permit-text03 {
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
            background-color: var(--dl-color-theme-color1);
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
            flex-direction: column;
          }
          .work-permit-text06 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            font-size: 2rem;
            max-width: auto;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 56px;
          }
          .work-permit-text07 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            width: 100%;
            font-size: 1.5rem;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
            line-height: 27px;
          }
          .work-permit-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            justify-content: center;
          }
          .work-permit-text08 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .work-permit-text10 {
            background-color: var(--dl-color-theme-color3);
          }
          .work-permit-text11 {
            width: 30%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
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
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .work-permit-text12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            opacity: 0.9;
            padding: var(--dl-space-space-unit);
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            background-color: #1b1b1b;
          }
          .work-permit-text13 {
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
          .work-permit-text49 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text50 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text51 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-text52 {
            font-size: 1.5rem;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .work-permit-banner {
            width: 75%;
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
          .work-permit-text53 {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: capitalize;
          }
          .work-permit-container08 {
            width: 80%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 2fr 1fr;
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
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .work-permit-text54 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
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
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .work-permit-text55 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
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
          .work-permit-text56 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-text57 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-text58 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-text59 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-text60 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-text61 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-text62 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .work-permit-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .work-permit-text63 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
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
          .work-permit-text64 {
            color: var(--dl-color-gray-black);
            width: 80%;
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .work-permit-container19 {
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
          .work-permit-container20 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-text65 {
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
          .work-permit-container21 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-text66 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
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
          .work-permit-container22 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-permit-text67 {
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .work-permit-link {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
            background-color: var(--dl-color-theme-color5);
          }
          @media (max-width: 1600px) {
            .work-permit-container01 {
              height: 100vh;
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .work-permit-image {
              margin-right: 0px;
            }
            .work-permit-text {
              color: var(--dl-color-gray-black);
            }
            .work-permit-banner {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .work-permit-text53 {
              color: var(--dl-color-gray-black);
            }
            .work-permit-features {
              height: auto;
            }
            .work-permit-text64 {
              color: var(--dl-color-gray-black);
            }
            .work-permit-text65 {
              font-size: 1.5rem;
            }
            .work-permit-text66 {
              font-size: 1.5rem;
            }
            .work-permit-text67 {
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .work-permit-link {
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
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .work-permit-container02 {
              width: 40%;
              height: 100%;
              flex-direction: column;
            }
            .work-permit-image {
              width: 100%;
            }
            .work-permit-container03 {
              width: 50%;
              margin-left: var(--dl-space-space-threeunits);
            }
            .work-permit-container04 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .work-permit-text11 {
              width: auto;
            }
            .work-permit-stats {
              height: auto;
            }
            .work-permit-ul {
              width: 75%;
            }
            .work-permit-banner {
              height: 70vh;
            }
            .work-permit-container08 {
              width: 90%;
            }
            .work-permit-container19 {
              width: 90%;
            }
            .work-permit-text65 {
              margin-bottom: 0px;
            }
            .work-permit-text66 {
              font-size: 1.5rem;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 991px) {
            .work-permit-image {
              width: 100%;
            }
            .work-permit-container03 {
              width: 50%;
              height: 80%;
            }
            .work-permit-heading {
              width: 100%;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .work-permit-text07 {
              width: 75%;
              align-self: center;
            }
            .work-permit-text11 {
              width: 75%;
            }
            .work-permit-stats {
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .work-permit-stat {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
              border-right-width: 0px;
            }
            .work-permit-stat1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .work-permit-stat2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .work-permit-banner {
              height: 75vh;
              min-height: auto;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0px;
              padding-right: 0px;
            }
            .work-permit-container08 {
              width: 90%;
            }
            .work-permit-container19 {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .work-permit-container01 {
              flex-direction: row;
            }
            .work-permit-container02 {
              width: 40%;
            }
            .work-permit-image {
              width: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-twounits);
              margin-right: 0px;
            }
            .work-permit-container03 {
              width: 50%;
              height: auto;
              margin-top: var(--dl-space-space-threeunits);
            }
            .work-permit-container04 {
              width: auto;
              height: 100%;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
            }
            .work-permit-text03 {
              width: 100%;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .work-permit-header {
              gap: var(--dl-space-space-unit);
            }
            .work-permit-heading {
              margin-top: var(--dl-space-space-fiveunits);
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .work-permit-text13 {
              width: 75%;
            }
            .work-permit-banner {
              width: 100%;
              height: 75vh;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .work-permit-text53 {
              width: 80%;
            }
            .work-permit-container08 {
              width: 100%;
            }
            .work-permit-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .work-permit-text64 {
              width: 75%;
            }
            .work-permit-container19 {
              width: 75%;
              grid-template-columns: 1fr;
            }
            .work-permit-feature-card {
              flex-direction: row;
            }
            .work-permit-container20 {
              flex-direction: column;
            }
            .work-permit-feature-card1 {
              flex-direction: row;
            }
            .work-permit-container21 {
              flex-direction: column;
            }
            .work-permit-feature-card2 {
              flex-direction: row;
            }
            .work-permit-container22 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .work-permit-container01 {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .work-permit-container02 {
              width: 100%;
              display: none;
            }
            .work-permit-image {
              width: 40%;
              height: auto;
            }
            .work-permit-container03 {
              width: 100%;
              height: auto;
              margin-left: 0px;
            }
            .work-permit-container04 {
              width: 100%;
              height: auto;
            }
            .work-permit-text {
              width: 90%;
              max-width: auto;
              align-self: center;
            }
            .work-permit-text03 {
              width: 90%;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .work-permit-container05 {
              height: auto;
            }
            .work-permit-text06 {
              width: 90%;
              align-self: center;
            }
            .work-permit-text07 {
              width: 90%;
              max-width: auto;
              align-self: center;
            }
            .work-permit-text13 {
              width: 75%;
            }
            .work-permit-banner {
              width: 100%;
              height: auto;
              padding-top: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .work-permit-text53 {
              width: 75%;
              margin-bottom: 0px;
            }
            .work-permit-container08 {
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
            .work-permit-text64 {
              width: 100%;
            }
            .work-permit-container19 {
              width: 100%;
            }
            .work-permit-container20 {
              flex-direction: column;
            }
            .work-permit-container21 {
              flex-direction: column;
            }
            .work-permit-container22 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default WorkPermit
