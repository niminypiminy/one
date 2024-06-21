import React from 'react'

import PropTypes from 'prop-types'

const Card1 = (props) => {
  return (
    <>
      <section className={`card1-card ${props.rootClassName} `}>
        <div className="card1-icon"></div>
        <main className="card1-content">
          <h1 className="card1-header">{props.header}</h1>
          <p className="card1-description">{props.description}</p>
        </main>
      </section>
      <style jsx>
        {`
          .card1-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #1b1b1b;
          }
          .card1-icon {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-color4);
          }
          .card1-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card1-header {
            color: rgb(255, 255, 255);
            font-size: 2rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 36px;
          }
          .card1-description {
            color: #c2c6cc;
            font-size: 1.5rem;
            font-style: normal;
            font-family: Josefin Sans;
            font-weight: 200;
            line-height: 28px;
          }
          @media (max-width: 1600px) {
            .card1-description {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Josefin Sans;
              font-weight: 200;
            }
          }
        `}
      </style>
    </>
  )
}

Card1.defaultProps = {
  iconAlt: 'image',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  header: 'Sima Mosbacher',
  icon: '91ade7ad-fb9a-42df-85f5-68cb2e1dc42d',
}

Card1.propTypes = {
  iconAlt: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  icon: PropTypes.string,
}

export default Card1
