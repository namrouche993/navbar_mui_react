import React from 'react';


class Counting extends React.Component {
 constructor(){
   super();
   this.state={
     count:0
   }
 }

 componentDidMount() {
    setInterval(() => {
        this.setState({count: this.state.count +2})
     }, 1000)
   }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.count==this.state.count){
      console.log(prevState.count+"compo did update"+this.state.count)
    }
   }


 Changecounting = () => {
   this.setState({count: this.state.count +1})
  }

render(){
  return (
    <div >
    <h1>counting : {this.state.count}</h1>   
    <button onClick={this.Changecounting}>Cliquer pour compter</button> 
    </div>
  );
}
}

export default Counting;