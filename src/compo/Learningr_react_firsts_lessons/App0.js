import React from 'react';


class App0 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color:"black"
    }
  }
  changecolor=(idb)=>{
    this.setState({color:idb})
  }

render(){ 
  const btns=['red',"yellow","grey",'green',"blue"]  
  const change_btns=btns.map((item)=>{
    return (
    <button onClick={()=>{
          this.changecolor(item)
    }}>{item}</button>
    )
  })


  return (
    <div >
      <h1>HELLO YOU!!! the color is {this.state.color}</h1>
      {change_btns}
    </div>
  ); 
 }
}

export default App0;