import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`app-component-container ${props.rootClassName} `}>
        <button type="button" className="button app-component-button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .app-component-container {
            display: flex;
            position: relative;
          }
          @media (max-width: 1600px) {
            .app-component-button {
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

AppComponent.defaultProps = {
  button: 'Read the Article',
  rootClassName: '',
}

AppComponent.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
