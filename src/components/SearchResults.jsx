import React from "react";
import TrackList from "./Tracklist";
import results from "../mock/results";

const SearchResults = () => {
    return (
    <div className="flex flex-col md:w-1/2">
        <div className="px-6 py-4 bg-yellow-400 rounded-t-xl border-b-2 border-b-black">
            <h2 className="text-2xl font-bold">Songs</h2>
        </div>
        <TrackList tracks={results} />
    </div>
    );
}

export default SearchResults;