import React from 'react';

class InfoEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      itemName: '',
      expMonth: null,
      expDay: null,
      expYear: null,
      expirationWarning: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.itemNameHandler = this.itemNameHandler.bind(this);
    // this.expirationDateHandler = this.expirationDateHandler.bind(this);
    this.expirationWarningHandler = this.expirationWarningHandler.bind(this);
    this.monthExpHandler = this.monthExpHandler.bind(this);
    this.dayExpHandler = this.dayExpHandler.bind(this);
    this.yearExpHandler = this.yearExpHandler.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log('submitted!')
    console.log(this.state);
  }

  itemNameHandler(e) {
    this.setState({
      itemName: e.target.value,
    });
  }

  monthExpHandler(e) {
    this.setState({
      expMonth: e.target.value
    })
  }

  dayExpHandler(e) {
    this.setState({
      expDay: e.target.value
    })
  }

  yearExpHandler(e) {
    this.setState({
      expYear: e.target.value
    })
  }

  // expirationDateHandler(e) {
  //   console.log(e.target.value)
  //   console.log(e);
  //   if (e.target.name === 'day') {
  //     console.log('DAY!');
  //   }
  //   if (e.target.name === 'month') {
  //     console.log('MONTH!');
  //   }
  // }

  expirationWarningHandler(e) {

  }

  render(){
    return (
      <div>
        <form className="expiration-entry-form" onSubmit={this.handleSubmit}>
          Item:
          <br />
          <input className="item-name" onChange={this.itemNameHandler}/>
          <br />
          Expiration Date:
          <br />
          Day:
          <select className="expiration-date" onChange={this.dayExpHandler}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(day => {
              return <option onSelect={this.expirationDateHandler} name="day" key={Math.random()*1000} value={day}>{day}</option>
            })}
          </select>
          Month:
          <select className="expiration-date" onChange={this.monthExpHandler}>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => {
              return <option name="month" key={Math.random()*1000} value={month} >{month}</option>
            })}
          </select>
          Year:
          <select className="expiration-date" onChange={this.yearExpHandler}>
            {[18, 19, 20, 21].map(year => {
              return <option name="year" key={Math.random()*1000} value={year} >{year}</option>
            })}
          </select>
          <br />
          Expiration warning:
          <br />
          <select className="date-warning">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => {
              return <option name="quantity" key={Math.random()*1000} value={num}>{num}</option>
            })}
          </select>
          <select className="date-warning">
            {['day(s)', 'month(s)', 'year(s)'].map(timeSpan => {
              return <option name="units" key={Math.random()*1000} value={timeSpan}>{timeSpan}</option>
            })}
          </select>
          before expiration
          <br />
          <button type="submit">Enter Item</button>
        </form>
      </div>

    ) 
  }
}

export default InfoEntry;