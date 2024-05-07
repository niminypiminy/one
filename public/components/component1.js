import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className="component1-container">
        <button type="button" className="button component1-button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .component1-container {
            display: flex;
            position: relative;
          }
          @media (max-width: 1600px) {
            .component1-button {
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

Component1.defaultProps = {
  button: 'Contact us',
}

Component1.propTypes = {
  button: PropTypes.string,
}

export default Component1
