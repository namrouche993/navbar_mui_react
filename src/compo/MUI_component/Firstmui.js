import React, { useEffect, useState,useRef } from 'react'
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
import Child from './Child';


const Namegrpbrn2 = [
    {value:'web',name:'WEB'},
    {value:'android',name:'ANDROID!'},
    {value:'ios',name:'IOS'}
]
console.log(Namegrpbrn2[0].value)
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Firstmui(props) {

  const [color,setColor]=useState(true)
  const [value,setValue]=useState('')
  const [alignment,setAlignment]=useState('')
  const [alignmentname,setAlignmentname]=useState('')
  const [textesexe1,setTextesexe1]=useState('')
  const [age,setAge]=useState('')
  const [value0,setValue0]=useState('')
  const [textradio1,setTextradio1]=useState('')

  const myRef = useRef(null);
  const textInput = useRef(null);
  const Checkref = useRef(null);
  const radioref1 = useRef(null);


  
const handleChangeagepropsparent = (event) => {
    setAge(event.target.value)
  }
 
const handleChangeValue = event => setValue0(event.target.value);
     

const Radiochange=(event, value ) => {
          setTextradio1(value.toString())
      }


const Sexechange=(event, value ) => {
        setTextesexe1(value.toString())
    } 

const Togglegrpbtn=(event, newAlignment ) => {
        Namegrpbrn2.map((item)=>{
            if(newAlignment==item.value){
                console.log('item name est : '+item.name )
                setAlignment(item.value)
                setAlignmentname(item.name)
            }
        })
      }    

const Changecolor=()=>{
        if(Checkref.current.checked){
            setColor(!color) // //////////// CHECKING IF IT'S CORRECT !!!!!!!!!!!!!!!!
        }
    }

   

const ValueTextInput=()=>{
        setValue(textInput.current.value)
    }
 
    useEffect(()=>{
      const nodab = myRef.current;
      console.log('le ref est tt : ' + nodab.innerHTML)
          })

          
  //   componentDidUpdate(){
  //     console.log('Checkref est ' + this.Checkref.current.checked)
  // }

     useEffect(()=>{
         console.log('Checkref est ' + Checkref.current.checked) /// CHECK if it's correct !!!!!!!!!!!!!
        });
                     
const FocusTextInput=()=>{
        textInput.current.focus();
    };
  
const cond = color==true ? 'black':'red'


  return (
    <div>       
                <Child
                    value={value0}
                    onChangeValue={handleChangeValue}
                 />
               <br></br>
                  <Button id='myfirstbtn' ref={myRef} variant="contained" 
                       onClick={()=>{Changecolor()}} 
                       //onClick={Changecolor} 
                       //onMouseEnter={()=>this.Changecolor()}
                     >Hello World!!
                   </Button>
                   <Checkbox inputRef={Checkref} onChange={Radiochange}/>
                   <br></br>
                   <br></br>
                   <TextField type="text" onChange={ValueTextInput} inputRef={textInput} id="outlined-basic" label="Entrer un Texte" variant="outlined" />
                   <br></br>
                   <br></br>
                  <Button variant="outlined" onClick={FocusTextInput}  
                     >Donner le focus au champ texte
                   </Button>     
                  <p>
                   La Couleur est : {cond} <br></br>
                   Et le contenu de l'input text est : {value}, <br></br>
                   Et l'alignement est sur {alignmentname} <br></br>
                   et le radio1 est checké ?? : {textradio1} <br></br>
                   et le sexe est : {textesexe1} <br></br>
                   l'age c'est : {age} <br></br>
                   la valeur0 c'est : {value0} <br></br>

                  
                  
                   </p>


                  <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={Togglegrpbtn}
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
                 <br></br>
                 <br></br>

  <FormControl>
     <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
       id='radiogroup1'
       onChange={Sexechange}
     >
       <FormControlLabel value="female" control={<Radio id='radio1id'ref={radioref1} 
       //onClick={Radiorefcheck1}
        />} label="Female" />
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
   <Selectcomp handleChangeageprops={handleChangeagepropsparent}/>  
             </div>
  )
}

export default Firstmui