import React from 'react';


class Counting extends React.Component {
 constructor(props){
   super(props);
   this.state={
     count:0,
     dd:5,
     wd:"djafar"
   }
   console.log("wd in constructor ="+this.state.wd)
 }

componentWillMount(){
  this.props.name==this.state.wd ? this.setState({wd:this.props.name}) : this.setState({wd:this.props.name+" and "+this.state.wd}) 
}

 componentDidMount() {
   console.log("component did mount")
    setInterval(() => {
        this.setState({count: this.state.count +1})
     }, 1000)
   }
   componentDidUpdate(prevProps,prevState){
     if(prevState.dd!==this.state.dd){
      console.log("PrevState = " + prevState.dd +"-----component update mount")
     }
   }

 Changecounting = () => {
   this.setState({count: this.state.count +1})
  }

  
 Changedd = () => {
  this.setState({dd:this.state.dd+1})
 }


render(){
  return (
    <div >
    <h1>counting : {this.state.count}</h1>  
    <h1>dd : {this.state.dd}</h1>   
    <h1>wd: {this.state.wd}</h1>
 
    <button onClick={this.Changecounting}>Cliquer pour compter</button> 
    <button onClick={this.Changedd}>Cliquer pour changer dd</button> 

    </div>
  );
}
}

export default Counting;