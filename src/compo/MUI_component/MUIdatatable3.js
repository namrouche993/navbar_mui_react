import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import Opgi from './Opgi';


function MUIdatatable3(props) {

 useEffect(()=>{
    const ss2=document.getElementsByClassName('tss-ylo811-MUIDataTableSelectCell-headerCell')
    ss2[0].style.backgroundColor='darkslategray'

   const nn2=document.getElementsByClassName('tss-gm6zfk-MUIDataTableHeadCell-fixedHeader')
      nn2[0].style.backgroundColor='darkslategray'
      nn2[0].style.color='white'

  const bb2=document.getElementsByClassName('MuiTableCell-root')
      for (let i = 0; i < 102; i++) {
          bb2[i].style.padding='0px'
      }
  })

  const columns = [
    {
      name: "OPGI",
      label:"OPGI",
      options: {        
        filter: true,
        }
    }
  ]; 
  const data = Opgi

  //console.log(data.filter())

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