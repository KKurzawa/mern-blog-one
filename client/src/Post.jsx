/* eslint-disable react/prop-types */
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { AiFillLike } from "react-icons/ai";
import { useState } from 'react';

const Post = ({ _id, title, summary, cover, createdAt, author, likes }) => {
    const [like, setLike] = useState(likes)

    const addLike = async () => {
        const id = _id
        const nextLike = like + 1
        setLike(nextLike)
        await fetch('http://localhost:4000/post/like/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                likes: nextLike
            })
        })
        console.log(nextLike)
    }

    return (
        <div className="post">
            <div className="image">
                <Link to={`post/${_id}`}>
                    <img className='post-image' src={'http://localhost:4000/' + cover} alt="post image" />
                </Link>
            </div>
            <div className="texts">
                <Link to={`post/${_id}`}>
                    <h2 className='post-title'>{title}</h2>
                </Link>
                <p className='info'>
                    <a className="author">{author.username}</a>
                    <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                </p>
                <p className='summary'>{summary} </p>
                <button onClick={addLike} className='like-btn'>
                    <AiFillLike /> {like}
                </button>
            </div>
        </div>
    )
}

export default Post