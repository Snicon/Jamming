import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import PlayList from './Playlist';

function App() {
  return (
    <>
      <Header />
      <div className='mx-auto max-w-7xl'>
        <SearchBar />
        <div className='flex flex-col justify-between space-y-12 md:space-y-0 md:space-x-48 md:flex-row'>
          <SearchResults />
          <PlayList />
        </div>
       </div>
    </>
  )
}

export default App
