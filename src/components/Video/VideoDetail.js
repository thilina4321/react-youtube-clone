import React from 'react'
import Card  from '@material-ui/core/Card'
import './VideoListItem.css'

const VideoDetail = (props) =>{

    if(!props.video){
        return <h2> Loading..... </h2>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id}`

    return (
        <div className="video_data">
            <iframe src={videoSrc} title={props.video.title}></iframe>
                <Card>
                    <div className="video__details">
                        <h3> {props.video.title} </h3>
                        <p> {props.video.description} </p>
                    </div>
                </Card>
        </div>
    )
}

export default VideoDetail
