import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/*import App0 from './App';

import AppClass from './AppClass';
import Pro from './Pro';
import Log from './Log';
import AppButtonlog from './AppButtonlog';
import Counting from './Counting';
import AppModal from './AppModal';

import { BrowserRouter as Router} from 'react-router-dom';

import { render } from 'react-dom';
*/
//import ProductsComp from './ProductsComp';
//import products from './products';



ReactDOM.render(
  <React.StrictMode>
  <App/>
</React.StrictMode>,
document.getElementById('root')
);



/*
ReactDOM.render(
   <App0 colorname="yellow"/>,
  document.getElementById('root')
);


ReactDOM.render(
  <Pro/>,
 document.getElementById('root_products')
);

let cond = Math.random()
console.log(cond)

ReactDOM.render(
  <AppClass name={cond>0.5 ? "hmida":"redouane"} color="green"/>,
 document.getElementById('root_classcomponent')
);




ReactDOM.render(
  <Log/>,
 document.getElementById('root_log')
);


ReactDOM.render(
  <AppButtonlog/>,
 document.getElementById('root_button_loginout')
);


ReactDOM.render(
  <Counting name="mourad"/>,
 document.getElementById('root_counting')
);

ReactDOM.render(<AppModal />,
document.getElementById('root_appmodal')
);*/