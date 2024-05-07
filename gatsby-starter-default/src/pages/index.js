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
        初夏の風もさわやかな今日この頃
        <br />
        皆様には <wbr />
        おすこやかにお過ごしのことと <wbr />
        お慶び申し上げます
        <br />
        さて このたび
        <br />
        私たちは <wbr />
        結婚式を挙げることになりました
        <br />
        日頃のご厚誼を感謝するとともに
        <br />
        末永いおつきあいをお願いしたく
        <br />
        ささやかながら
        <wbr />
        披露の小宴を催したいと存じます
        <br />
        ご多用中誠に恐縮ではございますが
        <br />
        ご出席くださいますよう <wbr />
        ご案内申し上げます
        <br /> <br />
        出欠のお知らせは以下の
        <br />
        招待状(Invitation)ページより
        <br />
        お願い申し上げます
        <br /> <br />
        2024年6月吉日
        <br />
        <br />
        {SHINRO}　{SHIMPU}
      </Div>
      <Menu />
    </Layout>
  </div>
)

export const Head = () => <Seo title="YujiAndSaoWedding" />

export default IndexPage

const Div = styled.div`
  text-align: center;
  margin-top: 1em;
  padding: 10px;
  background-color: rgba(255, 230, 230, 0.5);
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Container = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`
