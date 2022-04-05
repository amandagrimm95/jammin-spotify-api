//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar';
import {SearchResults} from '../SearchResults';
import {Playlist} from '../Playlist';
import {Song} from '../Types';

type AppState = {
  searchResults: Song[],
  playlistName: string,
  playlistTracks: Song[]
};

export class App extends React.Component <{}, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "Amanda's Playlist",
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track: Song) {
    let playlist = this.state.playlistTracks;
    if (playlist.some(x => x.id === track.id)) {
      return     
    } else {
      playlist.push(track);
      this.setState({playlistTracks: playlist});
    };
  };

  removeTrack(track: Song) {
    let playlist = this.state.playlistTracks.filter(x => x.id === track.id );
    this.setState({playlistTracks: playlist});
  }

  updatePlaylistName(name: string) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackURIs: [] = this.state.playlistTracks;
  }

  search(searchTerm: string) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*Add a SearchBar component*/}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/*Add a SearchResults component*/}
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}
            />
            {/*Add a Playlist component*/}
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack} 
              onNameChange={this.updatePlaylistName} 
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
