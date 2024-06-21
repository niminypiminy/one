import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const ObtainAVisa = (props) => {
  return (
    <>
      <div className="obtain-a-visa-container">
        <Head>
          <title>Obtain-a-Visa - Danneskiold & Associates | Law Firm</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Obtain-a-Visa - Danneskiold &amp; Associates | Law Firm "
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
        <Navbar></Navbar>
        <div className="obtain-a-visa-container01">
          <div className="obtain-a-visa-column thq-section-padding">
            <div className="obtain-a-visa-content">
              <h1 className="obtain-a-visa-heading1 thq-heading-1">Visas</h1>
              <p className="obtain-a-visa-content1 thq-body-large">
                When venturing abroad for business, investment, or work,
                it&apos;s crucial to obtain the appropriate visa to avoid severe
                legal and financial consequences. In Thailand, for instance,
                entrepreneurs often make the mistake of running their businesses
                on tourist visas, which can lead to serious repercussions,
                including imprisonment, deportation, asset seizure, and
                blacklisting.
              </p>
            </div>
          </div>
          <img
            alt="Passport with wisa stamps"
            src="/obtainavisa-1500h.jpeg"
            className="obtain-a-visa-image1"
          />
        </div>
        <div className="obtain-a-visa-container02 thq-section-padding">
          <div className="obtain-a-visa-max-width thq-section-max-width">
            <div className="obtain-a-visa-container03">
              <h2 className="obtain-a-visa-title thq-heading-2">
                <span>
                  Types of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="obtain-a-visa-text01">Visas</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="obtain-a-visa-container04">
          <div className="obtain-a-visa-container05">
            <div className="obtain-a-visa-container06">
              <a href="#transitvisa" className="obtain-a-visa-link">
                <h1 className="obtain-a-visa-text02">Transit Visa</h1>
              </a>
              <span className="obtain-a-visa-text03">
                Primarily issued to individuals who are transiting through
                Thailand, or participating in a sporting event.
              </span>
            </div>
            <div className="obtain-a-visa-container07">
              <a href="#diplomaticvisa" className="obtain-a-visa-link1">
                <h1 className="obtain-a-visa-text04">Diplomatic Visa</h1>
              </a>
              <span className="obtain-a-visa-text05">
                Issued to diplomats at embassies and UN agencies visiting
                Thailand.
              </span>
            </div>
            <div className="obtain-a-visa-container08">
              <a href="#officialvisa" className="obtain-a-visa-link2">
                <h1 className="obtain-a-visa-text06">Official Visa</h1>
              </a>
              <span className="obtain-a-visa-text07">
                Issued predominately to UN officials and agents of governments
                posted in Thailand.
              </span>
            </div>
          </div>
          <div className="obtain-a-visa-container09">
            <div className="obtain-a-visa-container10">
              <a href="#courtesyvisa" className="obtain-a-visa-link3">
                <h1 className="obtain-a-visa-text08">Couresty Visa</h1>
              </a>
              <span className="obtain-a-visa-text09">
                Given to guests of the royal family, and government agencies.
              </span>
            </div>
            <div className="obtain-a-visa-container11">
              <a href="#touristvisa" className="obtain-a-visa-link4">
                <h1 className="obtain-a-visa-text10">Tourist Visa</h1>
              </a>
              <span className="obtain-a-visa-text11">
                Given to those who who seek to visit Thailand for tourism
                purposes.
              </span>
            </div>
            <div className="obtain-a-visa-container12">
              <a href="#non-immigrantvisa" className="obtain-a-visa-link5">
                <h1 className="obtain-a-visa-text12">Non-Immigrant Visa</h1>
              </a>
              <span className="obtain-a-visa-text13">
                Issued to students, investors, businessmen, missionaries, or
                pensioners.
              </span>
            </div>
          </div>
        </div>
        <div className="obtain-a-visa-container13 thq-section-padding">
          <div className="obtain-a-visa-max-width1 thq-section-max-width">
            <div className="obtain-a-visa-container14">
              <h2
                id="transitvisa"
                className="obtain-a-visa-title1 thq-heading-2"
              >
                Transit Visa
              </h2>
            </div>
          </div>
          <div className="obtain-a-visa-container15">
            <div className="obtain-a-visa-container16">
              <span className="obtain-a-visa-text14">Category</span>
            </div>
            <div className="obtain-a-visa-container17">
              <span className="obtain-a-visa-text15">Requirement</span>
            </div>
            <div className="obtain-a-visa-container18">
              <span className="obtain-a-visa-text16">TS</span>
            </div>
            <div className="obtain-a-visa-container19">
              <span className="obtain-a-visa-text17">
                For traveling and transiting
              </span>
            </div>
            <div className="obtain-a-visa-container20">
              <span className="obtain-a-visa-text18">S</span>
            </div>
            <div className="obtain-a-visa-container21">
              <span className="obtain-a-visa-text19">
                For participating in sporting activities
              </span>
            </div>
            <div className="obtain-a-visa-container22">
              <span className="obtain-a-visa-text20">C</span>
            </div>
            <div className="obtain-a-visa-container23">
              <span className="obtain-a-visa-text21">
                Captain of a boat, or flight intending to briefly dock at a port
                area in Thailand
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="obtain-a-visa-container24 thq-section-padding">
          <div className="obtain-a-visa-max-width2 thq-section-max-width">
            <div className="obtain-a-visa-container25">
              <h2
                id="touristvisa"
                className="obtain-a-visa-title2 thq-heading-2"
              >
                Tourist Visa
              </h2>
              <div className="obtain-a-visa-container26">
                <div className="obtain-a-visa-container27">
                  <span className="obtain-a-visa-text22">Category</span>
                </div>
                <div className="obtain-a-visa-container28">
                  <span className="obtain-a-visa-text23">Requirement</span>
                </div>
                <div className="obtain-a-visa-container29">
                  <span className="obtain-a-visa-text24">TR</span>
                </div>
                <div className="obtain-a-visa-container30">
                  <span className="obtain-a-visa-text25">
                    This type of visa will be issued to foreigners who wish to
                    enter Thailand for tourism purposes
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="obtain-a-visa-container31 thq-section-padding">
                <div className="obtain-a-visa-max-width3 thq-section-max-width">
                  <div className="obtain-a-visa-container32 thq-grid-2">
                    <div className="obtain-a-visa-container33">
                      <div className="obtain-a-visa-section-header">
                        <h2 className="obtain-a-visa-text26 thq-heading-2">
                          Steps for acquiring your tourist visa.
                        </h2>
                        <p className="obtain-a-visa-text27 thq-body-large">
                          Follow these steps to get your visa.
                        </p>
                        <Link href="/contact">
                          <a className="obtain-a-visa-link6">Need help?</a>
                        </Link>
                        <div className="obtain-a-visa-actions"></div>
                      </div>
                    </div>
                    <div className="obtain-a-visa-container34">
                      <div className="obtain-a-visa-container35 thq-card">
                        <h2 className="obtain-a-visa-text28 thq-heading-2">
                          Gather your documents
                        </h2>
                        <span className="obtain-a-visa-text29 thq-body-small">
                          Passport or travel document with validity not less
                          than 6 months.  2 Photos 4×6 cm, taken not less than 6
                          months. Evidence of travel from Thailand (air ticket
                          paid in full). Evidence of adequate finance (20,000
                          Baht per person and 40,000 Baht per family)
                        </span>
                        <label className="obtain-a-visa-text30 thq-heading-3">
                          01
                        </label>
                      </div>
                      <div className="obtain-a-visa-container36 thq-card">
                        <h2 className="obtain-a-visa-text31 thq-heading-2">
                          Visa Application
                        </h2>
                        <span className="obtain-a-visa-text32 thq-body-small">
                          Fill out the visa application form.
                        </span>
                        <label className="obtain-a-visa-text33 thq-heading-3">
                          02
                        </label>
                      </div>
                      <div className="obtain-a-visa-container37 thq-card">
                        <h2 className="obtain-a-visa-text34 thq-heading-2">
                          Pay the Visa fee
                        </h2>
                        <span className="obtain-a-visa-text35 thq-body-small">
                          1000 baht (single entry) or 5,000 baht (multiple
                          entry). The period of stay cannot exceeed 60 days.
                        </span>
                        <label className="obtain-a-visa-text36 thq-heading-3">
                          03
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="obtain-a-visa-container38 thq-section-padding">
          <div className="obtain-a-visa-max-width4 thq-section-max-width">
            <div className="obtain-a-visa-container39">
              <h2
                id="non-immigrantvisa"
                className="obtain-a-visa-title3 thq-heading-2"
              >
                Non-Immigrant Visa
              </h2>
            </div>
          </div>
          <span className="obtain-a-visa-text37">
            This type of visa will be issued to foreigners who wish to enter
            Thailand for the following purposes:
          </span>
          <div className="obtain-a-visa-container40">
            <div className="obtain-a-visa-container41">
              <span className="obtain-a-visa-text38">Category</span>
            </div>
            <div className="obtain-a-visa-container42">
              <span className="obtain-a-visa-text39">Requirement</span>
            </div>
            <div className="obtain-a-visa-container43">
              <span className="obtain-a-visa-text40">F</span>
            </div>
            <div className="obtain-a-visa-container44">
              <span className="obtain-a-visa-text41">
                To perform official duties
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="obtain-a-visa-container45">
              <span className="obtain-a-visa-text42">B</span>
            </div>
            <div className="obtain-a-visa-container46">
              <span className="obtain-a-visa-text43">
                To conduct business and to work
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="obtain-a-visa-container47">
              <span className="obtain-a-visa-text44">IM</span>
            </div>
            <div className="obtain-a-visa-container48">
              <span className="obtain-a-visa-text45">
                To invest with the approval of the Thai Ministries and
                Government Departments concerned
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="obtain-a-visa-container49">
              <span className="obtain-a-visa-text46">IB</span>
            </div>
            <div className="obtain-a-visa-container50">
              <span className="obtain-a-visa-text47">
                To invest or other activities under the provision of the
                established laws on investment promotion
              </span>
            </div>
            <div className="obtain-a-visa-container51">
              <span className="obtain-a-visa-text48">ED</span>
            </div>
            <div className="obtain-a-visa-container52">
              <span className="obtain-a-visa-text49">
                To study, to come on a work study tour/observation tour and
                training
              </span>
            </div>
            <div className="obtain-a-visa-container53">
              <span className="obtain-a-visa-text50">M</span>
            </div>
            <div className="obtain-a-visa-container54">
              <span className="obtain-a-visa-text51">
                To perform media duties
              </span>
            </div>
            <div className="obtain-a-visa-container55">
              <span className="obtain-a-visa-text52">R</span>
            </div>
            <div className="obtain-a-visa-container56">
              <span className="obtain-a-visa-text53">
                To perform missionary work or other religious activities with
                the approval of the Department of Religious Affairs, Ministry of
                Education
              </span>
            </div>
            <div className="obtain-a-visa-container57">
              <span className="obtain-a-visa-text54">RS</span>
            </div>
            <div className="obtain-a-visa-container58">
              <span className="obtain-a-visa-text55">
                To conduct scientific research or training or teaching in a
                research institute or educational institutions
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="obtain-a-visa-container59">
              <span className="obtain-a-visa-text56">EX</span>
            </div>
            <div className="obtain-a-visa-container60">
              <span className="obtain-a-visa-text57">
                <span>
                  To undertake skilled work or to work as an expert or
                  specialist
                </span>
                <br className="obtain-a-visa-text59"></br>
                <br></br>
              </span>
            </div>
            <div className="obtain-a-visa-container61">
              <span className="obtain-a-visa-text61">O</span>
            </div>
            <div className="obtain-a-visa-container62">
              <span className="obtain-a-visa-text62">
                <span>
                  Other activities as follows:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="obtain-a-visa-text64"></br>
                <br></br>
                <span> • to stay after retirement for the elderly</span>
                <br className="obtain-a-visa-text67"></br>
                <span>• to be a litigant or witness for legal proceedings</span>
                <br className="obtain-a-visa-text69"></br>
                <span>• to stay with the family in Thailand</span>
                <br className="obtain-a-visa-text71"></br>
                <span>
                  • to perform duties for the state enterprise or social welfare
                  organizations
                </span>
                <br className="obtain-a-visa-text73"></br>
                <span>• to receive medical treatment</span>
                <br className="obtain-a-visa-text75"></br>
                <span>
                  • to be a sport coach as required by Thai Government
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="obtain-a-visa-container63 thq-section-padding">
          <div className="obtain-a-visa-max-width5 thq-section-max-width">
            <div className="obtain-a-visa-container64">
              <h2
                id="diplomaticvisa"
                className="obtain-a-visa-title4 thq-heading-2"
              >
                Diplomatic Visa
              </h2>
            </div>
          </div>
          <div className="obtain-a-visa-container65">
            <div className="obtain-a-visa-container66">
              <span className="obtain-a-visa-text77">Category</span>
            </div>
            <div className="obtain-a-visa-container67">
              <span className="obtain-a-visa-text78">Requirement</span>
            </div>
            <div className="obtain-a-visa-container68">
              <span className="obtain-a-visa-text79">F</span>
            </div>
            <div className="obtain-a-visa-container69">
              <span className="obtain-a-visa-text80">
                Official passport / Red -UN Laissez-Passer holder visiting
                Thailand for an official duties or activities on behalf of their
                national government or international organization.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="obtain-a-visa-container70">
              <span className="obtain-a-visa-text81">D</span>
            </div>
            <div className="obtain-a-visa-container71">
              <span className="obtain-a-visa-text82">
                Official passport / Red - UN Laissez-Passer holder visiting to
                be posted in Thailand.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="obtain-a-visa-container72 thq-section-padding">
          <div className="obtain-a-visa-max-width6 thq-section-max-width">
            <div className="obtain-a-visa-container73">
              <h2
                id="officialvisa"
                className="obtain-a-visa-title5 thq-heading-2"
              >
                Official Visa
              </h2>
            </div>
          </div>
          <div className="obtain-a-visa-container74">
            <div className="obtain-a-visa-container75">
              <span className="obtain-a-visa-text83">Category</span>
            </div>
            <div className="obtain-a-visa-container76">
              <span className="obtain-a-visa-text84">Requirement</span>
            </div>
            <div className="obtain-a-visa-container77">
              <span className="obtain-a-visa-text85">F</span>
            </div>
            <div className="obtain-a-visa-container78">
              <span className="obtain-a-visa-text86">
                Official passport / blue UN Laissez-Passer holder visiting
                Thailand for official duties or be posted in Thailand.
              </span>
            </div>
          </div>
        </div>
        <div className="obtain-a-visa-container79 thq-section-padding">
          <div className="obtain-a-visa-max-width7 thq-section-max-width">
            <div className="obtain-a-visa-container80">
              <h2
                id="courtesyvisa"
                className="obtain-a-visa-title6 thq-heading-2"
              >
                Courtesy Visa
              </h2>
            </div>
          </div>
          <div className="obtain-a-visa-container81">
            <div className="obtain-a-visa-container82">
              <span className="obtain-a-visa-text87">Category</span>
            </div>
            <div className="obtain-a-visa-container83">
              <span className="obtain-a-visa-text88">Requirement</span>
            </div>
            <div className="obtain-a-visa-container84">
              <span className="obtain-a-visa-text89">1</span>
            </div>
            <div className="obtain-a-visa-container85">
              <span className="obtain-a-visa-text90">
                holders of diplomatic or official passports or a United Nations
                passport who wish to enter to Thailand on official duty and/or
                other purposes.
              </span>
            </div>
            <div className="obtain-a-visa-container86">
              <span className="obtain-a-visa-text91">2</span>
            </div>
            <div className="obtain-a-visa-container87">
              <span className="obtain-a-visa-text92">
                holders of ordinary passport who wish to enter to Thailand as a
                royal visitor, guest of the government, or government agency.
              </span>
            </div>
          </div>
        </div>
        <Link href="/contact">
          <a className="obtain-a-visa-link7">Ask us anything.</a>
        </Link>
        <Footer1></Footer1>
      </div>
      <style jsx>
        {`
          .obtain-a-visa-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .obtain-a-visa-container01 {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
          }
          .obtain-a-visa-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .obtain-a-visa-content {
            gap: 24px;
            width: 75%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .obtain-a-visa-heading1 {
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-content1 {
            width: auto;
            font-size: 1.5rem;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-image1 {
            flex: 1;
            width: 40%;
          }
          .obtain-a-visa-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            opacity: 0.9;
            padding: 0px;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: 0px;
            background-color: #1b1b1b;
          }
          .obtain-a-visa-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container03 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-title {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            padding-top: var(--dl-space-space-fourunits);
          }
          .obtain-a-visa-text01 {
            background-color: var(--dl-color-theme-color3);
          }
          .obtain-a-visa-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 75vh;
            display: flex;
            opacity: 0.9;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b1b;
          }
          .obtain-a-visa-container05 {
            flex: 0 0 auto;
            width: 75%;
            display: flex;
            justify-content: space-between;
          }
          .obtain-a-visa-container06 {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-link {
            display: contents;
          }
          .obtain-a-visa-text02 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .obtain-a-visa-text03 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-container07 {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-link1 {
            display: contents;
          }
          .obtain-a-visa-text04 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .obtain-a-visa-text05 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-container08 {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-link2 {
            display: contents;
          }
          .obtain-a-visa-text06 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .obtain-a-visa-text07 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-container09 {
            flex: 0 0 auto;
            width: 75%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            justify-content: space-between;
          }
          .obtain-a-visa-container10 {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-link3 {
            display: contents;
          }
          .obtain-a-visa-text08 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .obtain-a-visa-text09 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-container11 {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-link4 {
            display: contents;
          }
          .obtain-a-visa-text10 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .obtain-a-visa-text11 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-container12 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-link5 {
            display: contents;
          }
          .obtain-a-visa-text12 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: underline;
          }
          .obtain-a-visa-text13 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-container13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .obtain-a-visa-max-width1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container14 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-title1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            padding: var(--dl-space-space-halfunit);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container15 {
            width: 50%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 3fr;
          }
          .obtain-a-visa-container16 {
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
          .obtain-a-visa-text14 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container17 {
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
          .obtain-a-visa-text15 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text16 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text17 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text18 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text19 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container22 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text20 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text21 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container24 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
          }
          .obtain-a-visa-max-width2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container25 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-title2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            padding: var(--dl-space-space-halfunit);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            padding-bottom: 8px;
          }
          .obtain-a-visa-container26 {
            width: 50%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 3fr;
          }
          .obtain-a-visa-container27 {
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
          .obtain-a-visa-text22 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container28 {
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
          .obtain-a-visa-text23 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container29 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text24 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container30 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text25 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container31 {
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .obtain-a-visa-max-width3 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .obtain-a-visa-container32 {
            align-items: start;
          }
          .obtain-a-visa-container33 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .obtain-a-visa-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .obtain-a-visa-text26 {
            font-size: 2rem;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text27 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-link6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: auto;
            height: auto;
            padding: var(--dl-space-space-unit);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .obtain-a-visa-link6:hover {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            background-color: var(--dl-color-theme-color5);
          }
          .obtain-a-visa-actions {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .obtain-a-visa-container34 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .obtain-a-visa-container35 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-color4);
          }
          .obtain-a-visa-text28 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text29 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-text30 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 2.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .obtain-a-visa-container36 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-color3);
          }
          .obtain-a-visa-text31 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text32 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-text33 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 2.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .obtain-a-visa-container37 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-color2);
          }
          .obtain-a-visa-text34 {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text35 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-text36 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 2.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .obtain-a-visa-container38 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .obtain-a-visa-max-width4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container39 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-title3 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            padding: var(--dl-space-space-halfunit);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            padding-bottom: 8px;
          }
          .obtain-a-visa-text37 {
            width: 50%;
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .obtain-a-visa-container40 {
            width: 50%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 3fr;
          }
          .obtain-a-visa-container41 {
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
          .obtain-a-visa-text38 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container42 {
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
          .obtain-a-visa-text39 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container43 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text40 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container44 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text41 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container45 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text42 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container46 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text43 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container47 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text44 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container48 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text45 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container49 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text46 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container50 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text47 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container51 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text48 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container52 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text49 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container53 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text50 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container54 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text51 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container55 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text52 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container56 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text53 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container57 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text54 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container58 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text55 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container59 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text56 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container60 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text57 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text59 {
            font-size: 1.5rem;
          }
          .obtain-a-visa-container61 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text61 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container62 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text62 {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text64 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text67 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text69 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text71 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text73 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-text75 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container63 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .obtain-a-visa-max-width5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container64 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-title4 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            padding: var(--dl-space-space-halfunit);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container65 {
            width: 50%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 3fr;
          }
          .obtain-a-visa-container66 {
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
          .obtain-a-visa-text77 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container67 {
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
          .obtain-a-visa-text78 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container68 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text79 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container69 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text80 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container70 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text81 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container71 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text82 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container72 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .obtain-a-visa-max-width6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container73 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-title5 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            padding: var(--dl-space-space-halfunit);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            padding-bottom: 8px;
          }
          .obtain-a-visa-container74 {
            width: 50%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 3fr;
          }
          .obtain-a-visa-container75 {
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
          .obtain-a-visa-text83 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container76 {
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
          .obtain-a-visa-text84 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container77 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text85 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container78 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text86 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container79 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .obtain-a-visa-max-width7 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-container80 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .obtain-a-visa-title6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            padding: var(--dl-space-space-halfunit);
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
            padding-bottom: 8px;
          }
          .obtain-a-visa-container81 {
            width: 50%;
            height: 90%;
            display: grid;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            grid-template-columns: 1fr 3fr;
          }
          .obtain-a-visa-container82 {
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
          .obtain-a-visa-text87 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container83 {
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
          .obtain-a-visa-text88 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container84 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text89 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container85 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text90 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container86 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text91 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-container87 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
          }
          .obtain-a-visa-text92 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .obtain-a-visa-link7 {
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
            .obtain-a-visa-content {
              align-items: center;
              justify-content: center;
            }
            .obtain-a-visa-heading1 {
              font-size: 2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .obtain-a-visa-title {
              font-size: 2rem;
            }
            .obtain-a-visa-text79 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .obtain-a-visa-text85 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .obtain-a-visa-text89 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .obtain-a-visa-text90 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .obtain-a-visa-text91 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .obtain-a-visa-link7 {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 1200px) {
            .obtain-a-visa-container01 {
              height: auto;
            }
            .obtain-a-visa-container15 {
              width: 80%;
            }
            .obtain-a-visa-container26 {
              width: 80%;
            }
            .obtain-a-visa-container40 {
              width: 80%;
            }
            .obtain-a-visa-container65 {
              width: 80%;
            }
            .obtain-a-visa-container74 {
              width: 80%;
            }
            .obtain-a-visa-container81 {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .obtain-a-visa-container01 {
              flex-direction: column;
            }
            .obtain-a-visa-column {
              margin-top: var(--dl-space-space-fourunits);
            }
            .obtain-a-visa-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .obtain-a-visa-image1 {
              width: 75%;
              display: none;
            }
            .obtain-a-visa-max-width {
              max-width: auto;
            }
            .obtain-a-visa-container04 {
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .obtain-a-visa-container05 {
              align-items: center;
              flex-direction: column;
            }
            .obtain-a-visa-container06 {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
            }
            .obtain-a-visa-container07 {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
            }
            .obtain-a-visa-container08 {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
            }
            .obtain-a-visa-container09 {
              flex-direction: column;
            }
            .obtain-a-visa-container10 {
              width: auto;
            }
            .obtain-a-visa-container11 {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
            }
            .obtain-a-visa-container12 {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .obtain-a-visa-container15 {
              width: 90%;
            }
            .obtain-a-visa-container26 {
              width: 90%;
            }
            .obtain-a-visa-max-width3 {
              flex-direction: column;
            }
            .obtain-a-visa-text37 {
              width: 75%;
            }
            .obtain-a-visa-container40 {
              width: 90%;
            }
            .obtain-a-visa-container65 {
              width: 90%;
            }
            .obtain-a-visa-container74 {
              width: 90%;
            }
            .obtain-a-visa-container81 {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .obtain-a-visa-column {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .obtain-a-visa-heading1 {
              text-align: center;
            }
            .obtain-a-visa-content1 {
              text-align: left;
            }
            .obtain-a-visa-container15 {
              width: 100%;
            }
            .obtain-a-visa-container26 {
              width: 100%;
            }
            .obtain-a-visa-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .obtain-a-visa-actions {
              width: 100%;
              align-self: flex-start;
            }
            .obtain-a-visa-container35 {
              width: 100%;
            }
            .obtain-a-visa-container36 {
              width: 100%;
            }
            .obtain-a-visa-container37 {
              width: 100%;
            }
            .obtain-a-visa-text37 {
              width: 75%;
            }
            .obtain-a-visa-container40 {
              width: 100%;
            }
            .obtain-a-visa-container65 {
              width: 100%;
            }
            .obtain-a-visa-container74 {
              width: 100%;
            }
            .obtain-a-visa-container81 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .obtain-a-visa-column {
              padding: 0px;
            }
            .obtain-a-visa-content {
              width: 85%;
            }
            .obtain-a-visa-heading1 {
              text-align: center;
            }
            .obtain-a-visa-content1 {
              width: auto;
              text-align: left;
            }
            .obtain-a-visa-container15 {
              width: 100%;
            }
            .obtain-a-visa-container26 {
              width: 100%;
            }
            .obtain-a-visa-text37 {
              width: 75%;
            }
            .obtain-a-visa-container40 {
              width: 100%;
            }
            .obtain-a-visa-container65 {
              width: 100%;
            }
            .obtain-a-visa-container74 {
              width: 100%;
            }
            .obtain-a-visa-container81 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ObtainAVisa
