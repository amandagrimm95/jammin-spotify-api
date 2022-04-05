import React from "react";
import './SearchBar.css';

type SearchBarProps = {
    onSearch: Function
}

type SearchBarState = {
    searchTerm: string
}

export class SearchBar extends React.Component <SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            searchTerm: '',
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({searchTerm: e.target.value});
    }

    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}></input> 
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}