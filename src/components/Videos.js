import React, { useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import "./Videos.css";

function DisplayVideos() {
  const [videoArray, setVideoArray] = useState();

  useEffect(() => {
    fetch("./videos.json")
      .then(response => response.json())
      .then(data => setVideoArray(data));
  }, []);

  return (
    <section className="video--container">
      <div className="video--thumbnail">
      {
        videoArray
        ? videoArray.map((v) => {
          return (
            <div className="video" key={v['_id']}>
              <YouTube videoId={v['_id']} />
              <p className="video--title">{v['title']}</p>
            </div>
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