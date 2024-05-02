import React from 'react'

import PropTypes from 'prop-types'

const Practice = (props) => {
  return (
    <>
      <div className="practice-practice">
        <div className="practice-heading">
          <h3 className="practice-header">{props.title}</h3>
          <p className="practice-caption">{props.description}</p>
        </div>
        <div className="read-more">
          <span className="practice-text">Read more</span>
          <svg viewBox="0 0 1024 1024" className="practice-icon">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .practice-practice {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .practice-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .practice-header {
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 300;
            line-height: 36px;
          }
          .practice-caption {
            font-size: 1.5rem;
            max-width: 385px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 24px;
          }
          .practice-text {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 24px;
          }
          .practice-icon {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1600px) {
            .practice-header {
              color: var(--dl-color-gray-black);
            }
            .practice-caption {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
            .practice-text {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
          }
          @media (max-width: 1200px) {
            .practice-header {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 991px) {
            .practice-header {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 767px) {
            .practice-practice {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .practice-header {
              color: var(--dl-color-gray-black);
              font-size: 1.5rem;
              line-height: 24px;
            }
            .practice-caption {
              font-size: 1.5rem;
              line-height: 21px;
            }
          }
          @media (max-width: 479px) {
            .practice-caption {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </>
  )
}

Practice.defaultProps = {
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  title: 'Cardiology',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Practice.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Practice
