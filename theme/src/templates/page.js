import React from "react"
import { Helmet } from "react-helmet"
import { Styled } from "theme-ui"
import Layout from "../components/layout"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Gatsby theme vaayu"
        content="Gatsby theme vaayu made by Pranshu Chittora for Gatsby Theme Jam"
      />
      <title>Gatsby Theme Vaayu</title>
    </Helmet>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
