import {GET_TOP_ANIME_START, GET_TOP_ANIME_SUCCESS} from "../actions";

const initialState = {
    anime: null,
    topAnimeLoading: false,
    topAnime: [],
    animes: []
}

export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_TOP_ANIME_START:
            return {
                ...state,
                topAnimeLoading: true
            }
        case GET_TOP_ANIME_SUCCESS:
            return {
                ...state,
                topAnimeLoading: false,
                topAnime: action.payload
            }
        default:
            return state;
    }
}