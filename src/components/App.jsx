import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

function App() {
  return (
    <>
      <Header />
      <div className='mx-auto max-w-7xl'>
        <SearchBar/>
       </div>
    </>
  )
}

export default App
