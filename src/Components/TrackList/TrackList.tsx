import React from "react";
import {Track} from "../Track";
import './TrackList.css';
import {Song} from '../Types';

type TrackListProps = {
    tracks: Song[],
    onAdd: Function,
    isRemoval: boolean,
    onRemove: Function
}

export class TrackList extends React.Component <TrackListProps, {}> {
    render() {

        const trackList = this.props.tracks.map(track => <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>);

        return(
            <div className="TrackList">
                {/*You will add a map method that renders a set of Track components */}
                {trackList}
            </div>
        )
    }
}