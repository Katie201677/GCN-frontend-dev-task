import React, { useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import "./Videos.css";

function DisplayVideos() {
  const [videoArray, setVideoArray] = useState();

  useEffect(() => {
    fetch("/videos.json")
      .then(response => response.json())
      .then(data => setVideoArray(data));
  }, []);

  return (
    <section className="video-container">
      <div className="video--thumbnail">
      {
        videoArray
        ? videoArray.map((v) => {
          return (
            <YouTube videoId={v['_id']} key={v['_id']}/>
          )
        } 
        
        )
        : 'Loading...'
      }
      </div>
    </section>
  )
}

export default DisplayVideos;