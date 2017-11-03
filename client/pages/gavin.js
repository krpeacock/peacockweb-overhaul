import Layout from '../components/Layout.js';
import React from 'react';

var headProperties = (
  <title>Gavin Profile</title>
)

const Gavin = () => (
  <Layout
    headProperties={headProperties}
    rootUrl="/gavin"
  >
  </Layout>
)