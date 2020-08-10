import React from "react";

const Trailer = props => {
    return (
        <div className="trailer">
            <h2>Trailer</h2>
            <iframe allowFullScreen src={props.trailer_url + "?autoplay=0"}></iframe>
        </div>
    )
}

export default Trailer;