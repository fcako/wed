import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const AccessPage = () => {
  const [station, setStation] = useState("")
  const handleClick = name => {
    if (station === name) {
      setStation("")
    } else {
      setStation(name)
    }
  }

  return (
    <Layout>
      <h1>Access</h1>
      <div>
        最寄りの各駅から屋外に出ずに
        <br />
        会場まで行けますが
        <br />
        道順が難しいので
        <br />
        ぜひこちらを参考にしてください
      </div>
      <Div>
        <Container>
          <Title onClick={() => handleClick("JR")}>JR線 新橋駅から (8分)</Title>
          {station === "JR" ? (
            <Mark onClick={() => handleClick("JR")}>－</Mark>
          ) : (
            <Mark onClick={() => handleClick("JR")}>+</Mark>
          )}
          {station === "JR" && <JRRoute></JRRoute>}
        </Container>
        <Container>
          <Title onClick={() => handleClick("Ginza")}>
            銀座線 新橋駅から (10分)
          </Title>
          {station === "Ginza" ? (
            <Mark onClick={() => handleClick("Ginza")}>－</Mark>
          ) : (
            <Mark onClick={() => handleClick("Ginza")}>+</Mark>
          )}
          {station === "Ginza" && <GinzaRoute></GinzaRoute>}
        </Container>
        <Container>
          <Title onClick={() => handleClick("Asakusa")}>
            都営浅草線 新橋駅から (7分)
          </Title>
          {station === "Asakusa" ? (
            <Mark onClick={() => handleClick("Asakusa")}>－</Mark>
          ) : (
            <Mark onClick={() => handleClick("Asakusa")}>+</Mark>
          )}
          {station === "Asakusa" && <AsakusaRoute></AsakusaRoute>}
        </Container>
        <Container>
          <Title onClick={() => handleClick("Oedo")}>
            都営大江戸線 汐留駅から (2分)
          </Title>
          {station === "Oedo" ? (
            <Mark onClick={() => handleClick("Oedo")}>－</Mark>
          ) : (
            <Mark onClick={() => handleClick("Oedo")}>+</Mark>
          )}
          {station === "Oedo" && <OedoRoute></OedoRoute>}
        </Container>
        <Container>
          <Title onClick={() => handleClick("Yurikamome")}>
            ゆりかもめ 汐留駅から (2分)
          </Title>
          {station === "Yurikamome" ? (
            <Mark onClick={() => handleClick("Yurikamome")}>－</Mark>
          ) : (
            <Mark onClick={() => handleClick("Yurikamome")}>+</Mark>
          )}
          {station === "Yurikamome" && <YurikamomeRoute></YurikamomeRoute>}
        </Container>
      </Div>
      <StaticImage src="../images/conradmap.jpg" alt="conradmap"></StaticImage>
    </Layout>
  )
}

export const JRRoute = () => (
  <Route>
    <ImageString>
      <StaticImage src="../images/jr0.png" alt="jr0"></StaticImage>
      <String>
        <Red>汐留地下改札</Red>を出ます
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr1.png" alt="jr1"></StaticImage>
      <String>右斜め前に向かいます</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr2.png" alt="jr2"></StaticImage>
      <String>ユニクロのある汐留方向です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr3.png" alt="jr3"></StaticImage>
      <String>突き当りを右に曲がります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr4.png" alt="jr4"></StaticImage>
      <String>すぐに突き当たりを左に曲がります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr5.png" alt="jr5"></StaticImage>
      <String>
        浅草線の改札に行きそうな雰囲気ですが惑わされずに階段を下ります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr6.png" alt="jr6"></StaticImage>
      <String>ここからしばらく直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa2.png" alt="asakusa2"></StaticImage>
      <String>汐留方面に直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa3.png" alt="asakusa3"></StaticImage>
      <String>PLAZAの横を通り過ぎてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa4.png" alt="asakusa4"></StaticImage>
      <String>Wattsの横を通り過ぎてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa5.png" alt="asakusa5"></StaticImage>
      <String>都営大江戸線の方向に右折します</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa6.png" alt="asakusa6"></StaticImage>
      <String>またまたしばらく直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa7.png" alt="asakusa7"></StaticImage>
      <String>エスカレーターを下りてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo3.png" alt="oedo3"></StaticImage>
      <String>エスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo4.png" alt="oedo4"></StaticImage>
      <String>
        エスカレーターを上ったらすぐ左の東京汐留ビルディングに入ります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo5.png" alt="oedo5"></StaticImage>
      <String>目の前のエスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo6.png" alt="oedo6"></StaticImage>
      <String>
        エスカレーターを降りたらすぐ左にコンラッド東京の入り口があります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo7.png" alt="oedo7"></StaticImage>
      <String>コンラッド東京に入ったら右奥の通路を進んでください</String>
    </ImageString>
  </Route>
)

