import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {connect} from "react-redux";

import {makeSearch} from "../../actions";

import SearchForm from "../SearchForm";
import Results from "./Results";

const SearchResults = props => {
    const {search} = useLocation()
    const query = new URLSearchParams(search).get("query");

    useEffect(()=>{
        props.makeSearch(query);
    }, []);

    console.log(props.searchResults);

    return (
        <main className="search-results">
            <SearchForm/>
            <p>Search results for "{query}:"</p>
            <Results/>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults
    }
}

export default connect(mapStateToProps, {makeSearch})(SearchResults);