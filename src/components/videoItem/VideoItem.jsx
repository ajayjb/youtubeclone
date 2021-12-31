import React from "react";
import "./VideoItem.css";

export default function VideoItem({ onVideoSelect, video }) {
  const url = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img className="thumnail ui image" src={url} alt="video" />
      <div className="content">
        <div className="header">
          <h4 className="title">{title}</h4>
        </div>
      </div>
    </div>
  );
}
