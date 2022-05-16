import React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";


export default class Selectcomp extends React.Component {
    constructor(props){
        super(props);
        this.state={
          age:''
        }        
    };

      
  handleChangeage = (event) => {
    this.setState({age:event.target.value});
  };
/*
  Sendagevalue = () => {
    this.props.agee(this.state.age);
  }
*/

  render() {
    return (
        <FormControl sx={{ width: 1/8 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.age}
          label="Age"
          onChange={this.handleChangeage}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    )
  }
}