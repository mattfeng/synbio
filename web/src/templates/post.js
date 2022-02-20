import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import * as styles from "../styles/post.module.scss"

import File from "../components/File"

require("katex/dist/katex.min.css")
deckDeckGoHighlightElement()

const shortcodes = {
  Link,
  File,
}

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <>
      <div className={styles.mainContainer}>
        <h1>{post.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`
