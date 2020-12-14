import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from './API/youtube'
import VideoList from './Video/VideoList'
import '../index.css'
import VideoDetail from './Video/VideoDetail'
export default class App extends Component {

    state = {
        videos :[],
        onSelectVideo:null
    }

    componentDidMount(){
            this.onSearchSubmitHandler('war')
        
    }

    onSearchSubmitHandler = async(term)=>{
        const response = await youtube.get('/search', {
            params:{
                q:term
            } 
        })
        const data = response.data.items.map((d)=>{
            return {
                title:d.snippet.title,
                description:d.snippet.description,
                url:d.snippet.thumbnails.medium.url,
                id:d.id.videoId,
            }
        })
        // console.log(data);
        // console.log(response.data.items);
        this.setState({
            videos:data,
            onSelectVideo:data[0]

        })
    }

    onSelectVideoHandler = (video)=>{
        this.setState({
            onSelectVideo:video
        })
    }

    render() {
        return (
            <div className="app__name">
                <SearchBar onSearchSubmitHandler={this.onSearchSubmitHandler}/>
                
                <VideoDetail video={this.state.onSelectVideo}/>
                <VideoList 
                onSelectVideoHandler={this.onSelectVideoHandler}
                videos={this.state.videos}/>
            </div>
        )
    }
}
