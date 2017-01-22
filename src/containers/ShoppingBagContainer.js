import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTotal, getBagProducts } from '../reducers'
import ShoppingBag from '../components/ShoppingBag'

const ShoppingBagContainer = ({ products, total }) => (
  <ShoppingBag
    products={products}
    total={total} />
)

ShoppingBagContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string
}

const mapStateToProps = (state) => ({
  products: getBagProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps
)(ShoppingBagContainer)
