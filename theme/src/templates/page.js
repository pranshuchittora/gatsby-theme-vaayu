import React from "react"
import { Helmet } from "react-helmet"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import WindImage from "../assets/wind.png"
const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Gatsby theme vayu"
        content="Gatsby theme vayu made by Pranshu Chittora for Gatsby Theme Jam"
      />
      <title>Gatsby Theme vayu</title>
    </Helmet>
    <div style={{ textAlign: "center" }}>
      <img src={WindImage} height="200px" />
      <Styled.h1>{pageContext.heading}</Styled.h1>
    </div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
