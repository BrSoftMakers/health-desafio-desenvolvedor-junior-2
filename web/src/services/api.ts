
import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-pet-house.vercel.app/'
})