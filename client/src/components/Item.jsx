import React from 'react'
import moment from 'moment';


export default function Item(props) {
  const { item } = props;
  return (
    <div className="item">
      <span>Item: {item.itemName}</span>
      <br />
      Expires {item.expirationDate? moment(item.expirationDate).fromNow() : null}
      <br />
      Expiration Date: {moment(item.expirationDate).format('MMM Do YYYY')}
    </div>
  )
}
