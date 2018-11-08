import React from 'react';
import InfoEntry from './InfoEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <InfoEntry />
      </div>
    )
  }
}

export default App;