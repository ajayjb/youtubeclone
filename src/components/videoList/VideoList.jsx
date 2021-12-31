import React from "react";
import VideoItem from "../videoItem/VideoItem";

export default function VideoList({ onVideoSelect, videos }) {
  const renderList = videos.map((v) => {
    return (
      <div key={v.id.videoId}>
        <VideoItem onVideoSelect={onVideoSelect} video={v} />
      </div>
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
}
