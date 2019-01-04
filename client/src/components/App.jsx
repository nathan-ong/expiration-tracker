import React from 'react';
import InfoEntry from './InfoEntry.jsx';
import ExpirationList from './ExpirationList.jsx';



export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1 className="header">Expiration Tracker</h1>
        <InfoEntry />
        <ExpirationList />
      </div>
    )
  }
}