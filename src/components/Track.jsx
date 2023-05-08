import React from "react";

const Track = (props) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h3 className="text-xl font-semibold">{props.song}</h3>
                <p className="text-lg">{props.artist}</p>
            </div>
            <div>
                <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
        </div>
    );
}

export default Track;