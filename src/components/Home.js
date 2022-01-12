import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import classes from '../css/Home.module.css'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data.slice(0, 5))
        })();
    }, []);

    const listMarkup = posts.length > 0 ? (
        posts.map(post => (
            <div className={classes.BlogCard} key={post.id}>
                <img className={classes.Thumbnail} src="https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg" alt="AI Thumbnail" />

                <div className="card-body">
                    <Link to={`/posts/${post.id}`}>
                        <h5 className="card-title">{post.title}</h5>
                    </Link>
                    <p className="card-text">{post.body}</p>
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
        <div className={classes.Main}>
            <h4 className="center">Menu</h4>
            <div className={classes.MainContainer}>
                {listMarkup}
            </div>
        </div>
    )
}

export default Home