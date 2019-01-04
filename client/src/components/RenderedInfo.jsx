import React from 'react'
import { connect } from "react-redux";

function RenderedInfo(props) {

  const { itemName, expDay, expMonth, expYear, reminderNum, reminderUnit } = props;
  return (
    <div>
      <div>
        Item: {itemName}
      </div>
      <div>
        Expires: {expDay}/{expMonth}/{expYear}
      </div>
      <div>
        Remind me
          <span> {`${reminderNum} ${reminderUnit}`} before expiration</span>
      </div>
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