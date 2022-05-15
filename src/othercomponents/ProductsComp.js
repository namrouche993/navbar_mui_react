import React, { Component } from 'react';


/*
class ProductsComp extends Component {
  render() {
     return (
    <div >
      <h1 style={this.props.id==="2" ? {color:'red'}:{color:"grey"}}>Hi {this.props.name} , you are {this.props.age} years old</h1>
    </div>
  )   
}
}
*/

function ProductsComp(props) {
  console.log(props.id)
  return (
    <div >
      <h1 style={props.id==="2" ? {color:'red'}:{color:"green"}}>Hi {props.name} , you are {props.age} years old</h1>
    </div>
  );
}

export default ProductsComp;
