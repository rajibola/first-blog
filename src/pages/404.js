import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        width: `100%`,
        height: `90vh`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <SEO title="404: Not found" />
      <h1
        style={{
          display: `block`,
          fontWeight: `100`,
          width: `100vw`,
          textAlign: `center`,
          backgroundImage: `gradient(to right rgba(255,250,200, .3), rgba(230,240,210, .9))`,
        }}
      >
        404 | NOT FOUND
      </h1>

      <p>
        You just hit a route that doesn&#39;t exist... the people of innovation
        are everywhere.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
