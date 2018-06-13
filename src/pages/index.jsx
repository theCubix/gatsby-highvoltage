import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from "gatsby-image";

const IndexPage = ({ data }) => (
  <div>
    <section style={{minHeight: "200vh"}} className="fp-atf">
      <Img style={{width: "100%", height: 0, paddingTop: "41.125%"}} resolutions={data.atfImage.childImageSharp.resolutions}/>
      <div className="fp-atf__textwrapper">
        <div className="container">
          <h1 className="fp-atf__title">Voltage Arc!</h1>
          <p className="fp-atf__headline">Die junge Schweizer Rockband</p>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    atfImage: file(relativePath: {eq: "assets/imgs/hero-image.jpg"}) {
      childImageSharp {
        resolutions(width: 1600, traceSVG: { color: "#2b1a1a", background: "#130000" }) {
          ...GatsbyImageSharpResolutions_withWebp_tracedSVG
        }
      }
    }
  }
`;
