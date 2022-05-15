/*
import React, { useState } from 'react';
function Log() {
  // Declare a new state variable, which we'll call "count"
  const [logg, setLogg] = useState(true);
  let cond;
  cond=logg==true ? "in":"out";

  return (
    <div>
      <p>you are currently log {cond}</p>
      <button onClick={() => setLogg(!logg)}>
        Change it
      </button>
    </div>
  );
}
export default Log;
*/

import React, { Component } from 'react';

class Log extends Component {
 constructor() {
   super();
   this.state={
       logg:true
   }
 }
 changeloggfalse =() =>{
   this.setState({logg:false})
 }
 
 changeloggtrue =() =>{
  this.setState({logg:true})
}

changelogg =() =>{
//  this.setState(previous_state =>({logg:!previous_state.logg}))
    this.setState({logg:!this.state.logg})
}


  render() {    
     let logged;
     logged = this.state.logg == true ? "in":"out"; 

      return (
         <div >
           <h1>you are currently logged {logged}!</h1>
           <button onClick={this.changeloggfalse}>change to false</button>
           <button onClick={this.changeloggtrue}>change to true</button>
           <button onClick={this.changelogg}>change</button>


         </div>
            );
  }
}

export default Log;
