import React from 'react'
import './VideoListItem.css'
import Divider from '@material-ui/core/Divider'

const VideoItem = (props) =>{
    
    return (
            <div 
            className="video__list__item">
                <img
                onClick={()=>props.onSelectVideoHandler(props.video)}
                 src={props.video.url} alt={props.video.title}/>

                    {props.video.title.substring(0,10)}
                <Divider/>
            </div> 
    )
}

export default VideoItem
