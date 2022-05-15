import React, { Component } from 'react'
// i think, 'getDerivedStateFromProps' is not very usefel and i can replace it by an other trick
export class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'Constructor Method'
        };
        console.log(this.state.name)
      }

    static getDerivedStateFromProps(props, state) {
        return {name: props.nameFromParent} 
      }

      componentWillUnmount(){
          alert('this Component (ChildComponent) will unmount and desapear!!!!')
      } 
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>This is a {this.state.name} !!!!!</h1> 
            </div>
        )
    }
}


export default class Lifecycle extends Component {
   constructor(){
       super();
       this.state={
           name:"DJAFAR",
           displaychildcomponent:true,
           count:0
       };
     //  this.Compter = this.Compter.bind(this);

   }


componentDidMount() {
    setTimeout(() => {
      this.setState({name: "MOURAD This is a componentDidMount Method"})
    }, 5000)    
}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('previous-state').innerHTML = "The previous state was " + prevState.name
  }
  componentDidUpdate(prevState) {
    if(prevState.name !== this.state.name){
        document.getElementById('current-state').innerHTML = "The current state is :" + this.state.name
    }
  }

shouldComponentUpdate() {
    return true; //Change to true for state to update
  }

  removechild=() =>{
    this.setState({displaychildcomponent:false})
}

//Compter=() =>{
//  this.setState({count:this.state.count+1})
//}


    render() {
        let ChildChild;
        if (this.state.displaychildcomponent){
            ChildChild=<ChildComponent nameFromParent="getDerivedStateFromProps Method"/>
        }
        return (
            <div>
                <h3>nom : {this.state.name}</h3>
                <p>displaychildcomponent={this.state.displaychildcomponent}</p> 
                <button onClick={this.removechild}>Click to remove or unmount ChildCompnent</button>
               {ChildChild}
                <p id="current-state"></p>
                <p id="previous-state"></p>
                {/*  
                <p>le compteur = {this.state.count}</p>
                <button onClick={this.Compter}>Compter</button> 
                */}
                

           
            </div>
        )
    }
}