import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import MUIdatatable3 from './MUI_component/MUIdatatable3'
import Box from '@material-ui/core/Box';
import Opgi from './MUI_component/Opgi';

const useStyles = makeStyles({
  container: {
    height: "100%", // So that grids 1 & 4 go all the way down
    minHeight: 300, // Give minimum height to a div
    //border: "1px solid black",
    fontSize: 31,
    textAlign: "center",
    backgroundColor: '#fff',
    //padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)',
  },
  containerTall: {
    minHeight: 250 // This div has higher minimum height
  }
});

export default function Reactexo() {
  const classes = useStyles();
  const [hach2,setHach]=useState('Toutes les wilayas')
  const [effectif,setEffectif]=useState(0)


 const Selectrowparent=(currentRowsSelected, allRowsSelected, rowsSelected) => {

  console.log(rowsSelected[0])
  console.log("le type " +typeof rowsSelected[0])

  //const sumef=0
  //const fsumeffectif =  Opgi.map((efitem)=>{
  //  sumef=sumef+parseInt(efitem.id2)
  //})
  //console.log("listef egale a : " + Opgi.id2)

if(typeof(rowsSelected[0])!=="undefined"){
  const arr1 = Opgi.filter(d => d.id1 === parseInt(rowsSelected)+1);
  setHach(arr1[0].OPGI)

  const arr2 = Opgi.filter(d => d.id1 === parseInt(rowsSelected)+1);
  setEffectif(arr1[0].Effectif)

} else {
  setHach("Toutes les wilayas")
  setEffectif(0)
}
  //const da=JSON.stringify(arr1[0])
 }

 

  return (
    <Grid container direction="row" spacing={2} >
      <Grid item xs={2}>
        <div className={classes.container}>
              <Box>
                    <MUIdatatable3 Selectrow={Selectrowparent}/>
              </Box>
        </div>
      </Grid>
      <Grid item container direction="column" xs spacing={2}>
        <Grid item xs>
          <div className={classes.container}>
          <Box>            
            {hach2}
            <br></br>
            Effectif : {effectif}
          </Box>

          </div>
        </Grid>
        <Grid item xs>
          <div className={clsx(classes.container, classes.containerTall)}>
            3
          </div>
        </Grid>
      </Grid>
      <Grid item xs>
        <div className={classes.container}>4</div>
      </Grid>
    </Grid>
  );
}
// import React, { Component } from 'react'
// import Box from '@material-ui/core/Box';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   Button,
// } from "@material-ui/core";
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';



// import { styled }  from '@material-ui/core';


// const Item = styled(Paper)(({ theme }) => ({
// //  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   backgroundColor: '#fff',
//   //...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)',
//   //lineHeight:'90px'
// }));


// const Container = styled(Paper)(({ theme }) => ({
//   height: "100%", // So that grids 1 & 4 go all the way down
//   minHeight: 150, // Give minimum height to a div
//   border: "1px solid black",
//   fontSize: 30,
//   textAlign: "center"
//   }));

  
// const ContainerTall = styled(Paper)(({ theme }) => ({
//   minHeight: 250 // This div has higher minimum height
//   }));



// export default class Reactexo extends Component {
//   render() {
    
//     return (
//   <Box sx={{ flexGrow: 1 }}>
//       <Grid item xs={12} container direction="row">
//         <Grid item xs={4}>
//           <Item>xs=2 d1 </Item>
//         </Grid>
//         <Grid item xs={8} container direction="column">
//            <Grid item xs={4}>
//              <Item>xs=4 d2</Item>
//            </Grid>
//            <Grid item xs={4}>
//              <Item>xs=4 d3</Item>
//            </Grid>
//         </Grid>
//       </Grid>
// {/*     
//         <Grid item xs={4}>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4 d4 </Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4 d5</Item>
//         </Grid> */}
//   </Box>
// )
// {/* 

//       <Grid container spacing={2}>        
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
        
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
        
//         <Grid item xs={4} sx={{border: 300}} >
//           <Item><h1>XS=4</h1> xs=4</Item>
//         </Grid>

//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
      
//       </Grid> */}
    
//   }
// }
