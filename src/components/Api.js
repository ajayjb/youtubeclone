import axios from "axios";

const KEY = "AIzaSyD4_SAMqgPPwJKzK9eoGNF9E4T6SbIGURE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
