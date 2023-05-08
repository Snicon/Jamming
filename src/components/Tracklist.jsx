import React from "react";
import Track from "./Track";

const TrackList = (props) => {
    return (
        <div className="flex flex-col px-6 py-4 space-y-4 bg-yellow-300 rounded-b-xl">
            { props.tracks.map(track => <Track song={track.song} artist={track.artist} key={track.id} />) }
        </div>
    );
}

export default TrackList;