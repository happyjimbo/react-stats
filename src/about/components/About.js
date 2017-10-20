import React from 'react'
import './About.css'


const About = ({github, linkedIn, email}) => {

    console.log('about page')
    return (
        <div className="About">
            <h3>About</h3>
            <div className="section">
                <p>Stocks App is built using a React, Redux, Redux Saga stack:</p>
                <ul>
                    <li>ES6 / ES2015</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Redux Saga</li>
                    <li>Reselect</li>
                    <li>React Router</li>
                    <li>Jest (unit testing)</li>
                    <li>SCSS/SASS</li>
                    <li>Bootstrap</li>
                    <li>Victory.js</li>
                    <li>Lodash</li>
                    <li>Webpack</li>
                </ul>

            </div>
            <div className="section">
                <p>Stocks App GitHub repository:</p>
                <a href={github} target="_blank">{github}</a>
            </div>

            <h3>Contact</h3>

            <div className="section">
                <p>LinkedIn:</p>
                <a href={linkedIn} target="_blank">{linkedIn}</a>
            </div>

            <div className="section">
                <p>Email:</p>
                <a href={"mailTo:" + email}>{email}</a>
            </div>
        </div>
    )
}


export default About