import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000`,
      marginBottom: `0`,
      fontWeight: `100`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `grid`,
        gridTemplateColumns: `4fr 2fr`,
      }}
    >
      <h1 style={{ margin: `0`, fontWeight: `400` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: `Segoe UI`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul
          style={{
            color: `white`,
            display: `flex`,
            flexWrap: `wrap`,
            listStyleType: `none`,
            justifyContent: `flex-end`,
            margin: `0`,
            alignItems: `flex-end`,
            height: `100%`,
            padding: `0`,
            fontWeight: `100`,
            fontSize: `.9rem`,
          }}
        >
          <li>
            {" "}
            <Link
              to="/about"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `Segoe UI`,
              }}
            >
              About
            </Link>{" "}
          </li>
          <li> | </li>
          <li>
            {" "}
            <Link
              to="/services"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `Segoe UI`,
              }}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
