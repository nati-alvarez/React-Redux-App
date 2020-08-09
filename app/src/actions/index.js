import axios from "axios";

export const GET_TOP_ANIME_START = "GET_TOP_ANIME_START";
export const GET_TOP_ANIME_SUCCESS = "GET_TOP_ANIME_SUCCESS";

export const getTopAnime = () => dispatch =>{
    dispatch({type: GET_TOP_ANIME_START});
    axios.get("https://api.jikan.moe/v3/top/anime").then(({data})=>{
        dispatch({type: GET_TOP_ANIME_SUCCESS, payload: data.top});
    }).catch(err=>{
        console.log(err);
    })
}