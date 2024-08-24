import * as React from "react"
import Seo from "../components/seo"
import { SHINRO, SHIMPU } from "../components/const"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const ProfilePage = () => (
  <Layout>
    <h1>Our Profile</h1>
    <div>
      お互いに相手のプロフィールを
      <br />
      勝手に書きました
      <br /> <br />
    </div>
    <Container id="container">
      <Name1>{SHINRO}</Name1>
      <Name2>{SHIMPU}</Name2>
      <Face1>
        <StaticImage
          src="../images/yuji-face.png"
          width={80}
          placeholder="blurred"
          alt="yuji-face"
        ></StaticImage>
      </Face1>
      <Face2>
        <StaticImage
          src="../images/sao-face.png"
          width={80}
          placeholder="blurred"
          alt="sao-face"
        ></StaticImage>
      </Face2>
      <Empty0></Empty0>

      <Question idx={0}>好きな食べ物ベスト3は？</Question>
      <Answer1 idx={0}>
        ナン，みかん，
        <br />
        私が作った炊き込みご飯
      </Answer1>
      <Answer2 idx={0}>
        納豆，スコーン，
        <br />
        僕が作った麻婆豆腐
      </Answer2>
      <Empty idx={0}></Empty>

      <Question idx={1}>チャームポイントは？</Question>
      <Answer1 idx={1}>ふわふわのぽんぽ</Answer1>
      <Answer2 idx={1}>ふわふわの顎下</Answer2>
      <Empty idx={1}></Empty>

      <Question idx={2}>趣味は？</Question>
      <Answer1 idx={2}>にゃんこ大戦争</Answer1>
      <Answer2 idx={2}>物件情報を見ること</Answer2>
      <Empty idx={2}></Empty>

      <Question idx={3}>敵は？</Question>
      <Answer1 idx={3}>
        メリーゴーランド
        <br />
        （酔うから）
      </Answer1>
      <Answer2 idx={3}>虫</Answer2>
      <Empty idx={3}></Empty>

      <Question idx={4}>特技は？</Question>
      <Answer1 idx={4}>すぐ寝てすぐ起きること</Answer1>
      <Answer2 idx={4}>いつまでも寝ること</Answer2>
      <Empty idx={4}></Empty>

      <Question idx={5}>一番盛れてる写真は？</Question>
      <Answer1 idx={5}>
        <ImageFrame>
          <StaticImage
            src="../images/moreyuji.jpg"
            alt="sao-face"
          ></StaticImage>
        </ImageFrame>
      </Answer1>
      <Answer2 idx={5}>
        <ImageFrame>
          <StaticImage src="../images/moresao.jpg" alt="sao-face"></StaticImage>
        </ImageFrame>
      </Answer2>
      <Empty idx={5}></Empty>
    </Container>
  </Layout>
)
export const Head = () => <Seo title="Profile" />

export default ProfilePage

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`

const Name1 = styled.div`
  grid-row: 1;
  grid-column: 1;
  background: #c0c0c0;
  font-size: x-large;
  font-weight: bold;
`

const Name2 = styled.div`
  grid-row: 1;
  grid-column: 2;
  background: #c0c0c0;
  font-size: x-large;
  font-weight: bold;
`
const Face1 = styled.div`
  grid-row: 2;
  grid-column: 1;
  background: #e6e6fa;
`
const Face2 = styled.div`
  grid-row: 2;
  grid-column: 2;
  background: #faebd7;
`

const Question = styled.div`
  grid-row: ${props => props.idx * 3 + 4};
  grid-column: 1 / 3;
  background: #c0c0c0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: bold;
`
const Answer1 = styled.div`
  grid-row: ${props => props.idx * 3 + 5};
  grid-column: 1;
  background: #e6e6fa;
  border-bottom-left-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 10px;
`
const Answer2 = styled.div`
  grid-row: ${props => props.idx * 3 + 5};
  grid-column: 2;
  background: #faebd7;
  border-bottom-right-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 10px;
`

const Empty0 = styled.div`
  min-height: 10px;
  margin-top: 10px;
`

const Empty = styled.div`
  grid-row: ${props => props.idx * 3 + 6};
  grid-column: 1 / 3;
  min-height: 10px;
  margin-top: 10px;
`

const ImageFrame = styled.div`
  margin: 10px;
`
