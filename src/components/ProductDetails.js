import React from 'react';

import classes from '../css/ProductDetails.module.css'

const ProductDetails = (props) => {
	console.log(props);
	return(
		<div className={classes.ProductData}>
			<h1 className={classes.ProductTitle}>{props.email}</h1>
			<p className={classes.ProductDescription}>{props.data}</p>
		</div>
	);
}

export default ProductDetails;