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
    url: "/coming",
  },
  {
    text: "For Developpers",
    url: "/developpers",
  },
]

const Menu = () => (
  <div className="menu-container">
    <div className="menu-column">
      {links.slice(0, links.length / 2).map(link => (
        <Link key={link.url} to={link.url} className="menu-link">
          {link.text}
        </Link>
      ))}
    </div>
    <div className="menu-column">
      {links.slice(links.length / 2).map(link => (
        <Link key={link.url} to={link.url} className="menu-link">
          {link.text}
        </Link>
      ))}
    </div>
  </div>
)

export default Menu
