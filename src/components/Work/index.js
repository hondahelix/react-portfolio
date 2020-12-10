import projects from "../cardinfo.json";
import "./work.css";

function Work (){
    return(
    <div className = "container ">
        <div className="row">
        {projects.map((card, index) =>
            <div key ={index} className="col s6">
            <div className="card">
                <div className="card-image">
                <img src={(process.env.PUBLIC_URL || "/") + card.image} alt = {card.title}/>
                </div>
                <div className="card-content">
                <span id = "title" className="card-title">{card.title}</span>
                    <p>
                        {card.description}
                    </p>
                </div>
                <div className="card-action">
                    <a href={card.repolink}>Link to Repo</a>
                </div>
                <div className="card-action">
                    <a href={card.deployedlink}>Deployed Site</a>
                </div>
            </div>
        </div>
        )}
        </div>
    </div>
    )
}

export default Work;