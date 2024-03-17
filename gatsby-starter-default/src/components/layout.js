import * as React from "react"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import Footer from "./footer"
import backgroundImage from "../images/white-background.jpg"

const Layout = ({ top, children }) => {
  return (
    <Div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          //   padding: `var(--size-gutter)`,
          padding: "0px 32px 0px 32px",
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
