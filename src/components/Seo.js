import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        titleTemplate
        siteUrl
      }
    }
  }
`

const Seo = ({ title, description, image }) => {
  const { pathname } = useLocation()

  const {
    site: {
      siteMetadata: {
        defaultTitle,
        defaultDescription,
        defaultImage,
        titleTemplate,
        siteUrl,
      }
    }
  } = useStaticQuery(query)

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: "it" }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="twitter:url" content={seo.url} />
    </Helmet>
  )
}

export default Seo
