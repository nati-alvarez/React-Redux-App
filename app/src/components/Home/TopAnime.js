import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getTopAnime} from "../../actions";

const TopAnime = props => {
    useEffect(()=>{
        props.getTopAnime();
    }, []);

    const scrollRight = () =>{
        const topAnimeElement = document.querySelector(".top-anime");
        topAnimeElement.scrollLeft += topAnimeElement.clientWidth;
    }

    const scrollLeft = () =>{
        const topAnimeElement = document.querySelector(".top-anime");
        topAnimeElement.scrollLeft -= topAnimeElement.clientWidth;
    }

    return (
        <>
            <h1>Top Anime of All Time</h1>
            <div className="carousel">
                <button onClick={scrollLeft} className="scroll-left"> {"<"} </button>
                <section className="top-anime">
                    {props.topAnimeLoading && <span>Loading</span>}
                    {props.topAnime.map(show=>{
                        return (
                            <Link to={`/anime/${show.title}`}>
                                <div key={show.mal_id} className="anime">
                                    <img src={show.image_url}/>
                                    <h3>{show.title}</h3>
                                </div>
                            </Link>
                        )
                    })}
                </section>
                <button onClick={scrollRight} className="scroll-right"> {">"} </button>
            </div>
        </>
    )
}

const mapStateToProps = state =>{
    return {
        topAnimeLoading: state.topAnimeLoading,
        topAnime: state.topAnime
    }
}

export default connect(mapStateToProps, {getTopAnime})(TopAnime);