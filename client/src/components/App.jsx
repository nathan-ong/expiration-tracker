import React from 'react';
import InfoEntry from './InfoEntry.jsx';
import ExpirationList from './ExpirationList.jsx';
import moment from 'moment';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getItems } from '../actions/itemActions.js';


export default class App extends React.Component {

  render() {
    return (
        <div>
          <InfoEntry />
          <ExpirationList />
        </div>
    )
  }
}