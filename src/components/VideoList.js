import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) =>{
    
    const videoList = videos.map(video=>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video = {video} />;
    });

    return videoList;
}
// url={video.snippet.thumbnail.default.url}
export default VideoList;