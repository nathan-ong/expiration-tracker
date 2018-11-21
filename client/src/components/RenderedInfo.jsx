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
