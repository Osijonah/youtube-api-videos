import "./VideoItem.css";
import React from "react";

const VideoItem = ( {video, onVideoSelect} ) => {

    return (
        <div onClick={()=>onVideoSelect(video)} className="ui link items">
            <div className="item vertical-center">
            <div className="ui tiny image">
                <img src={`${video.snippet.thumbnails.default.url}`} alt=""/>
            </div>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            </div>
        </div>
        );
}

export default VideoItem;