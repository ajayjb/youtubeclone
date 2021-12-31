import react from "react";
import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import youtube from "./components/Api.js";
import Video from "./components/videoDetail/Video";
import VideoList from "./components/videoList/VideoList";
import "./App.css";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.youtubeVideoGetter("Technology");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  youtubeVideoGetter = (key) => {
    youtube
      .get("/search", {
        params: {
          q: key,
        },
      })
      .then((res) => {
        this.setState({ videos: res.data.items });
        this.setState({ selectedVideo: res.data.items[0] });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  onSearch = (value) => {
    this.youtubeVideoGetter(value);
  };

  render() {
    return (
      <div className="main ui container">
        <SearchBar onFormSubmit={this.onSearch} />
        <div className="forSplit">
          <div className="forVideo">
            <Video video={this.state.selectedVideo} />
          </div>
          <div className="forList">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
