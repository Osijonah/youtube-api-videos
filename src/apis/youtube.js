import axios from "axios";

const KEY = "AIzaSyCJQ-073SmuRsovxh73ee3fASRofQSrXis";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      type: "video",
      maxResults: 5,
      key: KEY,
    },
  });