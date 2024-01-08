import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22 = (props) => {
  return (
    <>
      <div className={`feature-card22-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card22-icon">
          <path d="M164 404l240 242-120 120-242-240zM526 42l240 242-120 120-242-240zM224 344l120-120 604 604-120 120zM42 896h512v86h-512v-86z"></path>
        </svg>
        <div className="feature-card22-container">
          <h2 className="feature-card22-text">{props.title}</h2>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22-icon {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .feature-card22-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22-text {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card22-feature-card {
              flex-direction: row;
            }
            .feature-card22-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card22-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard22.defaultProps = {
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  title: 'Lorem ipsum',
}

FeatureCard22.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard22
