import React from 'react';

const VideoListItem = ({ video }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <div className="media">
            <img className="mr-3" src={imageUrl} alt="" />
            <div className="media-body">
                <h5 className="mt-0">{video.snippet.title}</h5>
            </div>
        </div>
    );
}

export default VideoListItem;