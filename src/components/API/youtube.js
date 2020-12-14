import axios from 'axios'
const KEY = 'AIzaSyCLt7KcscCSpUGu_hds2pTB0cImvgMnM38'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:2,
        key:KEY
    }
})