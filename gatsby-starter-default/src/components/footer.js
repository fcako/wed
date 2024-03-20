import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { LINE } from "./const"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
        textAlign: "center",
        bottom: "0",
      }}
    >
      <Div>
        <Link to="/">Home</Link>
      </Div>
      <a href={LINE}>
        <StaticImage
          src="../images/LINE_Brand_icon.png"
          width={20}
          placeholder="blurred"
          alt="line"
        ></StaticImage>
        公式ライン
      </a>
      <a href="https://github.com/fcako/wed">
        <StaticImage
          src="../images/github-mark.png"
          width={20}
          placeholder="blurred"
          alt="Github"
        ></StaticImage>
        Github
      </a>
      <a href="https://conrad-tokyo.hiltonjapan.co.jp/">
        <StaticImage
          src="../images/conrad.png"
          width={20}
          placeholder="blurred"
          alt="Conrad"
        ></StaticImage>
        コンラッド東京
      </a>
      <br />© 2024 &middot; Built by 新郎{" "}
    </footer>
  )
}

export default Footer

const Div = styled.div`
  text-align: left;
`
