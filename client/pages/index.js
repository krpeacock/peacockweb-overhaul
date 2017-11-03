import Layout from '../components/Layout.js';
import Link from 'next/link';
import React from 'react';

var headProperties = (
  <title>Home Page</title>
)

const Index = () => (
  <Layout
    headProperties={headProperties}
  >
    <div className="banner" role="banner">
      <h1>Welcome to Peacockweb</h1>
      <p>We are a family of four developers, located in the San Francisco Bay Area. Select a card below to see our profiles</p>
    </div>
    <section id="profiles">
      <div className="card">
        <Link href="/kyle">
          <a>Kyle's portfolio</a>
        </Link>
      </div>
      <div className="card">
        <Link href="/andrew">
          <a>Andrew's portfolio</a>
        </Link>
      </div>
      <div className="card">
        <Link href="/will">
          <a>Will's portfolio</a>
        </Link>
      </div>
      <div className="card">
        <Link href="/gavin">
          <a>Gavin's portfolio</a>
        </Link>
      </div>
    </section>
    <style jsx>
    {`
        .banner > h1, .banner > p {
          text-align: center;
          padding: 0 10vw;
        }
        .banner > a {
          margin-left: 0;
        }
        .banner {
          background: #f9fafb;
          border-bottom: 1px solid #e6e9eb;
          width: 100vw;
          position: relative;
          left: 0;
          padding: 3em 0
        }
        h1 {
          font-size: 2em;
          margin: 0 auto 0;
          color: #415161;
        }
        h2 {
          text-align: center;
        }
        h4 {
          font-size: 1.2em;
          margin: 0 auto 1em;
          color: #8496b3;
          text-align: center;
          font-weight: 500;
        }
        p {
          color: #8496b3;
          font-size: 1.15em;
          line-height: 1.5;
          margin: 0.5em;
          font-weight: 200;
        }
        #profiles {
          margin: 2em;
        }
    `}
    </style>
  </Layout>
)

export default Index