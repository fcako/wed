import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import styled from "styled-components"
import ImageSlider from "../components/swiper"
import Menu from "../components/menu"
import { SHINRO, SHIMPU } from "../components/const"

const IndexPage = () => (
  <div>
    <Layout top={true}>
      <Container className={styles.textCenter}>
        <ImageSlider />
      </Container>
      <Div>
        このたび私たちは
        <br />
        結婚式を挙げることとなりました
        <br /> <br />
        つきましては
        <br />
        日頃の感謝の気持ちを込めて
        <br />
        心ばかりのパーティを開催いたします
        <br />
        ご多用中のこととは思いますが
        <br />
        是非ご参加いただきたく
        <br />
        ご案内申し上げました
        <br />
        <br />
        多くの友人と楽しい時間を過ごしたい
        <br />
        と思っておりますので
        <br />
        ぜひご参加くださいますよう
        <br />
        お願い申し上げます
        <br />
        皆様方にお会いできるのを
        <br />
        楽しみにしております
        <br /> <br />
        出欠のお知らせは以下の
        <br />
        招待状(Invitation)ページより
        <br />
        お願い申し上げます
        <br />
        <br />
        {SHINRO}　{SHIMPU}
      </Div>
      <Menu />
    </Layout>
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

const ImgDiv = styled.div`
  width: 100%;
  padding: 0;
`

const Div = styled.div`
  text-align: center;
  margin-top: 1em;
  padding: 10px;
  background-color: rgba(255, 230, 230, 0.5);
`

const Container = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`
