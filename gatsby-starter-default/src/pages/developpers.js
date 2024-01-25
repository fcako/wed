import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DevelopperPage = () => (
  <Layout>
    <h1>新郎から同業者の友人へ</h1>
    <p>
      このページは新郎が自分で作っています．
      <br />
      インフラはAWSのS3とCloudFrontを使いました．
      <br />
      ちゃんとACM使ってSSL/TLS認証もしてます．
      <br />
      フロントはReactベースで，勉強も兼ねて使ってみたかったSSGのGatsby.jsを使っています．
      <br />
      本業はバックエンドエンジニアなので色々突っ込みどころがあるのはご容赦ください．
      <br />
      本題ですが，このサイトのソースコードを個人情報を除いてGitHubで公開しているので，
      <br />
      同業者の友人の方はPull Request作ってくれたら新郎がデプロイします．
      <br />
      いい感じだったら披露宴で紹介します．
      <br />
      内容は我々へのメッセージや，誰とは言いませんが自作の謎解きなどなんでもいいです．
      <br />
      注意：AWSの無料枠を使っているのでDos攻撃になるようなことはしないでください．
    </p>
  </Layout>
)

export const Head = () => <Seo title="Developpers" />

export default DevelopperPage
