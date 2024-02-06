import React from "react"
import { Link } from "gatsby"
import "./menu.css"
import styled from "styled-components"

const links = [
  {
    text: "Detail",
    url: "/detail",
  },
  {
    text: "Invitation",
    url: "/invitation",
  },
  {
    text: "Our Profile",
    url: "/coming",
  },
  {
    text: "For Developpers",
    url: "/developpers",
  },
]

const Menu = () => (
  <div className="container">
    {links.map(link => (
      <Link className="item" key={link.url} to={link.url}>
        {link.text}
      </Link>
    ))}
  </div>
)

export default Menu
