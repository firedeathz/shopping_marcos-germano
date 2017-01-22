import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToBagUnsafe = productId => ({
  type: types.ADD_TO_BAG,
  productId
})

const removeFromBagUnsafe = productId => ({
  type: types.REMOVE_FROM_BAG,
  productId
})

export const addToBag = productId => (dispatch, getState) => {
  dispatch(addToBagUnsafe(productId))
}

export const removeFromBag = productId => (dispatch) => {
  dispatch(removeFromBagUnsafe(productId))
}