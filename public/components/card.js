import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <div className="card-card card">
        <div className="card-header">
          <img alt="image" src={props.icon} className="card-icon" />
          <h3 className="card-heading">{props.title}</h3>
        </div>
        <p className="card-text">{props.description}</p>
      </div>
      <style jsx>
        {`
          .card-card {
            position: relative;
          }
          .card-header {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card-icon {
            height: 50px;
            object-fit: cover;
          }
          .card-heading {
            color: rgb(18, 40, 33);
            font-size: 24px;
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .card-text {
            color: rgb(18, 40, 33);
            max-width: 600px;
            font-family: Lato;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  icon: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  title: 'High-impact business services',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Card
