import React from 'react'

import PropTypes from 'prop-types'

const Practice1 = (props) => {
  return (
    <>
      <div className="practice-1-practice">
        <div className="practice-1-heading">
          <h3 className="practice-1-header">{props.title}</h3>
          <p className="practice-1-caption">{props.description}</p>
        </div>
        <div className="read-more">
          <span className="practice-1-text">Read more</span>
        </div>
      </div>
      <style jsx>
        {`
          .practice-1-practice {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .practice-1-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .practice-1-header {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .practice-1-caption {
            max-width: 385px;
            line-height: 24px;
          }
          .practice-1-text {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          @media (max-width: 767px) {
            .practice-1-practice {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .practice-1-header {
              font-size: 20px;
              line-height: 24px;
            }
            .practice-1-caption {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Practice1.defaultProps = {
  description: '',
  title: 'Immigration',
}

Practice1.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Practice1
