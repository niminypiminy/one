import React from 'react'

import PropTypes from 'prop-types'

const Component3 = (props) => {
  return (
    <>
      <div className="component3-container">
        <div className="component3-container1">
          <div className="component3-container2">
            <button type="button" className="button component3-button">
              {props.button1}
            </button>
          </div>
        </div>
        <div className="component3-container3">
          <button type="button" className="button component3-button1">
            {props.button}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .component3-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .component3-container1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
          }
          .component3-container2 {
            display: flex;
            position: relative;
          }
          .component3-container3 {
            display: flex;
            position: relative;
          }
          @media (max-width: 1600px) {
            .component3-button {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              background-color: var(--dl-color-theme-primary1);
            }
            .component3-button1 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              height: var(--dl-size-size-small);
              margin-left: var(--dl-space-space-unit);
              background-color: var(--dl-color-theme-primary1);
            }
          }
        `}
      </style>
    </>
  )
}

Component3.defaultProps = {
  button: 'Contact',
  button1: 'Article',
}

Component3.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Component3
