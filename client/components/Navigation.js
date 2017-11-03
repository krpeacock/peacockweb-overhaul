import Link from 'next/link'
import React from 'react'
import NoSSR from 'react-no-ssr'
import 'isomorphic-fetch'

// Next.js uses these Link components for cross-page routing

export default class Navigation extends React.Component {
  
  render (props) {
    var rootUrl = this.props.rootUrl ? this.props.rootUrl : ""
    return (<nav>
      <Link href={`${rootUrl}/`}>
        <a>home</a>
      </Link>
      <Link href={`http://peacockweb.net/blog`}>
        <a>blog</a>
      </Link>
      <Link href={`${rootUrl}/contact`}>
        <a>contact</a>
      </Link>
      <style jsx global>{`
        * {
          font-family: "Roboto" !important;
        }
        .app {
          width: 100vw;
          position: absolute;
          overflow-x: hidden;
          left: 0;
          top: 0;
          margin-top: 1em;
        }
        nav > a, nav > a:visited {
          margin: 1em;
          text-decoration: none;
          color: #b5c0d1;
          font-size: 1.15em;
        }
        a:hover, a.active {
          color: #415161;
        }
        nav {
          margin-bottom: 1em;
        }
      `}</style>
    </nav>)
  }
}