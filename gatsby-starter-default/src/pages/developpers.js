import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DevelopperPage = () => (
  <Layout top={false}>
    <h1>このサイトについて</h1>
    <p>
      このページは新郎がAWSのS3・CloudFront・ACMを使って一から作っています
      <br />
      ドメインもこだわってRoute53で取得しました
      <br />
      フロントはReactベースで，勉強も兼ねてSSGの
      <a href="https://www.gatsbyjs.com/">Gatsby.js</a>
      を使っています
      <br />
      フォームはGoogle Formと紐づけてあって，
      メッセージのページではGCPのAPIを使って
      スプレッドシートのデータを取得しています
      <br />
      結婚式当日の披露宴終了後にComing Soonになっているプロフィールページを
      実際のものに自動で切り替えるようにGo言語でLambda関数を作り，
      CloudFrontで実行するようにしてあります
      <br />
      このサイトのソースコードを
      <a href="https://github.com/fcako/wed">GitHub</a>
      で公開しているので， 同業者の友人の方はページを作ってPull
      Requestしてくれてもいいですよ
    </p>
  </Layout>
)

export const Head = () => <Seo title="Developpers" />

export default DevelopperPage
