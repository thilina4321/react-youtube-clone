import React from 'react'
import './VideoListItem.css'
import Divider from '@material-ui/core/Divider'

const VideoItem = (props) =>{
    
    return (
            <div 
            onClick={()=>props.onSelectVideoHandler(props.video)}
            className="video__list__item">
                <img
                height="100%"
                
                 src={props.video.url} alt={props.video.title}/>

                  <h3>{props?.video?.title}</h3>  
                <Divider/>
            </div> 
    )
}

export default VideoItem
