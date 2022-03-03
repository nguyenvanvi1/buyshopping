import React from 'react'
import Product from '../Product/Product'
import Signup from '../Signup/Signup'
import Cart from '../Cart/Cart'
import {Route, Switch} from "react-router-dom"
function Routes({productItems,cartItems,handleAddProduct,handleRemoveProduct  }) {
  return (
    <div>
        <Switch>
            <Route path="/" exact>
                <Product productItems={productItems} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path="/signup" exact>
                <Signup/>
            </Route>
            <Route path="/cart" exact>
              <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes