import React from "react";
import {TrackList} from "../TrackList";
import "./SearchResults.css";
import {Song} from '../Types';

type SearchResultProps = {
    searchResults: Song[],
    onAdd: Function
}

export class SearchResults extends React.Component <SearchResultProps, {}> {
    render() {
        const displayResults = (this.props.searchResults.length === 0 ? <h2>Use search bar dummy...</h2> : <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval="false" /> );
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                {/* Add a TrackList component */}
                {displayResults}
            </div>
        )
    }
}