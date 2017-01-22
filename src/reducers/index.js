import { combineReducers } from 'redux'
import bag, * as fromBag from './bag'
import products, * as fromProducts from './products'

export default combineReducers({
  bag,
  products
})

const getAddedIds = (state) => fromBag.getAddedIds(state.bag)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = (state) =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * (1 - getProduct(state, id).discount),
      0
    )
    .toFixed(2)

export const getBagProducts = (state) =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id)
  }))
