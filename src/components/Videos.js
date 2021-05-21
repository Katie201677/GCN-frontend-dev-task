import React, { useState, useEffect} from 'react';
import YouTube from 'react-youtube';

function DisplayVideos() {
  const [videoArray, setVideoArray] = useState();

  useEffect(() => {
    fetch("/videos.json")
      .then(response => response.json())
      .then(data => setVideoArray(data));
  }, []);

  return (
    <section className="video-container">
      <p>
      {
        videoArray
        ? videoArray.map((v) => {
          return (
            <YouTube videoId={v['_id']} />
          )
        } 
        
        )
        : 'Loading...'
      }
      </p>
    </section>
  )
}

export default DisplayVideos;