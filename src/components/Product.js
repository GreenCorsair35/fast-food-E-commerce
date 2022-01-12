import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';

import classes from '../css/Product.module.css'

const Product = () => {
	const params = useParams();
	const id = params.product_id;
	const [product, setProduct] = useState([]);
	useEffect(() => {
		(async () => {
			const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
			//console.log(res.data)
			setProduct(res.data)
		})();
	}, []);

	return (
		<div className={classes.MainContainer}>
			<div className={classes.ProductPreview}>
				<ProductPreview name={product.name} />
			</div>

			<div className={classes.ProductData}>
				<ProductDetails data={product.body} email={product.email} />
			</div>
		</div>
	)
}

export default Product
