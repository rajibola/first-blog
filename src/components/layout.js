/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          background: `#000`,
          color: `white`,
          textDecoration: `none`,
          textAlign: `center`,
          display: `flex`,
          justifyContent: `center`,
          flexWrap: `wrap`,
        }}
      >
        <div
          style={{
            width: `20rem`,
            margin: `1.5rem`,
            height: `auto`,
            // border: `2px solid black`,
            alignContent: `center`,
          }}
        >
          Al-Manhajus Salafiyy © {new Date().getFullYear()}, <div> </div>
          <div>
            <a>Developed By RAO Dev </a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
