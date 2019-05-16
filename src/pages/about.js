import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../layouts"

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div
          css={{
            padding: rhythm(3 / 4),
          }}
        >
          <h1 data-testid="about-title">About 2D.HKH</h1>
          <p>
            Actuary, Self-taught Artist, CS GO Noob.
            {` `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/2d.hkh"
            >
              Instagram Page
            </a>
            .
          </p>
        </div>
      </Layout>
    )
  }
}

export default About
