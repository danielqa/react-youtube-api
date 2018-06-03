import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
    const items = videos.map(video => {
        return (
            <li key={video.etag} className="list-group-item" onClick={() => onVideoSelect(video)}>
                <VideoListItem video={video} />
            </li>
        );
    });

    return (
        <ul className="list-group col-md-4">
            {items}
        </ul>
    );
}

export default VideoList;