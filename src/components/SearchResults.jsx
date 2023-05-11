import React from "react";
import TrackList from "./Tracklist";

const SearchResults = (props) => {
    return (
    <div className="flex flex-col md:w-1/2">
        <div className="px-6 py-4 bg-yellow-400 rounded-t-xl border-b-2 border-b-black">
            <h2 className="text-2xl font-bold">Songs</h2>
        </div>
        <TrackList tracks={props.results} onAdd={props.onAdd} add={props.add} />
        <div className="px-6 py-1 bg-yellow-300 rounded-b-xl">

        </div>
    </div>
    );
}

export default SearchResults;