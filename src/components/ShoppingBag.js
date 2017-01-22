import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ShoppingItem from '../components/ShoppingItem'
import { removeFromBag } from '../actions'

const ShoppingBag = ({ products, total }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
  products.map(product =>
	<ShoppingItem
		key={product.id}
		product={product}
		onRemoveFromBagClicked={() => removeFromBag(product.id)}
	/>
    )
  ) : (
    <em className="emptyBag col-md-12">Your bag is empty.</em>
  )

  return (
    <div className="col-md-12">
		<div className="bag col-md-10">
		  <div className="header col-md-12">Your Bag</div>
		  <div className="prodList col-md-12">{nodes}</div>
		</div>
		<div className="summary col-md-2">
			<div className="col-md-6 align-left">
				<p className="summTitle">SUMMARY</p>
				<p className="totalTitle">Total</p>
			</div>
			<div className="col-md-6 align-right">
				<p className="quantity">Quantity {products.length}</p>
				<p className="totalPrice"><span className="nobold">GBP</span> &#163;{total}</p>
			</div>
			<div className="col-md-12 align-right">
				<p className="note">Duties &amp; Taxes included</p>
			</div>
		</div>
	</div>
  )
}

ShoppingBag.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
}

export default connect(
  ShoppingBag,
  { removeFromBag }
)(ShoppingBag)