import axios from 'axios';

const apiKey = process.env.THE_IMAGE_API;

const api = axios.create({
  baseURL: 'http://localhost:3030'
})

const theDogAPI = axios.create({
  baseURL: 'https://api.thedogapi.com/v1/images',
  headers: {
    'x-api-key': apiKey
  }
})

const theCatAPI = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images',
  headers: {
    'x-api-key': apiKey
  }
})

const services = {
  api,
  theDogAPI,
  theCatAPI
}


export default services