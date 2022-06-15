import axios from 'axios'

import { API_URL } from '../helpers/constants'

const defaultOptions = {
  baseURL: API_URL,
}

export const api = axios.create(defaultOptions)
