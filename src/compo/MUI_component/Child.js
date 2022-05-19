import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
    <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChangeValue}
      />
        )
  }
}
