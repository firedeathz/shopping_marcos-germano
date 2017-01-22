import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToBag } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addToBag }) => (
  <ProductsList title="Product List">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToBagClicked={() => addToBag(product.id)} />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  })).isRequired,
  addToBag: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToBag }
)(ProductsContainer)
