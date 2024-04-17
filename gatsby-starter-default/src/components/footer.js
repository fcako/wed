import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { LINE } from "./const"

const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "100px",
        }}
      ></div>
      <footer
        style={{
          position: "absolute",
          marginTop: `32px`,
          fontSize: `var(--font-sm)`,
          textAlign: "center",
          bottom: "0",
          height: "63px",
          width: "100%",
          padding: "0px 32px 0px 32px",
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      >
        <Container>
          <Link to="/">Home</Link>
          <Link to="/developpers">About Site</Link>
        </Container>
        <A href={LINE}>
          <StaticImage
            src="../images/LINE_Brand_icon.png"
            width={20}
            placeholder="blurred"
            alt="line"
          ></StaticImage>
          公式ライン
        </A>
        <A href="https://github.com/fcako/wed">
          <StaticImage
            src="../images/github-mark.png"
            width={20}
            placeholder="blurred"
            alt="Github"
          ></StaticImage>
          Github
        </A>
        <A href="https://conrad-tokyo.hiltonjapan.co.jp/">
          <StaticImage
            src="../images/conrad.png"
            width={20}
            placeholder="blurred"
            alt="Conrad"
          ></StaticImage>
          コンラッド東京
        </A>
        <br />© 2024 &middot; Built by 新郎{" "}
      </footer>
    </>
  )
}

export default Footer

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const A = styled.a`
  padding-right: 1em;
`
