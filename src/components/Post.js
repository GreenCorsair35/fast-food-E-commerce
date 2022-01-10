import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

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

    return (
        <div className="mt-10">
            <div className="card ">
                <h5 className="card-header">{post.title}</h5>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
