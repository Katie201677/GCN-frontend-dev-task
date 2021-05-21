import React from 'react';
import Header from './Header';
import Add from './Add';
import SearchBar from './SearchBar';
import DisplayVideos from './Videos.js';
import Nav from './Nav';

function Page() {
  return (
    <div>
      <Header/>
      <Add/>
      <Nav/>
      <SearchBar/>
      <DisplayVideos/>
    </div>
  )
}

export default Page;