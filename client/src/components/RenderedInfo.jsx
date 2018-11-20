import React, { Component } from 'react'

export default class RenderedInfo extends Component {
  render() {
    return (
      <div>
        <span>Item: {this.props.itemName}</span>
        <br />
        Expiration
        <br />
        <span>Day: {this.props.expDay}</span>
        <br />
        <span>Month: {this.props.expMonth}</span>
        <br />
        <span>Year: {this.props.expYear}</span>
        <br />
        <br />
        Remind me
        <br />
        <span>{`${this.props.reminderNum} ${this.props.reminderUnit}`}</span>
        <span> before expiration</span>
      </div>
    )
  }
}
