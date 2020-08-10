import React from "react";

const Episodes = props => {
    return (
        <div className="episodes">
            <h2>Episodes</h2>
            {props.episodes.map(ep => {
                return (
                    <div className="episodes">
                        <p><strong style={{paddingRight: "10px"}}>{ep.episode_id}</strong> {ep.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Episodes;