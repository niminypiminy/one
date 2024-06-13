import React from 'react'

import PropTypes from 'prop-types'

const Testimonial1 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial1-max-width thq-section-max-width">
          <img
            alt={props.company1LogoAlt}
            src={props.company1LogoSrc}
            className="testimonial1-logo"
          />
          <p className="testimonial1-text thq-body-large">{props.review1}</p>
          <div className="testimonial1-avatar">
            <img
              alt={props.author1Alt}
              src={props.author1Src}
              className="testimonial1-avatar-image thq-img-round thq-img-ratio-1-1"
            />
            <div className="testimonial1-avatar-content">
              <span className="testimonial1-text1 thq-body-small">
                {props.author1Name}
              </span>
              <span className="testimonial1-text2 thq-body-small">
                {props.author1Position}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial1-logo {
            height: 2rem;
          }
          .testimonial1-text {
            text-align: center;
          }
          .testimonial1-avatar {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial1-avatar-image {
            width: 56px;
            height: 56px;
          }
          .testimonial1-avatar-content {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial1-text1 {
            text-align: center;
            font-weight: 600;
          }
          .testimonial1-text2 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Testimonial1.defaultProps = {
  company1LogoAlt: 'Company Logo',
  review1:
    'Choose from our variety of pricing plans, including Basic, Business, and Enterprise subscriptions, each offering a range of features. Start today!',
  author1Alt: 'Author Avatar',
  author1Name: 'Author Name',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Position: 'Position, Company name',
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=300',
}

Testimonial1.propTypes = {
  company1LogoAlt: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Name: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author1Position: PropTypes.string,
  author1Src: PropTypes.string,
}

export default Testimonial1
