import React from 'react'

import PropTypes from 'prop-types'

const BlogPostHeader3 = (props) => {
  return (
    <>
      <div className="blog-post-header3-blog-post-header3 thq-section-padding">
        <div className="blog-post-header3-max-width thq-section-max-width">
          <div className="blog-post-header3-breadcrumbs">
            <span className="blog-post-header3-category thq-body-small">
              {props.category}
            </span>
          </div>
          <div className="blog-post-header3-content thq-flex-column">
            <h1 className="blog-post-header3-title thq-heading-1">
              {props.title}
            </h1>
            <span className="blog-post-header3-read-time thq-body-small">
              {props.readTime}
            </span>
            <div className="blog-post-header3-content1">
              <img
                alt={props.authorImageAlt}
                src={props.authorImageSrc}
                className="blog-post-header3-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header3-author">
                <span className="thq-body-small">{props.text}</span>
                <span className="thq-body-small">{props.text1}</span>
              </div>
              <div className="blog-post-header3-time">
                <span className="thq-body-small">{props.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header3-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header3-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header3-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header3-category {
            text-align: center;
          }
          .blog-post-header3-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header3-title {
            text-align: center;
          }
          .blog-post-header3-read-time {
            text-align: center;
          }
          .blog-post-header3-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header3-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .blog-post-header3-author {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
          }
          .blog-post-header3-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

BlogPostHeader3.defaultProps = {
  date: '4 May 2024',
  title: 'การดำเนินคดีอาญาในประเทศไทย',
  authorImageAlt: 'PlaceholderImage3501',
  authorImageSrc: '/photo_2024-04-29_08-16-34-1400w.jpg',
  readTime: '5 min read',
  category: 'Criminal Law',
  text1: 'มานิตา สร้อยคีรี',
  text: 'Written by',
}

BlogPostHeader3.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  authorImageAlt: PropTypes.string,
  authorImageSrc: PropTypes.string,
  readTime: PropTypes.string,
  category: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default BlogPostHeader3
