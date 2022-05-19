import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import Chip from '@material-ui/core/Chip';
import { TableFilterList } from "mui-datatables";

 
const columns = [
   {name:"Name",options:{filter:false}},
   {name:"Company",options:{filter:'true'}},
   {name:"City",options:{display:'true',sort: false}},  //display:false
   {name:"State"}
];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];


const options = {
  //filterType: 'checkbox',
  //filter:true,
  //expandableRowsOnClick:true,
  //expandableRows:true,
  //caseSensitive:'true',
  //confirmFilters:'true',
  count:'10',
  //customToolbar: () =>{
  //  return 'usmisaaa'
  //},
  selectToolbarPlacement:'none',
  
  //fixedSelectColumn:'false',
  //viewColumns:'false',
  //selectableRowsHideCheckboxes:'true',
  //selectableRows:'none',
  //selectableRowsHeader:'false',
   //customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
    //console.log('selected hidded')
    //<CustomToolbarSelect/>
    //<CustomToolbarSelect selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows} />
  //),
  
  //textLabels: {
  //  selectedRows: {
  //      text: "rowwww(s) selected",
  //      delete: "Delete",
  //     deleteAria: "Delete Selected Rows",
  //    }
  // },
  
};

export default class MUIdatabase extends Component {
   

  render() {
    return (
      <div>
          
    <MUIDataTable
  title={"Employee List!!"}
  data={data}
  columns={columns}
  options={options}
/>
      </div>
    )
  }
}
