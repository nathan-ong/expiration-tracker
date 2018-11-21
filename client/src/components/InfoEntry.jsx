import React from "react";
import $ from "jquery";
import { connect } from "react-redux";
import RenderedInfo from "./RenderedInfo.jsx";

class InfoEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      expMonth: Date().slice(4, 7),
      expDay: new Date().getDate(),
      expYear: new Date().getFullYear(),
      reminderNum: 'N/A',
      reminderUnit: 'N/A',
      setReminder: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    console.log('submitting data');
    $.post("/save", this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckbox(e) {
    if (document.getElementById("reminder-box").checked){
      this.setState({
        setReminder: true,
        reminderNum: 1,
        reminderUnit: 'day(s)'
      });
    } else {
      this.setState({
        setReminder: false,
        reminderNum: 'N/A',
        reminderUnit: 'N/A'
      })
    }
  }

  render() {
    const { setReminder, itemName, expDay, expMonth, expYear, reminderNum, reminderUnit } = this.state;
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
          <input className="item-name" name="itemName" onChange={this.onChange} />
          <br />
          Expiration Date:
          <br />
          Day:
          <select className="expiration-date" name="expDay" onChange={this.onChange} defaultValue={expDay}>
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
          <select className="expiration-date" name="expMonth" onChange={this.onChange} defaultValue={expMonth}>
            {months.map(month => {
              return (
                <option name="month" key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
          Year:
          <select className="expiration-date" name="expYear" onChange={this.onChange} defaultValue={expYear}>
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
            name="set-reminder"
            value="setReminder"
            onChange={this.handleCheckbox}
          />
          Set Reminder
          <br />
          {setReminder ? (
            <div className="reminder-dropdowns">
              <select className="date-warning" name="reminderNum" onChange={this.onChange}>
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
              <select className="date-warning" name="reminderUnit" onChange={this.onChange}>
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

// const mapStateToProps = state => ({
//   itemName: state.expirationDates.item.itemName,
//   expMonth: state.expirationDates.item.expMonth,
//   expDay: state.expirationDates.item.expDay,
//   expYear: state.expirationDates.item.expYear,
//   reminderNum: state.expirationDates.item.reminderNum,
//   reminderUnit: state.expirationDates.item.reminderUnit,
//   setReminder: state.expirationDates.item.setReminder
// })

// export default connect(mapStateToProps)(InfoEntry);

export default InfoEntry;