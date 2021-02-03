import profile from './profile.jpeg';
import "./home.css";

function Home (){
    return (
        <>
        <div className = "container">
            <div id = "aboutMe">
                <div className="center-align">
                    <br></br> 
                    <img id = "profile" src={profile} className= "responsive-img circle" alt="Me"/>
                </div>
                <div>
                    <h3 className="center-align" >Jonathan Honda</h3>
                    <p>
                        My name is Jonathan Honda, and I am A FullStack web developer. I have completed a coding Bootcamp from the University of California, Berkeley. 
                        I graduated with an overall grade of an A. 
                    </p>
                    <p>
                        I am originally from San Diego, California, and I have graduated this year from the University of California, Irvine, with a BA in Criminology Law and Society.
                        Go Anteaters Zot Zot Zot!!! However, I now live in Northern California. 
                    </p>
                    <p>
                        I am actively searching for work as a web developer, and I look forward to honing and strengthen my coding skills.
                    </p>
                    <p>
                        Another exciting thing about me is that I was in the ROTC program all four years in college and have commissioned as a second lieutenant in the Army National Guard.
                        On the weekends, I serve as a Network Officer at the Division Signal Company at Joint Forces Training Base in Los Alamitos. 
                    </p>
                    <p><a id = "email" className="center-align" href="mailto: hondahelix120@gmail.com">Email: hondahelix120@gmail.com</a></p>
                </div>
                <br></br>
            </div>
        </div>
        <div className = "skills">

        </div>
        <div className = "education">

        </div>
        <div className = "army">

        </div>
        </>
    )


}

export default Home;