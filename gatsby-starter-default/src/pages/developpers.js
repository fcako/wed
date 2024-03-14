import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const DevelopperPage = () => (
  <Layout top={false}>
    <h1>新郎から同業者の友人へ</h1>
    <p>
      このページは新郎が一から作っています
      <br />
      AWSのS3・CloudFront・ACMを使いました
      <br />
      ドメインもRoute53で取得しました
      <br />
      フロントはReactベースで，勉強も兼ねてSSGの
      <Link to="https://www.gatsbyjs.com/">Gatsby.js</Link>
      を使っています
      <br />
      本業はバックエンドエンジニアなので温かい目で見てください
      <br />
      ついでに，結婚式当日の披露宴終了後にComing
      Soonになっているプロフィールページを
      実際のものに自動で切り替えるようにGo言語でLambda関数を作り，
      CloudFrontで実行するようにしてあります
      <br />
      <br />
      本題ですが，このサイトのソースコードを
      <Link to="https://github.com/fcako/wed">GitHub</Link>
      で公開しているので，
      <br />
      同業者の友人の方はぜひ 自由にページを作ってPull Requestしてください
      <br />
      Gatsby.js使ったことなくてもsrc/pages配下を見ればわかると思います
      <br />
      内容は我々へのメッセージや，誰とは言いませんが自作の謎解きなどなんでもいいです
    </p>
  </Layout>
)

export const Head = () => <Seo title="Developpers" />

export default DevelopperPage
