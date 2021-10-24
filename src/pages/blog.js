import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
        <ul>
          {
            data.allFile.nodes.map(node => (
              <li key={node.mane}>
                {node.name}
              </li>
            ))
          }
        </ul>
        <p>My cool posts will go in here</p>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage