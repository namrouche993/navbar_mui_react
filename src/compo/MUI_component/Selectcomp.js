import React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box
} from "@material-ui/core";


export default class Selectcomp extends React.Component {
    constructor(props){
        super(props);
        this.state={
          age:'',
          value:''
        }        
    };

      
 // handleChangeage = (event) => {
 //   this.setState({age:event.target.value});
 // };

  // handleChangeValue = event => this.setState({value: event.target.value});

/*
  Sendagevalue = () => {
    this.props.agee(this.state.age);
  }
*/

  render() {
    return (
      <div>
      <Box sx={{ maxWidth: 160 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={this.state.age}
          label="Age"
          onChange={this.props.handleChangeageprops}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Box>
      </div>
    )
  }
}