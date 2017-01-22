import React, { PropTypes } from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToBagClicked }) => (
  <div className="productItem col-md-2">
    <Product
	  image={product.image}
      name={product.name}
	  description={product.description}
      price={product.price}
	  discount={product.discount} />
    <button onClick={onAddToBagClicked} className="btn btn-default my-btn">Add to bag</button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired
  }).isRequired,
  onAddToBagClicked: PropTypes.func.isRequired
}

export default ProductItem
