import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="OOps something Went Wrong , Try again later">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to={"/"}>
      Go home{" "}
    </Link>
  </Layout>
)

export default NotFoundPage
