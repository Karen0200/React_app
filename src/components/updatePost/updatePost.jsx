import React, {useEffect, useState} from 'react';
import {API} from "../../connection/Api/api";
import {useParams} from "react-router";
import "../../styles/updateStyle.css";

const UpdatePost = () => {
    let {id} = useParams();
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const Post = async () =>{
        try{
            let response = await API.get(`posts/${id}`,{
                'Access-Control-Allow-Origin':'*'
            });
            setPost(response.data)
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() =>{
        Post()
    },[])

    const Update = async (title,body)=>{
        try{
            let res = await API.put(`posts/${id}`,{
                title:title,
                body:body
            },{
                'Access-Control-Allow-Origin': '*'
            })
            setTitle("");
            setBody("");
        }catch (e){
            console.log(e);
        }
    }


    const handleAdd = (e)=>{
        e.preventDefault();
        Update(title,body);
        alert("Post updated successfully");
    }



    return (
        <div>
            <div className="updatePost">
                <form
                    onSubmit={handleAdd}
                    className="upForm"
                >
                    <span>Title</span>
                    <input
                        style={{height: "35px"}}
                        type="text"
                        className="tiTle"
                        defaultValue={post.title}
                        onChange={
                            (e) =>
                                setTitle(e.target.value)
                        }
                    />
                    <span>Content</span>
                    <textarea
                        className="boDy"
                        defaultValue={post.body}
                        onChange={
                            (e) =>
                                setBody(e.target.value)
                        }>
                    </textarea>
                    <button type="submit" className="UpdateButton">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;