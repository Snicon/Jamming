import React, { useCallback } from "react";

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    return (
        <div className="flex justify-between items-center">
            <div>
                <h3 className="flex flex-col -space-y-1 text-xl font-semibold"><span>{props.song}</span> <span className="text-xs font-normal">{props.album}</span></h3>
                <p className="text-lg">{props.artist}</p>
            </div>
            <button onClick={addTrack}>
                <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </button>
        </div>
    );
}

export default Track;