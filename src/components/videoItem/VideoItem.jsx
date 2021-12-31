import React from "react";
import "./VideoItem.css";

export default function VideoItem({ onVideoSelect, video }) {
  const url = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
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
          <h3 style={{ color: "#ff5959" }} className="title">
            Channel Title : {channelTitle}
          </h3>
        </div>
      </div>
    </div>
  );
}
