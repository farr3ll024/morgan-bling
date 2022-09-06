import React, {useEffect, useState} from "react";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://jsonplaceholder.typicode.com/posts")
            .then((response) => setPosts(response.data));
    }, []);

    return (
        <ul className="posts">
            {posts.map((post) => (
                <li className="post" key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}

export default Posts;
