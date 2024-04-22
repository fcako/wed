# 概要

[gatsby-starter-default](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default)を使用

[本番ページ](https://yujiandsaowedding.com)

# 環境構築

node.js の最新版インストール

npm install -g gatsby-cli

# 動作確認

npm run develop

localhost:8000 にアクセス

# デプロイ

aws configure

npm run build

npm run deploy//失敗するので以下  
aws s3 cp ./public s3://gatsby-wedding-fukuoka/ --recursive
