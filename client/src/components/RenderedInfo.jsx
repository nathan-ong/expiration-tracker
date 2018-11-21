// import React, { Component } from 'react'

// export default function RenderedInfo() {
//   // render() {
//     return (
//       <div>
//         <span>Item: {this.props.itemName}</span>
//         <br />
//         Expiration
//         <br />
//         <span>Day: {this.props.expDay}</span>
//         <br />
//         <span>Month: {this.props.expMonth}</span>
//         <br />
//         <span>Year: {this.props.expYear}</span>
//         <br />
//         <br />
//         Remind me
//         <br />
//         <span>{`${this.props.reminderNum} ${this.props.reminderUnit}`}</span>
//         <span> before expiration</span>
//       </div>
//     )
//   // }
// }
import React from 'react'

export default function RenderedInfo(props) {

  const { itemName, expDay, expMonth, expYear, reminderNum, reminderUnit } = props;
  return (
    <div>
      <span>Item: {itemName}</span>
        <br />
        Expiration
        <br />
        <span>Day: {expDay}</span>
        <br />
        <span>Month: {expMonth}</span>
        <br />
        <span>Year: {expYear}</span>
        <br />
        <br />
        Remind me
        <br />
        <span>{`${reminderNum} ${reminderUnit}`}</span>
        <span> before expiration</span>
    </div>
  )
}
