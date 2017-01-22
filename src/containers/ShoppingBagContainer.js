import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTotal, getBagProducts } from '../reducers'
import ShoppingBag from '../components/ShoppingBag'
import ShoppingItem from '../components/ShoppingItem'
import { removeFromBag } from '../actions'

const ShoppingBagContainer = ({ products, total, removeFromBag }) => (
  <ShoppingBag title={total}>
      {products.map(product =>
		<ShoppingItem
          key={product.id}
          product={product}
          onRemoveFromBagClicked={() => removeFromBag(product.id)} />
      )}
  </ShoppingBag>
)

ShoppingBagContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  removeFromBag: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getBagProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { removeFromBag }
)(ShoppingBagContainer)
