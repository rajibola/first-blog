import React from "react"
import { nominalTypeHack } from "prop-types"
import { Link } from "gatsby"

const Menu = () => (
  <div>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        fontFamily: `"Futura PT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </ul>
  </div>
)

export default Menu
