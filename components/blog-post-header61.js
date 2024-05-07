import React from 'react'

import PropTypes from 'prop-types'

const BlogPostHeader61 = (props) => {
  return (
    <>
      <div className="blog-post-header61-blog-post-header3 thq-section-padding">
        <div className="blog-post-header61-max-width thq-section-max-width">
          <div className="blog-post-header61-breadcrumbs">
            <span className="blog-post-header61-category thq-body-small">
              {props.category}
            </span>
          </div>
          <div className="blog-post-header61-content thq-flex-column">
            <h1 className="blog-post-header61-title thq-heading-1">
              {props.blogPostTitle}
            </h1>
            <span className="blog-post-header61-read-time thq-body-small">
              {props.readTime}
            </span>
            <div className="blog-post-header61-content1">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header61-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header61-author">
                <span className="blog-post-header61-text thq-body-small">
                  Written by
                </span>
                <span className="blog-post-header61-text1 thq-body-small">
                  {props.avatarName}
                </span>
              </div>
              <div className="blog-post-header61-time">
                <span className="blog-post-header61-date thq-body-small">
                  {props.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header61-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header61-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header61-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header61-category {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-post-header61-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header61-title {
            text-align: center;
            font-family: 'Josefin Sans';
          }
          .blog-post-header61-read-time {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-post-header61-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header61-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-header61-author {
            gap: var(--dl-space-space-halfunit);
            display: flex;
          }
          .blog-post-header61-text {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 200;
          }
          .blog-post-header61-text1 {
            font-size: 1.2rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
          }
          .blog-post-header61-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .blog-post-header61-date {
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

BlogPostHeader61.defaultProps = {
  blogPostTitle: 'Latest Blog Posts',
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=200',
  avatarImageAlt: 'PlaceholderImage3501',
  avatarName: 'Full name',
  date: '23 March 2024',
  category: 'Category',
  readTime: '5 min read',
}

BlogPostHeader61.propTypes = {
  blogPostTitle: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  avatarName: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  readTime: PropTypes.string,
}

export default BlogPostHeader61
