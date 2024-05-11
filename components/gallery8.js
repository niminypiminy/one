import React from 'react'

import PropTypes from 'prop-types'

const Gallery8 = (props) => {
  return (
    <>
      <div
        className={`gallery8-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="gallery8-max-width thq-section-max-width">
          <div className="gallery8-section-title">
            <h2 className="gallery8-text thq-heading-2">{props.heading1}</h2>
            <span className="gallery8-text1 thq-body-large">
              {props.content1}
            </span>
          </div>
          <div className="gallery8-container">
            <div className="gallery8-content">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="gallery8-slider swiper"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                  <div
                    data-thq="slider-slide"
                    className="gallery8-slider-slide swiper-slide"
                  >
                    <img
                      alt={props.image1Alt}
                      src={props.image1Src}
                      className="gallery8-image thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery8-slider-slide1 swiper-slide"
                  >
                    <img
                      alt={props.image2Alt}
                      src={props.image2Src}
                      className="gallery8-image1 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery8-slider-slide2 swiper-slide"
                  >
                    <img
                      alt={props.image3Alt}
                      src={props.image3Src}
                      className="gallery8-image2 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-button-prev"
                  className="swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="swiper-button-next"
                ></div>
                <div
                  data-thq="slider-pagination"
                  className="gallery8-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery8-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .gallery8-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery8-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery8-text {
            text-align: center;
          }
          .gallery8-text1 {
            text-align: center;
          }
          .gallery8-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery8-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery8-slider {
            width: 100%;
            height: 770px;
            display: inline-block;
          }
          .gallery8-slider-slide {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery8-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery8-slider-slide1 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery8-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery8-slider-slide2 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery8-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery8-slider-pagination {
            display: block;
          }
          @media (max-width: 991px) {
            .gallery8-content {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .gallery8-section-title {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .gallery8-slider {
              height: 550px;
            }
          }
          @media (max-width: 479px) {
            .gallery8-slider {
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery8.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  heading1: 'Photo Gallery',
  image3Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image1Alt: 'image',
  image2Alt: 'image',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1400',
  image3Alt: 'image',
  rootClassName: '',
}

Gallery8.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.string,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Gallery8
