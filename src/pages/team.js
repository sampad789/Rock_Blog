import React from "react"
import Layout from "../components/layout"
import authors from "../util/authors"
import { Button, Card, CardText, CardBody, CardTitle, Row } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

import SEO from "../components/seo"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title=" Our Team" />
    {authors.map((authors, i) => (
      <Row className="mb-4">
        <div className="col-md-4" key={i}>
          <img
            src={require(`../images/${authors.imageUrl}`)}
            style={{ maxWidth: "100%", minHeight: "25%" }}
            alt="Author Profile"
          />
        </div>
        <div className="col-md-8">
          <Card style={{ minHeight: "100%" }}>
            <CardBody>
              <CardTitle>{authors.name}</CardTitle>
              <CardText>{authors.bio}</CardText>
              <Button
                className="text-uppercase"
                color="primary"
                href={`/author/${slugify(authors.name)}`}
              >
                View Posts
              </Button>
            </CardBody>
          </Card>
        </div>
      </Row>
    ))}
  </Layout>
)

export default TeamPage
