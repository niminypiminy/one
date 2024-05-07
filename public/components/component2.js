import React from 'react'

import PropTypes from 'prop-types'

const Component2 = (props) => {
  return (
    <>
      <div className="component2-container">
        <button type="button" className="button component2-button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .component2-container {
            display: flex;
            position: relative;
          }
          @media (max-width: 1600px) {
            .component2-button {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              background-color: var(--dl-color-theme-primary1);
            }
          }
        `}
      </style>
    </>
  )
}

Component2.defaultProps = {
  button: 'Article',
}

Component2.propTypes = {
  button: PropTypes.string,
}

export default Component2
