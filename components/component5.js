import React from 'react'

import PropTypes from 'prop-types'

const Component5 = (props) => {
  return (
    <>
      <div className="component5-container">
        <button type="button" className="button">
          {props.button}
        </button>
        <button type="button" className="button">
          {props.button1}
        </button>
        <button type="button" className="button">
          {props.button2}
        </button>
      </div>
      <style jsx>
        {`
          .component5-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

Component5.defaultProps = {
  button1: 'Button',
  button: 'Button',
  button2: 'Button',
}

Component5.propTypes = {
  button1: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
}

export default Component5
