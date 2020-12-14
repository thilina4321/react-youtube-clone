import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props)=> {
    return (
        <div>
            {props.videos.map((video, i)=>{
                return <VideoItem
                 onSelectVideoHandler = {props.onSelectVideoHandler}
                 video={video}
                 key={i}/>
            })}
        </div>
    )
}

export default VideoList