export const GinzaRoute = () => (
  <Route>
    <ImageString>
      <StaticImage src="../images/ginza0.png" alt="ginza0"></StaticImage>
      <String>
        <Red>出口4</Red>の方面の改札を出ます
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/ginza1.png" alt="ginza1"></StaticImage>
      <String>出口4の方向に向かいます</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/ginza2.png" alt="ginza2"></StaticImage>
      <String>短い階段を上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/ginza3.png" alt="ginza3"></StaticImage>
      <String>まっすぐJR汐留地下改札の方向に向かいます</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/ginza4.png" alt="ginza4"></StaticImage>
      <String>引き続きまっすぐJR汐留地下改札の方向に向かいます</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/ginza5.png" alt="ginza5"></StaticImage>
      <String>
        JR汐留地下改札から見て正面（進行方向に対して左側）を向きます
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr2.png" alt="jr2"></StaticImage>
      <String>右斜め前のユニクロのある汐留方向に進みます</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr3.png" alt="jr3"></StaticImage>
      <String>突き当りを右に曲がります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr4.png" alt="jr4"></StaticImage>
      <String>すぐに突き当たりを左に曲がります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr5.png" alt="jr5"></StaticImage>
      <String>
        浅草線の改札に行きそうな雰囲気ですが惑わされずに階段を下ります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/jr6.png" alt="jr6"></StaticImage>
      <String>ここからしばらく直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa2.png" alt="asakusa2"></StaticImage>
      <String>汐留方面に直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa3.png" alt="asakusa3"></StaticImage>
      <String>PLAZAの横を通り過ぎてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa4.png" alt="asakusa4"></StaticImage>
      <String>Wattsの横を通り過ぎてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa5.png" alt="asakusa5"></StaticImage>
      <String>都営大江戸線の方向に右折します</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa6.png" alt="asakusa6"></StaticImage>
      <String>またまたしばらく直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa7.png" alt="asakusa7"></StaticImage>
      <String>エスカレーターを下りてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo3.png" alt="oedo3"></StaticImage>
      <String>エスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo4.png" alt="oedo4"></StaticImage>
      <String>
        エスカレーターを上ったらすぐ左の東京汐留ビルディングに入ります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo5.png" alt="oedo5"></StaticImage>
      <String>目の前のエスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo6.png" alt="oedo6"></StaticImage>
      <String>
        エスカレーターを降りたらすぐ左にコンラッド東京の入り口があります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo7.png" alt="oedo7"></StaticImage>
      <String>コンラッド東京に入ったら右奥の通路を進んでください</String>
    </ImageString>
  </Route>
)

export const AsakusaRoute = () => (
  <Route>
    <ImageString>
      <StaticImage src="../images/asakusa0.png" alt="asakusa0"></StaticImage>
      <String>
        <Red>汐留方面</Red>の改札を出ます
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa1.png" alt="asakusa1"></StaticImage>
      <String>まっすぐ進んで大きな通路に出たら右に曲がります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa2.png" alt="asakusa2"></StaticImage>
      <String>汐留方面に直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa3.png" alt="asakusa3"></StaticImage>
      <String>PLAZAの横を通り過ぎてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa4.png" alt="asakusa4"></StaticImage>
      <String>Wattsの横を通り過ぎてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa5.png" alt="asakusa5"></StaticImage>
      <String>都営大江戸線の方向に右折します</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa6.png" alt="asakusa6"></StaticImage>
      <String>またまたしばらく直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/asakusa7.png" alt="asakusa7"></StaticImage>
      <String>エスカレーターを下りてまだ直進です</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo3.png" alt="oedo3"></StaticImage>
      <String>エスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo4.png" alt="oedo4"></StaticImage>
      <String>
        エスカレーターを上ったらすぐ左の東京汐留ビルディングに入ります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo5.png" alt="oedo5"></StaticImage>
      <String>目の前のエスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo6.png" alt="oedo6"></StaticImage>
      <String>
        エスカレーターを降りたらすぐ左にコンラッド東京の入り口があります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo7.png" alt="oedo7"></StaticImage>
      <String>コンラッド東京に入ったら右奥の通路を進んでください</String>
    </ImageString>
  </Route>
)

export const OedoRoute = () => (
  <Route>
    <ImageString>
      <StaticImage src="../images/oedo0.png" alt="oedo0"></StaticImage>
      <String>
        <Red>出口7~10方面</Red>の改札を出ます
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo1.png" alt="oedo1"></StaticImage>
      <String>左前の通路を進んでください</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo2.png" alt="oedo2"></StaticImage>
      <String>広い通路に出たらUターンします</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo3.png" alt="oedo3"></StaticImage>
      <String>エスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo4.png" alt="oedo4"></StaticImage>
      <String>
        エスカレーターを上ったらすぐ左の東京汐留ビルディングに入ります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo5.png" alt="oedo5"></StaticImage>
      <String>目の前のエスカレーターを上ります</String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo6.png" alt="oedo6"></StaticImage>
      <String>
        エスカレーターを降りたらすぐ左にコンラッド東京の入り口があります
      </String>
    </ImageString>
    <ImageString>
      <StaticImage src="../images/oedo7.png" alt="oedo7"></StaticImage>
      <String>コンラッド東京に入ったら右奥の通路を進んでください</String>
    </ImageString>
  </Route>
)

export const YurikamomeRoute = () => (
  <Route>
    <ImageString>
      <String>頑張ってください！</String>
    </ImageString>
  </Route>
)

export const Head = () => <Seo title="Access" />

export default AccessPage

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 80% 1fr;
  align-items: center;
  border: solid;
  border-width: 1px 0px 0px 0px;
`

const Title = styled.div`
  grid-row: 1;
  grid-column: 1;
  font-size: larger;
  font-weight: bold;
  text-align: left;
  padding: 0.5em 0 0.5em 0;
`

const Mark = styled.div`
  grid-row: 1;
  grid-column: 2;
  font-size: larger;
  font-weight: bold;
  padding: 0.5em 0 0.5em 0;
`

const Route = styled.div`
  grid-row: 2;
  grid-column: 1 / 3;
  padding: 0.5em 0 0.5em 0;
`

const Div = styled.div`
  border: solid;
  border-width: 0px 0px 1px 0px;
  margin-top: 2em;
  margin-bottom: 3em;
`

const ImageString = styled.div`
  margin: 0em 1em 1em 1em;
`

const String = styled.div`
  text-align: left;
`

const Red = styled.span`
  color: #cd5c5c;
  font-size: larger;
  font-weight: bold;
`
