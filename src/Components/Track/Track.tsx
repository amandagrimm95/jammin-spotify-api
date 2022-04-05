import React from "react";
import './Track.css';
import {Song} from "../Types";

type TrackProps = {
    key: number,
    track: Song,
    onAdd: Function,
    isRemoval: boolean,
    onRemove: Function
}

export class Track extends React.Component <TrackProps, {}> {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        let displayButton;

        if(this.props.isRemoval) {
            displayButton = <button className="Track-action" onClick={this.addTrack}>'+'</button>
        } else {
            displayButton = <button className="Track-action" onClick={this.removeTrack}>'-'</button>
        }

        return(
            <div className="Track">
                <div className ="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {displayButton}
            </div>
        )
    }
}