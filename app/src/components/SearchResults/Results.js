import React from "react";

const Results = props => {
    return (
        <div className="results">
            {props.results.map(anime=>{
                return (
                    <div className="anime">
                    <p>{anime.title}</p>
                    <img src={anime.image_url}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Results;