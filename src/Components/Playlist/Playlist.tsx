import React from 'react';
import {TrackList} from '../TrackList';
import './Playlist.css';
import {Song} from '../Types';

type PlaylistProps = {
    playlistName: string,
    playlistTracks: Song[],
    onRemove: Function,
    onNameChange: Function,
    onSave: Function,
} 

export class Playlist extends React.Component <PlaylistProps, {}> {
    constructor(props: PlaylistProps) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onNameChange(e.target.value);
    }

    handleSave(e: object) {
        this.props.onSave(e);
    }

    render() {
        return(
            <div className="Playlist">
                <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
                {/* Add a TrackList component */}
                <TrackList playlistTracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <button className="Playlist-save" onClick={this.handleSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}