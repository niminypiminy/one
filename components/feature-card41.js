import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard41 = (props) => {
  return (
    <>
      <div className={`feature-card41-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card41-icon">
          <path d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"></path>
        </svg>
        <h2 className="feature-card41-text">{props.title}</h2>
        <span className="feature-card41-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card41-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card41-icon {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
            opacity: 0.9;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card41-text {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card41-text1 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
          }
          .feature-card41-root-class-name {
            width: 100%;
          }
          .feature-card41-root-class-name1 {
            width: auto;
          }
          .feature-card41-root-class-name2 {
            width: auto;
            margin-left: var(--dl-space-space-threeunits);
          }
          .feature-card41-root-class-name3 {
            width: auto;
          }
          .feature-card41-root-class-name4 {
            width: auto;
            max-width: auto;
            margin-left: var(--dl-space-space-threeunits);
          }
          .feature-card41-root-class-name5 {
            width: auto;
          }
          .feature-card41-root-class-name6 {
            width: auto;
            margin-left: var(--dl-space-space-threeunits);
          }
          .feature-card41-root-class-name7 {
            width: auto;
          }
          .feature-card41-root-class-name8 {
            width: auto;
            max-width: auto;
            margin-left: var(--dl-space-space-threeunits);
          }
          .feature-card41-root-class-name9 {
            width: auto;
          }
          .feature-card41-root-class-name10 {
            width: auto;
            margin-left: var(--dl-space-space-threeunits);
          }
          .feature-card41-root-class-name11 {
            width: auto;
          }
          .feature-card41-root-class-name12 {
            width: auto;
            margin-left: var(--dl-space-space-threeunits);
          }
          @media (max-width: 1600px) {
            .feature-card41-icon {
              fill: var(--dl-color-gray-black);
              opacity: 0.9;
            }
            .feature-card41-text1 {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
            }
          }
          @media (max-width: 991px) {
            .feature-card41-root-class-name1 {
              width: auto;
            }
            .feature-card41-root-class-name2 {
              width: auto;
            }
            .feature-card41-root-class-name3 {
              width: auto;
            }
            .feature-card41-root-class-name4 {
              width: auto;
            }
            .feature-card41-root-class-name5 {
              width: auto;
            }
            .feature-card41-root-class-name6 {
              width: auto;
            }
            .feature-card41-root-class-name7 {
              width: auto;
            }
            .feature-card41-root-class-name8 {
              width: auto;
            }
            .feature-card41-root-class-name9 {
              width: auto;
            }
            .feature-card41-root-class-name10 {
              width: auto;
            }
            .feature-card41-root-class-name11 {
              width: auto;
            }
            .feature-card41-root-class-name12 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .feature-card41-text {
              font-style: normal;
              font-weight: 300;
            }
            .feature-card41-root-class-name1 {
              max-width: auto;
            }
            .feature-card41-root-class-name2 {
              margin-left: 0px;
            }
            .feature-card41-root-class-name4 {
              margin-left: 0px;
            }
            .feature-card41-root-class-name6 {
              margin-left: 0px;
            }
            .feature-card41-root-class-name7 {
              max-width: auto;
            }
            .feature-card41-root-class-name8 {
              margin-left: 0px;
            }
            .feature-card41-root-class-name10 {
              margin-left: 0px;
            }
            .feature-card41-root-class-name12 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard41.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  title: 'Lorem ipsum',
  rootClassName: '',
}

FeatureCard41.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard41
