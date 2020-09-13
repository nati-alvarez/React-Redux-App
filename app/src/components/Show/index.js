import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

import {getAnime, getAnimeEps, clearAnime} from "../../actions";

import Trailer from "./Trailer";
import Episodes from "./Episodes";  

const Show = props =>{
    const [scoreColor, setScoreColor] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        props.getAnime(id);
        props.getAnimeEps(id);

        return props.clearAnime();
    }, [])

    useEffect(()=>{
        if(props.anime && props.anime.score > 6){
            setScoreColor("green");
        }else if (props.anime && props.anime.score < 4){
            setScoreColor("red");
        }
    }, [props.anime])

    return (
        <div className="show-page">
            {props.anime &&
                <div className="show">
                    <header>
                        <img src={props.anime.image_url}/>
                        <div className="info">
                            <h1>{props.anime.title}</h1>
                            <small className="rating">{props.anime.rating}</small>
                            <p className="score">
                                Score <span className={scoreColor}>{props.anime.score}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                Favorites <span className="favorites">{props.anime.favorites}</span>
                            </p>
                            <p className="synopsis">{props.anime.synopsis}</p>
                        </div>
                    </header>
                    <section>
                        <div className="main-content">
                            {props.anime.trailer_url && <Trailer trailer_url={props.anime.trailer_url}/>}
                            <div>
                                <address>Aired {props.anime.aired.string}</address>
                            </div>
                            <div className="genre">
                                <p>
                                    <b>Genre:</b> {props.anime.genres.map(genre=> genre.name + ", ")}
                                </p>
                            </div>
                            <div className="songs">
                                <p><b>Openings:</b> {props.anime.opening_themes.map((song, key)=>{
                                    return (
                                        <React.Fragment key={key}>
                                            <span>{song}</span>
                                            <br/>
                                        </React.Fragment>
                                    )
                                })}</p>
                                <p><b>Endings:</b> {props.anime.ending_themes.map((song, key)=> {
                                    return (
                                        <React.Fragment key={key}>
                                            <span>{song}</span>
                                            <br/>
                                        </React.Fragment>
                                    )
                                })}</p>
                            </div>
                        </div>
                        {props.anime.episodes[0] && <Episodes episodes={props.anime.episodes}/>}
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

export default connect(mapStateToProps, {getAnime, getAnimeEps, clearAnime})(Show);