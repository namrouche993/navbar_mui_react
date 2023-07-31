import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

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
  },
  containerCard: {
    //minHeight: 100, // This div has higher minimum height
    height: "100%", // So that grids 1 & 4 go all the way down
    fontSize: 31,
    textAlign: "center",
    backgroundColor: '#fff',
    //padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)',
  }
});

export default function Reactexo2() {
  const classes = useStyles();

  return (
  <Grid container direction="column" spacing={2} >
     
     <Grid item xs>
        <div className={classes.containerCard}>0</div>
      </Grid>

    <Grid container item direction="row" spacing={2} >
      <Grid item container direction="column" xs={2} spacing={2}>
        <Grid item xs>
             <div className={classes.containerCard}>1</div>
         </Grid>
         <Grid item xs>
             <div className={classes.containerCard}>1.1</div>
         </Grid>
         <Grid item xs>
             <div className={classes.containerCard}>1.2</div>
         </Grid>
         <Grid item xs>
              <div className={classes.containerCard}>1.3</div>
         </Grid>
         <Grid item xs>
              <div className={classes.containerCard}>1.4</div>
         </Grid>
         <Grid item xs>
              <div className={classes.containerCard}>1.4</div>
         </Grid>
    </Grid>
    <Grid item container direction="column" xs={6} md={3} spacing={2}>
        <Grid item xs>
           <div className={classes.container}>2</div>
        </Grid>
        <Grid item xs>
          <div className={clsx(classes.container, classes.containerTall)}>
            3
          </div>
        </Grid>
    </Grid>
      
    <Grid item container direction="column" xs spacing={2}>
        <Grid item xs>
           <div className={classes.container}>4</div>
        </Grid>
        <Grid item xs>
           <div className={classes.container}>5</div>
         </Grid>
    </Grid>
  </Grid>
</Grid>

    
  );
}