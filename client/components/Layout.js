import Header from './Header.js';
import SharedHead from './SharedHead.js';
import React from 'react';

export default (props) => (
  <div className="app">
    <SharedHead>
      {props.headProperties}
    </SharedHead>
    <Header rootUrl={props.rootUrl}/>
    <main>
      {props.children}
    </main>
  </div>
)