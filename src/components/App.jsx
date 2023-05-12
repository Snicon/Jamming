import React, { useCallback, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import PlayList from './Playlist';
import results from "../mock/results";
import playlist from "../mock/playlist";

function App() {

  const [serachResults, setSerachResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      // make sure the track isn't already added to the playlist, we don't want duplicates
      // DEBUG: console.log(playlistTracks);
      if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      // make new array with the content of prevTracks as well as the newly added track. This array is set as the playlistTracks array.
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((previousTracks) => 
      previousTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((newName) => {
    setPlaylistName(newName);
    // DEBUG: console.log(newName);
  }, []);

  return (
    <>
      <Header />
      <div className='mx-auto max-w-7xl'>
        <SearchBar />
        <div className='flex flex-col justify-between space-y-12 md:space-y-0 md:space-x-48 md:flex-row'>
          <SearchResults searchResults={serachResults} results={results} onAdd={addTrack} add={true} />
          <PlayList onNameChange={updatePlaylistName} playlist={playlist} playlistTracks={playlistTracks} onRemove={removeTrack} add={false} />
        </div>
       </div>
    </>
  )
}

export default App
