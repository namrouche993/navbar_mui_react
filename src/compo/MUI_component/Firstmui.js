import React from "react";
//import { ToggleButton } from '@mui/material';
//import { ToggleButtonGroup } from '@mui/material';
//import { TextField } from '@mui/material';
import {ToggleButton,ToggleButtonGroup} from '@material-ui/lab';
import {
    Button,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    TextField
} from "@material-ui/core";

import Selectcomp from './Selectcomp';


const Namegrpbrn2 = [
    {value:'web',name:'WEB'},
    {value:'android',name:'ANDROID!'},
    {value:'ios',name:'IOS'}
]
console.log(Namegrpbrn2[0].value)

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


class Firstmui extends React.Component{
    constructor(props){
        super(props);
        this.state={
          color:true,
          value:'',
          alignment:'',
          alignmentname:'',

          textradio1:'',
          age:''
        };
        this.myRef = React.createRef();
        this.textInput = React.createRef();
        this.Checkref = React.createRef();

        this.radioref1=React.createRef();
      }    
   /*   
      Radiorefcheck1=() =>{
          var a;
          console.log('this one : ' + this.radioref1.checked)
          if (this.radioref1.checked){
             a='TRUE'
             console.log('aaaa egale' + a)
          } else {
             a='FALSE'
             console.log('aaaa egalee' + a)

          }
          this.setState({textradio1:a})
      }
      */

      
  handleChangeage = (event) => {
    this.setState({age:event.target.value});
  };

      Radiochange=(event, value ) => {
          this.setState({textradio1:value})
      } 

      Togglegrpbtn=(event, newAlignment ) => {
        Namegrpbrn2.map((item)=>{
            if(newAlignment==item.value){
                console.log('item name est : '+item.name )
                this.setState({alignment:item.value})
                this.setState({alignmentname:item.name})
            }
        })
      }    

    Changecolor=()=>{
        if(this.Checkref.current.checked){
            this.setState({
                color:!this.state.color,
            })
        }
        
    }

    

    ValueTextInput=()=>{
        this.setState({
            value:this.textInput.current.value       
        })
    }
   
    componentDidUpdate(){
        const nodab = this.myRef.current;
        console.log('le ref est tt : ' + nodab.innerHTML)
    }

    FocusTextInput=()=>{
        this.textInput.current.focus();
    }  
    
    componentDidUpdate(){
        console.log('Checkref est ' + this.Checkref.current.checked)
    }

    render() {    
        const cond = this.state.color==true ? 'black':'red'
       
        return (
            <div>
                
                   <Button id='myfirstbtn' ref={this.myRef} variant="contained" 
                        onClick={()=>{this.Changecolor()}} 
                        //onMouseEnter={()=>this.Changecolor()}
                      >Hello World
                    </Button>
                    <Checkbox inputRef={this.Checkref}/>
                    <br></br>
                    <br></br>
                    <TextField type="text" onChange={this.ValueTextInput} inputRef={this.textInput} id="outlined-basic" label="Entrer un Texte" variant="outlined" />
                    <br></br>
                    <br></br>
                   <Button variant="outlined" onClick={this.FocusTextInput}  
                      >Donner le focus au champ texte
                    </Button>     
                   <p>
                    la couleur est : {cond} <br></br>
                    et le contenu de l'input text est : {this.state.value}, <br></br>
                    et l'alignement est sur {this.state.alignmentname} <br></br>
                    et le radio1 est checké ?? : {this.state.textradio1} <br></br>

                    </p>


                   <ToggleButtonGroup
                       color="primary"
                       value={this.state.alignment}
                       exclusive
                       onChange={this.Togglegrpbtn}
                    >
                        <ToggleButton value={Namegrpbrn2[0].value}>{Namegrpbrn2[0].name}</ToggleButton>
                        <ToggleButton value={Namegrpbrn2[1].value}>{Namegrpbrn2[1].name}</ToggleButton>
                        <ToggleButton value={Namegrpbrn2[2].value}>{Namegrpbrn2[2].name}</ToggleButton>
                  </ToggleButtonGroup>
                  <br></br>
                  <br></br>
     <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>


    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        id='radiogroup1'
        onChange={this.Radiochange}
      >
        <FormControlLabel value="female" control={<Radio id='radio1id'ref={this.radioref1} onClick={this.Radiorefcheck1} />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
    <br></br>
    <Selectcomp/>  

              </div>
             )
    }
}
export default Firstmui;