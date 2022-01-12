import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';

import classes from '../css/Products.module.css'

const Post = (props) => {
    const params = useParams();
    const id = params.post_id;
    const [post, setPost] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            //console.log(res.data)
            setPost(res.data)
        })();
    }, []);

    // get the list of products for a specific category of the menu
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setProducts(res.data.slice(0, 5))
        })();
    }, []);

    const productsList = products.length > 0 ? (
        products.map(product => (
            <div className={classes.BlogCard} key={product.id}>
                <img className={classes.Thumbnail} src="https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg" alt="AI Thumbnail" />

                <div className="card-body">
                    <Link to={`/product/${product.id}`}>
                        <h5 className="card-title">{product.name}</h5>
                    </Link>
                    <p className="card-text">{product.body}</p>
                </div>

                <div className={classes.BlogDataWrapper}>
                    <h3 className={classes.BlogTitle}>Getting started with Artificial Intelligence</h3>
                    <div className={classes.AuthorInfoWrapper}>
                        <a className={classes.AuthorName}>EdYoda</a>
                        <span className={classes.BlogDate}>| 08 Jul 2019</span>
                    </div>
                    <p className={classes.BlogDesc}>We’re rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been the advent of artificial...</p>
                </div>

            </div>
        ))
    ) : (<div className="text-center">No posts found</div>)

    return (
        <div className="mt-10">
            <div className="card ">
                <h5 className="card-header">{post.title}</h5>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>

            <div className={classes.Main}>
                <h4 className="center">Produits</h4>
                <div className={classes.MainContainer}>
                    {productsList}
                </div>
            </div>
        </div>
    )
}

export default Post
