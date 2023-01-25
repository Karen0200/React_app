import Human from "../../assets/Images/human.jpg";
import "../../styles/aboutStyle.css";
import React from 'react';

const About = () => {
    return (
        <div className={"container"}>
            <div className="parent">
                <div className="childe_1">
                    <img src={Human} alt="author"/>
                </div>
                <div className="childe_2">
                    <div className="fullName">
                        Karen Grigoryan
                    </div>
                    <div className="status">
                        Fullstack Developer
                    </div>
                    <div className="peogL">
                        <span>Programing Languages</span>
                        <ul className="languages">
                            <li>PHP, Laravel</li>
                            <li>Java Script, React</li>
                        </ul>
                    </div>
                    <div className="aboutLinks">
                        <a href="https://github.com/">
                            <i className="fab fa-github-square fa-3x" id="git"/>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin fa-3x" id="linked"/>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin fa-3x" id="linked"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;