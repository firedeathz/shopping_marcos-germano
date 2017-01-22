import React, { PropTypes } from 'react'

const ProductsList = ({ title, children }) => (
  <div>
    <div className="header col-md-10">{title}</div>
    <div className="prodList col-md-10">{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
