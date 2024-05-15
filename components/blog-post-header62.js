import React from 'react'

import PropTypes from 'prop-types'

const BlogPostHeader62 = (props) => {
  return (
    <>
      <div className="blog-post-header62-blog-post-header3 thq-section-padding">
        <div className="blog-post-header62-max-width thq-section-max-width">
          <div className="blog-post-header62-breadcrumbs">
            <span className="blog-post-header62-category thq-body-small">
              {props.category}
            </span>
          </div>
          <div className="blog-post-header62-content thq-flex-column">
            <h1 className="blog-post-header62-title thq-heading-1">
              {props.blogPostTitle}
            </h1>
            <span className="blog-post-header62-read-time thq-body-small">
              {props.readTime}
            </span>
            <div className="blog-post-header62-content1">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header62-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header62-author">
                <span className="blog-post-header62-text thq-body-small">
                  Written by
                </span>
                <span className="blog-post-header62-text1 thq-body-small">
                  {props.avatarName}
                </span>
              </div>
              <div className="blog-post-header62-time">
                <span className="blog-post-header62-date thq-body-small">
                  {props.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header62-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header62-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header62-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header62-category {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-post-header62-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header62-title {
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 400;
          }
          .blog-post-header62-read-time {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-post-header62-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header62-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-header62-author {
            gap: var(--dl-space-space-halfunit);
            display: flex;
          }
          .blog-post-header62-text {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-post-header62-text1 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-post-header62-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .blog-post-header62-date {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
        `}
      </style>
    </>
  )
}

BlogPostHeader62.defaultProps = {
  avatarName: 'Ulliam',
  category: 'Criminal Law',
  blogPostTitle: 'Defamation in Thailand',
  avatarImageAlt: 'PlaceholderImage3501',
  avatarImageSrc: '/oig4-1400w.jpg',
  readTime: '5 min read',
  date: '15 May 2024',
}

BlogPostHeader62.propTypes = {
  avatarName: PropTypes.string,
  category: PropTypes.string,
  blogPostTitle: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  readTime: PropTypes.string,
  date: PropTypes.string,
}

export default BlogPostHeader62
