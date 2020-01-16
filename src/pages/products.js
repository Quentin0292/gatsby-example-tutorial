import React from "react"
import Layout from "../components/Layout"
import styled, { css } from "styled-components"

export default function products() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `}
  `

  const Container = styled.div`
    text-align: center;
  `

  return (
    <Layout>
      <h1>This is our products page</h1>

      <Container>
        <Button>I'm a Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </Layout>
  )
}
