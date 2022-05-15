import React, { Component } from 'react';

class TryEffectBind extends Component {
    constructor(props) {
      super(props);
      this.state={
          dd:"usma"
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      console.log('Click happened'+this.state.dd);
    }
    render() {
      return <button onClick={this.handleClick}>Click Me</button>;
    }
  }

export default TryEffectBind;
