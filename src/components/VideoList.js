import React from 'react';
import VideoListEntry from './VideoListEntry';

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import { fakeData } from './__test__/fakeData';
// console.log(fakeData)

const VideoList = ({videos}) => (
  <div className="video-list media">
    {videos.map(video =>
      <VideoListEntry key={video.etag} video = {video} />
    )}
  </div>
);

export default VideoList;