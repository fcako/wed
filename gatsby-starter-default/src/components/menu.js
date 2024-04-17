import React from "react"
import { Link } from "gatsby"
import "./menu.css"

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
    // url: "/coming",
    url: "/profile",
  },
  {
    text: "Your Message",
    url: "/message",
  },
  {
    text: "Count Down",
    url: "/countdown",
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
