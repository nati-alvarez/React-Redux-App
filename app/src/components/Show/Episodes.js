import React from "react";

const Episodes = props => {
    return (
        <aside className="episodes">
            <h2>Episodes</h2>
            {props.episodes.map(ep => {
                return (
                    <p key={ep.episode_id}><strong style={{paddingRight: "10px"}}>{ep.episode_id}</strong> {ep.title}</p>
                )
            })}
        </aside>
    )
}

export default Episodes;