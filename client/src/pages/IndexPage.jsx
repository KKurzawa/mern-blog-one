import { useEffect, useState } from "react"
import Post from "../Post"

const IndexPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            if (response.ok) {
                response.json().then(posts => {
                    setPosts(posts)
                })
            } else {
                console.log(response)
            }
        })
    }, [])
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} key={post._id} />
            ))}
        </>
    )
}

export default IndexPage