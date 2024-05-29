import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-container ${props.rootClassName} `}>
        <div className="navbar-container1">
          <header data-thq="thq-navbar" className="navbar-navbar-interactive">
            <div className="navbar-branding">
              <Link href="/">
                <a className="navbar-link">
                  <div className="navbar-branding1">
                    <span className="navbar-text">{props.danneskiold2}</span>
                    <svg viewBox="0 0 1024 1024" className="navbar-icon">
                      <path d="M128 128h768v768h-768z"></path>
                    </svg>
                    <span className="navbar-text01">{props.lawfirm}</span>
                  </div>
                </a>
              </Link>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="navbar-desktop-menu"
            >
              <nav className="navbar-links">
                <div
                  data-thq="thq-dropdown"
                  className="navbar-thq-dropdown list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="navbar-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle"
                      >
                        <span className="navbar-criminal-law">
                          {props.criminalLaw}
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown01 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle01"
                      >
                        <span className="navbar-immigration-law">
                          {props.immigrationLaw}
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown02 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle02"
                      >
                        <span className="navbar-corporate-law corporatelaw">
                          {props.corporateLaw}
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown03 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle03"
                      >
                        <span className="navbar-tax-law">{props.taxLaw}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="navbar-burger-menu">
              <img
                alt={props.hamburgerAlt}
                src={props.hamburgerSrc}
                className="navbar-hamburger"
              />
            </div>
            <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
              <div className="navbar-top">
                <div className="navbar-branding2">
                  <span className="navbar-text02">{props.danneskiold2}</span>
                  <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                    <path d="M128 128h768v768h-768z"></path>
                  </svg>
                  <span className="navbar-text03">{props.lawfirm}</span>
                </div>
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links1">
                <Link href="/contact">
                  <a className="navbar-link01">{props.contact}</a>
                </Link>
                <div
                  data-thq="thq-dropdown"
                  className="navbar-thq-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle04"
                  >
                    <span className="navbar-text04">{props.practiceAreas}</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="navbar-dropdown-arrow"
                    >
                      <svg viewBox="0 0 1024 1024" className="navbar-icon06">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="navbar-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown04 list-item"
                    >
                      <Link href="/criminal-law">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle05"
                          >
                            <span className="navbar-text05">{props.cri}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown05 list-item"
                    >
                      <Link href="/tort-law">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle06"
                          >
                            <span className="navbar-text06">{props.tort}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown06 list-item"
                    >
                      <Link href="/contract-law">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle07"
                          >
                            <span className="navbar-text07">
                              {props.contract}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown07 list-item"
                    >
                      <Link href="/public-law">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle08"
                          >
                            <span className="navbar-text08">
                              {props.public}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown08 list-item"
                    >
                      <Link href="/immigration-law">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle09"
                          >
                            <span className="navbar-text09">
                              {props.immigration}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown09 list-item"
                    >
                      <Link href="/corporate-law">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle10"
                          >
                            <span className="navbar-text10">
                              {props.corporate}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="navbar-thq-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle11"
                  >
                    <span className="navbar-text11">Immigration Visas</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="navbar-dropdown-arrow1"
                    >
                      <svg viewBox="0 0 1024 1024" className="navbar-icon08">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="navbar-dropdown-list2"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown10 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle12"
                      >
                        <span className="navbar-text12">
                          Non-Immigration Visa
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown11 list-item"
                    >
                      <Link href="/work-permit">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle13"
                          >
                            <span className="navbar-text13">Work Permit</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="navbar-thq-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle14"
                  >
                    <span className="navbar-text14">
                      {props.registerYourCompany}
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="navbar-dropdown-arrow2"
                    >
                      <svg viewBox="0 0 1024 1024" className="navbar-icon10">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="navbar-dropdown-list3"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown12 list-item"
                    >
                      <Link href="/treaty-of-amity">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle15"
                          >
                            <span className="navbar-text15">
                              {props.treatyOfAmity}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown13 list-item"
                    >
                      <Link href="/board-of-investment">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle16"
                          >
                            <span className="navbar-text16">
                              {props.boardOfInvestment}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown14 list-item"
                    >
                      <Link href="/limited-company-ltd">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle17"
                          >
                            <span className="navbar-text17">
                              {props.limitedcompany}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown15 list-item"
                    >
                      <Link href="/limited-partnership-lp">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle18"
                          >
                            <span className="navbar-text18">
                              {props.limitedPartnership}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown16 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle19"
                      >
                        <Link href="/branch-office">
                          <a className="navbar-link13">{props.branchOffice}</a>
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown17 list-item"
                    >
                      <Link href="/representative-office">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle20"
                          >
                            <span className="navbar-text19">
                              {props.repOffice}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown18 list-item"
                    >
                      <Link href="/foreign-business-license">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle21"
                          >
                            <span className="navbar-text20">
                              {props.foreignBusinessLicense}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown19 list-item"
                    >
                      <Link href="/thai-australia-free-trade-agreement">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle22"
                          >
                            <span className="navbar-text21">{props.tafta}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown20 list-item"
                    >
                      <Link href="/japan-thailand-economic-partnership-agreement">
                        <a>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="navbar-dropdown-toggle23"
                          >
                            <span className="navbar-text22">{props.jtepa}</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link href="/blog">
                  <a className="navbar-link18">{props.blog1}</a>
                </Link>
                <Link href="/pro-bono">
                  <a className="navbar-link20">{props.proBono}</a>
                </Link>
              </nav>
              <div className="navbar-social-bar">
                <div className="navbar-container2">
                  <span className="navbar-text23">{props.telegram}</span>
                </div>
                <span className="navbar-text24">{props.whatsapp}</span>
                <span className="navbar-text25">{props.facebook}</span>
                <span className="navbar-text26">{props.line}</span>
              </div>
            </div>
          </header>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #949494;
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-navbar-interactive {
            width: 90%;
            display: flex;
            position: relative;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-branding1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .navbar-text {
            color: var(--dl-color-gray-black);
            font-size: 1.2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            line-height: 36px;
            margin-left: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .navbar-icon {
            width: 7px;
            height: 7px;
          }
          .navbar-text01 {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-halfunit);
            font-size: 1.2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            line-height: 27px;
            background-color: #ffff00;
          }
          .navbar-desktop-menu {
            display: none;
          }
          .navbar-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-criminal-law {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle01 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-immigration-law {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle02 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-corporate-law {
            text-decoration: none;
          }
          .navbar-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle03 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-tax-law {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-burger-menu {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: ffff00;
          }
          .navbar-hamburger {
            width: 16px;
            height: 16px;
            object-fit: cover;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            right: -211px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-branding2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-text02 {
            color: var(--dl-color-gray-black);
            font-size: 1.2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            line-height: 36px;
            margin-left: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .navbar-icon02 {
            width: 7px;
            height: 7px;
          }
          .navbar-text03 {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-halfunit);
            font-size: 1.2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            line-height: 27px;
            background-color: #ffff00;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon04 {
            width: 34px;
            height: 34px;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-link01 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-unit);
            border-color: #112821;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .navbar-link01:hover {
            color: var(--dl-color-gray-black);
            background-color: #ffff00;
          }
          .navbar-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle04 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-text04 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar-text04:hover {
            color: var(--dl-color-gray-black);
            background-color: #ffff00;
          }
          .navbar-dropdown-arrow {
            transition: 0.3s;
          }
          .navbar-icon06 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navbar-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle05 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text05 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text05:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle06 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text06 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text06:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle07 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text07 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text07:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
          }
          .navbar-dropdown-toggle08 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text08 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text08:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle09 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text09 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text09:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle10 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text10 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text10:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle11 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-text11 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar-text11:hover {
            background-color: #ffff00;
          }
          .navbar-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navbar-icon08 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navbar-dropdown-list2 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-dropdown10 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle12 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text12 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .navbar-text12:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown11 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle13 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text13 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text13:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-thq-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle14 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-text14 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar-text14:hover {
            background-color: #ffff00;
          }
          .navbar-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navbar-icon10 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navbar-dropdown-list3 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-dropdown12 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle15 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text15 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text15:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown13 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle16 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text16 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text16:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown14 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle17 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text17 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text17:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown15 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle18 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text18 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text18:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown16 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle19 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-link13 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: none;
          }
          .navbar-link13:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown17 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle20 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text19 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text19:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown18 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle21 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text20 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text20:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown19 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle22 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text21 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text21:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-dropdown20 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle23 {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-text22 {
            color: var(--dl-color-gray-black);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .navbar-text22:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-link18 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-link18:hover {
            color: #122821;
            background-color: #ffff00;
          }
          .navbar-link20 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Josefin Sans;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-link20:hover {
            color: var(--dl-color-gray-black);
            background-color: #ffff00;
          }
          .navbar-social-bar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: auto;
            padding-top: 48px;
            justify-content: flex-start;
          }
          .navbar-container2 {
            flex: 0 0 auto;
            width: XSmall;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-text23 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            text-decoration: underline;
          }
          .navbar-text24 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-left: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .navbar-text25 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-left: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .navbar-text26 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-left: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .navbar-root-class-name {
            width: 100%;
          }
          .navbar-root-class-name1 {
            width: 100%;
          }
          .navbar-root-class-name2 {
            width: 100%;
          }
          .navbar-root-class-name3 {
            width: 100%;
          }
          .navbar-root-class-name4 {
            width: 100%;
          }
          .navbar-root-class-name5 {
            width: 100%;
          }
          .navbar-root-class-name7 {
            width: 100%;
          }
          .navbar-root-class-name8 {
            width: 100%;
          }
          @media (max-width: 1920px) {
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1600px) {
            .navbar-navbar-interactive {
              align-items: center;
              justify-content: space-between;
            }
            .navbar-text01 {
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .navbar-burger-menu {
              background-color: ffff00;
            }
            .navbar-text03 {
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .navbar-links1 {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .navbar-link01 {
              background-color: var(--dl-color-gray-black);
            }
            .navbar-text04 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .navbar-text05 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text06 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text07 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text08 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text09 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text10 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text11 {
              font-size: 1.2rem;
            }
            .navbar-text12 {
              font-size: 1.2rem;
            }
            .navbar-text13 {
              font-size: 1.2rem;
            }
            .navbar-text14 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .navbar-text15 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text16 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text17 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text18 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-link13 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text19 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text20 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text21 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-text22 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .navbar-link18 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .navbar-link20 {
              font-size: 1.2rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 300;
            }
            .navbar-text23 {
              font-size: 1.2rem;
            }
            .navbar-text24 {
              font-size: 1.2rem;
            }
            .navbar-text25 {
              font-size: 1.2rem;
            }
            .navbar-text26 {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 1200px) {
            .navbar-burger-menu {
              background-color: ffff00;
            }
          }
          @media (max-width: 991px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-icon {
              display: none;
            }
            .navbar-text01 {
              display: none;
            }
            .navbar-burger-menu {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
              align-items: center;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: ffff00;
            }
            .navbar-mobile-menu {
              width: 100%;
            }
            .navbar-icon02 {
              display: none;
            }
            .navbar-text03 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .navbar-burger-menu {
              width: 40px;
              height: 40px;
              aspect-ratio: 1;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: ffff00;
            }
            .navbar-social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              max-width: 100%;
              min-width: 100%;
            }
            .navbar-text {
              color: rgb(18, 40, 33);
              font-size: 24px;
              line-height: 36px;
            }
            .navbar-burger-menu {
              background-color: ffff00;
            }
            .navbar-text02 {
              color: rgb(18, 40, 33);
              font-size: 24px;
              line-height: 36px;
            }
            .navbar-social-bar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  proBono: 'Pro Bono',
  danneskiold2: 'Danneskiold & Associates',
  blog1: 'Blog',
  branchOffice: 'Branch Office',
  danneskiold: 'Danneskiold & Associates',
  foreignBusinessLicense: 'Foreign Business License',
  immigration: 'Immigration ',
  telegram: 'Telegram',
  hamburgerSrc: '/hamburger.svg',
  immigrationLaw: 'Immigration Law',
  corporateLaw: 'Contract Law',
  line: 'LINE',
  registerYourCompany: 'Company Registration',
  rootClassName: '',
  hamburgerAlt: 'image',
  taxLaw: 'Tax Law',
  text1411: 'Foreign Business License',
  limitedPartnership: 'Limited Partnership (LP)',
  repOffice: 'Representative Office',
  lawfirm: 'Law Firm',
  criminalLaw: 'Criminal Law',
  whatsapp: 'WhatsApp',
  jtepa: 'JTEPA',
  cri: 'Criminal ',
  treatyOfAmity: 'U.S. Thailand Treaty of Amity',
  corporate: 'Corporate ',
  limitedcompany: 'Limited Company (Ltd)',
  public: 'Public ',
  boardOfInvestment: 'Board of Investment (BOI)',
  contact: 'Contact',
  practiceAreas: 'Practice Areas',
  facebook: 'Facebook',
  tort: 'Tort',
  contract: 'Contract',
  tafta: 'TAFTA',
}

Navbar.propTypes = {
  proBono: PropTypes.string,
  danneskiold2: PropTypes.string,
  blog1: PropTypes.string,
  branchOffice: PropTypes.string,
  danneskiold: PropTypes.string,
  foreignBusinessLicense: PropTypes.string,
  immigration: PropTypes.string,
  telegram: PropTypes.string,
  hamburgerSrc: PropTypes.string,
  immigrationLaw: PropTypes.string,
  corporateLaw: PropTypes.string,
  line: PropTypes.string,
  registerYourCompany: PropTypes.string,
  rootClassName: PropTypes.string,
  hamburgerAlt: PropTypes.string,
  taxLaw: PropTypes.string,
  text1411: PropTypes.string,
  limitedPartnership: PropTypes.string,
  repOffice: PropTypes.string,
  lawfirm: PropTypes.string,
  criminalLaw: PropTypes.string,
  whatsapp: PropTypes.string,
  jtepa: PropTypes.string,
  cri: PropTypes.string,
  treatyOfAmity: PropTypes.string,
  corporate: PropTypes.string,
  limitedcompany: PropTypes.string,
  public: PropTypes.string,
  boardOfInvestment: PropTypes.string,
  contact: PropTypes.string,
  practiceAreas: PropTypes.string,
  facebook: PropTypes.string,
  tort: PropTypes.string,
  contract: PropTypes.string,
  tafta: PropTypes.string,
}

export default Navbar
