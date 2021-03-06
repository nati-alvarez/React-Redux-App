import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {connect} from "react-redux";

import {makeSearch, clearSearchResults} from "../../actions";

import SearchForm from "../SearchForm";
import Results from "./Results";

const SearchResults = props => {
    const {search} = useLocation()
    const query = new URLSearchParams(search).get("query");

    useEffect(()=>{
        props.clearSearchResults();
    }, [])

    useEffect(()=>{
        props.makeSearch(query);
    }, [query]);
    

    console.log(props.searchResults);

    return (
        <main className="search-results">
            <SearchForm/>
            <h2>Search results for "{query}:"</h2>
            <Results results={props.searchResults}/>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults
    }
}

export default connect(mapStateToProps, {makeSearch, clearSearchResults})(SearchResults);