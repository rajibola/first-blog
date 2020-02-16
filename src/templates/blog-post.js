import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div
        style={{
          display: `grid`,
          gridAutoRows: `minmax(5rem,  auto)`,
          gridTemplateColumns: `1fr 1fr`,
        }}
      >
        <Img
          fluid={featuredImgFluid}
          className="header"
          style={{
            marginBottom: `1rem`,
            background: `linear-gradient(.25turn, #e66465, #9198e5)`,
            height: `10rem`,
            gridRow: `1/3`,
            gridColumn: `1/3`,
          }}
        />
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `7rem auto`,
            height: `10rem`,
            paddingTop: `1.5rem`,
            marginBottom: `1.6rem`,
            gridRow: `2/4`,
            gridColumn: `1/3`,
            zIndex: `2`,
            background: `linear-gradient(to bottom, rgba(255,255,255,.0), rgba(255,255,255,.9),rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1))`,
            alignItems: `center`,
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
              boxShadow: `0 1.665rem 2.5rem 0 rgba(62,136,91,.1),
            0 .335rem .335rem 0 rgba(62,136,91,.1),
            0 .167rem .167rem 0 rgba(62,136,91,1)`,
            }}
          />
          <div>
            <h2
              style={{
                fontWeight: `400`,
                marginBottom: `.25rem`,
                fontSize: `1.3rem`,
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
        <div
          style={{
            gridColumn: `1/3`,
            gridRow: `4/5`,
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
