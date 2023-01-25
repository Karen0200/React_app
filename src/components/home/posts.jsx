import React, {useEffect, useState} from 'react';
import {API} from "../../connection/Api/api";
import {Link} from "react-router-dom";
import "../../styles/homeStyle.css";
const Posts = () => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = async () => {
        try {
            let res = await API.get("/posts", {
                'Access-Control-Allow-Origin': '*'
            });
            setPosts(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAllPosts()
    }, []);


    const Delete = async (id) => {
        try {
            await API.delete(`/posts/${id}`, {
                'Access-Control-Allow-Origin': '*'
            }).then(response => {
                if (response.status === 200) {
                    getAllPosts();
                }
            });
        }catch (e){
            console.log(e)
        }
    }
    return (
        <div className="postsArea">
            {posts.map((post, index) => {
                return (
                    <div className="postCard" key={index}>
                        <div className="postContent">
                            <span className={"postTitle"}>Title: {post.title}</span>
                            <p className="postBody">Content: {post.body}</p>
                        </div>
                        <div className="postButton">
                            <button
                                className="update">
                                <Link
                                     to={`/update/${post._id}`}
                                >Update
                                </Link>
                            </button>
                            <button
                                className="delete"
                                onClick={() => Delete(post._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;