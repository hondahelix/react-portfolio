import instagram from './in-icon.png';
import github from './github-icon.png';
import linkedIn from './linkedIn-icon.png';
import "./footer.css";


function Footer(){
    return(
        <footer className="page-footer">
            <div className="center-align">
                <a  href="https://linkedin.com/in/jonathan-honda-778430153"><img id="social" src={linkedIn} alt="linkedin"/></a>
                <a  href="https://github.com/hondahelix"><img id="social"src={github} alt="github"/></a>
                <a  href="https://www.instagram.com/honda_helix/"><img id="social" src={instagram} alt="instagram"/></a>
            </div>
        </footer>
    )

}

export default Footer;