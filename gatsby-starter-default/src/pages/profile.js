import * as React from "react"
import Seo from "../components/seo"
import { SHINRO, SHIMPU } from "../components/const"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const ProfilePage = () => (
  <Layout>
    <h1>プロフィール</h1>
    <Container id="container">
      <Name1>{SHINRO}</Name1>
      <Name2>{SHIMPU}</Name2>
      <Face1>
        <StaticImage
          src="../images/yuji-face.png"
          width={80}
          placeholder="blurred"
        ></StaticImage>
      </Face1>
      <Face2>
        <StaticImage
          src="../images/sao-face.png"
          width={80}
          placeholder="blurred"
        ></StaticImage>
      </Face2>
      <Question idx={0}>お互いの呼び方は？</Question>
      <Answer1 idx={0}>ぷえちゃん，よちこ，おっちゃん</Answer1>
      <Answer2 idx={0}>ぷえちゃん</Answer2>
      <Question idx={1}>好きな食べ物は？</Question>
      <Answer1 idx={1}>ナン</Answer1>
      <Answer2 idx={1}>納豆巻き</Answer2>
      <Question idx={2}>好きなクラシック曲は？</Question>
      <Answer1 idx={2}>ヒンデミットのアルトホルンソナタ</Answer1>
      <Answer2 idx={2}>チャイコフスキーのヴァイオリンコンチェルト</Answer2>
      <Question idx={3}>二人の思い出の場所は？</Question>
      <Answer1 idx={3}>沖縄</Answer1>
      <Answer2 idx={3}>としまえん</Answer2>
      <Question idx={4}>お互いの好きなところは？</Question>
      <Answer1 idx={4}>全部顔に出る</Answer1>
      <Answer2 idx={4}>ぷえぷえしてるところ</Answer2>
    </Container>
  </Layout>
)
export const Head = () => <Seo title="Profile" />

export default ProfilePage

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background: #f0f8ff;
  padding: 0;
  margein: 0;
`

const Name1 = styled.div`
  grid-row: 1;
  grid-column: 1;
  background: #d3d3d3;
  font-size: larger;
  padding: 5px 0px;
`

const Name2 = styled.div`
  grid-row: 1;
  grid-column: 2;
  background: #d3d3d3;
  font-size: larger;
  padding: 5px 0px;
`
const Face1 = styled.div`
  grid-row: 2;
  grid-column: 1;
`
const Face2 = styled.div`
  grid-row: 2;
  grid-column: 2;
`

const Question = styled.div`
  grid-row: ${props => props.idx * 2 + 3};
  grid-column: 1 / 3;
  background: #d3d3d3;
  padding: 5px 0px;
`
const Answer1 = styled.div`
  grid-row: ${props => props.idx * 2 + 4};
  grid-column: 1;
`
const Answer2 = styled.div`
  grid-row: ${props => props.idx * 2 + 4};
  grid-column: 2;
`
