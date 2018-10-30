import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Lightbox from '../components/Lightbox'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Bridges of Portland</h1>
    <p>
      Here's a lightbox example using <code>gatsby-image</code>. Use the <b>Previous</b> and <b>Next</b> buttons inside the lightbox
      or navigate between images with your ← and → keys. Press ␛ or <b>Close</b> button to exit the lightbox.
    </p>
    <Lightbox images={data.allImageSharp.edges} />
    <p>
      <br/>
      © Alexander Jacks, 2018, MIT.
      📱📷 All images taken with a Nexus 5X by me.
    </p>
    <p>
      Based upon this project:{' '}
      <a href="https://github.com/416serg/gatsby-starter-lightbox">
        https://github.com/416serg/gatsby-starter-lightbox
      </a>
    </p>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
