import UpdatePost from "./components/updatePost/updatePost";
import Contacts from "./components/contacts/contacts";
import AddPost from "./components/addPost/addPost";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/navigation/nav";
import About from "./components/about/about";
import Posts from "./components/home/posts";
import "./styles/appStyle.css";
import React from 'react';

function App() {
    return (
        <div className="App">
            <div className="navPage">
                <Nav/>
            </div>
            <div className="basicPage">
                <Routes>
                    <Route path={"/update/:id"} element={<UpdatePost/>}/>
                    <Route path={"/contact-us"} element={<Contacts/>}/>
                    <Route path={"/add-post"} element={<AddPost/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/"} element={<Posts/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
