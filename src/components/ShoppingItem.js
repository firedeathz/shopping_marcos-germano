import React, { PropTypes } from 'react'
import Product from './Product'

const ShoppingItem = ({ product, onRemoveFromBagClicked }) => (
  <div className="productItem col-md-2">
    <Product
	  image={product.image}
      name={product.name}
	  description={product.description}
      price={product.price}
	  discount={product.discount} />
    <button onClick={onRemoveFromBagClicked} className="btn btn-default my-btn">Remove from bag</button>
  </div>
)

ShoppingItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired
  }).isRequired,
  onRemoveFromBagClicked: PropTypes.func.isRequired
}

export default ShoppingItem
