import React from "react";

const SearchBar = () => {
    return (
        <>
            <div className="my-16">
                <form action="#" className="flex flex-row justify-center align-middle">
                    <input type="text" className="px-2 py-2 w-1/2 font-semibold text-black bg-purple-400 rounded-l-lg md:w-1/3 placeholder:text-black/25" placeholder="Enter a song title..." />
                    <button className="px-12 py-2 w-min font-bold bg-yellow-300 rounded-r-lg hover:bg-yellow-400 active:bg-yellow-400/80">Search</button>
                </form>
            </div>
        </>
    );
}

export default SearchBar;