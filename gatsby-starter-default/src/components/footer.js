import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const moreLinks = [
  { text: "公式LINE", url: "https://lin.ee/qx48ivn" },
  {
    text: "コンラッド東京",
    url: "https://conrad-tokyo.hiltonjapan.co.jp/",
  },
  {
    text: "GitHub",
    url: "https://github.com/fcako/wed",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

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
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
      <br />© 2024 &middot; Built by 新郎{" "}
    </footer>
  )
}

export default Footer

const Div = styled.div`
  text-align: left;
`
