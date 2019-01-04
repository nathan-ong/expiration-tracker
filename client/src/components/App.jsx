import React from 'react';
import InfoEntry from './InfoEntry.jsx';
import moment from 'moment';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getItems } from '../actions/itemActions.js';


class App extends React.Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    const { expirationDates } = this.props;
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
                Expiration Date: {moment(item.expirationDate).format('MMM Do YYYY')}
              </div>
            )
          })}
        </div>
    )
  }
}
// App.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   expirationDates: PropTypes.array.isRequired
// }

const mapStateToProps = state => {
  return { expirationDates: state.expirationDates.items }
}

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(getItems());
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(App);