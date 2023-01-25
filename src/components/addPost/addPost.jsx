import React, {useState} from 'react';
import "../../styles/addStyle.css";
import {API} from "../../connection/Api/api"

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function handleCreate(e) {
        e.preventDefault();
        Create(title,body);
    }


    const Create = async (title, body) => {
        try {
            await API.post("/posts", {
                title: title,
                body: body
            }, {
                'Access-Control-Allow-Origin': '*'
            })
            setTitle("");
            setBody("");
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <div className={"container"}>
            <div className="addPostContainer">
                <form onSubmit={handleCreate}>
                    <span>Title</span>
                    <input
                        style={{height: "30px"}}
                        type="text"
                        className="titleInput"
                        value={title}
                        onChange={
                            (e) =>
                                setTitle(e.target.value)
                        }
                    />
                    <span>Content</span>
                    <textarea
                        className="titleInput"
                        value={body}
                        name=""
                        id=""
                        onChange={
                            (e) =>
                                setBody(e.target.value)
                        }>
                    </textarea>
                    <button type="submit" className="addButton">Add Post</button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;