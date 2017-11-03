import Navigation from './Navigation.js';
import Link from 'next/link'
import React from 'react'

export default (props) => (
  <header>
    <Link href="/">
      <a>
        <img src="http://www.peacockweb.net/uploads/8/0/0/1/80018494/1144651.png" alt="Peacock Web Logo" id="logo" />
      </a>
    </Link>
    <Navigation rootUrl={props.rootUrl}>
    </Navigation>
    <style jsx>{`
      header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        align-items: center;
        border-bottom: 1px solid #e6e9eb;
      }
      #logo {
        margin-bottom: 1em;
      }
    `}</style>
  </header>
)