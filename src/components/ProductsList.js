import React, { PropTypes } from 'react'

const ProductsList = ({ title, children }) => (
  <div className="col-md-12">
	<div className="col-md-10">
		<div className="header col-md-12">{title}</div>
		<div className="prodList col-md-12">{children}</div>
	</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
