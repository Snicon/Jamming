import React, { useCallback } from "react";
import TrackList from "./Tracklist";

const PlayList = (props) => {

    const onNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value)
        },
        [props.onNameChange]
    )

    return (
        <>
            <div className="flex flex-col md:w-1/2">
                <div className="px-6 py-4 bg-yellow-400 rounded-t-xl border-b-2 border-b-black">
                    <input onChange={onNameChange} className="w-full text-2xl font-bold bg-transparent border-black placeholder:text-black/60" placeholder="Playlist name..." />
                </div>
                <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} add={props.add} />
                <div className="flex flex-col px-6 py-4 space-y-4 bg-yellow-300 rounded-b-xl">
                    <button className="py-4 bg-purple-400 rounded-lg transition duration-300 hover:bg-purple-500">Save to Spotify</button>
                </div>
            </div>
        </>
    );
}

export default PlayList;