import React, {useEffect} from 'react';
import Aos from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "aos/dist/aos.css";
import "./home.css";
import profile from './profile.jpeg';
import image1 from "./999FF9CC-AFAB-43BA-A826-9C13EA52DA7F.JPG";
import image2 from "./A96476BF-C7DA-4374-AD9D-020B596A0A0E.JPEG";
import image3 from "./IMG_1510.jpg";
import image4 from "./IMG_1619.jpg";
import badge from "./badge.png";


function Home (){
    useEffect(()=>{
        Aos.init({duration:1500});
    },[]);

    return (
        <>
        <br></br><br></br><br></br>
        <div className = "container" >
            <div id = "aboutMe" >
                <div className="center-align">
                    <br></br> 
                    <img data-aos="fade-in" id = "profile" src={profile} className= "responsive-img circle" alt="Me"/>
                    
                </div>
                <div>
                    <h3 data-aos="flip-up"className="center-align" >Jonathan Honda</h3>
                    <p data-aos="fade-right">
                        My name is Jonathan Honda, and I am A FullStack web developer. I have completed a coding Bootcamp from the University of California, Berkeley. 
                        I graduated with an overall grade of an A. 
                    </p>
                    <p data-aos="fade-left">
                        I am originally from San Diego, California, and I have graduated this year from the University of California, Irvine, with a BA in Criminology Law and Society.
                        Go Anteaters Zot Zot Zot!!! However, I now live in Northern California. 
                    </p>
                    <p data-aos="fade-right">
                        I am actively searching for work as a web developer, and I look forward to honing and strengthen my coding skills.
                    </p>
                    <p data-aos="fade-left">
                        Another exciting thing about me is that I was in the ROTC program all four years in college and have commissioned as a second lieutenant in the Army National Guard.
                        On the weekends, I serve as a Network Officer at the Division Signal Company at Joint Forces Training Base in Los Alamitos. 
                    </p>
                    <p><a data-aos="fade-up" id = "email" className="center-align" href="mailto: hondahelix120@gmail.com">Email: hondahelix120@gmail.com</a></p>
                </div>
                <br></br>
            </div>
        </div>
        <div className = "skills center-align" >
            <div className = "skillls-container row">
                <div className="col s1"></div>
                <div data-aos="flip-right" className = "coding-languages col s3 skills-box">
                    <h5 className ="skill-title">
                        Coding skills
                    </h5>
                    <p className = "coding-skills">
                    JavaScript, HTML, CSS, Python, SQL, React, JSON, ES6, APIs, AJAX, Node.js, jQuery, Express.js, Sequelize, MySQL, Mongoose, Mongodb, Git
                    </p>
                </div>
                <div data-aos="flip-down" className = "hackerrank col s3 skills-box">
                    <h5 className ="skill-title">
                        Algorithms
                    </h5>
                    <ul>
                        <li><img className="badge" src= {badge} alt="hackerrank badge"></img></li>
                        <li><a className="link" href="https://www.hackerrank.com/hondahelix120">HackerRank</a></li>
                    </ul>
                </div>
                <div data-aos="flip-left" className = "strenghts col s3 skills-box">
                    <h5 className ="skill-title">
                        Strengths
                    </h5>
                    <ul>
                        <li>Restorative</li>
                        <li>Achiever</li>
                        <li>Focus</li>
                        <li><a href="https://drive.google.com/file/d/1CNmvzCfLJz-SCRADdy5BRsKNhmvOhAkI/view?usp=sharing">Gallup Strength Finder</a></li>
                    </ul>
                </div>
            </div>         
        </div>
        <div className = "education">
            <h2 className="education-title">Education</h2>

        </div>
        <div className = "army">
            <div data-aos="slide-up"className="army-photos">
                <Carousel>
                        <div>
                            <img className = "image1" src={image1} alt="Advanced Camp - KY"/>
                            <p className="legend">Advanced Camp - KY</p>
                        </div>
                        <div>
                            <img src={image2} alt="Army Intern - TX"/>
                            <p className="legend">Army Intern - TX</p>
                        </div>
                        <div>
                            <img src={image3} alt="Mentorship of new cadets"/>
                            <p className="legend">Mentorship</p>
                        </div>
                        <div>
                            <img src={image4} alt=""land navigation/>
                            <p className="legend">Training</p>
                        </div>
                    </Carousel>
            </div>
            <h3 className="leadership center-align">Leadership Opportunities</h3>
        </div>
        </>
    )


}

export default Home;