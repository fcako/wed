import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import Footer from "./footer"
import backgroundImage from "../images/white-background.jpg"

const Layout = ({ top, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        {top ? <></> : <Header></Header>}
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </Div>
  )
}

export default Layout

const Div = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
`
