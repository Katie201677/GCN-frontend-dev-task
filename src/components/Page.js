import React, { useState } from 'react';
import Header from './Header';
import Add from './Add';
import SearchBar from './SearchBar';
import DisplayVideos from './Videos.js';
import Nav from './Nav';

function Page() {
  
  const [ isNavExpanded, setIsNavExpanded ] = useState(false);
  const [ isVideosExpanded, setIsVideosExpanded ] = useState(false);
  const [ isPresentersExpanded, setIsPresentersExpanded ] = useState(false);

  
  function expandNav() {
    setIsNavExpanded(!isNavExpanded);
  }

  function expandVideos() {
    setIsVideosExpanded(!isVideosExpanded);
  }

  function expandPresenters() {
    setIsPresentersExpanded(!isPresentersExpanded);
  }
  
  return (
    <div>
      <Header
        expandNav={expandNav}
      />
      <Add/>
      <Nav
        isNavExpanded={isNavExpanded}
        isPresentersExpanded={isPresentersExpanded}
        isVideosExpanded={isVideosExpanded}
        expandVideos={expandVideos}
        expandPresenters={expandPresenters}
      />
      <SearchBar/>
      <DisplayVideos/>
    </div>
  )
}

export default Page;