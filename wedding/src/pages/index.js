import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Map from '../components/map'

const IndexPage = () => {
  return (
    <Layout pageTitle="結婚式のページ">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <div>
        <Link to="https://www.gatsbyjs.com/docs/tutorial/getting-started/part-2/">google form</Link>
       
       </div>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/example.png"
        />
        <Map></Map>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
