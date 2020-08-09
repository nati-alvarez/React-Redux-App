import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

import {getAnime} from "../../actions";

const Show = props =>{
    const [ratingColor, setRatingColor] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        props.getAnime(id);
    }, [])

    useEffect(()=>{
       if (props.anime) console.log(props.anime.score > 6)
        if(props.anime && props.anime.score > 6){
            setRatingColor("green");
        }else if (props.anime && props.anime.score < 4){
            setRatingColor("red");
        }
    }, [props.anime])

    
    console.log(ratingColor)
    return (
        <div className="show-page">
            {props.anime &&
                <div className="show">
                    <header>
                        <img src={props.anime.image_url}/>
                        <div className="info">
                            <h1>{props.anime.title}</h1>
                            <p className="rating">
                                Rating <span className={ratingColor}>{props.anime.score}</span>
                            </p>
                            <p className="synopsis">{props.anime.synopsis}</p>
                        </div>
                    </header>
                    <section>
                        <div className="trailer">
                            <h2>Trailer</h2>
                            <iframe allowFullScreen src={props.anime.trailer_url + "?autoplay=0"}></iframe>
                        </div>
                    </section>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        anime: state.anime
    }
}

export default connect(mapStateToProps, {getAnime})(Show);