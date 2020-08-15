import React from "react";

import AnimeCard from "./AnimeCard";

const Results = props => {
    return (
        <div className="results">
            {props.results.map(anime=>{
                return (
                    <AnimeCard anime={anime}/>
                )
            })}
        </div>
    )
}

export default Results;