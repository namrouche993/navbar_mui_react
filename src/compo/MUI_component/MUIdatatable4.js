import React, { useEffect, useState } from "react";

import {FormControlLabel,TextField,Switch} from "@material-ui/core";
//import MUIDataTable from "mui-datatables";
import MUIDataTable from "mui-datatables";

import Opgi from './Opgi';

//   const opgiw= Opgi.map((item)=>{
//     return <ProductsComp key={item.id} id={item.id} name={item.name} age={item.age}/>
//   })



function MUIdatatable3(props) {

  const [sctopgi,setOpgi]=useState('dda')

  

  useEffect(()=>{

  
  /*  const ss2=document.getElementsByClassName('tss-ylo811-MUIDataTableSelectCell-headerCell')
    ss2[2].style.backgroundColor='darkslategray'

    const nn2=document.getElementsByClassName('tss-gm6zfk-MUIDataTableHeadCell-fixedHeader')
    for (let i = 0; i < 13; i++) {
      nn2[i].style.backgroundColor='darkslategray'
      nn2[i].style.color='white'
    }
  
    const bb2=document.getElementsByClassName('MuiTableCell-root')
    for (let i = 0; i < 250; i++) {
      bb2[i].style.padding='0px'
    }*/
  }
  )


  const columns = [
    {
      name: "OPGI",
      label:"OPGI",
      options: {
        
        filter: true,
       // customHeadRender: (columnMeta, updateDirection) => (
            //columnMeta.filter=true,
       //     <th //key={1} 
            //onClick={() => updateDirection(2)}
         //    style={{backgroundColor:'darkslategray',color: 'white',
           //  padding: "4px",textAlign: "left"}}>
           //     {columnMeta.name}
        //    </th>
        //),
     //     customBodyRender: (value, tableMeta, updateValue) => {
        //  return <Cities value={value || ''} index={tableMeta.columnIndex} change={event => updateValue(event)} />;
        //    return <Button variant="contained">{value}</Button>
     //   return  <div style={{padding:"0px"}}> <span style={{color:"black"}}>{value}</span>  </div>
     //   },
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
tableBodyHeight:'700px',
sort:false,
selectToolbarPlacement:'none',
selectableRowsHeader:false,
selectToolbarPlacement:'none',
selectableRowsOnClick:true,
selectableRowsHideCheckboxes:false,
//customRowRender:(data, dataIndex, rowIndex)=>{
//  return <div>{data}</div>
//},
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
//onRowSelectionChange:{Selectrow}
/*onRowSelectionChange:(currentRowsSelected, allRowsSelected, rowsSelected) => {
  {props.Selectrow}
  console.log('currentRowsSelected')
  console.log(currentRowsSelected)
  console.log('allRowsSelected')
  console.log(allRowsSelected)
  console.log('rowsSelected')
  const lignse = JSON.stringify(Object.values(rowsSelected));
  console.log(lignse)
  //console.log(rowsSelected)
  //this.setState({ligneselected:rowsSelected})
  setOpgi(rowsSelected)

  //this.setState({ligneselected:lignse})
  //alert('la ligne selectionee est :'+rowsSelected)
},
*/
//count:'49'
};

  return (
    <div>
       <MUIDataTable title={""} data={data} columns={columns}
       options={{
         onRowSelectionChange:props.Selectrow,
         tableBodyHeight:'700px',
         sort:false,
         selectToolbarPlacement:'none',
         selectableRowsHeader:false,
         selectToolbarPlacement:'none',
         selectableRowsOnClick:true,
         selectableRowsHideCheckboxes:false,
         //customRowRender:(data, dataIndex, rowIndex)=>{
         //  return <div>{data}</div>
         //},
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
         }}/>
    </div>
  )
}

export default MUIdatatable3;

/*export {
  MUIdatatable3,
  Contact,
}
*/
/*
  componentDidMount(){
 
*/