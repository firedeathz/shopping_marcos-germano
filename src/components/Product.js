import React, { PropTypes } from 'react'

const Product = ({ price, discount, name, description, image }) => (
  <div>
	<img src={image} alt={description} className="thumb" />
	<p className="name">
		{name}
	</p>
	<p className="desc">
		{description} 
	</p>
	<p className="price">
		<span className={discount > 0 ? "oldPrice" : "basePrice"}>&#163;{price}</span>
		<span className={discount === 0 ? "hidden" : "discPrice"}> &#163;{price*(1 - discount).toFixed(2)}</span>
		<span className={discount === 0 ? "hidden" : "" }>|</span>
		<span className={discount === 0 ? "hidden" : "discAmt" }>{discount*100}&#37; off</span>
	</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  discount: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default Product
