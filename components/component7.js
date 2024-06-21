import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Component7 = (props) => {
  const [iscategorytwoVisible, setIscategorytwoVisible] = useState(false)
  const [iscategorythreeVisible, setIscategorythreeVisible] = useState(false)
  const [iscategoryoneVisible, setIscategoryoneVisible] = useState(true)
  return (
    <>
      <div className="component7-container thq-section-padding">
        <div className="component7-max-width thq-section-max-width thq-flex-column">
          <div className="component7-container1 thq-section-max-width thq-flex-row">
            {iscategoryoneVisible && (
              <button
                onClick={() => {
                  setIscategoryoneVisible(true)
                  setIscategorytwoVisible(false)
                  setIscategorythreeVisible(false)
                }}
                className="component7-button thq-button-filled"
              >
                {props.button}
              </button>
            )}
            {!iscategoryoneVisible && (
              <button
                onClick={() => {
                  setIscategorytwoVisible(false)
                  setIscategorythreeVisible(false)
                  setIscategoryoneVisible(true)
                }}
                className="component7-button1 thq-button-outline"
              >
                {props.button1}
              </button>
            )}
            {!iscategorytwoVisible && (
              <button
                onClick={() => {
                  setIscategorythreeVisible(false)
                  setIscategorytwoVisible(true)
                  setIscategoryoneVisible(false)
                }}
                className="component7-button2 thq-button-outline"
              >
                {props.button2}
              </button>
            )}
            {iscategorytwoVisible && (
              <button
                onClick={() => {
                  setIscategorythreeVisible(false)
                  setIscategoryoneVisible(false)
                  setIscategorytwoVisible(true)
                }}
                className="component7-button3 thq-button-filled"
              >
                {props.button3}
              </button>
            )}
            {!iscategorythreeVisible && (
              <button
                onClick={() => {
                  setIscategoryoneVisible(false)
                  setIscategorytwoVisible(false)
                  setIscategorythreeVisible(true)
                }}
                className="component7-button4 thq-button-outline"
              >
                {props.button4}
              </button>
            )}
            {iscategorythreeVisible && (
              <button
                onClick={() => {
                  setIscategoryoneVisible(false)
                  setIscategorythreeVisible(true)
                  setIscategorytwoVisible(false)
                }}
                className="component7-button5 thq-button-filled"
              >
                {props.button5}
              </button>
            )}
          </div>
          <div className="component7-container2 thq-flex-column">
            {iscategoryoneVisible && (
              <div className="component7-container3">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item">
                    <div id="category1" className="component7-row">
                      <span className="component7-text">{props.text2}</span>
                      <div className="component7-list">
                        <div className="component7-item service">
                          <div className="component7-details">
                            <span className="component7-text01">
                              {props.text36}
                            </span>
                          </div>
                        </div>
                        <div className="component7-item01 service">
                          <div className="component7-details01">
                            <span className="component7-text02">
                              {props.text37}
                            </span>
                          </div>
                        </div>
                        <div className="component7-item02 service">
                          <div className="component7-details02">
                            <span className="component7-text03">
                              {props.text38}
                            </span>
                          </div>
                        </div>
                        <div className="component7-item03 service">
                          <div className="component7-details03">
                            <span className="component7-text04">
                              {props.text39}
                            </span>
                          </div>
                        </div>
                        <div className="component7-item04 service">
                          <div className="component7-details04">
                            <span className="component7-text05">
                              {props.text40}
                            </span>
                          </div>
                        </div>
                        <div className="component7-item05 service">
                          <div className="component7-details05">
                            <span className="component7-text06">
                              {props.text41}
                            </span>
                          </div>
                        </div>
                        <div className="component7-item06 service">
                          <div className="component7-details06">
                            <span className="component7-text07">
                              {props.text42}
                            </span>
                          </div>
                        </div>
                        <div className="component7-item07 service">
                          <div className="component7-details07">
                            <span className="component7-text08">
                              {props.text43}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {iscategorytwoVisible && (
              <div className="component7-container4">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item"></li>
                </ul>
                <div id="category2" className="component7-row1">
                  <span className="component7-text09">{props.text}</span>
                  <div className="component7-list1">
                    <div className="component7-item08 service">
                      <div className="component7-details08">
                        <span className="component7-text10">{props.text3}</span>
                      </div>
                    </div>
                    <div className="component7-item09 service">
                      <div className="component7-details09">
                        <span className="component7-text11">{props.text4}</span>
                      </div>
                    </div>
                    <div className="component7-item10 service">
                      <div className="component7-details10">
                        <span className="component7-text12">{props.text5}</span>
                      </div>
                    </div>
                    <div className="component7-item11 service">
                      <div className="component7-details11">
                        <span className="component7-text13">{props.text6}</span>
                      </div>
                    </div>
                    <div className="component7-item12 service">
                      <div className="component7-details12">
                        <span className="component7-text14">{props.text7}</span>
                      </div>
                    </div>
                    <div className="component7-item13 service">
                      <div className="component7-details13">
                        <span className="component7-text15">{props.text8}</span>
                      </div>
                    </div>
                    <div className="component7-item14 service">
                      <div className="component7-details14">
                        <span className="component7-text16">{props.text9}</span>
                      </div>
                    </div>
                    <div className="component7-item15 service">
                      <div className="component7-details15">
                        <span className="component7-text17">
                          {props.text10}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item16 service">
                      <div className="component7-details16">
                        <span className="component7-text18">
                          {props.text11}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item17 service">
                      <div className="component7-details17">
                        <span className="component7-text19">
                          {props.text12}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item18 service">
                      <div className="component7-details18">
                        <span className="component7-text20">
                          {props.text13}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item19 service">
                      <div className="component7-details19">
                        <span className="component7-text21">
                          {props.text14}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item20 service">
                      <div className="component7-details20">
                        <span className="component7-text22">
                          {props.text15}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {iscategorythreeVisible && (
              <div className="component7-container5">
                <ul className="thq-flex-column">
                  <li className="thq-flex-column list-item"></li>
                </ul>
                <div id="category3" className="component7-row2">
                  <span className="component7-text23">{props.text1}</span>
                  <div className="component7-list2">
                    <div className="component7-item21 service">
                      <div className="component7-details21">
                        <span className="component7-text24">
                          {props.text16}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item22 service">
                      <div className="component7-details22">
                        <span className="component7-text25">
                          {props.text17}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item23 service">
                      <div className="component7-details23">
                        <span className="component7-text26">
                          {props.text18}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item24 service">
                      <div className="component7-details24">
                        <span className="component7-text27">
                          {props.text19}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item25 service">
                      <div className="component7-details25">
                        <span className="component7-text28">
                          {props.text20}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item26 service">
                      <div className="component7-details26">
                        <span className="component7-text29">
                          {props.text21}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item27 service">
                      <div className="component7-details27">
                        <span className="component7-text30">
                          {props.text22}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item28 service">
                      <div className="component7-details28">
                        <span className="component7-text31">
                          {props.text23}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item29 service">
                      <div className="component7-details29">
                        <span className="component7-text32">
                          {props.text24}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item30 service">
                      <div className="component7-details30">
                        <span className="component7-text33">
                          {props.text25}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item31 service">
                      <div className="component7-details31">
                        <span className="component7-text34">
                          {props.text26}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item32 service">
                      <div className="component7-details32">
                        <span className="component7-text35">
                          {props.text27}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item33 service">
                      <div className="component7-details33">
                        <span className="component7-text36">
                          {props.text28}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item34 service">
                      <div className="component7-details34">
                        <span className="component7-text37">
                          {props.text29}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item35 service">
                      <div className="component7-details35">
                        <span className="component7-text38">
                          {props.text30}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item36 service">
                      <div className="component7-details36">
                        <span className="component7-text39">
                          {props.text31}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item37 service">
                      <div className="component7-details37">
                        <span className="component7-text40">
                          {props.text32}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item38 service">
                      <div className="component7-details38">
                        <span className="component7-text41">
                          {props.text33}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item39 service">
                      <div className="component7-details39">
                        <span className="component7-text42">
                          {props.text34}
                        </span>
                      </div>
                    </div>
                    <div className="component7-item40 service">
                      <div className="component7-details40">
                        <span className="component7-text43">
                          {props.text35}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component7-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .component7-max-width {
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .component7-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .component7-button {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            background-color: var(--dl-color-theme-color5);
          }
          .component7-button1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .component7-button1:hover {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            background-color: var(--dl-color-theme-color5);
          }
          .component7-button2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .component7-button2:hover {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            background-color: var(--dl-color-theme-color5);
          }
          .component7-button3 {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            background-color: var(--dl-color-theme-color5);
          }
          .component7-button4 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 1.5rem;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Josefin Sans';
            font-weight: 300;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .component7-button4:hover {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            background-color: var(--dl-color-theme-color5);
          }
          .component7-button5 {
            fill: var(--dl-color-theme-color4);
            color: var(--dl-color-theme-color4);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            background-color: var(--dl-color-theme-color5);
          }
          .component7-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .component7-container3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .component7-row {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component7-text {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .component7-list {
            width: 60%;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .component7-item {
            width: 100%;
            position: relative;
          }
          .component7-details {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text01 {
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item01 {
            width: 100%;
            position: relative;
          }
          .component7-details01 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text02 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item02 {
            width: 100%;
            position: relative;
          }
          .component7-details02 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text03 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item03 {
            width: 100%;
            position: relative;
          }
          .component7-details03 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text04 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item04 {
            width: 100%;
            position: relative;
          }
          .component7-details04 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text05 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item05 {
            width: 100%;
            position: relative;
          }
          .component7-details05 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text06 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item06 {
            width: 100%;
            position: relative;
          }
          .component7-details06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text07 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item07 {
            width: 100%;
            position: relative;
          }
          .component7-details07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text08 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-container4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .component7-row1 {
            width: 100%;
            display: flex;
            align-items: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
            flex-direction: column;
            justify-content: center;
          }
          .component7-text09 {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .component7-list1 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .component7-item08 {
            width: 100%;
            position: relative;
          }
          .component7-details08 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text10 {
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item09 {
            width: 100%;
            position: relative;
          }
          .component7-details09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text11 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item10 {
            width: 100%;
            position: relative;
          }
          .component7-details10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text12 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item11 {
            width: 100%;
            position: relative;
          }
          .component7-details11 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text13 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item12 {
            width: 100%;
            position: relative;
          }
          .component7-details12 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text14 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item13 {
            width: 100%;
            position: relative;
          }
          .component7-details13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text15 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item14 {
            width: 100%;
            position: relative;
          }
          .component7-details14 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text16 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item15 {
            width: 100%;
            position: relative;
          }
          .component7-details15 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text17 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item16 {
            width: 100%;
            position: relative;
          }
          .component7-details16 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text18 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item17 {
            width: 100%;
            position: relative;
          }
          .component7-details17 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text19 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item18 {
            width: 100%;
            position: relative;
          }
          .component7-details18 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text20 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item19 {
            width: 100%;
            position: relative;
          }
          .component7-details19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text21 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item20 {
            width: 100%;
            position: relative;
          }
          .component7-details20 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text22 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-container5 {
            align-self: stretch;
            align-items: flex-start;
          }
          .component7-row2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component7-text23 {
            color: var(--dl-color-gray-black);
            font-size: 2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .component7-list2 {
            width: 60%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .component7-item21 {
            width: 100%;
            position: relative;
          }
          .component7-details21 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text24 {
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item22 {
            width: 100%;
            position: relative;
          }
          .component7-details22 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text25 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item23 {
            width: 100%;
            position: relative;
          }
          .component7-details23 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text26 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item24 {
            width: 100%;
            position: relative;
          }
          .component7-details24 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text27 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item25 {
            width: 100%;
            position: relative;
          }
          .component7-details25 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text28 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item26 {
            width: 100%;
            position: relative;
          }
          .component7-details26 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text29 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item27 {
            width: 100%;
            position: relative;
          }
          .component7-details27 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text30 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item28 {
            width: 100%;
            position: relative;
          }
          .component7-details28 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text31 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item29 {
            width: 100%;
            position: relative;
          }
          .component7-details29 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text32 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item30 {
            width: 100%;
            position: relative;
          }
          .component7-details30 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text33 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item31 {
            width: 100%;
            position: relative;
          }
          .component7-details31 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text34 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item32 {
            width: 100%;
            position: relative;
          }
          .component7-details32 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text35 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item33 {
            width: 100%;
            position: relative;
          }
          .component7-details33 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text36 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item34 {
            width: 100%;
            position: relative;
          }
          .component7-details34 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text37 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item35 {
            width: 100%;
            position: relative;
          }
          .component7-details35 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text38 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item36 {
            width: 100%;
            position: relative;
          }
          .component7-details36 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text39 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item37 {
            width: 100%;
            position: relative;
          }
          .component7-details37 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text40 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item38 {
            width: 100%;
            position: relative;
          }
          .component7-details38 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text41 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item39 {
            width: 100%;
            position: relative;
          }
          .component7-details39 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text42 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          .component7-item40 {
            width: 100%;
            position: relative;
          }
          .component7-details40 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .component7-text43 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            line-height: 36px;
          }
          @media (max-width: 991px) {
            .component7-row {
              flex-direction: column;
            }
            .component7-text {
              margin-bottom: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .component7-list {
              width: 80%;
              margin-left: var(--dl-space-space-fourunits);
            }
            .component7-item {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text01 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item01 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details01 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text02 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item02 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details02 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text03 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item03 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details03 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text04 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item04 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details04 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text05 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item05 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details05 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text06 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item06 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details06 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text07 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item07 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details07 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text08 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-row1 {
              flex-direction: column;
            }
            .component7-text09 {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .component7-list1 {
              width: 80%;
              margin-left: var(--dl-space-space-fourunits);
            }
            .component7-item08 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details08 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text10 {
              font-size: 1.5rem;
              font-family: Josefin Sans;
              line-height: 24px;
            }
            .component7-item09 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details09 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text11 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item10 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details10 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text12 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item11 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details11 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text13 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item12 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details12 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text14 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item13 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details13 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text15 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item14 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details14 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text16 {
              font-size: 1.5rem;
              font-family: Josefin Sans;
              line-height: 24px;
            }
            .component7-item15 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details15 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text17 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item16 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details16 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text18 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item17 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details17 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text19 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item18 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details18 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text20 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item19 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details19 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text21 {
              color: var(--dl-color-gray-black);
            }
            .component7-item20 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details20 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text22 {
              color: var(--dl-color-gray-black);
              line-height: 24px;
            }
            .component7-row2 {
              flex-direction: column;
            }
            .component7-text23 {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .component7-list2 {
              width: 80%;
              margin-left: var(--dl-space-space-fourunits);
            }
            .component7-item21 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details21 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text24 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item22 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details22 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text25 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item23 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details23 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text26 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item24 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details24 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text27 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item25 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details25 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text28 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item26 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details26 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text29 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item27 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details27 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text30 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item28 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details28 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text31 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item29 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details29 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text32 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item30 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details30 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text33 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item31 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details31 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text34 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item32 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details32 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text35 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item33 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details33 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text36 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item34 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details34 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text37 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item35 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details35 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text38 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item36 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details36 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text39 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item37 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details37 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text40 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
              line-height: 24px;
            }
            .component7-item38 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details38 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text41 {
              font-size: 1.5rem;
              font-family: Josefin Sans;
              line-height: 24px;
            }
            .component7-item39 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details39 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .component7-text42 {
              font-size: 1.5rem;
              line-height: 24px;
            }
            .component7-item40 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .component7-details40 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .component7-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .component7-list {
              margin-left: var(--dl-space-space-fourunits);
              margin-right: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

Component7.defaultProps = {
  text14: 'Mining, including rock blasting or rock crushing.',
  text37: 'Livestock farming.',
  text24: 'Hotel business, with the exception of the hotel management service.',
  text28: 'Accounting service business.',
  text9:
    'Domestic transportation by land, water, or air, including domestic aviation.',
  text19: 'Legal service business.',
  button2: 'Category 2',
  text26: 'Fishery, specifically marine animal cultures.',
  text33: 'Advertising business.',
  text16: 'Rice milling and flour production from rice and farm produce.',
  text40: 'Rice farming, plantation, or crop growing.',
  text22:
    'Internal trade related to traditional agricultural products or produce not yet prohibited by law, except agricultural futures trading in the Thai Agricultural Futures Market without delivery or receipt of agricultural products within the country.',
  text35: 'Plant cultivation and propagation business.',
  text30:
    'Retailing all categories of goods having a total minimum capital of less than 100 million Baht or having a minimum capital of each shop less than 20 million Baht.',
  text43: 'Trading in land.',
  text10: 'Production of wood carvings.',
  text17: 'Forestry from a grown forest.',
  text8: 'Timber processing for the production of furniture and utensils.',
  text4:
    'Trading of antiques or artistic objects that are artistic works or handicrafts of Thailand.',
  text23:
    'Wholesaling all categories of goods having a minimum capital of each shop of less than 100 million Baht.',
  button: 'Category 1',
  text31: 'Architecture service business.',
  text29: 'Certain types of construction.',
  button3: 'Category 2',
  text: 'Category 2',
  text15:
    'Armaments, ships, aircraft,  vehicles for military use, or equipment or components of all types of war materials.',
  button5: 'Category 3',
  text21: 'Certain types of brokerages and agencies.',
  text12:
    'Production of crockery or porcelains representing Thai arts and culture.',
  text13: 'Production of rock salt.',
  text20: 'Engineering service business.',
  text27: 'Production of plywood, veneer wood, chipboards or hardboards.',
  text1: 'Category 3',
  text39:
    'Trading and sale of antique objects of Thailand or objects of historical value of Thailand.',
  text41:
    'Extraction of Thai medicinal herbs, and making or casting Buddha Images and monk alms-bowls. / Marketing',
  button1: 'Category 1',
  text6:
    'Production of goldware, silverware, nielloware, bronzeware, or lacquerware. ',
  text42: 'Forestry and timber processing from a natural forest.',
  text34: 'Tour agency.',
  text2: 'Category 1',
  text18: 'Production of lime. ',
  text38:
    'Fishery, only in respect of the catchment of aquatic animals in Thai waters and specific economic zones of Thailand. ',
  text11: 'Production of Thai musical instruments.',
  text25: 'Sale of food and beverages.',
  text32: 'Some types of auctions.',
  text3:
    'Production, distribution, and maintenance of firearms, ammunition, gun powders, and explosives.',
  text36:
    'The press, radio broadcasting station, or radio and television station business.',
  text5:
    'Silkworm raising, production of Thai silk yarn, weaving of Thai silk, or printing of Thai silk patterns.',
  button4: 'Category 3',
  text7: 'Salt farming, including non-sea salt farming.',
}

Component7.propTypes = {
  text14: PropTypes.string,
  text37: PropTypes.string,
  text24: PropTypes.string,
  text28: PropTypes.string,
  text9: PropTypes.string,
  text19: PropTypes.string,
  button2: PropTypes.string,
  text26: PropTypes.string,
  text33: PropTypes.string,
  text16: PropTypes.string,
  text40: PropTypes.string,
  text22: PropTypes.string,
  text35: PropTypes.string,
  text30: PropTypes.string,
  text43: PropTypes.string,
  text10: PropTypes.string,
  text17: PropTypes.string,
  text8: PropTypes.string,
  text4: PropTypes.string,
  text23: PropTypes.string,
  button: PropTypes.string,
  text31: PropTypes.string,
  text29: PropTypes.string,
  button3: PropTypes.string,
  text: PropTypes.string,
  text15: PropTypes.string,
  button5: PropTypes.string,
  text21: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text20: PropTypes.string,
  text27: PropTypes.string,
  text1: PropTypes.string,
  text39: PropTypes.string,
  text41: PropTypes.string,
  button1: PropTypes.string,
  text6: PropTypes.string,
  text42: PropTypes.string,
  text34: PropTypes.string,
  text2: PropTypes.string,
  text18: PropTypes.string,
  text38: PropTypes.string,
  text11: PropTypes.string,
  text25: PropTypes.string,
  text32: PropTypes.string,
  text3: PropTypes.string,
  text36: PropTypes.string,
  text5: PropTypes.string,
  button4: PropTypes.string,
  text7: PropTypes.string,
}

export default Component7
