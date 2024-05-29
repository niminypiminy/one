import React from 'react'

import PropTypes from 'prop-types'

const BlogPostHeader64 = (props) => {
  return (
    <>
      <div className="blog-post-header64-blog-post-header3 thq-section-padding">
        <div className="blog-post-header64-max-width thq-section-max-width">
          <div className="blog-post-header64-breadcrumbs">
            <span className="blog-post-header64-category thq-body-small">
              {props.category}
            </span>
          </div>
          <div className="blog-post-header64-content thq-flex-column">
            <h1 className="blog-post-header64-title thq-heading-1">
              {props.blogPostTitle}
            </h1>
            <span className="blog-post-header64-read-time thq-body-small">
              {props.readTime}
            </span>
            <div className="blog-post-header64-content1">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header64-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header64-author">
                <span className="thq-body-small">Written by</span>
                <span className="thq-body-small">{props.avatarName}</span>
              </div>
              <div className="blog-post-header64-time">
                <span className="thq-body-small">{props.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header64-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header64-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header64-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header64-category {
            text-align: center;
          }
          .blog-post-header64-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header64-title {
            text-align: center;
          }
          .blog-post-header64-read-time {
            text-align: center;
          }
          .blog-post-header64-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header64-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .blog-post-header64-author {
            gap: var(--dl-space-space-halfunit);
            display: flex;
          }
          .blog-post-header64-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

BlogPostHeader64.defaultProps = {
  date: '23 March 2024',
  avatarName: 'Full name',
  blogPostTitle: 'Latest Blog Posts',
  readTime: '5 min read',
  avatarImageAlt: 'PlaceholderImage3501',
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=200',
  category: 'Category',
}

BlogPostHeader64.propTypes = {
  date: PropTypes.string,
  avatarName: PropTypes.string,
  blogPostTitle: PropTypes.string,
  readTime: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  category: PropTypes.string,
}

export default BlogPostHeader64
