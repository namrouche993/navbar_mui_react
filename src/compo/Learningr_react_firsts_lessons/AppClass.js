import React, { Component } from 'react';

class AppClass extends Component {
  constructor(props){
    super(props);
    this.state ={
      color:'blue',
      fontSize:'39px'
    }
    
  }

  changeColor = () => {
    this.setState({color: this.props.color})
    //this.setState({color: 'yellow'})

  }

  render(){
    return(
      <>      
      <h2 style={this.state}>Hi {this.props.name} from AppClass Component and the color is choosing is {this.state.color}</h2>
      <button onClick={this.changeColor}>Changer la couleur</button>
      </>
    )
  }
}
export default AppClass;
