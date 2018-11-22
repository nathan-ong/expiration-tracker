import React from "react";
import $ from "jquery";
import { connect } from "react-redux";
import RenderedInfo from "./RenderedInfo.jsx";
import { createItem, toggleReminder } from "../actions/itemActions"

class InfoEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { setReminder, itemName, expDay, expMonth, expYear, reminderNum, reminderUnit } = this.props;
    const data = { setReminder, itemName, expDay, expMonth, expYear, reminderNum, reminderUnit };
    $.post('/save', data);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const { setReminder, itemName, expDay, expMonth, expYear, reminderNum, reminderUnit } = this.props;
    const monthDays = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const years = [18, 19, 20, 21];
    return (
      <div>
        <form className="expiration-entry-form" onSubmit={this.handleSubmit}>
          Item:
          <br />
          <input className="item-name" name="itemName" onChange={this.props.handleChange} />
          <br />
          Expiration Date:
          <br />
          Day:
          <select className="expiration-date" name="expDay" onChange={this.props.handleChange} defaultValue={expDay}>
            {monthDays.map(day => {
              return (
                <option
                  name="day"
                  key={day}
                  value={day}
                >
                  {day}
                </option>
              );
            })}
          </select>
          Month:
          <select className="expiration-date" name="expMonth" onChange={this.props.handleChange} defaultValue={expMonth}>
            {months.map(month => {
              return (
                <option name="month" key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
          Year:
          <select className="expiration-date" name="expYear" onChange={this.props.handleChange} defaultValue={expYear}>
            {years.map(year => {
              return (
                <option name="year" key={year} value={2000 + year}>
                  {year}
                </option>
              );
            })}
          </select>
          <br />
          <input
            id="reminder-box"
            type="checkbox"
            name="setReminder"
            onChange={this.props.handleCheckbox}
          />
          Set Reminder
          <br />
          {setReminder ? (
            <div className="reminder-dropdowns">
              <select className="date-warning" name="reminderNum" onChange={this.props.handleChange}>
                {monthDays.map(num => {
                  return (
                    <option
                      name="quantity"
                      key={num}
                      value={num}
                    >
                      {num}
                    </option>
                  );
                })}
              </select>
              <select className="date-warning" name="reminderUnit" onChange={this.props.handleChange}>
                {["day(s)", "month(s)", "year(s)"].map(timeSpan => {
                  return (
                    <option
                      name="units"
                      key={timeSpan}
                      value={timeSpan}
                    >
                      {timeSpan}
                    </option>
                  );
                })}
              </select>
              before expiration
            </div>
          ) : null}
          <br />
          <RenderedInfo itemName={itemName} expDay={expDay} expYear={expYear} expMonth={expMonth} reminderNum={reminderNum} reminderUnit={reminderUnit}/>
          <button type="submit">Enter Item</button>
        </form>
      </div>
    );
  }
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

const mapDispatchToProps = dispatch => ({
  handleChange(event) {
    dispatch(createItem(event));
  },
  handleCheckbox() {
    dispatch(toggleReminder(document.getElementById("reminder-box").checked));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoEntry);
