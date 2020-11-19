import profile from './profile.jpeg';
import "./home.css";

function Home (){
    return (
        <div className = "container">
            <div className="center-align">
            <br></br> 
                <img id = "profile" src={profile} className= "responsive-img circle" alt="Me"/>
                </div>
                <div>
                    <h3 className="center-align" >Jonathan Honda</h3>
                    <p>
                        Hello, world! My name is Jonathan Honda, and I am taking a coding Bootcamp at the University of California, Berkeley. 
                        I am originally from San Diego, California, and I have graduated this year from the University of California, Irvine, with a BA in Criminology Law and Society. 
                        Go Anteaters Zot Zot Zot!!! However, I now live in Northern California. Another exciting thing about me is that I was in the ROTC program all four years in college and have commissioned as a second lieutenant in the Army National Guard. 
                        I am very excited about taking this coding boot camp because coding can be utilized in any career field. 
                        I decided to take this course because due to the current pandemic, job openings are difficult to come by, so I decided to take this time to better myself and learn a valuable new skill.

                    </p>
                </div>
                <b></b>
                <a id = "email" href="mailto: hondahelix120@gmail.com">Email: hondahelix120@gmail.com</a>
            <br></br>
        </div>
    )


}

export default Home;