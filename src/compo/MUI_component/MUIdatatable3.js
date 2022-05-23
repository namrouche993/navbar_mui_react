import React from "react";

import {FormControlLabel,TextField,Switch} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Opgi from './Opgi';



//   const opgiw= Opgi.map((item)=>{
//     return <ProductsComp key={item.id} id={item.id} name={item.name} age={item.age}/>
//   })

class MUIdatatable3 extends React.Component {

  render() {

    const columns = [
      {
        name: "OPGI",
      }
    ];

    const data = Opgi.OPGI;

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'standard'
    };

    return (
      <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} />
    );

  }
}

export default MUIdatatable3;