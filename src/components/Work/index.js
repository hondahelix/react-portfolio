import projects from "../cardinfo.json";
import "./work.css";

function Work (){
    return(
    <div className = "container ">
        <div class="row">
        {projects.map(card =>
            <div className="col s6">
            <div className="card" style={{ }}>
                <div className="card-image">
                <img src={card.image} alt = {card.title}/>
                <span id = "title" className="card-title">{card.title}</span>
                </div>
                <div className="card-content">
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