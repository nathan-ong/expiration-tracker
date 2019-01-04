import React from 'react'
import { connect } from "react-redux";

function RenderedInfo(props) {

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

const mapStateToProps = state => ({
  itemName: state.expirationDates.item.itemName,
  expMonth: state.expirationDates.item.expMonth,
  expDay: state.expirationDates.item.expDay,
  expYear: state.expirationDates.item.expYear,
  reminderNum: state.expirationDates.item.reminderNum,
  reminderUnit: state.expirationDates.item.reminderUnit,
  setReminder: state.expirationDates.item.setReminder
})

export default connect(mapStateToProps)(RenderedInfo);