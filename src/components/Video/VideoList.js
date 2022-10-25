import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props)=> {
    const videos = props.videos
    return (
        <div>
            {videos.map((video, i)=>{
                if(i === 0) return <></>
                return <VideoItem
                 onSelectVideoHandler = {props.onSelectVideoHandler}
                 video={video}
                 key={i}/>
            })}
        </div>
    )
}

export default VideoList
