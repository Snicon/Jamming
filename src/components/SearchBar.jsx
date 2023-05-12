import React, { useCallback, useState } from "react";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = useCallback(
        (event) => {
            setSearchTerm(event.target.value);
        }, [])

    const search = useCallback(() => {
            props.onSearch(searchTerm)
    }, [props.onSearch, searchTerm])

    return (
        <>
            <div className="my-16">
                <div className="flex flex-row justify-center align-middle">
                    <input onChange={handleSearchTermChange} type="text" value={searchTerm} className="px-2 py-2 w-1/2 font-semibold text-black bg-purple-400 rounded-l-lg md:w-1/3 placeholder:text-black/25" placeholder="Enter a song title..." />
                    <button onClick={search} className="px-12 py-2 w-min font-bold bg-yellow-300 rounded-r-lg hover:bg-yellow-400 active:bg-yellow-400/80">Search</button>
                </div>
            </div>
        </>
    );
}

export default SearchBar;