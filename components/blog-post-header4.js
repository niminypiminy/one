import React from 'react'

import PropTypes from 'prop-types'

const BlogPostHeader4 = (props) => {
  return (
    <>
      <div className="blog-post-header4-content thq-section-padding">
        <div className="blog-post-header4-max-width thq-section-max-width">
          <div className="blog-post-header4-header">
            <div className="blog-post-header4-content1">
              <div className="blog-post-header4-breadcrumbs">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M658 316l-196 196 196 196-60 60-256-256 256-256z"></path>
                </svg>
                <span className="thq-body-small">
                  <span>All Posts</span>
                  <br></br>
                </span>
              </div>
              <div className="blog-post-header4-breadcrumbs1">
                <span className="thq-body-small">Technology</span>
                <span className="thq-body-small">
                  <span>10 min read</span>
                  <br></br>
                </span>
              </div>
              <h1 className="blog-post-header4-text07 thq-heading-1">
                {props.blogPostTitle}
              </h1>
            </div>
          </div>
          <img
            alt={props.blogPostImageAlt}
            src={props.blogPostImageSrc}
            className="blog-post-header4-image1 thq-img-ratio-16-9"
          />
          <div className="blog-post-header4-article">
            <h2 className="blog-post-header4-subtitle thq-heading-2">
              {props.blogPostSubtitle}
            </h2>
            <span className="blog-post-header4-article-body thq-body-small">
              {props.articleBody}
            </span>
            <button
              type="button"
              className="blog-post-header4-button thq-button-filled"
            >
              Read more
            </button>
            <div className="blog-post-header4-content2 thq-flex-row">
              <div className="blog-post-header4-avatar">
                <img
                  alt={props.avatarImageAlt}
                  src={props.avatarImageSrc}
                  className="blog-post-header4-author-image thq-img-round thq-img-ratio-1-1"
                />
                <div className="blog-post-header4-content3">
                  <span className="blog-post-header4-full-name thq-body-small">
                    {props.avatarName}
                  </span>
                  <div className="blog-post-header4-time">
                    <span className="thq-body-small">{props.date}</span>
                    <span className="thq-body-small">•</span>
                    <span className="thq-body-small">{props.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="blog-post-header4-share-buttons">
                <button className="thq-button-icon thq-button-filled">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M726 298q88 0 150 63t62 151-62 151-150 63h-172v-82h172q54 0 93-39t39-93-39-93-93-39h-172v-82h172zM342 554v-84h340v84h-340zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93z"></path>
                  </svg>
                </button>
                <button className="thq-button-icon thq-button-filled">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </button>
                <button className="thq-button-icon thq-button-filled">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </button>
                <button className="thq-button-icon thq-button-filled">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header4-content {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header4-max-width {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-header4-header {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .blog-post-header4-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-header4-breadcrumbs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header4-breadcrumbs1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header4-text07 {
            text-align: center;
          }
          .blog-post-header4-image1 {
            width: 100%;
            object-fit: cover;
          }
          .blog-post-header4-article {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-header4-subtitle {
            text-align: center;
          }
          .blog-post-header4-article-body {
            text-align: left;
          }
          .blog-post-header4-button {
            align-self: flex-end;
          }
          .blog-post-header4-content2 {
            align-self: stretch;
            align-items: center;
            justify-content: space-between;
          }
          .blog-post-header4-avatar {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .blog-post-header4-author-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .blog-post-header4-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-header4-full-name {
            font-weight: 600;
          }
          .blog-post-header4-time {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header4-share-buttons {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .blog-post-header4-article {
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
            }
            .blog-post-header4-subtitle {
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .blog-post-header4-article-body {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .blog-post-header4-button {
              align-self: center;
            }
            .blog-post-header4-content2 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .blog-post-header4-max-width {
              gap: var(--dl-space-space-threeunits);
            }
            .blog-post-header4-text07 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .blog-post-header4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .blog-post-header4-content1 {
              align-items: center;
            }
            .blog-post-header4-article {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .blog-post-header4-button {
              align-self: center;
            }
            .blog-post-header4-content2 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostHeader4.defaultProps = {
  readTime: '7min read',
  blogPostSubtitle: 'Awesome subtitle',
  date: '20 March 2024',
  avatarName: 'Full name',
  avatarImageAlt: 'PlaceholderImage3501',
  blogPostTitle: 'Awesome blog title',
  articleBody:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ....',
  blogPostImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=200',
  blogPostImageAlt: 'PlaceholderImage3501',
}

BlogPostHeader4.propTypes = {
  readTime: PropTypes.string,
  blogPostSubtitle: PropTypes.string,
  date: PropTypes.string,
  avatarName: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  blogPostTitle: PropTypes.string,
  articleBody: PropTypes.string,
  blogPostImageSrc: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  blogPostImageAlt: PropTypes.string,
}

export default BlogPostHeader4
