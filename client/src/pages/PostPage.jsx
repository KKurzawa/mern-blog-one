import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { format } from 'date-fns'
import { UserContext } from '../UserContext'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null)
    const { userInfo } = useContext(UserContext)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo)
                })
                console.log(postInfo)
            })
    }, [])

    const deletePost = () => {
        axios
            .delete(`http://localhost:4000/post/${id}`)
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    if (!postInfo) return ''

    return (
        <div className="post-page">
            <h1 className="post-title">{postInfo.title}</h1>
            <time>{format(new Date(postInfo.createdAt), 'MMM d, yyyy HH:mm')}</time>
            <div className="author">by @{postInfo.author.username}</div>
            {userInfo.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link className='edit-btn' to={`/edit/${postInfo._id}`}>
                        <FaEdit />
                        Edit this post</Link>
                    <button className="delete-btn" onClick={deletePost}>
                        <MdDeleteForever />
                        Delete this post
                    </button>
                </div>
            )}
            <div className="image">
                <img className='post-image' src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <h1>{postInfo.summary}</h1>
            <div className="summary" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    )
}

export default PostPage