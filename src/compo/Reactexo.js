import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { styled }  from '@material-ui/core';


const Item = styled(Paper)(({ theme }) => ({
//  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: '#fff',
  //...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)',
  //lineHeight:'90px'
}));

export default class Reactexo extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        
        <Grid item xs={4} sx={{border: 300}} >
          <Item><h1>XS=4</h1> xs=4</Item>
        </Grid>

        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      
      </Grid>
    </Box>
    )
  }
}
