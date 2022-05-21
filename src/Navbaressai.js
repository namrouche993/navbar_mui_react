import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
//import DrawerComponent from "../Drawer";

const useStyles = makeStyles((theme) => ({
  appbarr:{
    backgroundColor:"rgb(25, 118, 210)",
    color:'#fff',
    marginBottom:'10px'
  },
  navtitle:{
    color: "aliceblue",
    textDecoration: "auto",
    //fontFamily: "monospace",
    fontSize: '18px',
  },
  navitem: {
    paddingLeft: '44px',
    color: "aliceblue",
    textDecoration: "auto",
    //fontFamily: "monospace",
    fontSize: '15px',
},
   diva: {
  paddingLeft: "34px",
   }

}));


function Navbaressai() {
  const classes = useStyles();

    return (
      <div>
    <AppBar position="static" className={classes.appbarr}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <Button className={classes.navtitle} href='/'> Nav Bar</Button>
        </Typography>
        <div className={classes.diva}>
          <>
              <Button className={classes.navitem} href='/'>Home</Button>
              <Button className={classes.navitem} href='/about'>About</Button>
              <Button className={classes.navitem} href='/contact'>Contact</Button>
              <Button className={classes.navitem} href='/faq'>FAQ</Button>
              <Button className={classes.navitem} href='/googlesheet'>Google Sheet</Button>
              <Button className={classes.navitem} href='/appmuicomponent'>Mui Component</Button>
              <Button className={classes.navitem} href='/learningreact'>first react lessons</Button>
              <Button className={classes.navitem} href='/tablecompo'>Table compo</Button>
              <Button className={classes.navitem} href='/reactexo'>React exo</Button>

              
          </>
        </div>
      </Toolbar>
    </AppBar> 
    </div>
    )
}
export default Navbaressai;
