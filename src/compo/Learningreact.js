import React, { Component } from 'react'
import App0 from './Learningr_react_firsts_lessons/App0';
import AppClass from './Learningr_react_firsts_lessons/AppClass';
import Pro from './Learningr_react_firsts_lessons/Pro';
import Log from './Learningr_react_firsts_lessons/Log';
import AppButtonlog from './Learningr_react_firsts_lessons/AppButtonlog';
import Counting from './Learningr_react_firsts_lessons/Counting';
import TryEffectBind from './Learningr_react_firsts_lessons/TryEffectBind';
import Damount from './Learningr_react_firsts_lessons/Damount';
import Lifecycle from './Learningr_react_firsts_lessons/Lifecycle';

import ComponentDidMountMethod from './Learningr_react_firsts_lessons/ComponentDidMountMethod';

export default class Learningreact extends Component {
    constructor(props){
        super(props);
        this.state={
            cond:Math.random()
        }
    }

   componentDidMount(){
        this.setState({cond:Math.random()})
        console.log('cond est mathrandom et egale a' + this.state.cond)
    }

  render() {
      let conda=this.state.cond
    return (
    <div>
      <App0 colorname="yellow"/>
      <Pro/>
      <AppClass name={conda>0.5 ? "hmida":"redouane"} color="green"/>
      <Log/>
      <AppButtonlog/>
      <Counting/>
      <TryEffectBind/>
      <Damount/>     
      {/*  <Lifecycle/>*/}
      {/*  <ComponentDidMountMethod/>*/}
    </div>
    )
  }
}
