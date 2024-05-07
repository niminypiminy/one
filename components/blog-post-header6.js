import React from 'react'

import PropTypes from 'prop-types'

const BlogPostHeader6 = (props) => {
  return (
    <>
      <div className="blog-post-header6-blog-post-header3 thq-section-padding">
        <div className="blog-post-header6-max-width thq-section-max-width">
          <div className="blog-post-header6-breadcrumbs">
            <span className="blog-post-header6-category thq-body-small">
              {props.category}
            </span>
          </div>
          <div className="blog-post-header6-content thq-flex-column">
            <h1 className="blog-post-header6-title thq-heading-1">
              {props.blogPostTitle}
            </h1>
            <span className="blog-post-header6-read-time thq-body-small">
              {props.readTime}
            </span>
            <div className="blog-post-header6-content1">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header6-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header6-author">
                <span className="thq-body-small">Written by</span>
                <span className="thq-body-small">{props.avatarName}</span>
              </div>
              <div className="blog-post-header6-time">
                <span className="thq-body-small">{props.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header6-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header6-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header6-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header6-category {
            text-align: center;
          }
          .blog-post-header6-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header6-title {
            text-align: center;
          }
          .blog-post-header6-read-time {
            text-align: center;
          }
          .blog-post-header6-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header6-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .blog-post-header6-author {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
          }
          .blog-post-header6-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

BlogPostHeader6.defaultProps = {
  avatarName: 'มานิตา สร้อยคีรี',
  date: '23 March 2024',
  blogPostTitle: 'Latest Blog Posts',
  avatarImageAlt: 'PlaceholderImage3501',
  category: 'Criminal Law',
  avatarImageSrc: '/photo_2024-04-29_08-16-34-1400w.jpg',
  readTime: '5 min read',
}

BlogPostHeader6.propTypes = {
  avatarName: PropTypes.string,
  date: PropTypes.string,
  blogPostTitle: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  category: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  readTime: PropTypes.string,
}

export default BlogPostHeader6
