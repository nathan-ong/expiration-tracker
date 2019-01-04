import React from 'react'
import moment from 'moment';

export default function Item(props) {
  const { item } = props;
  return (
    item.expirationDate > Date() ?
    <div className="item">
      <div>
        <span>Item: {item.itemName}</span>
      </div>
      <div >
        Expires {item.expirationDate? moment(item.expirationDate).fromNow() : null}
      </div>
      <div>
        Expiration Date: {moment(item.expirationDate).format('MMM Do YYYY')}
      </div>
    </div>
    : 
    <div className="item expired">
      <div>
        <span>Item: {item.itemName}</span>
      </div>
      <div >
        Expired {item.expirationDate? moment(item.expirationDate).fromNow() : null}
      </div>
      <div>
        Expiration Date: {moment(item.expirationDate).format('MMM Do YYYY')}
      </div>
    </div>
  )
}
