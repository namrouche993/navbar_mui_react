
import React from 'react'
import Spreadsheet from "react-spreadsheet";
import CellBase from "react-spreadsheet"

function Home() {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];
  return (
    <div>
      <CellBase>
              <Spreadsheet data={data}/>
      </CellBase>
    </div>
  )
}

export default Home