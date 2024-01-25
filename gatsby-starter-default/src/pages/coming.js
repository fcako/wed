import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SubPageFooter from "../components/subpage-footer"

const ComingPage = () => (
  <Layout>
    <h1>Coming Soon</h1>
    <SubPageFooter />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ComingPage
