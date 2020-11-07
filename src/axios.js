import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-5c6d4/us-central1/api" //The api (cloud function) URL
})

export default instance;