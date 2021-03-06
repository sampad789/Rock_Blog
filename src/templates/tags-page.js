import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../util/utilityFunctions"
const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All tags">
      <SEO title="All tags" keywords={["tags", "topics", "label"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" outline href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="secondary">{tagPostCounts[tag]}</Badge>{" "}
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
