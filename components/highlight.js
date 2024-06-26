import React from 'react'

import PropTypes from 'prop-types'

const Highlight = (props) => {
  return (
    <>
      <div className="highlight-highlight">
        <span className="highlight-text">{props.title}</span>
        <span className="highlight-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .highlight-highlight {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .highlight-text {
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 27px;
          }
          .highlight-text1 {
            max-width: 535px;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 24px;
          }
          @media (max-width: 767px) {
            .highlight-text {
              font-size: 16px;
              text-align: center;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Highlight.defaultProps = {
  description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  title: 'Everything you get with Finbest',
}

Highlight.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Highlight
