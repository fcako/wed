import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MessagePage = ({ data }) => (
  <Layout>
    <h1>メッセージ</h1>
    <ul>
      {data.allGoogleSpreadsheetInvitationSheet1.edges.map(({ node }) => (
        <li key={node.id}>
          Timestamp: {node.timestamp}, Allergy:{" "}
          {node.allegy ? node.allegy : "None"}
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Message" />

export default MessagePage

export const query = graphql`
  query {
    allGoogleSpreadsheetInvitationSheet1(limit: 30) {
      edges {
        node {
          id
          allegy
          timestamp
        }
      }
    }
  }
`
