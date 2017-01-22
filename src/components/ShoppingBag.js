import React, { PropTypes } from 'react'
import Product from './Product'

const ShoppingBag  = ({ products, total }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        name={product.name}
		description={product.description}
        price={product.price}
        discount={product.discount}
        key={product.id}
      />
    )
  ) : (
    <em>Your bag is empty.</em>
  )

  return (
    <div>
		<div className="bag">
		  <div className="header col-md-10">Your Bag</div>
		  <div className="col-md-10">{nodes}</div>
		</div>
		<div className="summary col-md-2">
		  <p>
			<span>Total</span>
			<span>&#163;{total}</span>
		  </p>
		</div>
	</div>
  )
}

ShoppingBag.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
}

export default ShoppingBag
