import React from 'react'

import PropTypes from 'prop-types'

const BlogPostHeader67 = (props) => {
  return (
    <>
      <div className="blog-post-header67-blog-post-header3 thq-section-padding">
        <div className="blog-post-header67-max-width thq-section-max-width">
          <div className="blog-post-header67-breadcrumbs">
            <span className="blog-post-header67-category thq-body-small">
              {props.category}
            </span>
          </div>
          <div className="blog-post-header67-content thq-flex-column">
            <h1 className="blog-post-header67-title thq-heading-1">
              {props.blogPostTitle}
            </h1>
            <span className="blog-post-header67-read-time thq-body-small">
              {props.readTime}
            </span>
            <div className="blog-post-header67-content1">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header67-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header67-author">
                <span className="thq-body-small">Written by</span>
                <span className="thq-body-small">{props.avatarName}</span>
              </div>
              <div className="blog-post-header67-time">
                <span className="thq-body-small">{props.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header67-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header67-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header67-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header67-category {
            text-align: center;
          }
          .blog-post-header67-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header67-title {
            text-align: center;
          }
          .blog-post-header67-read-time {
            text-align: center;
          }
          .blog-post-header67-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header67-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .blog-post-header67-author {
            gap: var(--dl-space-space-halfunit);
            display: flex;
          }
          .blog-post-header67-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

BlogPostHeader67.defaultProps = {
  avatarImageAlt: 'PlaceholderImage3501',
  avatarName: 'Full name',
  category: 'Category',
  readTime: '5 min read',
  date: '23 March 2024',
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=200',
  blogPostTitle: 'Latest Blog Posts',
}

BlogPostHeader67.propTypes = {
  avatarImageAlt: PropTypes.string,
  avatarName: PropTypes.string,
  category: PropTypes.string,
  readTime: PropTypes.string,
  date: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  blogPostTitle: PropTypes.string,
}

export default BlogPostHeader67
