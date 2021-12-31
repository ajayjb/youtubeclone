import React from "react";
import "./Video.css";

export default function Video({ video }) {
  if (!video) {
    return <div></div>;
  }
  const url = video.id.videoId;
  const title = video.snippet.title;
  const desc = video.snippet.description;
  const channelTitle = video.snippet.channelTitle;
  return (
    <div>
      <div className="ui embed videoPlayer">
        <iframe
          src={`https://www.youtube.com/embed/${url}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h3 className="videoTitle">{title}</h3>
        <h3 className="videoDescription">{desc}</h3>
        <hr />
        <h3 className="chTitle">Channel Title : {channelTitle}</h3>
      </div>
    </div>
  );
}
