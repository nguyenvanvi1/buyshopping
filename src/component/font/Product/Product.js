import React from 'react'
import "./Product.css"
function Product({productItems,handleAddProduct }) {
  return (
    <div className='products'>
      {productItems.map((productItem)=>(
        <div className='card'>
          <div>
            <img className='product-image' src={productItem.image} alt={productItem}/>
          </div>
          <div>
            <h3 className="product.name">{productItem.name}</h3>
          </div>
          <div className='product-price'>${productItem.price}
          </div>
          <div>
            <button onClick={()=>handleAddProduct(productItem)} className='product-add-button'>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product