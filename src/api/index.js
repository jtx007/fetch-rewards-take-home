import axios from 'axios'


export default axios.create({
    baseURL: 'https://fetch-hiring.s3.amazonaws.com/hiring.json'
})