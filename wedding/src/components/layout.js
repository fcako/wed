import * as React from 'react'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout