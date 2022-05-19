import React, { Component } from 'react'
import Navbaressai from './Navbaressai'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./compo/Home";
import About from "./compo/About";
import Contact from "./compo/Contact";
import Faq from "./compo/Faq";
import Googlesheetiframe from "./compo/Googlesheetiframe";
import Appmuicomponent from "./compo/Appmuicomponent";
import Learningreact from "./compo/Learningreact";
import Tablecompo from "./compo/Tablecompo";



export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Navbaressai/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/faq' component={Faq}></Route>
          <Route path='/googlesheet' component={Googlesheetiframe}></Route>
          <Route path='/appmuicomponent' component={Appmuicomponent}></Route>
          <Route path='/learningreact' component={Learningreact}></Route>
          <Route path='/tablecompo' component={Tablecompo}></Route>

          
        </Switch>
    </Router>
    </div>
     )
  }
}

/*
import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { BrowserRouter, Switch, Route } from "react-router-dom";


//import BrowserRouter from "react-router-dom";
//import Switch from "react-router-dom";
//import Route from "react-router-dom";


import Navbaressai from "./compo/Navbaressai";
import Home from "./compo/Home";
import About from "./compo/About";
import Contact from "./compo/Contact";
import Faq from "./compo/Faq";

export default class App extends Component {
  render() {
    return (
    <Router>
        <Navbaressai />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </Router>
        )
  }
}
*/