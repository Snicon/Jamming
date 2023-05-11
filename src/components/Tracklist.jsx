import React from "react";
import Track from "./Track";

const TrackList = (props) => {
    return (
        <div className={'flex flex-col px-6 py-4 space-y-4 bg-yellow-300'}>
            { props.tracks.map(track => <Track add={props.add} track={track} song={track.song} artist={track.artist} album={track.album} key={track.id} onAdd={props.onAdd} />) }
        </div>
    );
}

export default TrackList;