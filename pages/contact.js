import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact us</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta property="og:title" content="Contact us" />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, property, tax, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/b54c7d9e-85ad-41bf-8d00-bf6410be3d15?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navbar></Navbar>
        <div className="contact-container1">
          <div className="contact-container2">
            <form
              id="submit-form"
              name="submit-form"
              action="https://formsubmit.co/ldrob@tuta.io"
              method="POST"
              enctype="multipart/form-data"
              className="contact-form"
            >
              <h1 className="contact-text">
                <span>Need Help?</span>
                <br></br>
              </h1>
              <span className="contact-text03">
                <span>
                  You can reach us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contact-text05">Telegram</span>
                <span>,</span>
                <span className="contact-text07"> Facebook</span>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contact-text09">LINE</span>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contact-text11">WhatsApp</span>
                <span>
                  , or use the contact form, and we will respond as soon as
                  possible. 
                </span>
              </span>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                className="contact-textinput input"
              />
              <input
                type="email"
                id="email"
                name="Email"
                rows="Email"
                required
                placeholder="Email"
                className="contact-textinput1 input"
              />
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.co/thanks.html"
                placeholder="placeholder"
                className="contact-textinput2 input"
              />
              <input
                type="hidden"
                name="_captcha"
                value="false"
                placeholder="placeholder"
                className="contact-textinput3 input"
              />
              <textarea
                id="message"
                name="message"
                type="text"
                placeholder="Your Message"
                className="contact-textarea textarea"
              ></textarea>
              <button
                id="submitform"
                name="submitform"
                type="submit"
                className="contact-button button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <footer className="contact-footer">
          <span className="contact-text13">
            © 2023 Danneskiold &amp; Associates LP., All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            justify-content: center;
          }
          .contact-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form {
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-text {
            color: #112821;
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            border-color: #112821;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contact-text03 {
            color: rgb(17, 40, 33);
            width: 65%;
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .contact-text05 {
            text-decoration: underline;
          }
          .contact-text07 {
            text-decoration: underline;
          }
          .contact-text09 {
            text-decoration: underline;
          }
          .contact-text11 {
            text-decoration: underline;
          }
          .contact-textinput {
            width: 80%;
            height: 15%;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Josefin Sans;
            font-weight: 200;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .contact-textinput1 {
            width: 80%;
            height: 15%;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Josefin Sans;
            font-weight: 200;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .contact-textinput2 {
            display: none;
          }
          .contact-textinput3 {
            display: none;
          }
          .contact-textarea {
            width: 80%;
            height: 50%;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .contact-button {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            border-radius: 0px;
            text-decoration: none;
            background-color: #1b1b1b;
          }
          .contact-button:hover {
            color: var(--dl-color-gray-black);
            opacity: 1;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            background-color: var(--dl-color-gray-white);
          }
          .contact-footer {
            width: 100%;
            display: flex;
            max-width: auto;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .contact-text13 {
            color: rgb(17, 40, 33);
            font-size: 1.2rem;
            font-style: normal;
            text-align: left;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          @media (max-width: 1600px) {
            .contact-container1 {
              margin-top: var(--dl-space-space-threeunits);
              align-items: center;
              justify-content: center;
            }
            .contact-container2 {
              width: 50%;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .contact-form {
              width: 80%;
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .contact-text {
              color: #112821;
              font-size: 2rem;
              align-self: center;
              font-style: normal;
              text-align: left;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .contact-text03 {
              color: rgb(17, 40, 33);
              width: 75%;
              font-size: 1.5rem;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .contact-textinput {
              font-family: Josefin Sans;
            }
            .contact-textinput1 {
              font-family: Josefin Sans;
            }
            .contact-textarea {
              font-family: Josefin Sans;
            }
            .contact-button {
              margin-top: var(--dl-space-space-twounits);
            }
            .contact-footer {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .contact-text13 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
          }
          @media (max-width: 1200px) {
            .contact-container2 {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .contact-container2 {
              width: 90%;
            }
            .contact-form {
              width: 75%;
            }
          }
          @media (max-width: 767px) {
            .contact-container2 {
              width: 90%;
            }
            .contact-form {
              width: 95%;
            }
            .contact-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-text13 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .contact-container2 {
              width: 100%;
            }
            .contact-form {
              width: 95%;
            }
            .contact-textinput {
              width: 100%;
            }
            .contact-textinput1 {
              width: 100%;
            }
            .contact-textarea {
              width: 100%;
            }
            .contact-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .contact-text13 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
