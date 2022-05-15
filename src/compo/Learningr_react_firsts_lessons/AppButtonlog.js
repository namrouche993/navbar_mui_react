import React from 'react';


class AppButtonlog extends React.Component {
constructor(){
  super();
  this.state={
    text_in_btn:"Log In"
  };
 // this.Changetextbutton = this.Changetextbutton.bind(this);
}

Changetextbutton = () => {
//Changetextbutton() {  but we shoud add (("this.Changetextbutton = this.Changetextbutton.bind(this)"))
 this.setState({text_in_btn: this.state.text_in_btn =="Log In"? "Log Out":"Log In"})
}


render(){
  return (
    <div >
      <button onClick={this.Changetextbutton}>{this.state.text_in_btn}</button>
    </div>
  );
}
}

export default AppButtonlog;
