import React from "react";
import "./VideoItem.css";

function VideoItem({ video, onVideoSelect }) {
  const thumbNail = video.snippet.thumbnails.medium.url;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={thumbNail} alt={video.snippet.title} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
