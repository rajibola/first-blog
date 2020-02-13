import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"
import "./blog-post.css"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div>
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `7rem auto`,
            paddingTop: `1rem`,
          }}
        >
          <Img
            fluid={featuredImgFluid}
            className="header"
            style={{
              zIndex: `0`,
              marginBottom: `1rem`,
              height: `6rem`,
              width: `6rem`,
              borderRadius: `50%`,
            }}
          />
          <div>
            <h2
              style={{
                fontWeight: `400`,
                marginBottom: `.25rem`,
                fontStyle: `italic`,
                color: `green`,
              }}
            >
              {post.frontmatter.title}
            </h2>

            <h6>
              {post.frontmatter.author}
              <span style={{ fontWeight: `100` }}>
                {" "}
                - {post.frontmatter.date}
              </span>
            </h6>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(fromNow: true)
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
