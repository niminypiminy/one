import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact us</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta property="og:title" content="Contact us" />
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
        <div className="contact-container1">
          <div className="contact-container2">
            <form
              id="submit-form"
              name="submit-form"
              action="https://submit-form.com/BCiQzHi2"
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
                name="_redirect"
                value="https://one-tan-nine.vercel.app/Thanks"
                placeholder="placeholder"
                className="contact-textinput2 input"
              />
              <input
                type="hidden"
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
                Send
              </button>
            </form>
          </div>
        </div>
        <Footer1 rootClassName="footer1-root-class-name3"></Footer1>
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
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
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
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
            border-radius: 0px;
            text-decoration: none;
            background-color: var(--dl-color-theme-primary2);
          }
          .contact-button:hover {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            opacity: 1;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            background-color: var(--dl-color-theme-neutral-dark);
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
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              align-self: center;
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
          }
        `}
      </style>
    </>
  )
}

export default Contact
