import React from "react";
import {Link} from "react-router-dom";

const AnimeCard = props => {
    return (
        <Link className="anime-card" to={`/anime/${props.anime.mal_id}`}>
            <div>
                <div className="image-container">
                    <img src={props.anime.image_url}/> 
                </div>
                <h3>{props.anime.title}</h3>
            </div>
        </Link>
    )
}

export default AnimeCard;