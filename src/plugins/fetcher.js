import axios from 'axios'

export const fetcher = axios.create({
  baseURL: 'https://sandbox.impala.travel/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'sandb_wlVAILfL1WLprdIp8DpowMLIHnnpLvivgBxdSiam',
    'Access-Control-Allow-Origin': '*'
  }
})
