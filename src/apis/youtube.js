import axios from 'axios'

const KEY = "AIzaSyDxCeUJhEdUqk-vgSYImE-urhH0SB8r7i4"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})