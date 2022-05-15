import React from 'react';
import ProductsComp from './ProductsComp';
import products from './products';

function Pro() {
  const Products_Comp= products.map((item)=>{
    return <ProductsComp key={item.id} id={item.id} name={item.name} age={item.age}/>
  })

  return (
    <div>
    {Products_Comp}
    </div>
  )
}
export default Pro;
