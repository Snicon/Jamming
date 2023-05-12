import React, { useCallback } from "react";
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track)
        },
        [props.onRemove, props.track]
    )

    return (
        <div className="flex justify-between items-center">
            <div>
                <h3 className="flex flex-col -space-y-1 text-xl font-semibold"><span>{props.song}</span> <span className="text-xs font-normal">{props.album}</span></h3>
                <p className="text-lg">{props.artist}</p>
            </div>
            <button onClick={ props.add ? addTrack : removeTrack }>
                { props.add ? <PlusCircleIcon className="w-9 h-9" /> : <MinusCircleIcon className="w-9 h-9" />}
            </button>
        </div>
    );
}

export default Track;