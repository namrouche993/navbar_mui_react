import React, { Component } from 'react'
import {
  Button,
  Input,
  TextField
} from "@material-ui/core";


export default class Googlesheetiframe extends Component {
  constructor(props){
    super(props);
    this.refgh = React.createRef();
    this.refinput =React.createRef();
  }

Focusingooglesheet=()=>{
    this.refgh.current.focus()
  }



  render() {
    return (
      <div>  

      <Button
      href="https://docs.google.com/spreadsheets/d/16aKImpXmtaPs0673jN8ar06LvWix96xXf_i51UsYedY/export?gid=0&amp;format=pdf"
      target="_blank"
      variant='contained'
      color='primary'
      >
        Télécharger en PDF
    </Button>
    
    <Button onClick={this.Focusingooglesheet} variant='contained' color='primary'>
        Focus
    </Button>
    <br></br>
    <br></br>
    <TextField label='Tapez qlq chose ici' variant='outlined' id='inputref' ref={this.refinput} type="text" />
    <br></br>


    <iframe 
      src="https://docs.google.com/spreadsheets/d/16aKImpXmtaPs0673jN8ar06LvWix96xXf_i51UsYedY/edit?chrome=false&rm=demo&widget=false#gid=0"
      frameborder="0"
      height="1000"
      width="85%"
      position="fixed"
      top="0"
      bottom="0"
      right="0"
      ref='refgs'
      id='iframegs'
      >
      </iframe>
      <br></br>
    

      </div>
    )
  }
}
