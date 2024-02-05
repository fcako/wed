import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { LINE } from "./const"

const Footer = ({}) => {
  return (
    <footer
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
        textAlign: "center",
      }}
    >
      <Div>
        <Link to="/">Home</Link>
      </Div>
      <Link to={LINE}>
        <StaticImage
          src="../images/LINE_Brand_icon.png"
          width={20}
          placeholder="blurred"
        ></StaticImage>
        公式ライン
      </Link>
      ・
      <Link to="https://github.com/fcako/wed">
        <StaticImage
          src="../images/github-mark.png"
          width={20}
          placeholder="blurred"
        ></StaticImage>
        Github
      </Link>
      ・<Link to="https://conrad-tokyo.hiltonjapan.co.jp/">コンラッド東京</Link>
      <br />© 2024 &middot; Built by 新郎{" "}
    </footer>
  )
}

export default Footer

const Div = styled.div`
  text-align: left;
`
