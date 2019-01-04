import React from 'react'
import moment from 'moment';

export default function Item(props) {
  const { item } = props;
  return (
    new Date(item.expirationDate) > new Date() ?
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
      <button type="button">Delete</button>
    </div>
    : 
    <div className="item expired">
      <div>
        <span>Item: {item.itemName}</span>
      </div>
      <div >
        <span className="warning">
          *Expired {item.expirationDate? (moment(item.expirationDate).fromNow()) : null}
        </span>
      </div>
      <div>
        Expiration Date: {moment(item.expirationDate).format('MMM Do YYYY')}
      </div>
      <button type="button">Delete</button>
    </div>
  )
}
