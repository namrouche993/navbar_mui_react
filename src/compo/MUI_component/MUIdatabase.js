import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import Chip from '@material-ui/core/Chip';
import { TableFilterList } from "mui-datatables";
import Tooltip from "@material-ui/core/Tooltip";
import Done from "@material-ui/icons/Done";

 
export default class MUIdatabase extends Component {

  showAlert=(valuee)=>{
    alert("I'm an alert"+valuee);
  }


columns = [
  {name:"Name",options:{filter:false}},
  {name:"Company",options:{filter:'true'}},
  {name:"City",options:{display:'true',sort: false}},  //display:false
  {name:"State"},
  {name:"Health",
  options: {
    customBodyRender: (value, tableMeta, updateValue) => {
      console.log("tableMeta.tableData[1][2]:");
      console.log(tableMeta.tableData[1][2]);
      console.log("tableMeta");
      console.log(tableMeta);
      console.log('valuevalue');
      console.log(value);


      if (value === "OK")
        return (
          <Tooltip title="OK">
            <Done color="primary" />
          </Tooltip>
        );
      else
        return (
          //<Tooltip title="Failing">
          <button onClick={()=>this.showAlert(value)}>Afficher l'alert</button>
          //</Tooltip>
        );
    }
  }

   },
   {name:"Health2",
   options: {
    customBodyRenderLite: (dataIndex, rowIndex) => {
       console.log("dataIndex");
     //  console.log(this.data[0][2]);
     //  console.log('valuevalue');
     //  console.log(value);
 
 
       if (rowIndex === 1)
         return (
           <Tooltip title="OK">
             <Done color="danger" />
           </Tooltip>
         );
       else
         return ( 
          <button onClick={()=>this.showAlert(this.data[rowIndex][2])}>City alert</button>

         );
     }
   }
 
    }
 




];

data = [
["Joe James", "Test Corp", "Yonkers", "NY","OK","aa"],
["John Walsh", "Test Corp", "Hartford", "CT","OK","bb"],
["Bob Herm", "Test Corp", "Tampa", "FL","Faillingg",'cc'],
["James Houston", "Test Corp", "Dallas", "TX","OK","dd"],
];


options = {
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
 

  render() {
    return (
      <div>
          
    <MUIDataTable
  title={"Employee List!!"}
  data={this.data}
  columns={this.columns}
  options={this.options}
/>
      </div>
    )
  }
}
