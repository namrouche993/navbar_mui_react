import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box';
import Tablee from './MUI_component/Tablee'
import BasicTablee2 from './MUI_component/BasicTablee2'
import MUIdatabase from './MUI_component/MUIdatabase'
import MUIdatatable2 from './MUI_component/MUIdatatable2'
import MUIdatatable3 from './MUI_component/MUIdatatable3'



function Tablecompo() { 
  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  )
    
  //const data = React.useMemo(() => makeData(20), [])
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you wanttt',
      },
    ],
    []
  )
  return (
    <div>
    <Box sx={{ maxWidth: 200 }}>
      <CssBaseline />
      <Tablee columns={columns} data={data} />
    </Box>
    <br></br>
    <br></br>
    <Box sx={{ maxWidth: 700 }}>
    <BasicTablee2/>
    </Box>
    <br></br>
    <br></br>
    <Box sx={{ maxWidth: 700 }}>
    <MUIdatabase/>
    </Box>
    <br></br>
    <br></br>
    <Box sx={{ maxWidth: 1200 }}>
    <MUIdatatable2/>
    </Box>
    <Box sx={{ maxWidth: 250 }}>
    <MUIdatatable3/>
    </Box>
    </div>
  )
}

export default Tablecompo;
