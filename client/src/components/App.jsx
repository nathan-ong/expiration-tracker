import React from 'react';
import $ from 'jquery';
import InfoEntry from './InfoEntry.jsx';
import moment from 'moment';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expirationDates: [],
    }
  }
  componentDidMount() {
    $.get('/fetch', (expirationDates) => {
      console.log(expirationDates)
      this.setState({expirationDates});
    });
  }

  render() {
    const { expirationDates } = this.state;
    return (
      <div>
        <InfoEntry />
        {expirationDates.map(item => {
          return (
            <div className="item" key={item._id}>
              <span>Item: {item.itemName}</span>
              <br />
              Expires {item.expirationDate? moment(item.expirationDate).fromNow() : null}
              <br />
              Expiration Date: {moment(item.expirationDate).format('MMM Do YY')}
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;