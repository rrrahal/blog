import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"

import { groupBy, getDateYear } from "../utils"

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: process?.env?.GATSBY_DD_APP_ID,
    clientToken: process?.env?.GATSBY_DD_CLIENT_TOKEN,
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'datadoghq.eu',
    service: 'personal-website-and-blog',
    env: 'prod',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'allow',
});

const IndexPage = ({ data }) => {
  // all posts without dates are assumed to be drafts or pages
  // not to be added to postsList
  const posts = data.allMarkdownRemark.edges.filter(
    p => p.node.frontmatter.date !== null
  )
  const postsList = posts =>
    posts.map(post => (
      <div className="posts-container" key={post.node.id}>
        <li>
          <div className="post-date code">
            <small>{post.node.frontmatter.date}</small>
          </div>
          <div className="title index-title">
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          </div>
          <div className="shortText">
            {post.node.frontmatter.shortText}
          </div>
        </li>
      </div>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div key={i}>
        {postsList(posts)}
      </div>
    ))
    .reverse()
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <section>
        <ul>{postsListContainer}</ul>
      </section>
    </DefaultLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YY")
            title
            shortText
          }
        }
      }
    }
  }
`
