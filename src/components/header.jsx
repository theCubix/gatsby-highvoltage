import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="header">
      <h1 className="header__title">
        <Link
          to="/"
          className="header__link"
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

export default Header
