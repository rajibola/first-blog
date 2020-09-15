import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #2a2735;
  font-weight: 400;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        fontWeight: `400`,
        textAlign: `center`,
        padding: `1rem`,
      }}
    >
      Salafi's Methodology <small>{data.allMarkdownRemark.totalCount}</small>
    </h1>

    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={}>
          <div>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title}
                <div>
                  <small
                    style={{
                      borderBottom: `1px solid currentColor`,
                      fontWeight: `100`,
                    }}
                  >
                    {node.frontmatter.author}
                  </small>
                  <small
                    style={{
                      padding: `0 3px`,
                      color: `#0a0b3c`,
                      fontWeight: `100`,
                    }}
                  >
                    - {node.frontmatter.date}
                  </small>
                  <small
                    style={{
                      margin: `10px`,
                      padding: `0 3px`,
                    }}
                  >
                    {node.frontmatter.description}
                  </small>
                </div>
              </BlogTitle>
              <p>{node.excerpt}</p>
              <div
                style={{
                  fontWeight: `bold`,
                  fontSize: `0.800rem`,
                  borderBottom: `1px solid currentColor`,
                  paddingBottom: `-1`,
                  marginBottom: `1rem`,
                  display: `inline-block`,
                  marginRight: `.25rem`,
                }}
              >
                Read More
              </div>
              <span>&rarr;</span>
            </BlogLink>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "new.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date(fromNow: true)
            author
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
