import axios from 'axios'

const defaultOptions = {
  baseURL: process.env.API_URL,
}

export const api = axios.create(defaultOptions)
