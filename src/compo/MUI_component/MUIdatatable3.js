import React from "react";

import {FormControlLabel,TextField,Switch} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Opgi from './Opgi';
//import './Muidatatablecss.css';
import Box from '@material-ui/core/Box';

import {Button} from "@material-ui/core";


//   const opgiw= Opgi.map((item)=>{
//     return <ProductsComp key={item.id} id={item.id} name={item.name} age={item.age}/>
//   })




class MUIdatatable3 extends React.Component {

  componentDidMount(){
    console.log("Opgi est : ")
    console.log(Opgi.map((item)=>{
      return item.OPGI
    }))
  }

  render() {

    const columns = [
      {
        name: "OPGI",
        options: {
          
          filter: true,
          customHeadRender: (columnMeta, updateDirection) => (
              //columnMeta.filter=true,
              <th key={1} 
              //onClick={() => updateDirection(2)}
               style={{backgroundColor:'darkslategray',color: 'white'}}>
                  {columnMeta.name + " zza"+ columnMeta.filter}
              </th>
          ),
            customBodyRender: (value, tableMeta, updateValue) => {
          //  return <Cities value={value || ''} index={tableMeta.columnIndex} change={event => updateValue(event)} />;
          //    return <Button variant="contained">{value}</Button>
          return  <div style={{padding:"5px"}}> <span style={{color:"black"}}>{value}</span>  </div>
          },
      }
      }
    ];

    const data = Opgi
    // .map((item)=>{
    //   return item.OPGI
    // });

    console.log("data est :")
    console.log(data)

    const data0 = data
    console.log("data0 est :")
    console.log(data0)

    console.log("Opgi[0].OPGI est :")
    console.log(Opgi[0].OPGI)

    console.log("JSON")
    //const dd=JSON.parse(Opgi)
    //console.log(dd.OPGI)

 
const options = {
  selectToolbarPlacement:'none',
  selectableRowsHeader:false,
  selectToolbarPlacement:'none',
  selectableRowsOnClick:true,
  selectableRowsHideCheckboxes:true,
  customRowRender:(data, dataIndex, rowIndex)=>{
    return <div>{data}</div>
  },
  selectableRows:"single",
  //tableBodyHeight:"700px",
  filter: false,
  search: false,
  print: false,
  download: false,
  viewColumns: false,
  customToolbar: null,
  responsive: 'vertical',
  pagination:false,
  //sort:false,
  onRowSelectionChange:(currentRowsSelected, allRowsSelected, rowsSelected) => {
    console.log('currentRowsSelected')
    console.log(currentRowsSelected)
    console.log('allRowsSelected')
    console.log(allRowsSelected)
    console.log('rowsSelected')
    const lignse = JSON.stringify(Object.values(rowsSelected));
    console.log(lignse)
    //console.log(rowsSelected)
    //this.setState({ligneselected:rowsSelected})
    this.setState({ligneselected:lignse})
    //alert('la ligne selectionee est :'+rowsSelected)
  },

 count:'49',
 
 
};
 

    return (
      <MUIDataTable title={""} data={data} columns={columns} options={options} />
    );
  }
}

export default MUIdatatable3;
