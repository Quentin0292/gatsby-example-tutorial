// global css

// multiple elements

import React from "react"
import Layout from "../components/Layout"
import { Button } from "../components/Button"

export default () => (
  <Layout>
    <h1 className="title">this is our home page</h1>
    <h1 className="title">another heading</h1>
    <h2>This second heading</h2>
    <Button>Styled Button</Button>
  </Layout>
)
